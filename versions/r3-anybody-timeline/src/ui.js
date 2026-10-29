/* ───────── UI helpers ───────── */
const H = [0.3, 0.55, 0.78, 1]; // strip height by effort

function statusBar(time = '9:41', clear = false) {
  return `<div class="sb${clear ? ' clear' : ''}"><span>${time}</span><span class="flex" style="gap:6px">
  <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>
  <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor"><path d="M8 2.2c2.4 0 4.6.9 6.2 2.5l1.2-1.2A10.4 10.4 0 0 0 8 .5 10.4 10.4 0 0 0 .6 3.5l1.2 1.2A8.7 8.7 0 0 1 8 2.2zm0 3.4c1.5 0 2.8.6 3.8 1.5L13 5.9A7 7 0 0 0 8 3.9a7 7 0 0 0-5 2l1.2 1.2c1-.9 2.3-1.5 3.8-1.5zm0 3.4c.6 0 1.1.2 1.5.6L8 11.1 6.5 9.6c.4-.4.9-.6 1.5-.6z"/></svg>
  <svg width="27" height="13" viewBox="0 0 27 13"><rect x=".5" y=".5" width="23" height="12" rx="3.5" fill="none" stroke="currentColor" opacity=".4"/><rect x="2" y="2" width="17" height="9" rx="2" fill="currentColor"/><path d="M25 4.5v4c.8-.3 1.4-1.1 1.4-2s-.6-1.7-1.4-2z" fill="currentColor" opacity=".45"/></svg>
  </span></div>`;
}

const TABS = [['today','Today','today'],['plan','Plan','plan'],['runs','Runs','runs'],['progress','Progress','progress'],['you','You','you']];
function tabbar(active) {
  return `<nav class="tabbar">${TABS.map(([id, label, ic]) =>
    `<button class="tab${id === active ? ' on' : ''}" data-go="${id}">${I(ic, 24)}<span>${label}</span></button>`).join('')}</nav><div class="home-ind"></div>`;
}

const sum = a => a.reduce((x, y) => x + y, 0);
function sessBlocks(s) { return (typeof s === 'string' ? S[s] : s).blocks; }

/* The session strip: every run drawn to scale, height = effort.
   A set of short repeats (6 × 20 s strides, 8 × 45 s hills) is drawn as one block cut into
   one segment per rep, so it reads as "6 things" instead of a comb of slivers. */
