# Firebrand Librarian — static site

This is a plain HTML/CSS version of firebrandlibrarian.com, rebuilt so it can
live on **GitHub Pages for free** and no longer needs Bluehost or WordPress.

There is no database, no PHP, and nothing to maintain — just files. The flame
logo and header are drawn in code, so the site needs **zero image files** to
look finished.

## What's in here

```
index.html                  Who am I? (home)
cv.html                     CV (embeds files/cv.pdf)
course-materials.html       Course Materials overview
ai-teaching-tools.html      AI Teaching Tools & Resources
legal-research-examples.html
contact.html                Contact (your email is already wired in)
style.css                   One stylesheet for every page
.nojekyll                   Tells GitHub to serve the files as-is
files/                      Drop your PDFs here (see below)
images/                     Optional — only if you want your old logo back
```

---

## ⚠️ Before you cancel Bluehost: save these files

A handful of things on your old site are **files stored on Bluehost** that
this rebuild can't pull down on its own. Grab them first, then drop them into
the `files/` folder using the names shown.

The easiest way to get them: log into WordPress → **Media Library**, or visit
each link below while the old site is still up, then "Save As".

| Save this from your old site | Save it as (inside `files/`) |
|---|---|
| Your CV document | `cv.pdf` |
| Law Practice in the Age of AI & Big Data — Syllabus | `ai-bigdata-syllabus.pdf` |
| A2J Project | `a2j-project.pdf` |
| Law Practice Technology — Syllabus | `law-practice-technology-syllabus.pdf` |
| Gen AI Assignment | `genai-assignment.pdf` |
| Gen AI Appendix 3 — Education Law (9.04) | `genai-appendix3-education-law.pdf` |

If a file is actually a Word doc instead of a PDF, keep the same base name but
change the link in the matching `.html` file (or just export it to PDF).

> The site still works without these — the links will simply 404 until the
> files are added. Add them whenever you're ready.

---

## Option A — Put it online (no command line needed)

1. Create a free account at https://github.com if you don't have one.
2. Click **New repository**. Name it whatever you like
   (e.g. `firebrandlibrarian`). Make it **Public**. Click **Create**.
3. On the new repo page, click **uploading an existing file**.
4. Drag in **everything from this folder** (all the `.html` files,
   `style.css`, the `files/` and `images/` folders, and `.nojekyll`).
   Click **Commit changes**.
5. Go to **Settings → Pages**. Under "Build and deployment", set
   **Source: Deploy from a branch**, **Branch: main / (root)**, and **Save**.
6. Wait a minute, then refresh. GitHub shows the live URL, which will be
   `https://YOURNAME.github.io/firebrandlibrarian/`.

That's it — your site is live and free.

## Option B — Keep using firebrandlibrarian.com

You can point your existing domain at GitHub Pages so the same web address
keeps working after Bluehost is gone. Two pieces:

1. **At your domain registrar** (where the domain is actually registered —
   may or may not be Bluehost), set DNS records to GitHub's servers. GitHub's
   official, current instructions are here — follow them exactly:
   https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site
   (In short: four `A` records for the apex domain, plus a `CNAME` record for
   `www` pointing to `YOURNAME.github.io`.)
2. **In the repo**, Settings → Pages → **Custom domain**, enter
   `firebrandlibrarian.com`, Save, and tick **Enforce HTTPS** once it's ready.

> Heads up: your **domain registration** is separate from Bluehost *hosting*.
> If the domain itself is registered through Bluehost, don't let it lapse when
> you cancel hosting — either keep just the domain, or transfer it to another
> registrar first. Otherwise you'd lose the firebrandlibrarian.com name.

---

## Editing later

Everything is hand-editable text. To change wording, open the relevant
`.html` file and edit the text between the tags. To restyle, edit `style.css`.
On GitHub you can click any file → the pencil icon → edit → commit, and the
live site updates in about a minute.

## Optional: your old logo

You don't need it — the built-in flame logo is complete. But if you want your
original circular logo or banner back:

1. Save the images from your old site into the `images/` folder
   (e.g. `logo.png`, `banner.jpg`).
2. In each `.html` file, find the `<span class="monogram">…</span>` block in
   the header and replace the inline `<svg>…</svg>` with
   `<img src="images/logo.png" alt="Firebrand Librarian logo" width="46" height="46">`.

## Notes on what changed

- The external links on the **AI Teaching Tools** page already pointed at
  Internet Archive (Wayback) snapshots on your old site, so they're preserved
  as-is and won't break.
- Your contact email was decoded and wired into the Contact and Legal Research
  pages as a normal `mailto:` link.
- The "reference librarian" phrase on the home page is plain text now — the old
  link pointed at a Duke faculty page that's likely outdated. Add your current
  faculty profile link in `index.html` if you'd like.
