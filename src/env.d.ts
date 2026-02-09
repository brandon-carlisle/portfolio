/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Cloudflare Workers runtime (run `pnpm cf:types` after wrangler install for full Env)
interface Env {}

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}

declare const turnstile: {
  render: (
    selector: string,
    options: { sitekey: string; theme?: string },
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
};

interface Window {
  cfWidgetId?: string | null;
}
