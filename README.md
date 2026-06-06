# Firebrand Librarian — static site

A plain HTML/CSS version of firebrandlibrarian.com, rebuilt **directly from
your WordPress export** so it can live on **GitHub Pages for free** with no
Bluehost, no WordPress, no database — just files.

The flame logo and header are drawn in code, so the site needs **zero image
files** to look finished.

## Pages (all built from your export)

```
index.html                    Who am I?           (home)
cv.html                       CV                  (full CV — see note)
publications.html             Publications        (books, chapters, articles, reviews)
course-materials.html         Course Materials    (+ links to the two below)
ai-teaching-tools.html        AI Teaching Tools & Resources
legal-research-examples.html  Legal Research Examples
language-matters.html         Language Matters    (inclusive-language guide)
contact.html                  Contact
blog.html                     Blog index
<13 post pages>.html          one file per published post
style.css                     one stylesheet for everything
.nojekyll                     serve files as-is on GitHub Pages
files/                        drop your PDFs/DOCX here (see below)
images/                       optional, only if you want your old logo back
```

### Notes on what came from the export
- Your **blog** (13 published posts) and the **Publications** and **Language
  Matters** pages were all published but weren't in your site's menu. They're
  included here and added to the navigation so nothing is lost. If you'd rather
  hide any of them, delete its line from the `<nav>` in each `.html` file (or
  just delete the page).
- Your **CV page was empty** in the current site's export, so I filled it from
  your older `firebrandlib.wordpress.com` export, which still had a full CV
  (experience, education, presentations, service, awards). **Heads up: that CV
  is from around 2020** — it lists Duke as current, degrees "forthcoming 2020,"
  and an NCSU candidacy through 2022, so the dates predate your move to Arizona
  and will need refreshing. Its Publications section is also older than your
  separate, current Publications page, so you may want to trim one of the two.
  Edit `cv.html` to update.
- On **Language Matters**, two leftover WordPress widget lists ("Categories"
  and "Recent Posts") pointed at an old `firebrandlib.com` domain via the
  Wayback Machine. Those were sidebar chrome, not page content, so they were
  left off. The actual guide and its Resources are intact.
- External links you'd already routed through the Wayback Machine (on the AI
  Tools, Language Matters, and Contact pages) are preserved exactly.
- Text is reproduced verbatim from your export — wording and spelling are
  yours to edit if you like.

---

## Before you cancel Bluehost: save these files

Your documents are files stored on Bluehost. Grab them while the old site is
up (WordPress **Media Library** is easiest), then drop them into `files/`
using the names below — they're the original filenames, so downloads should
already match.

| Where it's used | File name (put in `files/`) |
|---|---|
| Course Materials | `AI-and-Data-Course-Overview-F23.pdf` |
| Course Materials | `A2J-Project.pdf` |
| Course Materials | `24S-UA-LPT.pdf` |
| Course Materials | `S-25-Gen-AI-Assignment.pdf` |
| Course Materials | `S24-Gen-AI-Appendix-3-EDUCATION-LAW-_-9.04.docx` |
| Blog post (Assignments & Syllabus) | `fiu-technology-pitch-assignment.pdf` |
| Blog post (Assignments & Syllabus) | `fiu-professional-development-assignment.pdf` |
| Blog post (Assignments & Syllabus) | `fiu-software-evaluation-assignment.pdf` |
| Blog post (Assignments & Syllabus) | `fiu-law-practice-technology-syllabus-cl-draft.pdf` |

The site works without these; those links just 404 until the files are added.

---

## Option A — Put it online (no command line)

1. Make a free account at https://github.com.
2. **New repository** → name it (e.g. `firebrandlibrarian`) → **Public** → create.
3. Click **uploading an existing file** and drag in **everything from this
   folder** (all `.html` files, `style.css`, the `files/` and `images/`
   folders, and `.nojekyll`). Commit.
4. **Settings → Pages** → Source: **Deploy from a branch**, Branch:
   **main / (root)** → Save.
5. Wait a minute; GitHub shows your live URL,
   `https://YOURNAME.github.io/firebrandlibrarian/`.

## Option B — Keep using firebrandlibrarian.com

Point your domain at GitHub Pages so the same address keeps working:

1. At your domain registrar, set DNS per GitHub's current instructions:
   https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site
2. Repo **Settings → Pages → Custom domain** → enter `firebrandlibrarian.com`
   → Save → enable **Enforce HTTPS**.

> Your domain *registration* is separate from Bluehost *hosting*. If the domain
> is registered through Bluehost, keep just the domain (or transfer it to
> another registrar) before cancelling hosting, or you'd lose the name.

---

## Editing later

Everything is editable text. Change wording by editing the text inside the
`.html` files; restyle by editing `style.css`. On GitHub you can edit any file
in the browser (pencil icon) and the live site updates in about a minute.

### Optional: your old logo
You don't need it — the built-in flame is complete. To use your original
circular logo, save it as `images/logo.png`, then in each `.html` header
replace the `<svg>…</svg>` inside `<span class="monogram">` with
`<img src="images/logo.png" alt="Firebrand Librarian" width="46" height="46">`.
