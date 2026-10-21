# Firebrand Librarian: review of flow and structure

October 2026. Every page was read in full. Items marked **done** shipped alongside this review; everything else is a suggestion, roughly in priority order within each section.

## The short version

The site has a clear voice and a sound skeleton: seven sections, one stylesheet, no build step. The main flow problems are about where things live and how a visitor moves between them.

1. **Teaching was holding a personal post.** Language Matters is a list of words you chose to stop using. That is a Marginalia post, not a course guide. **Done:** it now lives in Marginalia with a date line, tags, and a back link. Its URL did not change.
2. **Marginalia reads as abandoned.** Thirteen posts, all from 2018, under a menu line that says "Notes since 2016". The tag system (**done**) gives it structure for what comes next, but the index still needs a sentence that owns the gap.
3. **The menu hides the whole site behind one button on every screen size.** A visitor arriving from a conference bio sees a logo and "Poke around". Show the section names on wide screens, or at least put a site map in the footer.
4. **The home page never says your name.** Not in the title, not in the H1, not until the footer. Someone who searched "Cas Laskowski" needs confirmation in the first screen.
5. **Eight linked files are missing**, so eight download buttons 404. Four on Teaching, four in the 2018 Assignments and Syllabus post.

## Global

**Show the navigation on wide screens.** The two-line "Poke around" button is a nice touch and fine on phones. On a laptop it costs discoverability. Option A: on screens wider than about 900px, render the seven labels inline in the header and keep the panel with descriptions as a secondary reveal. Option B: keep the button but add a footer site map (seven links) to every page. B is a one-file change and fixes the "dead end" feeling at the bottom of every page, where the only link is LinkedIn.

**Lead with the name.** Change the home title to "Cas Laskowski, Firebrand Librarian" and add the name in or next to the identity heading. Search engines and link previews use the title; right now it is "Who am I?".

**Add Open Graph and Twitter card metadata.** No page has `og:title`, `og:description`, or `og:image`. Shared on LinkedIn or Bluesky, posts show no preview. One `og:image` (the banner photo) plus per-page title and description is enough. The template post now includes the description line; the OG tags would be the next step.

**Fix the two list-dump descriptions.** The meta descriptions for AI Teaching Tools and Language Matters were the first 160 characters of the list ("Brown Bag (racist) – lunchtime learning..."). **Done** for Language Matters. AI Teaching Tools still needs a sentence.

**Add a feed.** A blog for librarians without RSS is a blog that librarians will forget. A hand-maintained `feed.xml` (Atom) with the last ten posts needs no build step; or a ten-line Python script can regenerate it from `blog.html`. Happy to add either.

**Reorder the menu by visitor intent.** Projects, Teaching, Publications, Speaking, Marginalia, Character Sheet, Contact groups "what I build and teach" ahead of "the record". Minor.

**Consider self-hosting the fonts.** Fraunces and Nunito load from Google, which means every visitor pings Google. For a site whose audience cares about privacy, a `fonts/` folder with the two woff2 files is a small change and removes the dependency. The README's "works offline except fonts" note goes away too.

**One header, thirty copies.** Every nav change is a find-and-replace across thirty files. Keeping the no-build rule, a 25-line Python script that stamps a shared header and footer into each page would make the next restructure a one-file edit. Offer stands.

## Home

- The six identity lines work. "Advocate" links to Language Matters, which is now a post; that still fits.
- "Release notes" duplicates the Teaching page's "Textbook and websites" cards almost word for word. Keep both, but point the home cards at the internal pages (Projects, Teaching) so the home page feeds the site rather than sending visitors straight off it. "Everything published" under a list of tools and databases should probably read "Everything built" and go to Projects.
- The "Why Firebrand?" band is the best thing on the page. Consider moving it above the identity list so the name is explained before the list of selves.

## Teaching

- **Done:** Language Matters removed from Guides.
- **AI Teaching Tools is a 2022 snapshot** behind Wayback links: BlenderBot, TryItOn, Diffeo, Wizdom, and "ChatGPt ... makes text generation more accessible". The Workbench supersedes it. Either (a) retitle it "AI teaching tools, archived April 2024" and say so in the lede, or (b) prune it to what still works and link to the Workbench as the live successor. I would do (a) now and (b) when you next teach the course. Also fix "Gernerative", "ChatGPt", "genration", "AU generated", "Programing".
- **Legal Research Examples** is useful and honest ("constantly under construction"). Give each example a "verified" month, and watch the gpo.gov `fdsys` links, which redirect to govinfo today and may stop.
- **Missing PDFs:** `AI-and-Data-Course-Overview-F23.pdf`, `A2J-Project.pdf`, `24S-UA-LPT.pdf`, `S-25-Gen-AI-Assignment.pdf` (Teaching) and the four `fiu-*.pdf` files (2018 post). Drop them in `files/` or remove the buttons.
- The "Also taught" paragraph could become a fourth course block only if you want it findable; as a paragraph it is fine.

