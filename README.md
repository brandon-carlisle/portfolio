https://brandoncarlisle.co.uk → built with Astro

## Development

- `pnpm install` then `pnpm dev`
- `pnpm build` to produce the output used by Cloudflare
- `pnpm cf:types` (optional) generates Wrangler types for `Astro.locals.runtime`; requires `wrangler` installed

## Deploying (Cloudflare Workers Builds)

Deploys are driven by **Cloudflare Workers Builds** via GitHub. Pushing to the connected branch triggers a build and deploy; there is no `wrangler deploy` in this repo or in CI.

**Build contract**

- **Build command:** `pnpm build`
- **Worker entrypoint:** `dist/_worker.js/index.js`
- **Static assets:** entire `dist/` directory (see `wrangler.jsonc`)

**Setup**

1. In Cloudflare Dashboard: Workers & Pages → Create application → Connect to Git → select this repo.
2. Configure the production branch and ensure the build command is `pnpm build` (install command `pnpm install`).
3. This project requires **Node.js ≥22**. The repo includes `.nvmrc` (Node 22); Cloudflare’s build reads it. If your project still uses Node 18, set **Settings → Environment variables** → `NODE_VERSION` = `22`, or switch to the **v3** build image (Settings → Builds & deployments → Build system version).
4. Add any secrets or env vars in the Cloudflare project (Dashboard → Settings → Variables). For local dev, use `.dev.vars` in the project root (gitignored); never commit secrets.

**Preview deployments** for pull requests can be enabled in the Cloudflare Git integration settings; no extra CI or deploy scripts are required in the repo.
