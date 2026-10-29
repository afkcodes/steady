/* ───────── Screens: onboarding, Today, sheets, Plan ───────── */
const SCREENS = {};
const def = (id, meta, fn) => { SCREENS[id] = {id, ...meta, fn}; };
const stg = n => STAGES[n - 1];
const dateLine = (wx = true) => `<div><div class="h3">Wed 28 Oct</div>${wx ? `<div class="xs mute flex" style="gap:4px;margin-top:1px">${I('cloud', 14)}11° · dry until 18:00</div>` : ''}</div>`;

/* ── Onboarding ── */
def('o-welcome', {group:'Onboarding', title:'Welcome', notab:true, note:'The promise in one line, and the ladder drawn with the same strip the app uses for every run. Five real sessions, one per stage.'}, () => {
  const rows = [['Start','rw15'],['Build','e30w'],['Develop','e40s'],['Perform','mp60'],['Compete','i800']];
  return {glow:true, body:`
    <div class="gap16"></div>
    <div class="flex" style="gap:8px">${logo()}<span class="h3" style="font-size:18px;letter-spacing:-.02em">Steady</span></div>
    <div class="gap32"></div>
    <div class="hl" style="font-size:46px">One coach from your first run to your first marathon.</div>
    <div class="gap16"></div>
    <div class="lead">Plans in minutes and plain words. Every number explains itself. Works with just your phone.</div>
    <div class="gap24"></div>
    <div class="rows">${rows.map(([n, k], i) => `<div class="row" style="min-height:52px;padding:6px 0;gap:14px">
      <span class="xs faint w6" style="width:14px">${i + 1}</span>
      <div style="width:84px"><div class="sm w6">${n}</div><div class="xs faint">${S[k].min} min</div></div>
      <div class="grow">${strip(k, {h:20, labels:false, w:Math.max(30, S[k].min / 60 * 100) + '%', px:2.1 * Math.max(30, S[k].min / 60 * 100)})}</div></div>`).join('')}</div>
    <div class="xs faint" style="margin-top:10px">Each bar is one run, to scale. Darker means harder.</div>`,
    foot:`<button class="btn" data-go="o-level">Get started</button><div class="gap8"></div><button class="btn2" data-go="today">I have an account</button>`};
});

def('o-level', {group:'Onboarding', title:'Where are you now?', notab:true, note:'Placement by self-report first; history (next screen) confirms it. The "coming back" path routes to Return to running.'}, () => ({body:`
  ${topnav('back', '', '<span class="xs faint" style="width:40px;text-align:right">1 of 5</span>')}
  <div class="h1" style="margin:8px 0 6px">Where are you with running right now?</div>
  <div class="sm mute">We'll start you at the right step. You can change it later.</div>
  <div class="gap20"></div>
  ${[['I don’t run yet','Or it’s been years. We start with 1-minute runs.','1'],
     ['I can run about 30 minutes','Not regularly yet.','2'],
     ['I run 5K regularly','Ready for 10K or a half.','3', true],
     ['I train for halves or marathons','I want a target time.','4'],
     ['I race through the year','Several races, maybe a coach.','5']].map(([t, s, n, on]) =>
    `<button class="choice${on ? ' on' : ''}"><span class="rad"></span><span class="grow"><div class="t">${t}</div><div class="s">${s}</div></span><span class="tag chip line">Stage ${n}</span></button>`).join('')}
  <button class="choice"><span class="rad"></span><span class="grow"><div class="t">Coming back after injury or pregnancy</div><div class="s">A gentler return path, with pain check-ins.</div></span></button>`,
  foot:`<button class="btn" data-go="o-import">Continue</button>`}));

def('o-import', {group:'Onboarding', title:'Bring your history', notab:true, note:'Placement from imported history or one race time. Apple Health and Health Connect need no partner approval; Garmin history starts the day you connect (no backfill on the Starter tier). Strava is never a data source.'}, () => ({body:`
  ${topnav('back', '', '<span class="xs faint" style="width:40px;text-align:right">2 of 5</span>')}
  <div class="h1" style="margin:8px 0 6px">Bring your running history</div>
  <div class="sm mute">We use your last 12 weeks to set your paces. Nothing is shared.</div>
  <div class="gap20"></div>
  <div class="rows">
    <div class="row"><span class="ic">${I('heart', 18)}</span><div class="grow"><div class="t">Apple Health</div><div class="s goodc">Found 41 runs since 3 Aug</div></div><span class="chip good">${I('check', 13)}Connected</span></div>
    <div class="row"><span class="ic">${I('watch', 18)}</span><div class="grow"><div class="t">Garmin</div><div class="s">History starts the day you connect</div></div><span class="link">Connect</span></div>
    <div class="row"><span class="ic">${I('watch', 18)}</span><div class="grow"><div class="t">COROS</div><div class="s">Runs, and workouts to your watch</div></div><span class="link">Connect</span></div>
    <div class="row"><span class="ic">${I('file', 18)}</span><div class="grow"><div class="t">Upload FIT or GPX files</div><div class="s">Any other watch</div></div><span class="link">Choose</span></div>
  </div>
  <div class="sec" style="margin-top:12px">
    <div class="h3">Or tell us a recent race</div>
    <div class="gap12"></div>
    <div class="duo"><div class="field">5K ${I('chevD', 16, 'style="margin-left:auto;color:var(--ink3)"')}</div><div class="field num">24:51</div></div>
    <div class="xs faint" style="margin-top:8px">Hackney Marshes parkrun, 12 Sep. A parkrun counts.</div>
  </div>`,
  foot:`<button class="btn" data-go="o-week">Continue</button>`}));

