# Longzan Luo's Homepage

This repository hosts the personal website for **Longzan Luo | 罗珑赞** at [luolongzan.github.io](https://luolongzan.github.io/).

The site is based on [PRISM](https://github.com/xyjoey/PRISM), with content managed through the `content/` and `content_zh/` directories.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
rsync -a out/ ./
```

The static export is also copied to the repository root so GitHub Pages can serve the site directly from the `main` branch.