## Marginalia

- **Done:** tags, search, chips, and a legend. Every existing post is tagged `all-me` (they predate the tools) plus topics; the six course posts share a series tag.
- **Own the gap.** One sentence in the lede: when you stopped, why you are back, what to expect. Or change the menu line from "Notes since 2016" to "Notes since 2018" if the Tinkering Librarian years will not be imported.
- **Import or point to the off-site writing.** "Legal Tech Needs to Abandon UX" (3 Geeks, 2018), the Tinkering Librarian posts (2016 to 2019), the TechTalk column, and the Spectrum essays are the firebrand writing people remember. An "Elsewhere" group on the index (title, venue, year, link) would make Marginalia the hub for all of it without copying text.
- **Series navigation.** The six Law Practice Technology posts read in order. The series tag groups them now; a prev/next line at the foot of each post would let a reader walk them without returning to the index. The "What to teach?" post still ends on "Step 2: Decide on course objectives" and an empty paragraph, which was a cliffhanger for the next post; a "Next in series" link would resolve it.
- **Write the excerpts by hand.** The index excerpts are machine truncations with stray spaces before punctuation ("design thinking and the law . However") and end mid-sentence. One sentence each, written, would read better and search better (the new search box indexes them).
- **Small fixes in posts:**
  - Display the Tech: "reach out" links to a wordpress.com admin URL. Point it at `contact.html`.
  - Tech Competencies: "This like was updated" should be "link".
  - For Family: "until thirty were men" is missing a word.
  - Four posts nest a `<ul>` inside a `<p>` (For Family, Open Access, What to teach?, Objectives). Browsers cope, validators do not.
  - KIND of a Big Deal promises a full review; the Spectrum article (Sep/Oct 2018) exists. Link it.
  - Language Matters: "ablelist" (ableist), "antisemetic", "indigineity", "oversetepped"; "Biased Free" should be "Bias-Free". It has no date because the original publication date is not in the repo and the Wayback Machine was unreachable from this session. The list and index both say "Living list, undated"; set a date if you know it.
- **Post pages lack an author line and a next step.** A one-line footer on each post ("Cas Laskowski. Tagged ... Back to Marginalia") would tidy the ending. The back link exists; the author line does not.

## Projects

- **The filter axes do not match.** Three chips are topics (AI, research, librarianship) and one is a relationship (Collaborations). The Medical Debt Scorecard and the Supreme Court Indian Law Database are also legal informatics. Make the chips topic-only and let the existing "role" line carry the collaboration fact, or rename the chip "With partners" so the mismatch is at least deliberate.
- **The lede names three threads the chips do not.** "Legal informatics, equity, and open access" versus "AI, research, librarianship, collaborations". Pick one taxonomy and use it in both places.
- **Raw file paths are visible.** Until the nine photos arrive, each card shows `images/projects/the-workbench.jpg` in the corner. Visitors read that as broken. Remove the label (the README already lists the filenames) or show it only when the page is opened with `?edit` in the URL.
- **Hover-to-expand is jumpy.** Moving the mouse across the grid pops panels open and shut and resizes images. Keep the lift and shadow on hover but expand on click or focus only.

## Publications and Speaking

- Both are clean records. The "Articles" list mixes peer-reviewed journals with newsletters and blog posts. Three groups (Journals; Magazines and columns; Newsletters and blogs) would let a search committee find the refereed work in one glance.
- Add links where the work is open. Two are already on the site: the OSF preprint of "Reaching the Baseline" (linked from the 2018 post) and the 3 Geeks post (linked from Design Thinking). Judicature, LRSQ (DOI), and Ithaka are open too.
- Speaking could end with a short "Topics I am booked for" list and the contact link, so the page answers "can I invite her?" as well as "where has she spoken?".

## Character Sheet

- The RPG framing works and the download button is right where it should be. Add a PDF next to the Word file; many committees cannot or will not open `.docx` from a stranger.
- **Flag:** the experience paragraph names the specific budget-cut scenarios you modelled (5, 10, 15 percent, then 3 to 5 percent) "in response to recent financial difficulties at the University of Arizona". That is institutional detail on a public page. Consider "budget scenario modelling for leadership" instead.
- The page duplicates Publications and Research collaborations. Intentional for an abbreviated CV, but the Publications block could shrink to three items plus the link.

## Contact and footer

- Contact is three links. Fold the same three into the footer of every page and let Contact say what you are open to: talks (link Speaking), collaborations (link Projects), press, student questions.
- Footer: add GitHub and the section links; add the year to the copyright line.

## Offered next steps, in the order I would do them

1. Footer site map and name in the home title (an hour).
2. Hand-written excerpts and the small post fixes above (an hour).
3. Atom feed plus Open Graph tags (an hour).
4. Prev/next for the series posts (half an hour).
5. Projects chips and the visible file paths (half an hour).
6. The header-stamping script, once the above have settled.
