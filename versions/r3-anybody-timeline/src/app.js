/* ───────── App: prototype, board, system ───────── */
const ORDER = ['o-welcome','o-level','o-import','o-week','o-consent','o-ready',
  'today','session','move','lapse',
  'live','live-low','live-spike','feel','feel-niggle','summary','niggle','graduation',
  'plan','changes','strength',
  'runs',
  'progress','metric','explain','predictor','durability','report','tests',
  'race','ask','ask-pain','you','devices'];
const GROUPS = ['Onboarding','Today','Run','Plan','Runs','Progress','Race','Ask','You'];

const state = {view:'proto', screen:'today', stage:3, theme:'light', hist:[], zoom:.72};
(function readHash() {
  const [v, s, st, th] = location.hash.slice(1).split('/');
  if (['proto','board','system'].includes(v)) state.view = v;
  if (SCREENS[s]) state.screen = s;
  if (+st >= 1 && +st <= 5) state.stage = +st;
  if (th === 'dark' || th === 'light') state.theme = th;
})();
const writeHash = () => history.replaceState(null, '', `#${state.view}/${state.screen}/${state.stage}/${state.theme}`);

function effStage(m, stage) { return m.stage || (m.minStage ? Math.max(m.minStage, stage) : stage); }
function renderScreen(id, stage, theme, extraCls = '') {
  const m = SCREENS[id], st = effStage(m, stage);
  const out = m.fn({stage:st, theme});
  let b = out;
  if (m.base) { const bm = SCREENS[m.base]; b = bm.fn({stage:effStage(bm, st), theme}); }
  const tab = b.tab;
  const cls = ['scr', tab ? '' : 'notab', b.foot ? 'hasfoot' : '', extraCls].filter(Boolean).join(' ');
  return `<div class="${cls}" data-theme="${theme}" data-id="${id}">${b.glow ? '<div class="glow"></div>' : ''}${statusBar(out.time || b.time || '9:41')}
    <div class="body">${b.body || ''}</div>${b.foot ? `<div class="foot">${b.foot}</div>` : ''}${tab ? tabbar(tab) : '<div class="home-ind"></div>'}
    ${out.sheet ? `<div class="scrim" data-go="back"></div><div class="sheet"><div class="grab"></div>${out.sheet}</div><div class="home-ind" style="z-index:30"></div>` : ''}</div>`;
}

/* ── Page chrome ── */
function chrome() {
  const seg = (items, cur, attr) => `<div class="pg-seg">${items.map(([v, l]) => `<button class="${String(v) === String(cur) ? 'on' : ''}" ${attr}="${v}">${l}</button>`).join('')}</div>`;
  return `<header class="pg-top">
    <div class="pg-brand">${logo(28)}<div><b>Steady</b><span>Running app · full-flow prototype</span></div></div>
    ${seg([['proto','Prototype'],['board','All screens'],['system','System']], state.view, 'data-view')}
    <div class="pg-ctrls"><span class="pg-lab">Runner at stage</span>${seg([1,2,3,4,5].map(n => [n, n + ' ' + STAGES[n - 1].name]), state.stage, 'data-stage')}
    ${seg([['light','Light'],['dark','Dark']], state.theme, 'data-theme-set')}</div></header>`;
}

