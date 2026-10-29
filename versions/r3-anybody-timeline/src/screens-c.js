/* ───────── Screens: progress and insight, race, you ───────── */
def('progress', {group:'Progress', title:'Progress', tab:'progress', note:'The ladder and its graduation checks first, then weekly time as a familiar bar chart, then the numbers this stage has unlocked, each with its evidence grade. Stage 1 sees four numbers; Stage 5 sees power and the lab.'}, (c) => {
  const w = W[c.stage], st = stg(c.stage);
  const ms = METRICS.filter(m => m.s <= c.stage && (!m.until || c.stage < m.until));
  const nxt = c.stage < 4 ? 'To reach Stage ' + (c.stage + 1) + ' · ' + stg(c.stage + 1).name : c.stage === 4 ? 'Perform has no ceiling' : 'Top of the ladder';
  return {body:`
    <div class="page-t">Progress</div>
    <div class="sm mute">Stage ${c.stage} · ${st.name} · ${{1:'3 weeks here', 2:'5 weeks here', 3:'9 weeks here', 4:'31 weeks here', 5:'since 2025'}[c.stage]}</div>
    <div class="gap20"></div>
    ${ladderBar(c.stage, w.ladder.p)}
    <div class="sec" style="margin-top:22px">
      <div class="hd"><span class="eyebrow">${nxt}</span><span class="r">${w.ladder.checks.filter(x => x[2] >= 1).length} of ${w.ladder.checks.length}</span></div>
      <div class="rows">${w.ladder.checks.map(([t, s, p]) => `<div class="row" style="align-items:flex-start;gap:12px">
        <span style="width:22px;height:22px;border-radius:50%;flex:none;display:flex;align-items:center;justify-content:center;margin-top:1px;${p >= 1 ? 'background:var(--ink);color:var(--bg)' : 'border:1.5px solid var(--rule2)'}">${p >= 1 ? I('check', 14) : ''}</span>
        <div class="grow"><div class="t">${t}</div><div class="s">${s}</div>${p < 1 ? `<div class="bar" style="margin-top:9px"><i style="width:${Math.max(3, p * 100)}%"></i></div>` : ''}</div></div>`).join('')}</div>
      ${c.stage === 4 ? `<div class="gap8"></div><button class="link">Move up to Compete${I('chevR', 14)}</button>` : ''}
    </div>
    <div class="sec">
      <div class="hd"><span class="eyebrow">${w.weeks.label} · weekly</span><span class="r flex" style="gap:5px">${I('repeat', 14)}${w.streak}</span></div>
      <div class="gap20"></div>
      ${weekBars(w.weeks)}
      ${w.weeks.miss != null ? `<div class="xs faint" style="margin-top:10px">Hatched: a week off. Streaks count weeks, and a missed week pauses them.</div>` : ''}
    </div>
    <div class="sec">
      <div class="hd"><span class="eyebrow">Your numbers</span><span class="r">Tap to explain</span></div>
      <div class="rows">${ms.map(m => `<div class="row" data-go="${m.go || 'explain'}" style="align-items:flex-start;padding:13px 0">
        <div class="grow"><div class="t">${m.name}${m.lab ? ' <span class="chip line" style="height:18px;font-size:10.5px">Lab</span>' : ''}</div><div class="s">${m.note}</div></div>
        <div class="v" style="font-size:17px">${m.v}${m.u ? ` <span class="xs faint w5">${m.u}</span>` : ''}${m.d ? `<small class="${m.warn ? 'warnc' : 'goodc'}">${m.d}</small>` : m.warn ? '<small class="warnc">flagged</small>' : ''}</div>
        <span style="margin-top:2px">${grade(m.g)}</span></div>`).join('')}</div>
      <div class="xs faint flex" style="gap:6px;margin-top:10px">${grade('A')}<span>Strong</span>${grade('B')}<span>Moderate</span>${grade('C')}<span>Early: shown, never drives the plan alone</span></div>
    </div>
    <div class="sec">
      <div class="rows">
        <div class="row" data-go="report"><span class="ic">${I('file', 18)}</span><div class="grow"><div class="t">October report</div><div class="s">${c.stage === 1 ? 'Your first month, in plain English' : 'Steadier, not just more'}</div></div>${I('chevR', 16, 'class="chev"')}</div>
        ${c.stage >= 3 ? `<div class="row" data-go="predictor"><span class="ic">${I('target', 18)}</span><div class="grow"><div class="t">Race predictions</div><div class="s">Ranges, not one number</div></div>${I('chevR', 16, 'class="chev"')}</div>` : ''}
        ${c.stage >= 4 ? `<div class="row" data-go="race"><span class="ic">${I('lap', 18)}</span><div class="grow"><div class="t">Race kit · Valencia</div><div class="s">Pace plan, fuelling, taper</div></div>${I('chevR', 16, 'class="chev"')}</div>` : `<div class="lock">${I('lock', 18)}<span class="grow">Race kit, durability and HRV unlock at Stage 4 · Perform</span></div>`}
        <div class="row" data-go="tests"><span class="ic">${I('flask', 18)}</span><div class="grow"><div class="t">Self-tests</div><div class="s">Swap estimates for your own measurements</div></div>${I('chevR', 16, 'class="chev"')}</div>
      </div>
    </div>`, tab:'progress'};
});

