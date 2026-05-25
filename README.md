# Bhanuja Karumuru Website

This repo contains a static personal website with recruiter-first structure and SEO-oriented page metadata inspired by academic personal sites.

## What is included

- Crawlable multi-page HTML structure
- Page-specific title, description, canonical, Open Graph, and Twitter metadata
- Structured data using JSON-LD
- `robots.txt`
- `sitemap.xml`
- `feed.xml`
- `404.html`
- Resume PDFs in `assets/`

## Pages

- `/` home and profile
- `/projects/`
- `/publications/`
- `/news/`
- `/repositories/`
- `/cv/`
- blog post detail pages
- project detail pages

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Important assumption

The SEO files currently assume the final production URL will be:

`https://bhanujakarumuru.github.io/`

If you deploy to a different domain or GitHub Pages URL, update that base URL in:

- `index.html`
- `projects/index.html`
- `publications/index.html`
- `cv/index.html`
- `robots.txt`
- `sitemap.xml`
- `feed.xml`

## Post-launch SEO checklist

- Add Google Search Console verification meta tag or DNS verification
- Add Bing Webmaster verification
- Add GA4 script with your measurement ID
- Submit `sitemap.xml` to Search Console and Bing Webmaster Tools
- Validate homepage `ProfilePage`, project pages, and blog posts with Google's Rich Results Test
- Swap `assets/profile-monogram.svg` with a real professional headshot when you are ready for final launch