function protoView() {
  const m = SCREENS[state.screen];
  const st = effStage(m, state.stage);
  const nav = GROUPS.map(g => {
    const ids = ORDER.filter(id => SCREENS[id].group === g);
    if (!ids.length) return '';
    return `<div class="pg-navg"><div class="pg-navh">${g}</div>${ids.map(id => `<button class="${id === state.screen ? 'on' : ''}" data-open="${id}">${SCREENS[id].title}${SCREENS[id].stage ? `<i>S${SCREENS[id].stage}</i>` : SCREENS[id].minStage && SCREENS[id].minStage > state.stage ? `<i>S${SCREENS[id].minStage}</i>` : ''}</button>`).join('')}</div>`;
  }).join('');
  return `<div class="pg-proto">
    <aside class="pg-nav">${nav}</aside>
    <div class="pg-stage"><div class="pg-phone">${renderScreen(state.screen, state.stage, state.theme)}</div>
      <div class="pg-hint">Tap anything with an action. Use the stage switch to watch the app grow with the runner.</div></div>
    <aside class="pg-notes">
      <div class="pg-eyebrow">${m.group}${st !== state.stage ? ` · shown at stage ${st}` : ''}</div>
      <h2>${m.title}</h2>
      <p>${m.note || ''}</p>
      <div class="pg-sep"></div>
      <div class="pg-eyebrow">Stage ${state.stage} · ${STAGES[state.stage - 1].name}</div>
      <p class="pg-small">${STAGES[state.stage - 1].who}. Goal: ${STAGES[state.stage - 1].goal.toLowerCase()}.</p>
      <div class="pg-sep"></div>
      <div class="pg-eyebrow">Jump to</div>
      <div class="pg-jumps">${['today','live','summary','plan','progress','race'].map(id => `<button data-open="${id}">${SCREENS[id].title}</button>`).join('')}</div>
    </aside></div>`;
}

function frame(id, stage, label) {
  const m = SCREENS[id], st = effStage(m, stage);
  return `<figure class="pg-fr" data-open="${id}" data-st="${st}"><figcaption><b>${label || m.title}</b><span>Stage ${st}</span></figcaption>
    <div class="pg-frs" style="zoom:${state.zoom}">${renderScreen(id, stage, state.theme)}</div></figure>`;
}
function boardView() {
  const ladder = `<section class="pg-bgroup"><h3>Today across the ladder <span>Same screen, five runners: depth grows with the stage</span></h3><div class="pg-row">${[1,2,3,4,5].map(n => frame('today', n, 'Stage ' + n + ' · ' + STAGES[n - 1].name)).join('')}</div></section>`;
  const live = `<section class="pg-bgroup"><h3>Live run across the ladder <span>Run/walk countdown at Stage 1; target pace and power later</span></h3><div class="pg-row">${[1,2,4,5].map(n => frame('live', n, 'Stage ' + n + ' · ' + STAGES[n - 1].name)).join('')}</div></section>`;
  const groups = GROUPS.map(g => {
    const ids = ORDER.filter(id => SCREENS[id].group === g);
    return `<section class="pg-bgroup"><h3>${g} <span>${ids.length} screen${ids.length > 1 ? 's' : ''}</span></h3><div class="pg-row">${ids.map(id => frame(id, state.stage)).join('')}</div></section>`;
  }).join('');
  return `<div class="pg-board"><div class="pg-btop"><div><h1>All screens</h1><p>${ORDER.length} screens at stage ${state.stage}, ${state.theme}. Click any screen to open it in the prototype.</p></div>
    <div class="pg-seg">${[[.5,'50%'],[.72,'72%'],[1,'100%']].map(([z, l]) => `<button class="${z === state.zoom ? 'on' : ''}" data-zoom="${z}">${l}</button>`).join('')}</div></div>
    ${ladder}${groups}${live}</div>`;
}