let STRIP_V = 'timeline';           // timeline (shipped) · segments · profile
const SET_PX = 26;                  // a repeat unit narrower than this joins a set
function groupSets(bl, px) {
  const total = sum(bl.map(x => x[1]));
  const eq = (x, y) => x && y && x[0] === y[0] && Math.abs(x[1] - y[1]) < 1e-6, out = [];
  for (let i = 0; i < bl.length;) {
    const a = bl[i], b = bl[i + 1]; let n = 0, j = i;
    while (eq(bl[j], a) && eq(bl[j + 1], b)) { n++; j += 2; }
    if (n >= 3 && (a[1] + b[1]) / total * px < SET_PX) { out.push([Math.max(a[0], b[0]), n * (a[1] + b[1]), {n}]); i = j; }
    else { out.push(a); i++; }
  }
  return out;
}
function collapseReps(bl) {   // week minis: any short or many repeats become one striped block
  const eq = (x, y) => x && y && x[0] === y[0] && Math.abs(x[1] - y[1]) < 1e-6, out = [];
  for (let i = 0; i < bl.length;) {
    const a = bl[i], b = bl[i + 1]; let n = 0, j = i;
    while (eq(bl[j], a) && eq(bl[j + 1], b)) { n++; j += 2; }
    if (n >= 4 || (n >= 2 && a[1] < 2)) { out.push([Math.max(a[0], b[0]), n * (a[1] + b[1]), 'rep']); i = j; } else { out.push(a); i++; }
  }
  return out;
}
function stripLayout(blocks, px, mini, gap) {
  const minRun = mini ? 2.5 : 8, minWalk = mini ? 1.5 : 5;
  const n = blocks.length, avail = px - gap * (n - 1);
  const mins = blocks.map(b => b[2] && b[2].n ? b[2].n * 8 + (b[2].n - 1) * 2 : b[0] === 0 ? minWalk : minRun);
  const fixed = new Array(n).fill(false);
  let w = [];
  for (let k = 0; k < 6; k++) {
    const fixedPx = mins.reduce((a, m, i) => a + (fixed[i] ? m : 0), 0);
    const freeT = blocks.reduce((a, bl, i) => a + (fixed[i] ? 0 : bl[1]), 0);
    w = blocks.map((bl, i) => fixed[i] ? mins[i] : bl[1] / freeT * (avail - fixedPx));
    let changed = false;
    w.forEach((x, i) => { if (!fixed[i] && x < mins[i]) { fixed[i] = true; changed = true; } });
    if (!changed) break;
  }
  let x = 0, t = 0;
  const L = w.map((wi, i) => { const r = {l:x, w:wi, t0:t, t1:t + blocks[i][1], e:blocks[i][0], rep:blocks[i][2]}; x += wi + gap; t += blocks[i][1]; return r; });
  const tx = time => { for (const r of L) if (time <= r.t1 + 1e-9) return r.l + (time - r.t0) / (r.t1 - r.t0) * r.w; return px; };
  return {L, tx, px};
}
function strip(sess, o = {}) {
  const s = typeof sess === 'string' ? S[sess] : sess;
  const mini = !!o.mini, V = o.v || STRIP_V;
  const px = o.px || 350;
  const src = o.blocks || s.blocks;
  const blocks = mini ? collapseReps(src) : groupSets(src, px);
  const total = sum(blocks.map(b => b[1]));
  const flat = V === 'timeline';
  const h = o.h || (flat ? 36 : 64);
  const gap = mini ? 1.5 : V === 'profile' ? 0 : 3;
  const {L, tx} = stripLayout(blocks, px, mini, gap);
  const P = v => (v / px * 100).toFixed(3) + '%';
  const ht = e => flat ? 100 : H[e] * 100;
  const rad = w => flat ? Math.min(mini ? 2.5 : 8, w / 2) : mini ? Math.min(1.5, w / 2) : V === 'profile' ? Math.min(3, w / 2) : Math.min(6, w / 2);
  const corners = w => { const r = rad(w).toFixed(1); return flat ? `${r}px` : `${r}px ${r}px ${mini ? 0 : 2}px ${mini ? 0 : 2}px`; };
  const one = (l, w, e, cls = '', set) => {
    if (set && set.n && !mini) {   // a set: one cell per rep
      const g = V === 'profile' ? 1.5 : 2;
      const cw = (w - g * (set.n - 1)) / set.n;
      return Array.from({length:set.n}, (_, i) => `<div class="blk e${e} ${cls}" style="left:${P(l + i * (cw + g))};width:${P(cw)};height:${ht(e)}%;border-radius:${corners(cw)}"></div>`).join('');
    }
    return `<div class="blk e${e} ${set === 'rep' ? 'rep ' : ''}${cls}" style="left:${P(l)};width:${P(w)};height:${ht(e)}%;border-radius:${corners(w)}"></div>`;
  };
  const draw = cls => L.map(r => one(r.l, r.w, r.e, cls, r.rep)).join('');
  let inner = '';
  if (o.at != null) {
    const xp = tx(Math.min(o.at, total)) / px * 100;
    inner = draw('ghost') + `<div style="position:absolute;inset:0;clip-path:inset(-30px ${100 - xp}% 0 0)">${draw('')}</div>`
      + `<div class="now" style="left:${xp}%"><b style="${xp > 86 ? 'left:auto;right:-1px;transform:none' : xp < 14 ? 'left:-1px;transform:none' : ''}">${o.atLabel || ''}</b></div>`;
  } else if (o.actual) {
    const act = groupSets(o.actual, px);
    let t = 0;
    const done = act.map(([e, m, set]) => { const l = tx(t), r = tx(t + m); t += m;
      return one(l, Math.max(3, r - l - (r - l > 12 ? gap : 0)), e, '', set); }).join('');
    if (flat) {   // plan and done as two bars on one time scale
      const row = (lab, body) => `<div class="pvd"><span>${lab}</span><div class="strip v-timeline" style="height:${h}px">${body}</div></div>`;
      return row('Plan', draw('')) + row('Done', done);
    }
    inner = done + L.filter(r => r.w > 10).map(r => `<div class="blk str" style="left:${P(r.l)};width:${P(r.w)};height:${H[r.e] * 100}%;border-radius:${corners(r.w)}"></div>`).join('');
  } else inner = draw(o.miss ? 'miss' : '');
  if (o.gels) inner += o.gels.map(g => `<div class="gel" style="left:${tx(g) / px * 100}%"></div>`).join('');
  let html = `<div class="strip v-${V}${o.cls ? ' ' + o.cls : ''}" style="height:${h}px${o.w ? ';width:' + o.w : ''}">${inner}${flat ? '' : '<div class="base"></div>'}</div>`;
  if (o.labels !== false && s.labels && !mini) {
    html += `<div class="strip-l">${s.labels.map(([a, b, ti, d]) => {
      const right = a / total > .6;
      return `<span class="${right ? 'r' : ''}" style="left:${(right ? tx(b) : tx(a)) / px * 100}%"><b>${ti}</b>${d}</span>`;
    }).join('')}</div>`;
  }
  if (o.axis) html += `<div class="strip-ax">${o.axis.map(x => `<span>${x}</span>`).join('')}</div>`;
  if (o.axisT) html += `<div class="strip-ax" style="position:relative;height:14px">${o.axisT.map((m, i) => { const x = tx(m) / px * 100;
    return `<span style="position:absolute;left:${x}%;transform:translateX(${i === 0 ? '0' : i === o.axisT.length - 1 ? '-100%' : '-50%'})">${m}${i === o.axisT.length - 1 ? ' min' : ''}</span>`; }).join('')}</div>`;
  return html;
}
function mini(key, axisMax, extra = {}) {
  const s = S[key];
  if (!s) return '';
  if (s.strength) return `<span class="flex xs faint" style="gap:5px">${I('dumbbell', 16)}${s.name.replace('Strength ', '')} min</span>`;
  const w = Math.max(8, s.min / axisMax * 100);
  return strip(key, {h: STRIP_V === 'timeline' ? 10 : 16, mini: true, labels: false, w: w + '%', px: 92 * w / 100, cls: 'mini', ...extra});
}

