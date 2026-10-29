/* ───────── App: prototype, board, system ───────── */
const ORDER = ['o-welcome','o-level','o-import','o-week','o-consent','o-ready',
  'today','session','move','lapse',
  'live-ready','live','live-low','live-spike','cues','feel','feel-niggle','summary','share','niggle','graduation',
  'plan','build','changes','strength',
  'runs',
  'progress','metric','explain','predictor','durability','report','tests',
  'race','ask','ask-pain','you','devices'];
const GROUPS = ['Onboarding','Today','Run','Plan','Runs','Progress','Race','Ask','You'];

const state = {view:'proto', screen:'today', stage:3, theme:'dark', hist:[], zoom:.72};
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
  return `<div class="${cls}" data-theme="${theme}" data-id="${id}">${statusBar(out.time || b.time || '9:41')}
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
      <p class="pg-lead">A segmented bar to scale: length is time, grey is easy and amber is hard. It sits in the one panel on Today next to the amber Start square, fills as you run, and lies under what you did in the summary. Around it, the week is a big fraction and seven squares, history is blocks you can count, and every list is dated rows in condensed capitals.</p>
      <div class="pg-facts">
        <div><b>Stance</b>Night track: near-black, bone ink, one amber. Squares and rules instead of cards, and one panel per screen for the thing you act on.</div>
        <div><b>Signature move</b>The week as a fraction (2/5) beside seven squares: done filled, rest dark, today ringed in amber. Then today’s run in the panel with its Start square.</div>
        <div><b>Type</b>Barlow Condensed 700 in capitals for numbers, titles and labels: you glance at it mid-run. Hanken Grotesk 400 / 500 / 600 for anything you read.</div>
        <div><b>References</b>Your timer-app screens (fraction hero, panel + square play, typed line, struck-through done rows, stacked blocks with a goal line), plus 010 for numbers as the hero.</div>
      </div></section>
    <section><div class="pg-eyebrow">The strip</div>${box(`
      <div class="eyebrow">Plan · today, session detail, live</div><div class="gap16"></div>${strip('e40s', {px:552})}
      <div class="gap24"></div><div class="eyebrow">Live · fills as you run, with the now-line</div><div class="gap32"></div>${strip('e40s', {at:17.7, atLabel:'17:42', labels:false, px:552})}
      <div class="gap24"></div><div class="eyebrow">Planned vs done · two bars, one time scale</div><div class="gap12"></div>${strip('e40s', {actual:SUMM[3].actual, labels:false, px:500})}
      <div class="gap24"></div><div class="eyebrow">Effort · grey is easy, amber is hard</div><div class="gap12"></div>
      <div class="flex" style="gap:22px;align-items:flex-start">${EFFORT.map((e, i) => `<div><div style="width:64px;height:22px;background:var(--e${i})"></div><div class="cap" style="font-size:15px;margin-top:9px">${e.k}</div><div class="xs mute" style="margin-top:3px">${e.talk}</div></div>`).join('')}</div>`)}</section>
    <section><div class="pg-eyebrow">Colour</div>${box(`<div class="pg-sws">
      ${sw('--bg','Night','Page')}${sw('--panel','Panel','The one panel, sheets')}${sw('--well2','Well','Rest squares, chips, wells')}${sw('--rule','Rule','Hairlines')}
      ${sw('--ink','Bone','Text, done, selection, go-on buttons')}${sw('--ink2','Bone 2','Secondary text')}${sw('--ink3','Bone 3','Labels, axes, struck-through')}
      ${sw('--e0','Walk','Walk, very easy')}${sw('--e1','Easy','Full sentences')}${sw('--e2','Steady','Short phrases')}${sw('--e3','Amber','Hard effort, Start, this week, progress')}
      ${sw('--good','Good','Improved: word + arrow + tint')}${sw('--warn','Caution','Spike guard, niggles, low confidence')}</div>
      <div class="xs mute" style="margin-top:16px">Amber is the one accent. Caution is coral, so a warning never reads as hard effort. Buttons that go on are bone; only starting a run is amber.</div>`)}</section>
    <section><div class="pg-eyebrow">Type · Barlow Condensed + Hanken Grotesk</div>${box(`
      <div class="flex" style="align-items:flex-end;gap:14px"><span class="disp d2">2<span class="dim">/5</span></span><span class="xs mute" style="margin-bottom:6px">Display · Barlow Condensed 700 · 104–148 px · tabular figures</span></div>
      <div class="gap16"></div><div class="page-t">Progress</div><div class="xs mute">Page title · 46 px · capitals</div>
      <div class="gap16"></div><div class="h1">Easy run + strides</div><div class="xs mute">Panel title · 31 px · capitals</div>
      <div class="gap16"></div><div class="ttl">Tempo 3 × 8</div><div class="xs mute">List title · 21–24 px · capitals</div>
      <div class="gap16"></div><div class="h2" style="font-weight:500">Same effort, <mark>12 s/km faster</mark> than in August.</div><div class="xs mute">Insight · Hanken Grotesk 20 px · 500, the number in amber</div>
      <div class="gap16"></div><div>Tempo moved to Friday. You rated Tuesday’s hills 8/10, harder than planned.</div><div class="xs mute">Body · Hanken Grotesk 15 px · 400</div>
      <div class="gap16"></div><div class="eyebrow">This week</div><div class="xs mute">Label · Hanken Grotesk 12 px · 600 · +0.16em</div>`)}</section>
    <section><div class="pg-eyebrow">Components</div>${box(`
      <div class="flex" style="gap:20px;align-items:flex-end"><div class="disp" style="font-size:96px">2<span class="dim">/5</span></div><div class="grow"><div class="h3" style="margin-bottom:11px">This week · 3 to go</div>${weekSquares(3)}</div></div>
      <div class="gap20"></div><div class="duo"><button class="btn go">${I('play', 20)}Start run</button><button class="btn">Continue</button></div>
      <div class="gap16"></div><div class="links"><button class="ul">Move</button><button class="ul">Swap</button><button class="ul">Make it easier</button><button class="ulc">Export</button></div>
      <div class="gap8"></div><button class="typeline"><span>Ask — can I run with a cold?</span>${I('plus', 22)}</button>
      <div class="gap16"></div><div class="flex" style="flex-wrap:wrap;gap:8px"><span class="chip good">${I('arrowUp', 13)}Improved</span><span class="chip warn">${I('alert', 13)}Spike guard</span><span class="chip cap">Moved</span><span class="chip">Missed</span><span class="chip line">Stage 3</span>${evidence('B', 'fairly sure')}<span class="toggle on"></span><span class="toggle"></span></div>
      <div class="gap16"></div><div class="note"><div class="nt">Every adaptation says what changed and why, with an Undo.</div></div>
      <div class="gap16"></div>${stackChart([4,5,4,5,5,4,5,2], 5, {h:110, x:WK8})}
      <div class="gap16"></div><div class="rpe">${Array.from({length:10}, (_, i) => `<button class="${i === 3 ? 'on' : ''}">${i + 1}</button>`).join('')}</div>`, 20)}</section>
    <section><div class="pg-eyebrow">Compare score · against your reference, 010 and 003</div>${SCORES}</section>
  </div>`;
}
const SCORES_DEFAULT = '';