def('metric', {group:'Progress', title:'Critical speed', notab:true, minStage:3, note:'Estimated from ordinary runs, re-checked weekly, shown with its range and confidence in words. Powers every pace zone and prediction. Line with a shaded "likely range" band: a familiar chart.'}, (c) => {
  const pts = [311,310,310,309,308,308,307,306,306,305,305,305];
  return {body:`
    ${topnav('back', '', `<button class="pillbtn" data-go="explain">${I('info', 16)}Explain</button>`)}
    <div class="eyebrow">Critical speed · re-checked Mon 26 Oct</div>
    <div class="gap12"></div>
    <div class="flex" style="align-items:baseline;gap:8px"><span class="disp d2">5:05</span><span class="unit" style="font-size:24px">/km</span><span class="sm faint" style="margin-left:auto">11.8 km/h</span></div>
    <div class="gap12"></div>
    <div class="sm mute">Likely between <b class="w6" style="color:var(--ink)">4:59 and 5:11</b>. Fairly sure: 14 good efforts in 6 weeks.</div>
    <div class="gap8"></div>${evidence('B')}
    <div class="gap24"></div>
    ${lineBand(pts, pts.map(v => v + 7), pts.map(v => v - 6), {invert:true, tag:'5:05', x:['Aug','Sep','Oct','Now']})}
    <div class="gap16"></div>
    <div class="h3" style="font-weight:500">6 s/km faster since August, from your everyday runs. No test needed.</div>
    <div class="sec" style="margin-top:20px">
      <div class="hd"><span class="eyebrow">It sets your paces</span></div>
      <div class="rows">${[[1,'Easy','Full sentences','6:05–6:35'],[2,'Steady','Short phrases','5:25–5:45'],[2,'Tempo','Short phrases','5:05–5:15'],[3,'Hard','A few words','under 4:50']].map(([e, n, t, p]) =>
        `<div class="row" style="min-height:48px"><span style="width:6px;height:${[0,14,22,30][e]}px;border-radius:2px;background:var(--e${e})"></span><div class="grow"><div class="t">${n}</div><div class="s">${t}</div></div><div class="v">${p}<span class="xs faint w5"> /km</span></div></div>`).join('')}</div>
    </div>
    <div class="sec">
      <div class="rows"><div class="row" data-go="tests"><span class="ic">${I('flask', 18)}</span><div class="grow"><div class="t">Make it sharper</div><div class="s">3-min + 12-min test · narrows the range to about ±2%</div></div><span class="link">Plan it</span></div></div>
    </div>`};
});

