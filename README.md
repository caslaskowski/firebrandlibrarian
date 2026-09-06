# Firebrand Librarian

firebrandlibrarian.com, as plain HTML, CSS, and one small JavaScript file, hosted on GitHub Pages. No build step, no framework, no dependencies. Edit a file, commit, and the site updates in about a minute.

## What changed in this rework

- **Home** (`index.html`): the Funko shelf photo is back as the hero. Below it, the six identities ("I'm a librarian / tinker / leader / creator / mentor / advocate") as one-liners; on desktop the big red word on the left swaps as you scroll the lines on the right. Then a one-line "Why Firebrand?" band linking to the 2018 *Firebranded* post, then **Release notes**, six cards for recent work.
- **Projects** (`projects.html`): filter chips, and cards that open on hover, focus, or click. Click pins a card open; the toggle is a real button with `aria-expanded`, so it works with a keyboard and on touch.
- **Character Sheet** (`character-sheet.html`): the CV, rebuilt from the September 2026 Word file, with the long lists (presentations, committee record) tucked into expandable sections. `cv.html` redirects here so old links keep working. The Word file is in `files/` behind the download button.
- **Publications** (`publications.html`): regenerated from the current CV.
- **Speaking** (`speaking.html`): new. Invited talks, presentations, workshops, webinars, podcasts, from the CV.
- **Teaching** (`course-materials.html`, same filename so old links work): rebuilt. Textbook and websites first, then courses with their syllabi, then the guides (AI Teaching Tools, Legal Research Examples, Language Matters, the Fellows handbooks) as cards. The Gen AI appendix was removed.
- **Marginalia** (`blog.html`): the blog, renamed. Posts kept word for word.
- **Contact** (`contact.html`): same links, shorter copy.
- Language Matters, AI Teaching Tools, and Legal Research Examples kept their content and now live under Teaching (they light up Teaching in the menu and link back to it).
- **Type**: Fraunces for headings and the wordmark, Nunito for body. Both from Google Fonts. Fraunces is loaded with its SOFT and WONK axes so headings have some hand-drawn warmth.
- **Menu**: a two-line "Poke around" button on every screen size opens a panel listing the seven sections with a short description each.
- **External links open in a new tab** (`target="_blank" rel="noopener"`) so nothing navigates away from the site. Internal links stay in the same tab.

## Files

```
index.html               Home
projects.html            Projects (filterable, expanding cards)
speaking.html            Speaking
character-sheet.html     CV
cv.html                  redirect → character-sheet.html
publications.html        Publications
course-materials.html    Teaching (links to the two below)
ai-teaching-tools.html
legal-research-examples.html
language-matters.html
blog.html + 13 posts     Marginalia
contact.html
style.css                all styles
site.js                  nav toggle, identity word swap, project filters/cards
images/                  logo, banner
images/projects/         one photo per project card (see README.txt there for filenames)
files/                   CV_Claskowski.docx and any PDFs you link to
CNAME, .nojekyll         GitHub Pages plumbing
```

## Editing the things that change most

**Home identity lines.** In `index.html`, each is an `<li data-word="…">` inside `<ol class="identity-list">`. Change the text inside `<span class="line">`. The `data-word` attribute is what the big red word shows; the script picks "a" or "an" automatically.

**Release notes cards.** In `index.html`, each card is an `<li class="note-card">` with a `kind` pill, a title (linked if there is a URL), a `when` line, and a `blurb`. Copy one, edit, done. Keep it to six; older items belong on Publications.

**Projects.** In `projects.html`, each is an `<li class="project" data-track="…">`. Tracks are `ai`, `research`, `librarianship`, `collaborations`; they set the colour bar and the filter. Add a project by copying a card and giving its panel a unique `id` that matches the button's `aria-controls`.

**Project photos.** Each card has an image region that shrinks as the description opens. Drop a JPG into `images/projects/` with the filename printed in the card's placeholder (the list is in `images/projects/README.txt`). The label disappears once the image loads; until then the region shows a soft tint.

**Character Sheet.** Ordinary HTML lists. Long sections live inside `<details>` so the page stays scannable; the summary text is the clickable label. Replace `files/CV_Claskowski.docx` when the CV changes (same filename, and the download button keeps working).

**Colours and type.** All tokens are at the top of `style.css` under `:root`. The brand red is `--red: #9e3232`.

## Still to do

- **Project photos.** See above; nine filenames are waiting in `images/projects/`.
- **Syllabus PDFs.** Teaching links to `files/AI-and-Data-Course-Overview-F23.pdf`, `files/A2J-Project.pdf`, `files/24S-UA-LPT.pdf`, and `files/S-25-Gen-AI-Assignment.pdf`. Those files were never in this repo; drop them into `files/` or the links 404.

## Local preview

Open any `.html` in a browser. Fonts load from Google, so they need a connection; everything else works offline.
