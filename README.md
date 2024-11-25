# Mark 4

The 4th iteration of Radison Akerman's personal website, built on next-gen Nuxt v3 and Tailwinds

[![Nuxt Production](https://github.com/rak3rman/mark4/actions/workflows/production_deploy.yml/badge.svg)](https://github.com/rak3rman/mark4/actions/workflows/production_deploy.yml)

## Project Overview

Mark 4 is Radison Akerman's personal website and portfolio, designed to showcase my professional experience, projects, and technical writing in a sharp, modern interface. The site is built with cutting-edge web technologies to deliver a fast, responsive experience while maintaining excellent SEO and accessibility.

### Key Features

- **Modern Stack**: Built with Nuxt 3 and Tailwind CSS for optimal performance and maintainability
- **Content Management**: Uses Nuxt Content module for easy markdown-based content updates
- **Dynamic Components**: Custom Vue components for interactive sections like project showcases
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **SEO Optimized**: Built-in SEO optimization with meta tags and structured data
- **Fast Loading**: Leverages Nuxt's static site generation for lightning-fast page loads
- **Cloud Deployment**: Automated deployment to Cloudflare Workers for global edge delivery

### Design Philosophy

Simple. Sharp. No compromises.

- **Colors:** Primary colors are black and white, with accents in "radical" blue-gray
- **Typography:** Sans-serif font with a focus on readability and minimalism
- **Layout:** Clean, grid-based design with a focus on whitespace and content hierarchy

#### Inspiration

- [Apple web design](https://www.apple.com)
- [SpaceX Starship/Dragon mission info display design (which I worked on!), not the website :/](https://www.spacex.com)

Everything else is original!

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