def('explain', {group:'Progress', title:'Explain this (sheet)', base:'metric', notab:true, minStage:3, note:'"Explain this" on every number, in three layers: one plain sentence for everyone; why it matters and what to do; the science with method, evidence grade, your range and the study. Beginners stay at layer 1.'}, (c) => ({sheet:`
  <div class="eyebrow">Explain this</div><div class="gap8"></div>
  <div class="h2">Critical speed: 5:05 /km</div>
  <div class="gap16"></div>
  <div class="layer" style="border-top:0;padding-top:0"><div class="lh"><span><span class="n">1</span>In one line</span></div>
    <p style="color:var(--ink);font-size:16px">The fastest pace you could hold for a long time, about 30 to 40 minutes. Yours is <b>6 s/km faster</b> than in August.</p></div>
  <div class="layer"><div class="lh"><span><span class="n">2</span>Why it matters</span>${I('chevU', 16, 'style="color:var(--ink3)"')}</div>
    <p>It sets your pace zones and race predictions. When it improves, your zones move with it, so easy stays easy.</p>
    <p><b>What to do:</b> nothing new. Keep easy runs chatty and keep Friday’s tempo.</p></div>
  <div class="layer"><div class="lh"><span><span class="n">3</span>The science</span>${I('chevU', 16, 'style="color:var(--ink3)"')}</div>
    <div class="gap8"></div>
    <div class="kv"><span>Method</span><span>Best 3–20 min efforts, weekly</span></div>
    <div class="kv"><span>Your range</span><span>4:59–5:11 /km</span></div>
    <div class="kv"><span>Confidence</span><span>Fairly sure · 14 efforts</span></div>
    <div class="kv"><span>Evidence</span><span class="flex" style="gap:6px">${grade('B')}Moderate</span></div>
    <p>Across more than 25,000 marathon runners, critical speed taken from everyday training data predicted marathon time within about 8%.</p>
    <div class="gap12"></div>
    <div class="row" style="border-top:1px solid var(--rule)"><span class="ic">${I('book', 18)}</span><div class="grow"><div class="t" style="font-size:14px">Smyth & Muniz-Pumares, 2020</div><div class="s">Medicine & Science in Sports & Exercise</div></div>${I('link', 16, 'class="chev"')}</div>
  </div>
  <div class="gap8"></div>
  <button class="btn2" data-go="ask">${I('ask', 18)}Ask about this number</button>`}));

def('predictor', {group:'Progress', title:'Race predictions', notab:true, minStage:3, note:'Weather-style ranges, never one false-precise time. Combines critical speed, two recent races and weekly time (plain Riegel predicts marathons too fast). Says why a goal is or isn’t realistic.'}, (c) => {
  const s4 = c.stage >= 4;
  const rows = s4 ? [['5K','20:55',1220,1285,1255,'Fairly sure'],['10K','43:40',2560,2690,2620,'Fairly sure'],['Half','1:36:30',5650,5950,5790,'Fairly sure'],['Marathon','3:31',12360,13020,12660,'Fairly sure · 4 long runs over 28 km', 12600]]
    : [['5K','24:30',1435,1510,1470,'Fairly sure · you raced one in Sep'],['10K','51:40',3040,3180,3100,'Fairly sure'],['Half','1:59',6960,7380,7140,'Fairly sure', 7200],['Marathon','4:25',15120,17100,15900,'Rough estimate · needs long runs over 25 km']];
  return {body:`
    ${topnav('back', 'Race predictions')}
    <div class="h1" style="margin:4px 0 6px">What you could run now</div>
    <div class="sm mute">From your critical speed, your last two races and your weekly running. The dot is most likely; the bar is the honest range. Longer races are less certain, so their bars are wider.</div>
    <div class="gap12"></div>
    <div class="rows">${rows.map(([n, t, lo, hi, li, conf, goal]) => `<div class="row" style="display:block;padding:16px 0">
      <div class="between" style="align-items:baseline"><span class="h3">${n}</span><span class="disp d5">${t}</span></div>
      <div class="gap12"></div>${rangeBar(lo, hi, li, li * .9, li * 1.1, goal)}
      <div class="between xs" style="margin-top:6px"><span class="faint">${fmtT(lo)} – ${fmtT(hi)}</span><span class="${conf.startsWith('Rough') ? 'warnc' : 'mute'}">${conf}</span></div></div>`).join('')}</div>
    <div class="sec" style="margin-top:8px">
      <div class="rulel">
        <div class="eyebrow">Your goal · ${s4 ? 'Valencia under 3:30' : 'Bath Half under 2:00'}</div>
        <div class="gap8"></div>
        <div class="h3" style="font-weight:500;line-height:1.4">${s4 ? '3:30 needs about <b class="w6">85%</b> of your critical speed for three and a half hours. Runners at your level usually hold 82–86%. On track, not certain.' : '2:00 needs about <b class="w6">89%</b> of your critical speed for two hours. Runners at your level usually hold 87–91%. On track, not certain.'}</div>
      </div>
      <div class="gap12"></div><div class="xs faint flex" style="gap:6px"><i style="width:2px;height:12px;background:var(--ink);display:inline-block"></i>Line on the bar = your goal</div>
    </div>
    <div class="sec"><div class="note"><span class="ni">${I('info', 18)}</span><div class="nt sm">Why not one number? Simple formulas predict marathons too fast: by 10 minutes or more for half of recreational runners. We show a range and publish how close our predictions turn out.</div></div></div>`};
});
function fmtT(s) { const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = Math.round(s % 60); return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(x).padStart(2, '0'); }

