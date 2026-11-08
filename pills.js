/* Hand-drawn pill outlines + a soft particle glow on hover.
   Draws a slightly wobbly, double-stroked outline around every pill/button
   (sized to the real element, so it stays crisp), and puffs a few sage and
   terracotta sparks when you hover a button. Does not touch the page's own
   particle background. */
(function () {
  const NS = 'http://www.w3.org/2000/svg';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function rng(seed) { let s = seed >>> 0 || 1; return () => (s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296; }
  function hash(str) { let h = 2166136261; for (const c of str) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }

  // one wobbly pill stroke; deliberately left slightly open where it starts/ends
  function pillPath(w, h, rand, lift) {
    const e = () => (rand() - 0.5) * 1.7, R = h / 2, k = R * 1.33;
    const t = lift;
    return `M ${R * 0.8 + e()} ${0.6 + t + e()}`
      + ` C ${w * 0.33} ${-0.7 + t + e()}, ${w * 0.66} ${1 + t + e()}, ${w - R} ${0.3 + t + e()}`
      + ` C ${w - R + k + e()} ${e() + t}, ${w - R + k + e()} ${h + e() - t}, ${w - R} ${h - 0.4 + e() - t}`
      + ` C ${w * 0.66} ${h + 0.9 + e() - t}, ${w * 0.33} ${h - 0.8 + e() - t}, ${R + 0.5} ${h + 0.2 - t}`
      + ` C ${R - k + e()} ${h + e() - t}, ${R - k + e()} ${0.2 + e() + t}, ${R * 0.8 + 3.5} ${0.9 + t + e()}`;
  }

  function draw(el) {
    const old = el.querySelector(':scope > svg.sk-line'); if (old) old.remove();
    const cs = getComputedStyle(el);
    const filled = el.classList.contains('btn') && !el.classList.contains('ghost')
      && !/rgba?\(\s*0,\s*0,\s*0(,\s*0)?\s*\)|transparent/.test(cs.backgroundColor);   // only solid buttons get an outer ring
    const pad = filled ? 3 : 0;
    const w = el.offsetWidth + pad * 2, h = el.offsetHeight + pad * 2;
    if (!w || !h) return;
    const rand = rng(hash((el.textContent || '') + w));
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'sk-line'); svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.style.cssText = `position:absolute;left:${-pad - 0}px;top:${-pad}px;width:${w}px;height:${h}px;overflow:visible;pointer-events:none`;
    const stroke = filled ? cs.backgroundColor : 'currentColor';
    [[0, 1.3, 1], [1.4, 0.9, 0.45]].forEach(([lift, sw, op]) => {
      const p = document.createElementNS(NS, 'path');
      p.setAttribute('d', pillPath(w, h, rand, lift));
      p.setAttribute('fill', 'none'); p.setAttribute('stroke', stroke);
      p.setAttribute('stroke-width', sw); p.setAttribute('stroke-linecap', 'round');
      p.setAttribute('opacity', el.classList.contains('chip') ? op * 0.6 : op);
      svg.appendChild(p);
    });
    el.insertBefore(svg, el.firstChild);
  }

  function spark(el) {
    if (reduce) return;
    const r = el.getBoundingClientRect();
    const box = document.createElement('span');
    box.className = 'sparks';
    for (let i = 0; i < 11; i++) {
      const s = document.createElement('i');
      const ang = Math.random() * Math.PI * 2, dist = 22 + Math.random() * 34;
      s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;` +
        `--dx:${(Math.cos(ang) * dist).toFixed(1)}px;--dy:${(Math.sin(ang) * dist - 8).toFixed(1)}px;` +
        `width:${(2 + Math.random() * 3).toFixed(1)}px;height:${(2 + Math.random() * 3).toFixed(1)}px;` +
        `background:${Math.random() < 0.3 ? '#C47A5A' : '#8FAF8A'};animation-delay:${(Math.random() * 0.12).toFixed(2)}s`;
      box.appendChild(s);
    }
    el.appendChild(box);
    setTimeout(() => box.remove(), 1100);
  }

  /* sketched square box for tile cards; colour = the card's --edge (a darker shade of its own colour) */
  function box(el) {
    const old = el.querySelector(':scope > svg.sk-box'); if (old) old.remove();
    const w = el.offsetWidth, h = el.offsetHeight; if (!w || !h) return;
    let s = hash((el.textContent || '').slice(0, 24)) % 233280 || 7;
    const rnd = () => (s = (s * 49297 + 233280) % 233280) / 233280, e = () => (rnd() - .5) * 2.4;
    const side = (ax, ay, bx, by) => {
      const mx = (ax + bx) / 2 + (by - ay) / 90, my = (ay + by) / 2 - (bx - ax) / 90;
      return 'M ' + (ax + e()) + ' ' + (ay + e()) + ' Q ' + (mx + e()) + ' ' + (my + e()) + ' ' + (bx + e()) + ' ' + (by + e()) + ' ';
    };
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'sk-box'); svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.style.cssText = `position:absolute;left:0;top:0;width:${w}px;height:${h}px;overflow:visible;pointer-events:none;z-index:2;color:var(--edge,#2A1710)`;
    [[0, 1.7, 1], [2.2, 1.1, .5]].forEach(([o, sw, op]) => {
      const k = 6 + o, path = document.createElementNS(NS, 'path');
      path.setAttribute('d', side(-k, o, w + k, o - 1) + side(w - o, -k, w - o + 1, h + k) + side(w + k, h - o, -k, h - o + 1) + side(o, h + k, o - 1, -k));
      path.setAttribute('fill', 'none'); path.setAttribute('stroke', 'currentColor'); path.setAttribute('stroke-width', sw);
      path.setAttribute('stroke-linecap', 'round'); path.setAttribute('opacity', op);
      svg.appendChild(path);
    });
    el.appendChild(svg);
  }

  function init() {
    document.querySelectorAll('.btn, a.pill, .chip, .deck-btn, #lang-toggle').forEach(el => {
      if (el.classList.contains('sk')) return;
      el.classList.add('sk'); draw(el);
      if ('ResizeObserver' in window) new ResizeObserver(() => draw(el)).observe(el);
    });
    document.querySelectorAll('.btn, a.pill, a.sketch, .deck-btn').forEach(el => {
      if (el.classList.contains('glow')) return;
      el.classList.add('glow');
      el.addEventListener('mouseenter', () => spark(el));
      el.addEventListener('focus', () => spark(el));
    });
    document.querySelectorAll('.tile, .deck .card, #lang-dropdown').forEach(el => {
      if (el.dataset.skb) return;
      el.dataset.skb = '1'; box(el);
      if ('ResizeObserver' in window) new ResizeObserver(() => box(el)).observe(el);
    });
  }
  // wait for web fonts so everything is measured at final size; run again once the page (and language toggle) exist
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(init);
  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('load', init);
})();
