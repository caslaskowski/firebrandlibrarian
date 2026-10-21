/* Firebrand Librarian — tag definitions for Marginalia.
   =====================================================
   This is the ONE place to add, rename, or define a tag.

   Posts refer to tags by id. In a post page:
       <p class="post-tags" data-tags="all-me, teaching, series-lpt"></p>
   and in blog.html, on the post's <li>:
       <li data-tags="all-me, teaching, series-lpt">

   site.js reads this file and draws the pills, the filter chips on
   blog.html, the "What the tags mean" legend, and the hover definitions.
   Ids are lowercase, hyphenated, and never change once used (rename the
   label instead). A tag with no posts still appears in the legend but
   not in the filter chips. Groups are shown in the order listed. */

window.FB_TAGS = {
  groups: [
    {
      id: 'ai',
      label: 'How much AI helped',
      note: 'Every post carries exactly one of these, so you always know what you are reading.'
    },
    { id: 'topic',  label: 'Topics' },
    { id: 'series', label: 'Series' }
  ],

  tags: [
    /* ---- How much AI helped (pick exactly one per post) ---- */
    { id: 'all-me',      group: 'ai', label: 'All Me',
      definition: 'No AI was used at any stage. Ideas, drafting, and editing are all mine (typos included).' },
    { id: 'idea-mill',   group: 'ai', label: 'Idea Mill',
      definition: 'I used an AI tool to generate, sort, or pressure-test ideas, angles, or outlines. I chose what to keep, and every word of the post is mine.' },
    { id: 'bot-checked', group: 'ai', label: 'Bot-checked',
      definition: 'I wrote the post and an AI tool checked it for typos, grammar, and clarity. I made the final call on every change, and no AI-generated sentences made it in.' },
    { id: 'sous-bot',    group: 'ai', label: 'Sous-Bot',
      definition: 'The ideas, argument, and angle are mine. An AI tool produced the first draft from them, and I edited it. The thinking is human, and the prose is machine-assisted.' },
    { id: 'autopilot',   group: 'ai', label: 'Autopilot',
      definition: 'An AI tool drafted this post, usually a summary of existing developments, with no original argument from me. I reviewed it for accuracy before publishing.' },

    /* ---- Topics (pick as many as fit) ---- */
    { id: 'teaching',        group: 'topic', label: 'Teaching',
      definition: 'Course design, assignments, grading, and what I learned from students.' },
    { id: 'legal-tech',      group: 'topic', label: 'Legal tech',
      definition: 'The tools lawyers use, tech competency, and how to evaluate the next thing.' },
    { id: 'ai',              group: 'topic', label: 'AI & data',
      definition: 'Artificial intelligence, machine learning, and data in law and libraries.' },
    { id: 'librarianship',   group: 'topic', label: 'The profession',
      definition: 'Law librarianship itself: its people, its pipeline, and where it is headed.' },
    { id: 'design-thinking', group: 'topic', label: 'Design & innovation',
      definition: 'Design thinking, impact-conscious design, and building things that are actually useful.' },
    { id: 'open-access',     group: 'topic', label: 'Open access',
      definition: 'Open scholarship, open textbooks, open data, and the fights over who controls them.' },
    { id: 'advocacy',        group: 'topic', label: 'Advocacy & allyship',
      definition: 'Equity, inclusion, immigrant families, inclusive language, and showing up for people.' },
    { id: 'personal',        group: 'topic', label: 'Origin stories',
      definition: 'Where the firebrand comes from. The Army, law school, family, and other formative moments.' },

    /* ---- Series (posts that read in order) ---- */
    { id: 'series-lpt', group: 'series', label: 'Building Law Practice Technology',
      definition: 'Designing and teaching an online legal technology course at FIU in 2018, from the first brainstorm to the second-semester recap.' }
  ]
};
