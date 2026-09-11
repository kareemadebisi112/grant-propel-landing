# Grant Propel Landing Page

Static landing page built with [Eleventy](https://www.11ty.dev/).

## Structure

- `src/index.njk` — page content, rendered with the `base.njk` layout
- `src/_includes/base.njk` — shared HTML shell (`<head>`, fonts, script/style includes)
- `src/css/style.css` — page styles
- `src/js/waitlist.js` — waitlist form submission logic
- `public/` — static assets copied as-is to the output

## Commands

```bash
npm install
npm run serve   # local dev server with live reload
npm run build   # build to _site/
```