function weekRows(stage, opts = {}) {
  const w = opts.rows || W[stage].week;
  const axisMax = Math.max(...w.map(r => (S[r[1]] && S[r[1]].min) || 0));
  return `<div class="wk rows">${w.map(([d, k, st, note]) => {
    const s = S[k];
    let stt = '';
    if (st === 'done') stt = `<span class="flex" style="justify-content:flex-end;gap:4px">${I('check', 14)}${note.replace('✓ ', '')}</span>`;
    else if (st === 'today') stt = `<span class="flex w6" style="justify-content:flex-end;gap:6px;color:var(--ink)"><i class="dot"></i>Today</span>`;
    else if (st === 'moved') stt = `<span class="chip">${I('move', 12)}Moved</span>`;
    else if (st === 'missed') stt = `<span class="chip">Missed</span>`;
    else if (st === 'rest') stt = '';
    else stt = note ? note : (s && s.min ? s.min + ' min' : '');
    const name = s ? (s.short || s.name) : 'Rest';
    return `<div class="row${st === 'today' ? ' today' : ''}${st === 'rest' ? ' rest' : ''}" ${s ? `data-go="${st === 'today' ? 'session' : st === 'done' ? 'summary' : s.strength ? 'strength' : 'session'}"` : ''}>
      <div class="day">${d}</div><div class="nm">${name}</div>
      <div class="sp">${s ? mini(k, axisMax) : ''}</div>
      <div class="stt">${stt}</div></div>`;
  }).join('')}</div>`;
}

