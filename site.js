/* Firebrand Librarian — shared behaviour. No dependencies. */
(function () {
  'use strict';

  /* ---- "Poke around" nav toggle (small screens) ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---- Identity section: the line level with the big red word is the active one ---- */
  var big = document.getElementById('identity-word');
  var article = document.getElementById('identity-article');
  var items = document.querySelectorAll('.identity-list li');
  var pinned = window.matchMedia('(min-width: 821px)');
  if (big && items.length) {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var current = null, raf = null;

    function show(li) {
      if (li === current) return;
      current = li;
      items.forEach(function (x) { x.classList.toggle('on', x === li); });
      var word = li.getAttribute('data-word');
      var an = /^[aeiou]/i.test(word) ? 'an' : 'a';
      if (reduce) { big.textContent = word; if (article) article.textContent = an; return; }
      big.classList.add('swap');
      setTimeout(function () {
        big.textContent = word; if (article) article.textContent = an;
        big.classList.remove('swap');
      }, 160);
    }

    function measure() {
      raf = null;
      if (!pinned.matches) { show(items[0]); return; }
      var r = big.getBoundingClientRect();
      var y = r.top + r.height / 2;            // where the big word sits right now
      var best = items[0], bestD = Infinity;
      items.forEach(function (li) {
        var b = li.getBoundingClientRect();
        if (y >= b.top && y <= b.bottom) { best = li; bestD = 0; return; }
        var d = y < b.top ? b.top - y : y - b.bottom;
        if (d < bestD) { bestD = d; best = li; }
      });
      show(best);
    }
    function onScroll() { if (!raf) raf = requestAnimationFrame(measure); }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    measure();
  }

  /* ---- Projects: filter chips + expandable cards ---- */
  var chips = document.querySelectorAll('.chip');
  var cards = document.querySelectorAll('.project');
  if (chips.length && cards.length) {
    function applyFilter(key, push) {
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c.getAttribute('data-track') === key ? 'true' : 'false'); });
      cards.forEach(function (card) {
        card.classList.toggle('hidden', key !== 'all' && card.getAttribute('data-track') !== key);
      });
      if (push) history.replaceState(null, '', key === 'all' ? location.pathname : '#' + key);
    }
    chips.forEach(function (c) {
      c.addEventListener('click', function () { applyFilter(c.getAttribute('data-track'), true); });
    });
    function fromHash() {
      var h = (location.hash || '').replace('#', '');
      var ok = Array.prototype.some.call(chips, function (c) { return c.getAttribute('data-track') === h; });
      applyFilter(ok ? h : 'all', false);
    }
    window.addEventListener('hashchange', fromHash);
    fromHash();

    document.querySelectorAll('.project-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var card = btn.closest('.project');
        var open = card.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  }

  /* ---- Tags (Marginalia): pills on posts, filter + search + legend on blog.html.
         Definitions live in tags.js (window.FB_TAGS). ---- */
  var TAGS = window.FB_TAGS;
  if (TAGS && TAGS.tags) {
    var tagById = {};
    TAGS.tags.forEach(function (t) { tagById[t.id] = t; });

    function parseTags(el) {
      return (el.getAttribute('data-tags') || '').split(',')
        .map(function (s) { return s.trim(); })
        .filter(function (s, i, a) { return s && a.indexOf(s) === i; });
    }
    function readHash() {
      var m = /(?:^#|&)tag=([^&]+)/.exec(location.hash || '');
      return m ? decodeURIComponent(m[1]) : 'all';
    }
    function tagLink(id, active) {
      var t = tagById[id];
      if (!t) { if (window.console) console.warn('Unknown tag id "' + id + '". Add it to tags.js.'); return null; }
      var a = document.createElement('a');
      a.className = 'tag';
      a.setAttribute('data-tag', id);
      a.setAttribute('data-group', t.group);
      a.href = 'blog.html#tag=' + encodeURIComponent(id);
      a.title = t.definition;                       // hover shows the definition
      a.textContent = t.label;
      if (active) a.setAttribute('aria-current', 'true');
      return a;
    }
    function fillTags(host, ids, help) {
      ids.forEach(function (id) { var a = tagLink(id); if (a) host.appendChild(a); });
      if (help && host.children.length) {
        var h = document.createElement('a');
        h.className = 'tags-help'; h.href = 'blog.html#tags'; h.textContent = 'what the tags mean';
        host.appendChild(h);
      }
    }

    /* Post pages: <p class="post-tags" data-tags="..."></p> */
    document.querySelectorAll('.post-tags[data-tags]').forEach(function (el) {
      if (el.closest('.post-list')) return;
      fillTags(el, parseTags(el), true);
    });

    /* Blog index */
    var postList = document.querySelector('.post-list');
    var chipHost = document.getElementById('tag-chips');
    if (postList && chipHost) {
      var posts = Array.prototype.slice.call(postList.querySelectorAll(':scope > li'));
      var search = document.getElementById('post-search');
      var defBox = document.getElementById('tag-def');
      var legend = document.getElementById('tags');
      var empty = document.getElementById('no-posts');
      var counts = {};

      posts.forEach(function (li) {
        var ids = parseTags(li);
        li._tags = ids;
        ids.forEach(function (id) { counts[id] = (counts[id] || 0) + 1; });
        if (ids.length) {
          var p = document.createElement('p');
          p.className = 'post-tags';
          fillTags(p, ids, false);
          li.appendChild(p);
        }
        li._text = li.textContent.toLowerCase();   // title, excerpt, date, and tag labels
      });

      /* Filter chips, grouped, only for tags that have posts */
      function chip(id, label, n) {
        var a = document.createElement('a');
        a.className = 'chip';
        a.setAttribute('data-tag', id);
        a.href = id === 'all' ? 'blog.html#' : 'blog.html#tag=' + encodeURIComponent(id);
        a.textContent = label;
        if (id !== 'all' && tagById[id]) a.title = tagById[id].definition;
        var s = document.createElement('span'); s.className = 'n'; s.textContent = ' ' + n;
        a.appendChild(s);
        return a;
      }
      var allRow = document.createElement('div'); allRow.className = 'chip-group';
      allRow.appendChild(chip('all', 'All posts', posts.length));
      chipHost.appendChild(allRow);
      TAGS.groups.forEach(function (g) {
        var inGroup = TAGS.tags.filter(function (t) { return t.group === g.id && counts[t.id]; });
        if (!inGroup.length) return;
        var row = document.createElement('div'); row.className = 'chip-group';
        var gl = document.createElement('span'); gl.className = 'gl'; gl.textContent = g.label;
        row.appendChild(gl);
        inGroup.forEach(function (t) { row.appendChild(chip(t.id, t.label, counts[t.id])); });
        chipHost.appendChild(row);
      });

      /* Legend: every tag, with its definition, whether or not it has posts yet */
      if (legend) {
        var body = legend.querySelector('.legend-body') || legend;
        TAGS.groups.forEach(function (g) {
          var h = document.createElement('h3'); h.textContent = g.label; body.appendChild(h);
          if (g.note) { var n = document.createElement('p'); n.className = 'note'; n.textContent = g.note; body.appendChild(n); }
          var dl = document.createElement('dl');
          TAGS.tags.filter(function (t) { return t.group === g.id; }).forEach(function (t) {
            var dt = document.createElement('dt');
            var a = tagLink(t.id); if (a) dt.appendChild(a);
            if (!counts[t.id]) { var s = document.createElement('span'); s.className = 'n'; s.textContent = 'no posts yet'; dt.appendChild(s); }
            var dd = document.createElement('dd'); dd.textContent = t.definition;
            dl.appendChild(dt); dl.appendChild(dd);
          });
          body.appendChild(dl);
        });
      }

      function apply() {
        var key = readHash();
        if (key !== 'all' && !tagById[key]) key = 'all';
        var q = search ? search.value.trim().toLowerCase() : '';
        var shown = 0;
        posts.forEach(function (li) {
          var ok = (key === 'all' || li._tags.indexOf(key) !== -1) && (!q || li._text.indexOf(q) !== -1);
          li.hidden = !ok;
          if (ok) shown++;
        });
        chipHost.querySelectorAll('.chip').forEach(function (c) {
          c.setAttribute('aria-current', c.getAttribute('data-tag') === key ? 'true' : 'false');
        });
        postList.querySelectorAll('.tag').forEach(function (t) {
          if (t.getAttribute('data-tag') === key) t.setAttribute('aria-current', 'true'); else t.removeAttribute('aria-current');
        });
        if (defBox) {
          if (key === 'all') { defBox.hidden = true; defBox.textContent = ''; }
          else {
            var t = tagById[key];
            defBox.hidden = false; defBox.textContent = '';
            var b = document.createElement('strong'); b.textContent = t.label; defBox.appendChild(b);
            defBox.appendChild(document.createTextNode(' · ' + t.definition + ' '));
            var clr = document.createElement('a'); clr.href = 'blog.html#'; clr.textContent = 'Show all posts'; defBox.appendChild(clr);
          }
        }
        if (empty) empty.hidden = shown !== 0;
        if (legend && location.hash === '#tags') legend.open = true;
      }
      window.addEventListener('hashchange', apply);
      if (search) search.addEventListener('input', apply);
      apply();
    }
  }
})();