def('o-week', {group:'Onboarding', title:'Your week and goal', notab:true, note:'Days, long-run day, goal and if-then plans ("If it’s raining, I’ll run at lunch"). If-then plans and plan-tied reminders are the engagement techniques with the best evidence.'}, () => ({body:`
  ${topnav('back', '', '<span class="xs faint" style="width:40px;text-align:right">3 of 5</span>')}
  <div class="h1" style="margin:8px 0 6px">Fit running around your week</div>
  <div class="gap16"></div>
  <div class="between"><div class="h3">Which days can you run?</div><span class="xs faint">5 days</span></div>
  <div class="gap12"></div>
  <div class="daypick">${['M','T','W','T','F','S','S'].map((d, i) => `<button class="${[0,1,2,4,6].includes(i) ? 'on' : ''}${i === 6 ? ' long' : ''}">${d}</button>`).join('')}</div>
  <div class="xs faint" style="margin-top:8px">L = long run day. Strength fits on Thursday, 20 minutes.</div>
  <div class="sec" style="margin-top:20px">
    <div class="h3">Goal</div><div class="gap12"></div>
    <div class="field">${I('target', 18, 'style="color:var(--ink2)"')}<span class="grow">Bath Half · Sun 15 Mar 2027</span>${I('chevR', 16, 'style="color:var(--ink3)"')}</div>
    <div class="gap8"></div>
    <div class="field">${I('clock', 18, 'style="color:var(--ink2)"')}<span class="grow">Under 2:00 <span class="ph">· optional</span></span>${I('chevR', 16, 'style="color:var(--ink3)"')}</div>
  </div>
  <div class="sec">
    <div class="h3">Plan B, decided now</div>
    <div class="sm mute" style="margin-top:2px">People who plan the "what if" keep going.</div>
    <div class="gap12"></div>
    <div class="rows">
      <div class="row"><span class="ic">${I('cloud', 18)}</span><div class="grow"><div class="t">If it’s raining</div><div class="s">I’ll run at lunch instead</div></div>${I('chevR', 16, 'class="chev"')}</div>
      <div class="row"><span class="ic">${I('clock', 18)}</span><div class="grow"><div class="t">If I only have 20 minutes</div><div class="s">Shorten it, don’t skip it</div></div>${I('chevR', 16, 'class="chev"')}</div>
      <div class="row"><span class="ic">${I('bell', 18)}</span><div class="grow"><div class="t">Reminder the evening before</div><div class="s">20:00 · “Tomorrow: 40 min easy. Kit out tonight?”</div></div><span class="toggle on"></span></div>
    </div>
  </div>`,
  foot:`<button class="btn" data-go="o-consent">Continue</button>`}));

def('o-consent', {group:'Onboarding', title:'Health data consent', notab:true, note:'Heart rate, HRV, sleep and cycle data are UK GDPR special category data: explicit, separate opt-in for each, in plain words. Location has a privacy zone on by default. Copy needs privacy/legal review before launch.'}, () => ({body:`
  ${topnav('back', '', '<span class="xs faint" style="width:40px;text-align:right">4 of 5</span>')}
  <div class="h1" style="margin:8px 0 6px">Your health data, your choice</div>
  <div class="sm mute">Heart rate, HRV, sleep and cycle data are sensitive. We only use what you switch on, and only to coach you. Never for ads.</div>
  <div class="gap16"></div>
  <div class="rows">
    ${[['heart','Heart rate','Zones and the easy-pace check',true],
       ['moon','Overnight HRV, sleep, resting heart rate','Can soften a hard day. Never overrules you.',true],
       ['drop','Menstrual cycle log','Spot your own patterns. No phase-based rules.',false],
       ['pin','Location','Record routes. Start and end hidden when you share (400 m).',true]].map(([ic, t, s, on]) =>
      `<div class="row" style="align-items:flex-start;padding:14px 0"><span class="ic">${I(ic, 18)}</span><div class="grow"><div class="t">${t}</div><div class="s">${s}</div></div><span class="toggle${on ? ' on' : ''}" style="margin-top:3px"></span></div>`).join('')}
  </div>
  <div class="gap12"></div>
  <div class="note"><span class="ni">${I('shield', 18)}</span><div class="nt sm">Change these any time in <b>You → Health data</b>. Download everything as FIT, GPX and CSV whenever you like.</div></div>`,
  foot:`<button class="btn" data-go="o-ready">Agree and continue</button><div class="hint">Read how we use health data</div>`}));

