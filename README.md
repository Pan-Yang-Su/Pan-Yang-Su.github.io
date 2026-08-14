# Your academic site

A plain HTML/CSS/JS site (no build step, no Jekyll needed) — GitHub Pages
serves these files directly.

## What's inside
- `index.html` — home / about page
- `publications.html` — publications list with a **By Year / By Topic** toggle
- `publications-data.js` — **the only file you need to edit to add papers.**
  Add one entry per paper; both views (year and topic) regenerate automatically.
- `teaching.html` — courses and advising
- `styles.css` — shared styling for all pages

## 1. Put it on GitHub Pages (free, public)
1. Create a new repository on GitHub named exactly `YOUR-USERNAME.github.io`
   (replace `YOUR-USERNAME` with your actual GitHub username).
2. Upload all the files in this folder to the root of that repository
   (drag-and-drop works on github.com, or use `git push` if you're comfortable
   with git).
3. In the repo, go to **Settings → Pages**, and under "Build and deployment"
   set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Wait 1–2 minutes. Your site will be live at `https://YOUR-USERNAME.github.io`.

(If you'd rather it live at `github.com/YOUR-USERNAME/some-repo-name` instead
of your root username site, that also works — just enable Pages the same way
in that repo's Settings, and your URL will be
`https://YOUR-USERNAME.github.io/some-repo-name`.)

## 2. Customize your content
- **Name, title, department, bio, links, CV**: edit the text directly in
  `index.html`.
- **Papers**: edit `publications-data.js`. Copy an existing entry and change
  the fields — you do not need to touch `publications.html` itself.
- **Courses**: edit the cards directly in `teaching.html`.
- Replace `cv.pdf` (link in `index.html`) with an actual PDF of your CV
  uploaded to the same repo, or point it to an external CV link.

## 3. Custom domain (optional)
If you want `janeresearcher.com` instead of the `.github.io` address, buy the
domain from any registrar (~$10–15/year), then follow GitHub's guide for
[configuring a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## 4. Get it indexed by Google faster (optional)
Once live, submit your URL in [Google Search Console](https://search.google.com/search-console)
so it's indexed sooner rather than waiting for an organic crawl.
