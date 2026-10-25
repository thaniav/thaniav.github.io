# Thania’s portfolio

A static Astro + TypeScript portfolio hosted at https://thaniav.github.io.
Astro renders the content to HTML; the seasonal themes, spider, and Santa use small browser scripts.

## Local development

Use Node 24 (`nvm use` if you use nvm), then:

```sh
npm ci
npm run dev
```

Open http://localhost:4321. Changes reload automatically.

```sh
npm test        # Seasonal date boundaries and preview selection
npm run build  # Type-check and generate dist/
npm run preview # Serve the production output locally
```

## Editing

- `src/pages/index.astro`: assembles the page.
- `src/components/`: page sections, illustrations, and shared icons.
- `src/layouts/PortfolioLayout.astro`: metadata, common layout, script initialization.
- `src/data/portfolio.ts`: experience, project, and skill content.
- `src/styles/global.css`: shared styling, seasonal palettes, and responsive rules.
- `src/scripts/`: seasonal selection, Halloween spider, and Christmas Santa interactions.
- `src/lib/seasons.ts`: calendar rules and validated local preview options.
- `public/`: files copied unchanged to the published site, including the CV.

Run `npm run format` after editing.

## Temporary theme previews

Copy `.env.example` to `.env.local` and set `PUBLIC_PREVIEW_SEASON` to
`normal`, `halloween`, `christmas`, or `new-year`. Restart the development server.
Remove the value to follow the current date again.

`.env.local` is ignored by Git. The override applies only to `npm run dev`;
production builds always select the season from the visitor’s local date.

## GitHub Pages

In the repository’s **Settings → Pages → Build and deployment**, set **Source**
to **GitHub Actions** when deploying this migration.

`.github/workflows/deploy.yml` checks, builds, and publishes `dist/` on pushes to
`main`. Pull requests run the checks and build without deploying. No server or
hosting migration is required. The Astro `site` setting points to the existing
root domain, so no repository-name base path is needed.

See the [Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).

## Starwind UI

Starwind's Astro components live in `src/components/starwind/`. The main calls to
action use `Button`, and project cards use `Card`. Their source is editable here;
the Card component supports `as="article"` to preserve project semantics.

Add more components with `npx starwind@latest add <component> --framework astro`.
Theme tokens in `src/styles/starwind.css` follow the portfolio's existing palette
and seasonal colours. Tailwind utilities are available, but Preflight is omitted
so installing components does not reset the existing page styles. Starwind's
muted surface token is namespaced to avoid colliding with the portfolio text colour.