function render() {
  const root = document.getElementById('app');
  if (window.SOLO) {
    const S0 = window.SOLO;
    if (S0.tpl) SHARE_TPL = S0.tpl;
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
    if (el.closest('.scr.paused')) return;
    let t = +el.dataset.t + (el.dataset.clock === 'up' ? 1 : -1);
    if (t < 0 && el.dataset.then) { go(el.dataset.then); return; }
    if (t < 0) t = +el.dataset.len || 90;
    el.dataset.t = t;
    el.textContent = Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0');
    const bar = el.dataset.len && el.closest('.scr').querySelector('.lv-prog i');
    if (bar) bar.style.width = ((el.dataset.len - t) / el.dataset.len * 100).toFixed(1) + '%';
  });
}, 1000);

document.addEventListener('input', e => {
  const inp = e.target.closest('.pg-phone [data-build]');
  if (!inp) return;
  BUILD_TXT[state.stage] = inp.value;
  inp.closest('.scr').querySelector('.bd-parsed').innerHTML = buildParsed(state.stage, inp.value);
});

/* Audio in the prototype: three beeps and the device's own voice, so the cues can be heard, not just read. */
function beep3() {
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    [0, 1, 2].forEach(i => { const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime + i * .42;
      o.frequency.value = i === 2 ? 1320 : 880; o.connect(g); g.connect(ac.destination);
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.22, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + .17);
      o.start(t); o.stop(t + .2); });
  } catch (e) {}
  return 1350;
}
function playCues(seq) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  let i = 0;
  const next = () => {
    if (i >= seq.length) return;
    const s = seq[i++];
    if (s === '***') { setTimeout(next, beep3()); return; }
    const u = new SpeechSynthesisUtterance(s); u.lang = 'en-GB'; u.rate = 1.02;
    u.onend = () => setTimeout(next, 300); speechSynthesis.speak(u);
  };
  next();
}
document.addEventListener('click', e => {
  if (window.SOLO || !e.target.closest('.pg-phone')) return;
  const cue = e.target.closest('[data-cue]');
  if (cue) { e.stopPropagation(); playCues(cue.dataset.cue.split('|')); return; }
  const tp = e.target.closest('[data-tpl]');
  if (tp) { SHARE_TPL = tp.dataset.tpl; const scr = tp.closest('.scr');
    scr.querySelectorAll('[data-tpl]').forEach(b => b.classList.toggle('on', b === tp));
    scr.querySelectorAll('[data-slot]').forEach(b => b.classList.toggle('on', b.dataset.slot === SHARE_TPL)); return; }
  const pre = e.target.closest('[data-preset]');
  if (pre) { const inp = pre.closest('.scr').querySelector('[data-build]');
    if (inp) { inp.value = pre.dataset.preset; inp.dispatchEvent(new Event('input', {bubbles:true})); inp.closest('.body').scrollTo({top:0, behavior:'smooth'}); } return; }
  const lv = e.target.closest('.lv');
  if (lv && !e.target.closest('[data-go],button')) lv.closest('.scr').classList.toggle('paused');
}, true);