def('report', {group:'Progress', title:'Monthly report', notab:true, note:'A plain-English month: what improved, what didn’t, what’s next, and progress to the next stage. Self-monitoring plus feedback are the best-supported behaviour-change techniques.'}, (c) => {
  const w = W[c.stage];
  const b = c.stage === 1
    ? {h:'Your first month. You kept showing up.', l:'8 runs in 3 weeks, every one done at an easy, chatty effort.', up:['Running minutes per run: from 4 to 9.','Longest non-stop run: from 1 minute to 1½.','Every run felt 4 or 5 out of 10, which is right.'], no:['One Friday missed. The plan moved it, nothing lost.'], nx:['Runs grow by 30 seconds when they feel easy.','By late November: 5 minutes non-stop.']}
    : {h:'Steadier, not just more.', l:'16 runs, 15 h 40 in October. More running than September, and more of it truly easy.', up:['Easy pace at 145 bpm: 6:02 /km, 12 s faster than August.','Critical speed: 5:05 /km, 6 s faster.','Easy runs done easy: 4 of 5 (September: 2 of 5).'], no:['Long run stuck at 12–13 km: two missed Thursdays, and we don’t add minutes back.','Strength: 5 of 8 sessions.'], nx:['Long runs build to 16 km by 22 Nov, never more than 10% past your longest.','A critical-speed test in week 5 to sharpen your zones.']};
  const li = (t, ic, col) => `<div class="flex sm" style="gap:10px;padding:7px 0;align-items:flex-start"><span style="color:${col};margin-top:1px">${I(ic, 16)}</span><span>${t}</span></div>`;
  return {body:`
    ${topnav('back', '', `<button class="ib" aria-label="Share">${I('share', 21)}</button>`)}
    <div class="eyebrow">October 2026 · monthly report</div>
    <div class="gap12"></div>
    <div class="hl" style="font-size:38px">${b.h}</div>
    <div class="gap12"></div><div class="lead">${b.l}</div>
    <div class="gap24"></div>
    ${weekBars({...w.weeks, vals:w.weeks.vals.slice(-5), x:['28 Sep','5 Oct','12','19','Now'], miss:null}, {h:90})}
    <div class="sec" style="margin-top:20px"><div class="hd"><span class="eyebrow">What improved</span></div>${b.up.map(t => li(t, 'arrowUp', 'var(--good)')).join('')}</div>
    <div class="sec"><div class="hd"><span class="eyebrow">What didn’t</span></div>${b.no.map(t => li(t, 'minus', 'var(--ink3)')).join('')}</div>
    <div class="sec"><div class="hd"><span class="eyebrow">Next month</span></div>${b.nx.map(t => li(t, 'arrowR', 'var(--ink)')).join('')}</div>
    <div class="sec"><div class="hd"><span class="eyebrow">Towards Stage ${Math.min(5, c.stage + 1)}</span><span class="r">${w.ladder.checks.filter(x => x[2] >= 1).length} of ${w.ladder.checks.length}</span></div>${ladderBar(c.stage, w.ladder.p)}</div>`};
});