def('o-ready', {group:'Onboarding', title:'Placement', notab:true, note:'Placement result with the evidence behind it, then the first week as strips. Experienced runners skip straight to their stage.'}, () => ({glow:true, body:`
  ${topnav('back', '', '<span class="xs faint" style="width:40px;text-align:right">5 of 5</span>')}
  <div class="eyebrow">You start at</div>
  <div class="gap8"></div>
  <div class="flex" style="align-items:baseline;gap:12px"><span class="disp d2">3</span><span class="h1">Develop</span></div>
  <div class="gap12"></div>
  <div class="sm mute">From 41 runs: a 5K of <b class="w6" style="color:var(--ink)">24:51</b>, about <b class="w6" style="color:var(--ink)">3 h 30</b> a week, longest run <b class="w6" style="color:var(--ink)">12.4 km</b>. You’re ready for strides, tempo runs and a half-marathon block.</div>
  <div class="gap20"></div>
  ${ladderBar(3, .08)}
  <div class="sec" style="margin-top:24px">
    <div class="hd"><span class="eyebrow">Your first week · from Mon 2 Nov</span><span class="r">4 runs · 3 h 25</span></div>
    ${weekRows(3, {rows:[['Mon','e35','plan'],['Tue','hills','plan'],['Wed',null,'rest'],['Thu','str20','plan'],['Fri','tempo','plan'],['Sat',null,'rest'],['Sun','long80','plan','13.1 km']]})}
  </div>`,
  foot:`<button class="btn" data-go="today">Start my plan</button>`}));

