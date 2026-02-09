import { defineAction, ActionError } from "astro:actions";
import { Resend } from "resend";
import { z } from "astro/zod";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z
        .string()
        .min(2, "Please provide your name (at least 2 characters).")
        .transform((val) => val.trim()),
      email: z.email(),
      message: z
        .string()
        .min(10, "Please provide a message (at least 10 characters).")
        .transform((val) => val.trim()),
      "cf-turnstile-response": z.string().min(1, "Please complete the challenge"),
    }),
    handler: async (input, context) => {
      const token = input["cf-turnstile-response"];
      const shouldVerifyTurnstile = import.meta.env.PROD;

      if (shouldVerifyTurnstile) {
        const secretKey = import.meta.env.CF_SECRET_KEY;

        if (!secretKey) {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Server configuration error.",
          });
        }

        const remoteIp =
          context.request.headers.get("cf-connecting-ip") ||
          context.request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
          context.request.headers.get("x-real-ip") ||
          undefined;

        const verifyBody = new URLSearchParams({
          secret: secretKey,
          response: token,
        });

        if (remoteIp) {
          verifyBody.append("remoteip", remoteIp);
        }

        const verifyRes = await fetch(TURNSTILE_VERIFY_URL, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: verifyBody.toString(),
        });

        const verifyData = (await verifyRes.json()) as { success: boolean };

        if (!verifyData.success) {
          throw new ActionError({
            code: "FORBIDDEN",
            message: "Turnstile verification failed. Please try again.",
          });
        }
      }

      const resendApiKey = import.meta.env.RESEND_API_KEY;
      const recipientEmail = import.meta.env.MY_EMAIL;

      if (!resendApiKey || !recipientEmail) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Email service is not configured.",
        });
      }

      const resend = new Resend(resendApiKey);
      const emailResponse = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [recipientEmail],
        replyTo: input.email,
        subject: `New Contact Form: ${input.name}`,
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0f172a; margin-bottom: 16px;">New Contact Form Submission</h2>
            <div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
              <p style="margin: 8px 0;"><strong>Name:</strong> ${escapeHtml(input.name)}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(input.email)}">${escapeHtml(input.email)}</a></p>
            </div>
            <div style="margin-top: 24px;">
              <h3 style="color: #0f172a; margin-bottom: 8px;">Message:</h3>
              <p style="color: #334155; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(input.message)}</p>
            </div>
          </div>
        `,
      });

      if (emailResponse.error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send message. Please try again later.",
        });
      }

      return { success: true };
    },
  }),
};
