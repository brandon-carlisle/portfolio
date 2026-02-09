/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare const turnstile: {
  render: (
    selector: string,
    options: { sitekey: string; theme?: string },
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
};
