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
})();
