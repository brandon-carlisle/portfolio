https://brandoncarlisle.co.uk → built with Astro

## Development

- `pnpm install` then `pnpm dev`
- `pnpm build` to produce the output used by Cloudflare
- `pnpm worker:preview` — build and run the Worker locally (`wrangler dev`); requires `.dev.vars` for form actions
- `pnpm worker:dev` — run `wrangler dev` only (run `pnpm build` first)
- `pnpm deploy` — build and deploy to Cloudflare Workers (`wrangler deploy`)