function grade(g) { return `<span class="grade" title="Evidence grade">${g}</span>`; }
function gradeWords(g) { return {A:'Strong evidence', B:'Moderate evidence', C:'Early evidence'}[g]; }

function ladderBar(stage, p) {
  return `<div class="ladder">${STAGES.map(s => `<div class="st${s.n < stage ? ' done' : ''}">${s.n === stage ? `<i style="width:${Math.max(6, p * 100)}%"></i>` : ''}</div>`).join('')}</div>
  <div class="ladder-l">${STAGES.map(s => `<span class="${s.n === stage ? 'on' : ''}">${s.name}</span>`).join('')}</div>`;
}

function weekBars(cfg, opts = {}) {
  const vals = cfg.vals, max = Math.max(...vals) * 1.15;
  const last = vals.length - 1, sel = cfg.part ? last - 1 : last;
  const fmt = v => cfg.unit === 'h' ? (Math.floor(v) + ' h ' + String(Math.round((v % 1) * 60)).padStart(2, '0')) : v + ' min';
  return `<div class="bars" style="height:${opts.h || 120}px">${vals.map((v, i) => {
    const cls = i === sel ? 'on' : (cfg.part && i === last) || cfg.miss === i ? 'part' : '';
    return `<div class="b ${cls}" style="height:${Math.max(3, v / max * 100)}%">${i === sel ? `<span class="cv"${i > vals.length - 3 ? ' style="left:auto;right:-4px;transform:none"' : ''}>${fmt(v)}</span>` : ''}${cfg.part && i === last ? `<span class="pv">${fmt(v)}</span>` : ''}</div>`;
  }).join('')}</div><div class="bars-x">${cfg.x.map((x, i) => `<span class="${i === sel ? 'on' : ''}">${x}</span>`).join('')}</div>`;
}

/* Line with a shaded "your normal" band */
function lineBand(pts, lo, hi, o = {}) {
  const w = 350, h = o.h || 130, pad = 8;
  const all = [...pts, ...lo, ...hi];
  const mn = Math.min(...all), mx = Math.max(...all);
  const X = i => pad + i / (pts.length - 1) * (w - pad * 2 - 30);
  const Y = v => o.invert ? pad + (v - mn) / (mx - mn) * (h - pad * 2) : h - pad - (v - mn) / (mx - mn) * (h - pad * 2);
  const band = lo.map((v, i) => `${X(i)},${Y(v)}`).join(' ') + ' ' + hi.map((v, i) => `${X(hi.length - 1 - i)},${Y(hi[hi.length - 1 - i])}`).join(' ');
  const line = pts.map((v, i) => `${i ? 'L' : 'M'}${X(i).toFixed(1)},${Y(v).toFixed(1)}`).join(' ');
  const lx = X(pts.length - 1), ly = Y(pts[pts.length - 1]);
  const grid = [0.25, 0.5, 0.75].map(f => `<line x1="0" x2="${w}" y1="${pad + f * (h - pad * 2)}" y2="${pad + f * (h - pad * 2)}" stroke="var(--rule)" stroke-width="1"/>`).join('');
  return `<svg width="100%" viewBox="0 0 ${w} ${h}" style="display:block;overflow:visible">${grid}
    <polygon points="${band}" fill="var(--e1)" opacity=".38"/>
    <path d="${line}" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    ${pts.map((v, i) => i < pts.length - 1 ? `<circle cx="${X(i)}" cy="${Y(v)}" r="2.2" fill="var(--bg)" stroke="var(--ink)" stroke-width="1.4"/>` : '').join('')}
    <circle cx="${lx}" cy="${ly}" r="5" fill="var(--acc)" stroke="var(--bg)" stroke-width="2.5"/>
    ${o.tag ? `<g transform="translate(${lx + 8},${ly - 12})"><rect x="0" y="0" width="${o.tag.length * 6.6 + 12}" height="22" rx="6" fill="var(--ink)"/><text x="6" y="15" font-size="11.5" font-weight="600" fill="var(--bg)" font-family="Hanken Grotesk">${o.tag}</text></g>` : ''}
  </svg>
  ${o.x ? `<div class="strip-ax">${o.x.map(t => `<span>${t}</span>`).join('')}</div>` : ''}`;
}