def('tests', {group:'Progress', title:'Self-tests', notab:true, note:'Built-in tests, each with "why do this" and a step-by-step guide: critical-speed 3 + 12 min, talk-test calibration, 5K time trial (parkrun), 30-min threshold and sweat-rate tests from Stage 4.'}, (c) => {
  const T = [['Talk-test calibration','25 min · easy','Finds your easy/steady line by voice. No sensor needed.',1,'Done 14 Aug'],
    ['Critical-speed test','3 min + 12 min, all out','Sharpens your zones and predictions to about ±2%.',3,'Suggested · week 5'],
    ['5K time trial','parkrun works','Checks your predictions against a real race.',2,'Last: 24:51 · 12 Sep'],
    ['30-minute threshold test','30 min, hard and even','Sets heart-rate zones from your own threshold.',4,''],
    ['Sweat-rate test','Weigh before and after 60 min','Your own fluid number for race day.',4,'']];
  return {body:`
    ${topnav('back', 'Self-tests')}
    <div class="h1" style="margin:4px 0 6px">Swap estimates for your own numbers</div>
    <div class="sm mute">All optional. Each test replaces a guess with a measurement.</div>
    <div class="gap12"></div>
    <div class="rows">${T.map(([n, d, why, s, st]) => { const lock = s > c.stage; return `<div class="row" style="align-items:flex-start;padding:15px 0;${lock ? 'opacity:.55' : ''}">
      <span class="ic">${I(lock ? 'lock' : 'flask', 18)}</span><div class="grow"><div class="between"><span class="t">${n}</span>${lock ? `<span class="chip line">Stage ${s}</span>` : ''}</div><div class="s">${d}</div><div class="s" style="margin-top:4px;color:var(--ink)">${why}</div>${!lock && st ? `<div class="xs faint" style="margin-top:6px">${st}</div>` : ''}</div></div>`; }).join('')}</div>
    <div class="sec">
      <div class="hd"><span class="eyebrow">Critical-speed test · how</span></div>
      <div class="steps">${[['Warm up','15 min easy, then 3 strides'],['3 minutes all out','As far as you can. Even pace, not a sprint start.'],['Recover','30 min easy or walk. Or do part 4 on another day.'],['12 minutes all out','Same rules. Flat route or a track.'],['Cool down','10 min easy']].map(([t, s], i) => `<div class="st"><span class="i">0${i + 1}</span><span>${t}<span class="w">${s}</span></span><span></span></div>`).join('')}</div>
    </div>`, foot:c.stage >= 3 ? `<button class="btn">Add to week 5</button>` : ''};
});

def('durability', {group:'Progress', title:'Durability', notab:true, minStage:4, note:'Pace at the same heart rate, first vs last third of long runs: how well you hold pace late. A big predictor alongside VO₂max, threshold and economy, explained by no consumer app. Words and a before/after bar, no new chart type.'}, (c) => ({body:`
  ${topnav('back', '', `<button class="pillbtn" data-go="explain">${I('info', 16)}Explain</button>`)}
  <div class="eyebrow">Durability · last 3 long runs</div>
  <div class="gap12"></div>
  <div class="flex" style="align-items:baseline;gap:10px"><span class="disp d2">−4%</span></div>
  <div class="sm mute" style="margin-top:10px">pace at the same heart rate, after 75 minutes</div>
  <div class="gap24"></div>
  ${[['September','−7%',7,false],['October','−4%',4,true]].map(([m, t, v, on]) => `<div class="flex" style="gap:12px;margin-bottom:12px"><span class="sm ${on ? 'w6' : 'mute'}" style="width:78px">${m}</span><div class="grow"><div style="height:22px;width:${v / 8 * 100}%;border-radius:4px;background:${on ? 'var(--ink)' : 'var(--well2)'}"></div></div><span class="sm w6 num" style="width:40px;text-align:right">${t}</span></div>`).join('')}
  <div class="xs faint">Shorter bar = you hold pace better late in the run.</div>
  <div class="gap20"></div>
  <div class="h3" style="font-weight:500;line-height:1.45">You now slow 4% late in long runs at the same heart rate, down from 7% in September. That’s what holds marathon pace past 30 km.</div>
  <div class="sec" style="margin-top:20px">
    <div class="hd"><span class="eyebrow">Pace at 150 bpm · first third → last third</span></div>
    ${[['Sun 11 Oct','5:18','5:31','−4.1%'],['Sun 18 Oct','5:16','5:28','−3.8%'],['Sun 25 Oct','5:14','5:26','−3.8%']].map(([d, a, b, p]) => `<div class="kv"><span>${d}</span><span>${a} → ${b} <span class="faint w5" style="margin-left:6px">${p}</span></span></div>`).join('')}
    <div class="xs faint" style="margin-top:8px">Only runs at 8–16 °C are compared, so heat doesn’t skew it.</div>
  </div>
  <div class="sec">${evidence('C', 'promising')}<div class="sm mute" style="margin-top:8px">Most research on durability is from cycling. Shown to help you understand your running; it doesn’t change your plan on its own.</div></div>`}));

