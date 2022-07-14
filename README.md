# Nuxt 3 Frontend Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Nuxt 3

### Setup

Make sure to install the dependencies:

```bash
npm install
```

### Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

### Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.

## Wrangler

### Testing locally

You can use [miniflare](https://miniflare.dev/), a local Cloudflare Workers development server, to test your app locally:

```bash
NITRO_PRESET=cloudflare yarn build
npx miniflare .output/server/index.mjs --site .output/public
```

### Deploy from your local machine using wrangler

Install [wrangler](https://github.com/cloudflare/wrangler) and login to your Cloudflare account:

```bash
npm i @cloudflare/wrangler -g
wrangler login
```

Generate website with `cloudflare` preset:

```bash
NITRO_PRESET=cloudflare yarn build
```

You can preview locally:

```bash
wrangler dev
```

Publish:

```bash
wrangler publish
```

### Deploy within CI/CD using GitHub Actions

Create a token according to [the wrangler action docs](https://github.com/marketplace/actions/deploy-to-cloudflare-workers-with-wrangler#authentication) and set `CF_API_TOKEN` in your repository config on GitHub.