/* Weather-style range bar */
function rangeBar(lo, hi, likely, min, max, mark) {
  const P = v => (v - min) / (max - min) * 100;
  return `<div class="rng"><div class="tr"></div><div class="band" style="left:${P(lo)}%;width:${P(hi) - P(lo)}%"></div>
    ${mark != null ? `<div class="mk" style="left:${P(mark)}%"></div>` : ''}<div class="pt" style="left:${P(likely)}%"></div></div>`;
}

/* Route map: hand-drawn park loop with privacy zones at start and end */
function routeMap(o = {}) {
  return `<div class="map"><svg viewBox="0 0 350 190" preserveAspectRatio="xMidYMid slice">
    <defs><pattern id="hz" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="2" height="6" fill="var(--rule2)"/></pattern></defs>
    <path d="M-10 150 C60 140 90 168 170 160 S300 128 360 140 L360 200 L-10 200z" fill="var(--well2)" opacity=".8"/>
    <path d="M120 -10 C130 40 150 70 210 80 S320 70 360 40" fill="none" stroke="var(--rule2)" stroke-width="9" stroke-linecap="round" opacity=".7"/>
    <path d="M20 30 L340 18 M30 110 L330 96 M90 0 L70 190 M260 0 L280 190" stroke="var(--rule)" stroke-width="5"/>
    <ellipse cx="190" cy="104" rx="118" ry="58" fill="var(--bg)" opacity=".55"/>
    <path d="M84 132 C70 104 86 64 132 54 C176 44 240 46 282 66 C316 82 312 128 276 142 C236 158 168 160 126 150 C112 147 98 144 92 138"
      fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    ${o.strides ? `<path d="M212 151 C190 155 166 156 142 152" fill="none" stroke="var(--acc)" stroke-width="5" stroke-linecap="round" opacity=".9"/>` : ''}
    ${[[110,58,'1'],[175,47,'2'],[238,51,'3'],[298,86,'4'],[266,146,'5'],[180,156,'6']].map(([x,y,t]) => `<g transform="translate(${x},${y})"><circle r="8" fill="var(--bg)" stroke="var(--ink)" stroke-width="1.4"/><text y="3.6" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--ink)" font-family="Hanken Grotesk">${t}</text></g>`).join('')}
    <circle cx="74" cy="146" r="26" fill="url(#hz)" stroke="var(--rule2)" stroke-dasharray="3 3"/>
    <text x="74" y="185" text-anchor="middle" font-size="10" fill="var(--ink2)" font-family="Hanken Grotesk">start/end hidden</text>
  </svg></div>`;
}

function topnav(left = 'back', title = '', right = '') {
  const l = left === 'back' ? `<button class="ib" data-go="back" aria-label="Back">${I('chevL', 24)}</button>`
    : left === 'close' ? `<button class="ib" data-go="back" aria-label="Close">${I('x', 22)}</button>` : `<span style="width:40px"></span>`;
  return `<div class="topnav">${l}<span class="h3" style="font-size:15px">${title}</span>${right || '<span style="width:40px"></span>'}</div>`;
}

function evidence(g, conf) {
  return `<span class="gradechip">${grade(g)}${gradeWords(g)}${conf ? ' · ' + conf : ''}</span>`;
}