def('race', {group:'Race', title:'Race kit', notab:true, minStage:4, note:'Course-aware pace plan from critical speed with heat adjustment from the forecast and the runner’s own heat response; a fuelling timeline (g/h, gel by gel) practised in long runs; automatic 2-week taper; one-page race card and watch course.'}, (c) => {
  const gels = [25,50,75,100,125,150,175,195];
  return {glow:true, body:`
    ${topnav('back', '', `<button class="ib" aria-label="Share">${I('share', 21)}</button>`)}
    <div class="eyebrow">Race kit · Sun 6 Dec · 08:15</div>
    <div class="gap8"></div>
    <div class="h1">Valencia Marathon</div>
    <div class="flex" style="align-items:baseline;gap:10px;margin-top:6px"><span class="disp d2">39</span><span class="unit" style="font-size:22px">days</span></div>
    <div class="sm mute" style="margin-top:8px">Goal <b class="w6" style="color:var(--ink)">3:30</b> · likely 3:26–3:37 · flat course, +38 m in total</div>
    <div class="sec" style="margin-top:22px">
      <div class="hd"><span class="eyebrow">Pace plan</span><span class="r">Finish about 3:29:50</span></div>
      <div class="rows">${[['0–10 km','5:00','Hold back in the crowd'],['10–21 km','4:56',''],['21–30 km','4:55','Halfway in about 1:44:40'],['30–35 km','5:02','+4 s · 17 °C by 11:00'],['35–42.2 km','5:01','+4 s heat · then whatever is left']].map(([k, p, n]) =>
        `<div class="row" style="min-height:48px"><div style="width:84px" class="sm w6">${k}</div><div class="grow xs mute">${n}</div><div class="v">${p}<span class="xs faint w5"> /km</span></div></div>`).join('')}</div>
      <div class="xs faint" style="margin-top:8px">Heat: Valencia forecast, and your own response (+2.1 s/km per °C above 15 °C).</div>
    </div>
    <div class="sec">
      <div class="hd"><span class="eyebrow">Fuelling · 70 g an hour</span><span class="r">8 gels + drink</span></div>
      <div class="gap24"></div>
      ${strip({blocks:[[2,210]]}, {h:30, gels, labels:false})}
      <div class="strip-ax"><span>Start</span><span>1 h</span><span>2 h</span><span>3 h</span><span>3:30</span></div>
      <div class="gap12"></div>
      <div class="sm mute">A 22 g gel every 25 min, plus sports drink at 4 stations. Practised: <b class="w6" style="color:var(--ink)">4 of 5</b> long runs at 60+ g/h, no stomach trouble.</div>
    </div>
    <div class="sec">
      <div class="hd"><span class="eyebrow">Taper · starts Sun 22 Nov</span>${evidence('A')}</div>
      <div class="gap16"></div>
      <div class="bars" style="height:80px">${[7.9,8.1,6.4,8.3,8.5,8.0,4.6,3.2].map((v, i) => `<div class="b ${i === 2 ? 'on' : i > 5 ? 'part' : ''}" style="height:${v / 9 * 100}%">${i === 2 ? '<span class="cv">This week</span>' : ''}</div>`).join('')}</div>
      <div class="bars-x">${['12 Oct','19','26','2 Nov','9','16','23','30'].map((x, i) => `<span class="${i === 2 ? 'on' : ''}">${x}</span>`).join('')}</div>
      <div class="sm mute" style="margin-top:12px">Volume drops about 45% over the last two weeks, gradually. Intensity stays.</div>
    </div>
    <div class="sec">
      <div class="kv"><span>Sweat rate</span><span>1.1 L/h at 12 °C · tested 4 Oct</span></div>
      <div class="kv"><span>Drink plan</span><span>About 500 ml an hour</span></div>
      <div class="kv"><span>Race shoes</span><span>Endorphin Pro 4 · 46 km</span></div>
    </div>`,
    foot:`<div class="duo"><button class="btn" style="font-size:15px">${I('watch', 18)}Course to watch</button><button class="btn2">${I('file', 18)}Race card</button></div>`};
});