function logo(size = 26) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 26 26"><rect width="26" height="26" rx="7" fill="var(--ink)"/>
    <rect x="5" y="14" width="4" height="6" rx="1" fill="var(--e1)"/><rect x="10.5" y="11" width="4" height="9" rx="1" fill="var(--e2)"/><rect x="16" y="6" width="4" height="14" rx="1" fill="var(--e3)"/></svg>`;
}

/* ── Today ── */
def('today', {group:'Today', title:'Today', tab:'today', note:'The run in plain words, drawn to scale, one Start. Why it changed sits right above Start. Move / Swap / Easier are one tap each: missing a run never breaks the plan.'}, (c) => {
  const w = W[c.stage], h = w.hero, st = stg(c.stage);
  const rec = w.recovery;
  return {glow:true, body:`
    <div class="between" style="height:56px">${dateLine()}<button class="pillbtn" data-go="ask">${I('ask', 17)}Ask</button></div>
    <div class="gap12"></div>
    <div class="between"><span class="eyebrow">${h.eyebrow}</span><button class="eyebrow flex" style="gap:2px" data-go="progress">Stage ${c.stage} · ${st.name}${I('chevR', 13)}</button></div>
    <div class="gap8"></div>
    <div class="h1">${h.title}</div>
    <div class="flex" style="align-items:baseline;gap:8px;margin-top:4px"><span class="disp d2">${h.big}</span><span class="unit" style="font-size:24px">${h.unit}</span></div>
    <div class="sm mute flex" style="gap:6px;margin-top:6px">${I('talk', 16, 'style="color:var(--ink3)"')}<span><b class="w6" style="color:var(--ink)">${h.talk}</b>${h.pace ? ' · ' + h.pace : ''}</span></div>
    <div class="gap24"></div>
    ${strip(w.today)}
    <div class="gap12"></div>
    <div class="note"><span class="ni">${I(w.why.moved ? 'move' : 'info', 18)}</span><div class="nt">${w.why.text}${w.why.moved ? ` <button class="link" data-go="changes" style="margin-left:2px">What changed${I('chevR', 14)}</button>` : ''}</div></div>
    ${rec ? `<div class="gap12"></div><div class="flex sm" style="gap:12px">
      <span class="mute" style="white-space:nowrap">HRV <b class="w6" style="color:var(--ink)">${rec.hrv}</b> ms</span>
      <div class="grow">${rangeBar(rec.lo, rec.hi, rec.hrv, rec.lo - 10, rec.hi + 10)}</div>
      <span class="xs faint" style="white-space:nowrap">normal ${rec.lo}–${rec.hi}</span></div>` : ''}
    <div class="gap16"></div>
    <button class="btn split" data-go="live"><span class="flex" style="gap:10px">${I('play', 20)}Start run</span><span class="sub">${c.stage === 1 ? 'Voice cues on' : 'Cues · watch ready'}</span></button>
    <div class="gap8"></div>
    <div class="tools"><button data-go="move">${I('move', 16)}Move</button><button data-go="move">${I('swap', 16)}Swap</button><button data-go="move">${I('easier', 16)}Easier</button><button data-go="session">${I('watch', 16)}Watch</button></div>
    <div class="sec" style="margin-top:24px">
      <div class="hd"><span class="eyebrow">This week</span><span class="r">${w.weekSum}</span></div>
      ${weekRows(c.stage)}
    </div>
    <div class="sec">
      <div class="h2" style="font-weight:500;line-height:1.3">${w.insight.text}</div>
      ${w.insight.sub ? `<div class="sm mute" style="margin-top:6px">${w.insight.sub}</div>` : ''}
      <div class="gap12"></div><button class="link" data-go="${w.insight.link === 'metric' ? 'explain' : w.insight.link}">Explain this${I('chevR', 14)}</button>
    </div>
    <div class="sec" data-go="progress">
      <div class="hd" style="margin-bottom:10px"><span class="eyebrow">${c.stage < 5 && c.stage !== 4 ? 'Next: Stage ' + (c.stage + 1) + ' · ' + stg(c.stage + 1).name : 'Stage ' + c.stage + ' · ' + st.name}</span><span class="r">${w.ladder.checks.filter(x => x[2] >= 1).length} of ${w.ladder.checks.length} done</span></div>
      ${ladderBar(c.stage, w.ladder.p)}
    </div>`, tab:'today'};
});

def('session', {group:'Today', title:'Session detail', notab:true, note:'Every step with duration, talk-test effort and (from Stage 2) pace. The spike guard is checked before the run, and the workout is sent to the watch (Apple WorkoutKit, Garmin Training API, COROS).'}, (c) => {
  const w = W[c.stage], s = S[w.today], h = w.hero;
  const mm = m => { const t = Math.round(m * 60); return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); };
  const eq = (x, y) => x && y && x[0] === y[0] && Math.abs(x[1] - y[1]) < 1e-6;
  const merged = [];
  for (let i = 0; i < s.blocks.length;) {   // collapse a,b,a,b… into one "n ×" step
    const a = s.blocks[i], b = s.blocks[i + 1]; let n = 0, j = i;
    while (eq(s.blocks[j], a) && eq(s.blocks[j + 1], b)) { n++; j += 2; }
    if (n >= 2) { merged.push({rep:n, a, b}); i = j; } else { merged.push({one:a}); i++; }
  }
  const paces = {2:['', '6:50–7:20 /km'], 3:['', '6:05–6:35 /km', '5:25–5:45 /km', 'fast and relaxed, not a sprint'], 4:['', '5:30–5:55 /km', '4:58 /km', '4:05 /km'], 5:['', '4:50–5:20 /km', '4:15 /km', '3:26 /km · 318–326 W']};
  const pz = (e) => (paces[c.stage] || [])[e] || '';
  const word = e => ['walk', 'easy', 'steady', 'fast'][e];
  const stepRow = (x, i) => x.rep
    ? `<div class="st"><span class="i">0${i + 1}</span><span><span class="sw" style="background:var(--e${x.a[0]})"></span>${x.rep} × ${word(x.a[0])} ${mm(x.a[1])}, ${word(x.b[0])} ${mm(x.b[1])}<span class="w">${EFFORT[x.a[0]].talk}${pz(x.a[0]) ? ' · ' + pz(x.a[0]) : ''}</span></span><span class="d">${mm(x.rep * (x.a[1] + x.b[1]))}</span></div>`
    : `<div class="st"><span class="i">0${i + 1}</span><span><span class="sw" style="background:var(--e${x.one[0]})"></span>${x.one[0] === 0 ? 'Walk' : EFFORT[x.one[0]].k + ' run'}<span class="w">${EFFORT[x.one[0]].talk}${pz(x.one[0]) ? ' · ' + pz(x.one[0]) : ''}</span></span><span class="d">${mm(x.one[1])}</span></div>`;
  const spike = {1:null, 2:['Today about 4.2 km','Longest in the last 30 days: 5.4 km'], 3:['Today about 6.5 km','Longest in the last 30 days: 12.4 km'], 4:['Today about 12.4 km','Longest in the last 30 days: 30.0 km'], 5:['Today about 11.6 km','Longest in the last 30 days: 28.0 km']}[c.stage];
  return {body:`
    ${topnav('back', 'Wed 28 Oct', `<button class="ib" aria-label="More">${I('more', 22)}</button>`)}
    <div class="eyebrow">Session · ${s.min} min</div>
    <div class="gap8"></div>
    <div class="h1">${h.title}</div>
    <div class="gap24"></div>
    ${strip(w.today, {axisT:[0, Math.round(s.min / 4), Math.round(s.min / 2), Math.round(s.min * 3 / 4), s.min]})}
    <div class="sec" style="margin-top:16px"><div class="steps">${merged.map(stepRow).join('')}</div></div>
    ${spike ? `<div class="sec"><div class="flex" style="gap:12px;align-items:flex-start"><span class="ic" style="width:34px;height:34px;border-radius:10px;background:var(--goodT);color:var(--good);display:flex;align-items:center;justify-content:center;flex:none">${I('shield', 18)}</span>
      <div class="grow"><div class="t w6">Spike guard: fine</div><div class="sm mute">${spike[0]}. ${spike[1]}. A single run more than 10% past that raises injury risk; today is well inside.</div><div class="gap8"></div>${evidence('B')}</div></div></div>` : ''}
    <div class="sec"><div class="hd"><span class="eyebrow">Voice cues</span></div>
      <div class="rows">
        <div class="row" style="min-height:46px"><div class="grow t">${c.stage === 1 ? '“Run now” / “Walk now”' : 'Each block change, with the target'}</div><span class="toggle on"></span></div>
        <div class="row" style="min-height:46px"><div class="grow t">${c.stage === 1 ? 'Halfway, and the last run' : 'Every kilometre: time and pace'}</div><span class="toggle${c.stage === 1 ? ' on' : ' on'}"></span></div>
        <div class="row" style="min-height:46px"><div class="grow t">Spike guard warning</div><span class="xs faint">Always on</span></div>
      </div></div>
    <div class="sec"><div class="hd"><span class="eyebrow">On your wrist</span></div>
      <div class="rows"><div class="row"><span class="ic">${I('watch', 18)}</span><div class="grow"><div class="t">Apple Watch Ultra 2</div><div class="s">In the Workout app as “Steady · ${s.name}”</div></div><span class="chip good">${I('check', 13)}Sent 06:12</span></div></div></div>`,
    foot:`<button class="btn" data-go="live">${I('play', 20)}Start run</button>`};
});

/* ── Sheets over Today ── */
def('move', {group:'Today', title:'Can’t run today? (sheet)', base:'today', notab:true, note:'Move, swap, shorten or skip: one tap, consequences stated before you choose. We never add missed minutes back.'}, (c) => ({sheet:`
  <div class="h2">Can’t run today?</div>
  <div class="sm mute" style="margin:4px 0 16px">No problem. Here’s what each choice does to your week.</div>
  ${[['Move to tomorrow','Thursday’s strength moves to Friday. Nothing else changes.',true],
     ['Make it shorter','Easy 20 instead of 40. Still counts for the week.'],
     ['Swap with Sunday’s long run','Long run on Thursday, easy on Sunday. Two easy days stay between hard ones.'],
     ['Skip it','The week still works. We don’t add missed minutes back.']].map(([t, s, on]) =>
    `<button class="choice${on ? ' on' : ''}"><span class="rad"></span><span class="grow"><div class="t">${t}</div><div class="s">${s}</div></span></button>`).join('')}
  <div class="gap8"></div>
  <button class="btn" data-go="back">Move to Thursday</button>`}));

def('ask', {group:'Ask', title:'Ask: a cold (sheet)', base:'today', notab:true, note:'Free questions about your running. Answers use only data Steady recorded or you granted (never Strava API data). Any plan change is proposed, never applied, until you approve it.'}, (c) => ({sheet:`
  <div class="between"><div class="h2">Ask Steady</div><button class="ib well" data-go="back" aria-label="Close" style="width:32px;height:32px">${I('x', 16)}</button></div>
  <div class="gap16"></div>
  <div class="bubble">I’ve got a cold. What should I change this week?</div>
  <div class="answer">
    <p>Sorry you’re ill. A common rule of thumb: if it’s only <b>above the neck</b> (runny nose, sore throat) and you feel OK, easy running is usually fine. If it’s in your <b>chest</b>, or you have a fever or aches, rest until it clears.</p>
    <p>If you’d like, here’s an easier week:</p>
  </div>
  <div class="rows" style="border:1px solid var(--rule);border-radius:14px;padding:2px 14px">
    <div class="row"><span class="day xs w6 mute" style="width:30px">Fri</span><div class="grow sm"><s>Tempo 3 × 8 min</s> → <b class="w6">Easy 30</b></div></div>
    <div class="row"><span class="day xs w6 mute" style="width:30px">Sun</span><div class="grow sm"><s>Long 80</s> → <b class="w6">Easy 50</b></div></div>
  </div>
  <div class="gap12"></div>
  <div class="duo"><button class="btn" style="height:48px;font-size:15px" data-go="back">Make these 2 changes</button><button class="btn2" style="height:48px" data-go="back">Not now</button></div>
  <div class="xs faint" style="margin-top:10px">Based on your plan and runs recorded in Steady. General guidance, not medical advice.</div>
  <div class="gap16"></div>
  <div class="tagset"><button>Why is today easy?</button><button>Can I race a 10K on Sunday?</button></div>
  <div class="gap12"></div>
  <div class="field"><span class="ph grow">Ask about your running…</span>${I('arrowUp', 18, 'style="color:var(--ink3)"')}</div>`}));

def('ask-pain', {group:'Ask', title:'Ask: pain (fixed answer)', base:'today', notab:true, note:'Pain and injury questions never go to free generation: a fixed, physio-reviewed answer, using the runner’s own niggle log. No diagnosis (software that diagnoses can count as a medical device under MHRA rules).'}, (c) => ({sheet:`
  <div class="between"><div class="h2">Ask Steady</div><button class="ib well" data-go="back" aria-label="Close" style="width:32px;height:32px">${I('x', 16)}</button></div>
  <div class="gap16"></div>
  <div class="bubble">Is my knee pain runner’s knee?</div>
  <div class="gap12"></div>
  <span class="chip line">${I('shield', 13)}Reviewed answer · written with physiotherapists</span>
  <div class="answer">
    <p>I can’t tell what’s causing knee pain, and I won’t guess. What I can see: you logged <b>4/10</b> after Wednesday’s run and <b>5/10</b> this morning.</p>
    <p><b>See a physio if:</b></p>
  </div>
  <div class="rows">${['Pain goes above 5/10 while running','It changes how you run','There’s swelling, or it’s worse each morning','It isn’t better within a week'].map(t => `<div class="row" style="min-height:42px;padding:8px 0"><span style="color:var(--warn)">${I('alert', 16)}</span><div class="grow sm">${t}</div></div>`).join('')}</div>
  <div class="gap12"></div>
  <div class="duo"><button class="btn" style="height:48px;font-size:15px">Find a physio</button><button class="btn2" style="height:48px" data-go="niggle">My knee plan</button></div>`}));

def('lapse', {group:'Today', title:'Back after a break', tab:'today', stage:2, note:'After 2 missed weeks: a gentle restart week instead of a broken streak. Streaks count weeks, never days.'}, (c) => ({glow:true, body:`
  <div class="between" style="height:56px">${dateLine()}<button class="pillbtn" data-go="ask">${I('ask', 17)}Ask</button></div>
  <div class="gap12"></div>
  <div class="eyebrow">Welcome back</div>
  <div class="gap8"></div>
  <div class="hl" style="font-size:36px">It’s been 15 days. Let’s restart gently.</div>
  <div class="gap12"></div>
  <div class="sm mute">Nothing to make up. This week is three easy 20-minute runs, then your plan carries on from week 5.</div>
  <div class="gap24"></div>
  <div class="flex" style="align-items:baseline;gap:8px"><span class="disp d3">20</span><span class="unit" style="font-size:20px">min</span><span class="sm mute" style="margin-left:6px">easy · full sentences</span></div>
  <div class="gap16"></div>
  ${strip('restart', {w:'100%'})}
  <div class="gap16"></div>
  <button class="btn" data-go="live">${I('play', 20)}Start run</button>
  <div class="sec" style="margin-top:24px">
    <div class="hd"><span class="eyebrow">Restart week</span><span class="r">0 of 3</span></div>
    <div class="wk rows">${[['Wed','Easy 20','today'],['Fri','Easy 20',''],['Sun','Easy 20','']].map(([d, n, st]) => `<div class="row${st ? ' today' : ''}"><div class="day">${d}</div><div class="nm">${n}</div><div class="sp">${mini('restart', 40)}</div><div class="stt">${st ? '<span class="flex w6" style="justify-content:flex-end;gap:6px;color:var(--ink)"><i class="dot"></i>Today</span>' : '20 min'}</div></div>`).join('')}</div>
  </div>
  <div class="sec"><div class="flex" style="gap:12px"><span class="ic" style="width:34px;height:34px;border-radius:10px;background:var(--well);display:flex;align-items:center;justify-content:center">${I('repeat', 18)}</span>
    <div class="grow"><div class="t w6">Your streak is paused, not lost</div><div class="sm mute">4 weeks. It carries on when you run this week.</div></div></div></div>`, tab:'today'}));

/* ── Plan ── */
const PHASES = {
  1:[['Run/walk',6],['Longer runs',4]], 2:[['Every week',6],['First 5K',2]],
  3:[['Base',6],['Build',7],['Peak',5],['Taper',2]], 4:[['Base',4],['Build',6],['Peak',6],['Taper',2]],
  5:[['Base',8],['Brighton Half',2],['Marathon build',8],['Taper',2]]};
const PH_AT = {1:3, 2:5, 3:3, 4:13, 5:6};
function phaseBar(stage) {
  const ph = PHASES[stage], tot = sum(ph.map(p => p[1])), at = PH_AT[stage];
  let t = 0;
  return `<div style="position:relative;padding-top:26px">
    <div class="flex" style="gap:3px">${ph.map(([n, wks]) => { const s0 = t; t += wks;
      const done = Math.min(1, Math.max(0, (at - s0) / wks));
      return `<div style="flex:${wks};"><div class="bar" style="height:8px;border-radius:2px"><i style="width:${done * 100}%;border-radius:0"></i></div><div class="xs ${at > s0 && at <= t ? 'w6' : 'faint'}" style="margin-top:7px;white-space:nowrap">${n}</div></div>`; }).join('')}</div>
    <div class="now" style="position:absolute;top:0;left:calc(${(at - .5) / tot * 100}% );transform:translateX(-50%)"><span class="chip ink" style="height:20px">Week ${at}</span></div></div>`;
}
def('plan', {group:'Plan', title:'Plan', tab:'plan', note:'The block as phases, then the week as a timetable of strips on one time axis: the long run is visibly the longest. Spike guard is built into plan generation. Taper is automatic.'}, (c) => {
  const w = W[c.stage];
  const spike = {1:'Friday’s run/walk is the same length as today. Run minutes rise by 30 s at most.', 2:'Saturday’s 40 min (about 5.9 km) is 9% longer than your longest run this month (5.4 km). Under 10%, so it stays.', 3:'Sunday’s 13.1 km is 6% longer than your longest run in the last 30 days (12.4 km). Under 10%, fine.', 4:'Sunday’s 32 km is 7% longer than your longest run in the last 30 days (30 km). Under 10%, fine.', 5:'Sunday’s 26 km is shorter than your longest run in the last 30 days (28 km).'}[c.stage];
  return {body:`
    <div class="page-t">Plan</div>
    <div class="sm mute">${w.goalLine}</div>
    <div class="gap16"></div>
    ${phaseBar(c.stage)}
    <div class="sec" style="margin-top:22px">
      <div class="between" style="margin-bottom:10px"><button class="ib well" style="width:32px;height:32px" aria-label="Previous week">${I('chevL', 16)}</button>
        <div style="text-align:center"><div class="h3">This week</div><div class="xs faint">26 Oct – 1 Nov · ${w.weekSum}</div></div>
        <button class="ib well" style="width:32px;height:32px" aria-label="Next week">${I('chevR', 16)}</button></div>
      ${weekRows(c.stage)}
      <div class="gap12"></div>
      <div class="note"><span class="ni" style="color:var(--good)">${I('shield', 18)}</span><div class="nt sm">${spike}</div></div>
    </div>
    ${c.stage >= 2 ? `<div class="sec" data-go="changes">
      <div class="hd"><span class="eyebrow">What changed</span><button class="link">All changes${I('chevR', 14)}</button></div>
      ${changeEntry(changesFor(c.stage)[0], true)}
    </div>` : ''}
    <div class="sec">
      <div class="hd"><span class="eyebrow">Coming up</span></div>
      <div class="rows">
        ${c.stage >= 3 ? `<div class="row" data-go="${c.stage >= 4 ? 'race' : 'plan'}"><span class="ic">${I('easier', 18)}</span><div class="grow"><div class="t">Taper starts by itself</div><div class="s">${c.stage === 4 ? 'Sun 22 Nov: volume down 45% over 2 weeks, same intensity' : c.stage === 5 ? 'Brighton Half: 10 days, light. London: 2 weeks' : '2 weeks before Bath: volume down about 45%, same intensity'}</div></div>${grade('A')}</div>` : ''}
        <div class="row" data-go="strength"><span class="ic">${I('dumbbell', 18)}</span><div class="grow"><div class="t">Strength, twice a week</div><div class="s">${c.stage <= 2 ? 'Bodyweight · 15 min' : 'Heavy lifts and hops · 20 min'}</div></div>${I('chevR', 16, 'class="chev"')}</div>
        <div class="row" data-go="tests"><span class="ic">${I('target', 18)}</span><div class="grow"><div class="t">Self-tests</div><div class="s">${c.stage >= 3 ? 'Critical-speed test suggested in week 5' : 'Talk-test calibration run'}</div></div>${I('chevR', 16, 'class="chev"')}</div>
      </div>
    </div>`, tab:'plan'};
});

const CH4 = {when:'Mon 26 Oct, 06:05', who:'Plan', items:[['Mon','Easy 60','Easy 50'],['Tue','Intervals 6 × 1 km','Intervals 5 × 1 km']],
  because:[['Sleep','2 nights under 6 h'],['HRV','41 ms, below your normal 46–60'],['RPE','Sunday\u2019s long run felt 8/10'],['You','Said you felt \u201crough\u201d']], open:true};
const CH5 = {when:'Tue 27 Oct, 19:40', who:'Coach Sam', items:[['Wed','Easy 45','6 × 800 m'],['Thu','6 × 800 m','Easy 45']],
  because:[['Coach','\u201cTrack\u2019s free Wednesday, Thursday stays easy.\u201d']], open:true};
const CH2 = {when:'Today, 06:10', who:'Plan', items:[['Sat','Long 45','Long 40']],
  because:[['Spike guard','45 min would be about 19% past your longest run this month']], open:true};
function changesFor(stage) {
  const head = {2:CH2, 3:CHANGES[0], 4:CH4, 5:CH5}[stage];
  return head ? [head, ...CHANGES.slice(1)] : CHANGES.slice(1);
}
function changeEntry(ch, compact) {
  return `<div style="padding:${compact ? '0' : '16px 0'}">
    <div class="between"><span class="xs faint">${ch.when} · by ${ch.who}</span>${ch.open ? `<span class="flex" style="gap:14px"><button class="link">${I('undo', 14)}Undo</button></span>` : ''}</div>
    <div class="gap8"></div>
    ${ch.items.map(([d, a, b]) => `<div class="flex" style="gap:10px;padding:3px 0"><span class="xs w6 mute" style="width:30px">${d}</span><span class="sm"><s>${a}</s> <span class="faint">→</span> <b class="w6">${b}</b></span></div>`).join('')}
    <div class="gap8"></div>
    <div class="flex" style="flex-wrap:wrap;gap:6px">${ch.because.map(([k, t]) => `<span class="chip"><b class="w6" style="color:var(--ink)">${k}</b>${t}</span>`).join('')}</div>
  </div>`;
}
def('changes', {group:'Plan', title:'What changed', notab:true, note:'Every adaptation is listed with its reasons and can be undone. Inputs: missed sessions, RPE, niggles, HRV/sleep (soft), heat forecast, illness, coach edits. Nothing is rebuilt silently.'}, (c) => ({body:`
  ${topnav('back', 'What changed')}
  <div class="h1" style="margin:4px 0 6px">Every change, and why</div>
  <div class="sm mute">Your plan adapts to how runs feel, missed days, sleep and the weather. You can undo any change.</div>
  <div class="gap8"></div>
  ${changesFor(c.stage).map((ch, i) => `<div style="border-top:${i ? '1px solid var(--rule)' : '0'}">${changeEntry({...ch, open:i === 0 || ch.open && i === 0})}</div>`).join('')}
  <div class="sec"><div class="xs faint">HRV and sleep can soften a hard day. They never cancel one on their own, and you always have the last word.</div></div>`}));

def('strength', {group:'Plan', title:'Strength session', notab:true, note:'Strength on the same calendar as runs, progressing by stage: bodyweight at 1–2, heavy lifts and plyometrics from 3. Combined heavy + plyometric work has the best evidence for running economy.'}, (c) => {
  const heavy = c.stage >= 3;
  const ex = heavy ? [['Goblet squat','3 × 6','Heavy: last 2 reps hard'],['Romanian deadlift','3 × 6','Hinge, flat back'],['Step-up','3 × 8 each leg','Knee over toes is fine'],['Single-leg calf raise','3 × 10 each','Slow down, 3 s'],['Pogo hops','3 × 20 s','Quick, springy contacts'],['Bounds','3 × 6','Long and tall']]
    : [['Squat','2 × 12','Sit back, chest up'],['Split squat','2 × 8 each leg','Hold a wall if you need'],['Glute bridge','2 × 12','Squeeze at the top'],['Calf raise','2 × 15','Both legs, slow'],['Plank','2 × 30 s','Straight line'],['Side plank','2 × 20 s each','Hips high']];
  return {body:`
    ${topnav('back', 'Thu 29 Oct')}
    <div class="eyebrow">Strength · ${heavy ? '20' : '15'} min · ${heavy ? 'gym or home with weights' : 'no equipment'}</div>
    <div class="gap8"></div><div class="h1">${heavy ? 'Heavy legs and hops' : 'Bodyweight basics'}</div>
    <div class="gap16"></div>
    <div class="steps">${ex.map(([n, r, t], i) => `<div class="st"><span class="i">0${i + 1}</span><span>${n}<span class="w">${t}</span></span><span class="d">${r}</span></div>`).join('')}</div>
    <div class="sec" style="margin-top:12px"><div class="flex" style="gap:12px;align-items:flex-start"><span class="ni" style="color:var(--ink2)">${I('book', 18)}</span><div class="grow sm mute">Strength and plyometric training make running cheaper for your body, and the two combined work best. ${evidence('B')}</div></div></div>`,
    foot:`<button class="btn">${I('play', 20)}Start session</button>`};
});
