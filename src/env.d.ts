/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Cloudflare Workers runtime (run `pnpm cf:types` after wrangler install for full Env)
interface Env {
  PUBLIC_CF_SITE_KEY: string;
  CF_SECRET_KEY: string;
  RESEND_API_KEY: string;
  MY_EMAIL: string;
}

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}

declare const turnstile: {
  render: (
    selector: string,
    options: {
      sitekey: string;
      theme?: string;
      callback?: (token: string) => void;
    },
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
};

interface Window {
  cfWidgetId?: string | null;
}