def('you', {group:'You', title:'You', tab:'you', note:'Shoes with mileage and rotation, devices at a glance, safety (live location to a chosen contact, privacy zones), health-data permissions and export. Stage 5 adds coach mode, zones and overrides, raw export and the DFA-α1 lab.'}, (c) => ({body:`
  <div class="gap12"></div>
  <div class="flex" style="gap:14px"><span class="ava">PN</span><div class="grow"><div class="h1">Priya</div><div class="sm mute">Stage ${c.stage} · ${stg(c.stage).name} · with Steady since ${{4:'Jan 2026', 5:'May 2024'}[c.stage] || 'Jun 2026'}</div></div><button class="ib well" aria-label="Settings">${I('sliders', 20)}</button></div>
  <div class="sec" style="margin-top:20px">
    <div class="hd"><span class="eyebrow">Shoes</span><span class="r">Rotating 2 pairs</span></div>
    ${[['Novablast 4','Daily · easy and long',412,700],['Endorphin Speed 4','Fast days',188,600]].map(([n, s, k, mx]) => `<div class="row" style="display:block;padding:12px 0"><div class="between"><div><div class="t">${n}</div><div class="s">${s}</div></div><div class="v">${k}<span class="xs faint w5"> / ${mx} km</span></div></div><div class="bar" style="margin-top:10px"><i style="width:${k / mx * 100}%"></i></div></div>`).join('')}
    <div class="xs faint" style="margin-top:6px">Rotating pairs is linked with fewer injuries, though careful runners may simply rotate more.</div>
  </div>
  <div class="sec" data-go="devices">
    <div class="hd"><span class="eyebrow">Devices</span><button class="link">All${I('chevR', 14)}</button></div>
    <div class="rows">
      <div class="row"><span class="ic">${I('watch', 18)}</span><div class="grow"><div class="t">Apple Watch Ultra 2</div><div class="s">Synced 2 min ago</div></div><span class="chip good">${I('check', 13)}On</span></div>
      <div class="row"><span class="ic">${I('bt', 18)}</span><div class="grow"><div class="t">Polar H10 strap</div><div class="s">Bluetooth heart rate</div></div><span class="chip">Last used Tue</span></div>
    </div>
  </div>
  <div class="sec">
    <div class="hd"><span class="eyebrow">Safety</span></div>
    <div class="rows">
      <div class="row"><span class="ic">${I('pin', 18)}</span><div class="grow"><div class="t">Live location</div><div class="s">Leah sees where you are while you run</div></div><span class="toggle on"></span></div>
      <div class="row"><span class="ic">${I('eyeoff', 18)}</span><div class="grow"><div class="t">Privacy zones</div><div class="s">Home · 400 m hidden on shared routes</div></div>${I('chevR', 16, 'class="chev"')}</div>
    </div>
  </div>
  <div class="sec">
    <div class="hd"><span class="eyebrow">Health data</span></div>
    <div class="rows">
      <div class="row" data-go="o-consent"><span class="ic">${I('shield', 18)}</span><div class="grow"><div class="t">What Steady may use</div><div class="s">Heart rate on · HRV and sleep on · cycle log off</div></div>${I('chevR', 16, 'class="chev"')}</div>
      <div class="row"><span class="ic">${I('download', 18)}</span><div class="grow"><div class="t">Download my data</div><div class="s">FIT, GPX and CSV, all of it</div></div>${I('chevR', 16, 'class="chev"')}</div>
    </div>
  </div>
  <div class="sec">
    <div class="hd"><span class="eyebrow">Training</span></div>
    <div class="rows">
      <div class="row"><span class="ic">${I('sliders', 18)}</span><div class="grow"><div class="t">Intensity mix</div><div class="s">${c.stage >= 5 ? 'Polarised: mostly easy and hard' : 'Pyramidal: mostly easy, some steady, a little hard'}</div></div>${c.stage >= 5 ? '<span class="chip">Changed</span>' : `<span class="xs faint">${c.stage >= 5 ? '' : 'Polarised at Stage 5'}</span>`}</div>
      <div class="row"><span class="ic">${I('volume', 18)}</span><div class="grow"><div class="t">Voice cues</div><div class="s">Block changes, every km, spike guard</div></div>${I('chevR', 16, 'class="chev"')}</div>
      ${c.stage >= 5 ? `
      <div class="row"><span class="ic">${I('users', 18)}</span><div class="grow"><div class="t">Coach</div><div class="s">Sam Okafor can see and edit your plan</div></div><span class="chip good">${I('check', 13)}Shared</span></div>
      <div class="row"><span class="ic">${I('heart', 18)}</span><div class="grow"><div class="t">Zones and overrides</div><div class="s">Custom heart rate, pace and power</div></div>${I('chevR', 16, 'class="chev"')}</div>
      <div class="row"><span class="ic">${I('flask', 18)}</span><div class="grow"><div class="t">Lab: DFA-α1 threshold</div><div class="s">Experimental · chest strap only</div></div>${I('chevR', 16, 'class="chev"')}</div>
      <div class="row"><span class="ic">${I('file', 18)}</span><div class="grow"><div class="t">Raw data export</div><div class="s">Second-by-second CSV, every stream</div></div>${I('chevR', 16, 'class="chev"')}</div>` : `<div class="lock" style="margin-top:8px">${I('lock', 18)}<span class="grow">Coach mode, custom zones and the lab come at Stage 5</span></div>`}
    </div>
  </div>`, tab:'you'}));