function systemView() {
  const sw = (v, n, note) => `<div class="pg-sw"><i style="background:var(${v})"></i><b>${n}</b><span>${note}</span></div>`;
  const box = (inner, pad = 24) => `<div class="scr sysbox" data-theme="${state.theme}" style="padding:${pad}px">${inner}</div>`;
  return `<div class="pg-sys">
    <section><div class="pg-eyebrow">The idea</div>
      <h1>Every run is drawn the same way, everywhere.</h1>
      <p class="pg-lead">A segmented bar to scale: length is time, and the colour darkens as the effort rises. Today shows it, the live run fills it, the summary lays what you did over what was planned, and the week is a timetable of them. Plain words carry the meaning (“full sentences”), numbers come in as the runner climbs the ladder, and every number can explain itself.</p>
      <div class="pg-facts">
        <div><b>Stance</b>Ink and bone: warm paper, near-black ink, hairline rules instead of cards. One hot track-red, in three shades, for effort only.</div>
        <div><b>Signature move</b>The session timeline. On Today it sits under a 92px duration, with one black Start bar beneath. Short repeats join into one set, cut once per rep.</div>
        <div><b>Type</b>Anybody, heavy italic at 68% width, for numbers and titles: a race clock that leans forward. Hanken Grotesk 400 / 500 / 600 for everything you read.</div>
        <div><b>References</b>010 (numbers as the hero, faded units), 003 (one accent spent on few things), 001 (value + change + context rows).</div>
      </div></section>
    <section><div class="pg-eyebrow">The strip</div>${box(`
      <div class="eyebrow">Plan · today, session detail, week</div><div class="gap16"></div>${strip('e40s')}
      <div class="gap24"></div><div class="eyebrow">Live · fills as you run, with the now-line</div><div class="gap32"></div>${strip('e40s', {at:17.7, atLabel:'17:42', labels:false})}
      <div class="gap24"></div><div class="eyebrow">Planned vs done · two bars, one time scale</div><div class="gap12"></div>${strip('e40s', {actual:SUMM[3].actual, labels:false})}
      <div class="gap24"></div><div class="eyebrow">Effort · darker means harder, and it still reads in greyscale</div><div class="gap12"></div>
      <div class="flex" style="gap:22px;align-items:flex-start">${EFFORT.map((e, i) => `<div><div style="width:64px;height:20px;border-radius:8px;background:var(--e${i})"></div><div class="sm w6" style="margin-top:8px">${e.k}</div><div class="xs mute">${e.talk}</div></div>`).join('')}</div>`)}</section>
    <section><div class="pg-eyebrow">Colour</div>${box(`<div class="pg-sws">
      ${sw('--bg','Bone','Page')}${sw('--raised','Paper','Sheets, fields')}${sw('--well','Well','Notes, tools, today row')}${sw('--rule','Rule','Hairlines')}
      ${sw('--ink','Ink','Text, Start, selection')}${sw('--ink2','Ink 2','Secondary text')}${sw('--ink3','Ink 3','Labels, axes')}
      ${sw('--e1','Easy','Full sentences')}${sw('--e2','Steady','Short phrases')}${sw('--e3','Hard · accent','A few words, now-dot, the one highlight')}${sw('--e0','Walk','Walk, rest, recovery')}
      ${sw('--good','Good','Improved: word + arrow + tint')}${sw('--warn','Caution','Spike guard, niggles, low confidence')}</div>
      <div class="xs mute" style="margin-top:16px">No semantic red: the accent is a red family, so "bad" is said with amber and words. Buttons are ink, never the accent.</div>`)}</section>
    <section><div class="pg-eyebrow">Type · Anybody + Hanken Grotesk</div>${box(`
      <div class="flex" style="align-items:baseline;gap:8px"><span class="disp d2">40</span><span class="unit" style="font-size:24px">min</span><span class="xs mute" style="margin-left:16px">Display · Anybody 800 italic · 92 / 124 px · width 68%</span></div>
      <div class="gap16"></div><div class="page-t">Progress</div><div class="xs mute">Page title · Anybody 800 italic · 34 px · width 82%</div>
      <div class="gap16"></div><div class="h1">Easy run + strides</div><div class="xs mute">Title · Anybody 800 italic · 27 px · width 82%</div>
      <div class="gap16"></div><div class="h2" style="font-weight:500">Same effort, <mark>12 s/km faster</mark> than in August.</div><div class="xs mute">Insight · Hanken Grotesk 20 px · 500, number marked</div>
      <div class="gap16"></div><div>Tempo moved to Friday. You rated Tuesday’s hills 8/10, harder than planned.</div><div class="xs mute">Body · Hanken Grotesk 15 px · 400 · tabular figures</div>
      <div class="gap16"></div><div class="eyebrow">This week</div><div class="xs mute">Label · Hanken Grotesk 11.5 px · 600 · +0.085em</div>`)}</section>
    <section><div class="pg-eyebrow">Components</div>${box(`
      <button class="btn split"><span class="flex" style="gap:10px">${I('play', 20)}Start run</span><span class="sub">Cues · watch ready</span></button><div class="gap8"></div>
      <div class="tools"><button>${I('move', 16)}Move</button><button>${I('swap', 16)}Swap</button><button>${I('easier', 16)}Easier</button><button>${I('watch', 16)}Watch</button></div>
      <div class="gap16"></div><div class="flex" style="flex-wrap:wrap;gap:8px"><span class="chip good">${I('arrowUp', 13)}Improved</span><span class="chip warn">${I('alert', 13)}Spike guard</span><span class="chip">${I('move', 12)}Moved</span><span class="chip">Missed</span><span class="chip line">Stage 3</span>${evidence('B', 'fairly sure')}</div>
      <div class="gap16"></div><div class="note"><span class="ni">${I('info', 18)}</span><div class="nt">Every adaptation says what changed and why, with an Undo.</div></div>
      <div class="gap16"></div>${rangeBar(7020, 7380, 7140, 6900, 7500, 7200)}<div class="xs mute" style="margin-top:6px">Range bar: likely dot, honest band, goal line</div>
      <div class="gap16"></div><div class="rpe">${Array.from({length:10}, (_, i) => `<button class="${i === 3 ? 'on' : ''}">${i + 1}</button>`).join('')}</div>`, 20)}</section>
    <section><div class="pg-eyebrow">Compare score · against 010, 003, 001</div>${SCORES}</section>
  </div>`;
}
const SCORES_DEFAULT = '';