def('devices', {group:'You', title:'Devices and apps', notab:true, note:'Phone-first; every device adds accuracy. Launch set needs no approvals (Health app, Health Connect, Bluetooth, WorkoutKit). Garmin Starter: workouts + courses, no history backfill. Polar: last 30 days only. Strava: share only, never a data source.'}, (c) => {
  const row = (ic, t, s, r) => `<div class="row" style="align-items:flex-start;padding:13px 0"><span class="ic">${I(ic, 18)}</span><div class="grow"><div class="t">${t}</div><div class="s">${s}</div></div>${r}</div>`;
  return {body:`
    ${topnav('back', 'Devices and apps')}
    <div class="h1" style="margin:4px 0 6px">Works with just your phone</div>
    <div class="sm mute">Each device makes your numbers more accurate. None is required.</div>
    <div class="sec nob" style="padding-top:14px"><div class="hd"><span class="eyebrow">Connected</span></div><div class="rows">
      ${row('watch','Apple Watch Ultra 2','Reads runs · sends workouts to the Workout app','<span class="chip good">' + I('check', 13) + '2 min ago</span>')}
      ${row('bt','Polar H10 chest strap','Bluetooth heart rate · best for intervals','<span class="chip">Tue</span>')}
      ${row('heart','Health app','Sleep, resting heart rate, HRV','<span class="chip">3 of 5 allowed</span>')}
    </div></div>
    <div class="sec"><div class="hd"><span class="eyebrow">Add</span></div><div class="rows">
      ${row('watch','Garmin','Workouts and race courses to your watch. History starts the day you connect.','<span class="link">Connect</span>')}
      ${row('watch','COROS','Sends your next 7 days of workouts','<span class="link">Connect</span>')}
      ${row('watch','Polar Flow','Reads runs from the last 30 days','<span class="link">Connect</span>')}
      ${row('watch','Suunto','Runs, and routes to your watch','<span class="link">Connect</span>')}
      ${row('bolt','Footpod or Stryd','Pace on treadmills, cadence and running power','<span class="link">Pair</span>')}
    </div></div>
    <div class="sec"><div class="hd"><span class="eyebrow">Share only</span></div><div class="rows">
      ${row('share','Strava','Post finished runs. Steady never reads your data from Strava.','<span class="toggle on"></span>')}
    </div></div>`};
});