function render() {
  const root = document.getElementById('app');
  if (window.SOLO) {
    const S0 = window.SOLO;
    root.innerHTML = `<div class="solo">${renderScreen(S0.screen, S0.stage, S0.theme, 'solo')}</div>`;
    const fit = () => { if (!S0.full) return; const scr = root.querySelector('.scr'), body = scr.querySelector('.body');
      scr.style.height = (50 + body.scrollHeight + (scr.classList.contains('notab') ? 0 : 84)) + 'px'; };
    fit(); document.fonts && document.fonts.ready.then(fit);
    document.body.style.background = S0.theme === 'dark' ? '#121315' : '#F4F2EE';
    return;
  }
  document.documentElement.dataset.pg = state.theme;
  root.innerHTML = chrome() + (state.view === 'proto' ? protoView() : state.view === 'board' ? boardView() : systemView());
  fitPhone();
  writeHash();
}
function fitPhone() {
  const ph = document.querySelector('.pg-phone');
  if (ph) ph.style.zoom = Math.min(1, Math.max(.6, (window.innerHeight - 130) / 844)).toFixed(3);
}
window.addEventListener('resize', fitPhone);

function go(id) {
  if (id === 'back') { state.screen = state.hist.pop() || (SCREENS[state.screen].base || 'today'); }
  else if (SCREENS[id]) { state.hist.push(state.screen); state.screen = id; }
  render();
  const b = document.querySelector('.pg-phone .body'); if (b) b.scrollTop = 0;
}

document.addEventListener('click', e => {
  const t = e.target.closest('[data-view],[data-stage],[data-theme-set],[data-zoom],[data-open],[data-go]');
  if (!t || window.SOLO) return;
  if (t.dataset.view) { state.view = t.dataset.view; render(); window.scrollTo(0, 0); return; }
  if (t.dataset.stage) { state.stage = +t.dataset.stage; render(); return; }
  if (t.dataset.themeSet) { state.theme = t.dataset.themeSet; render(); return; }
  if (t.dataset.zoom) { state.zoom = +t.dataset.zoom; render(); return; }
  const fr = e.target.closest('.pg-fr');
  if (fr) { state.view = 'proto'; state.hist = []; state.screen = fr.dataset.open; if (+fr.dataset.st !== state.stage && !SCREENS[fr.dataset.open].stage && !SCREENS[fr.dataset.open].minStage) state.stage = +fr.dataset.st; render(); window.scrollTo(0, 0); return; }
  if (t.dataset.open) { state.hist = []; state.screen = t.dataset.open; render(); return; }
  if (t.dataset.go && t.closest('.pg-phone')) go(t.dataset.go);
});
setInterval(() => {
  if (state.view !== 'proto') return;
  document.querySelectorAll('.pg-phone [data-clock]').forEach(el => {
    let t = +el.dataset.t + (el.dataset.clock === 'up' ? 1 : -1);
    if (t < 0) t = 90;
    el.dataset.t = t;
    el.textContent = Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0');
  });
}, 1000);
