/* ───────── Screens: the run, after the run, history ───────── */
function kpis(rows, faint = []) {
  return `<div class="kpis">${rows.map(([v, u, l], i) => `<div><div class="k" style="${faint.includes(i) ? 'color:var(--ink3)' : ''}">${v}${u ? `<small>${u}</small>` : ''}</div><div class="l">${l}</div></div>`).join('')}</div>`;
}

/* ── Live: one block at a time. Block name, the countdown, what's next, and what you just heard.
   Markers: ◆ get ready · ■ run · □ walk or jog · amber ■ hard. Amber only appears in a hard block. */
const clk = t => Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0');
const mk = k => `<span class="mk ${k}"></span>`;
function liveCtrl() {
  return `<div class="lvc"><button aria-label="Previous block">Back</button><button class="end" data-go="feel">Hold to end</button><button aria-label="Next block">Skip</button></div>
    <div class="lvc-h"><span class="p1">Tap anywhere to pause</span><span class="p2">Paused · tap to carry on</span></div>`;
}
function earBlock(e) {
  return `<div class="lv-ear">
    <div class="eh"><span class="l">${I('phones', 16)}${e.src}</span><button class="rp" data-cue="${e.say}">Replay</button></div>
    ${e.rows.map(([k, t], i) => `<div class="er${i ? ' nx' : ''}"><span class="k">${k}</span><span class="tx">${t}</span></div>`).join('')}</div>`;
}
const beeps = `<span class="bp"><i></i><i></i><i></i></span>`;
function liveScreen(o) {
  const txt = o.bigTxt || clk(o.big);
  const fs = o.bigSize || (txt.length <= 4 ? 180 : 150);
  const clock = o.bigTxt ? '' : `data-clock="down" data-t="${o.big}"${o.len ? ` data-len="${o.len}"` : ''}${o.then ? ` data-then="${o.then}"` : ''}`;
  return {time:o.time || '7:29', body:`<div class="lv${o.tight ? ' tight' : ''}">
    <div class="lv-hd"><span class="s">${o.head}</span><span class="t">${o.clock}</span></div>
    <div class="lv-bar">${strip(o.sess, {h:8, at:o.at, labels:false, px:346})}</div>
    ${o.alert || ''}
    <div class="lv-ph">${mk(o.mk)}<span class="hl">${o.phase}</span></div>
    <div class="lv-sub">${o.sub}</div>
    <div class="lv-big" style="font-size:${fs}px"><span ${clock}>${txt}</span>${o.bigU ? `<small>${o.bigU}</small>` : ''}</div>
    ${o.prog != null ? `<div class="lv-prog${o.mk === 'h' ? ' a' : ''}"><i style="width:${(o.prog * 100).toFixed(1)}%"></i></div>` : ''}
    <div class="lv-grid">${o.grid.map(([l, v, d, dim]) => `<div><div class="l">${l}</div><div class="v"${dim ? ' style="color:var(--ink3)"' : ''}>${v}${d ? `<small>${d}</small>` : ''}</div></div>`).join('')}</div>
    ${o.next ? `<div class="lv-next"><span class="l">Next</span>${mk(o.next[0])}<span class="n">${o.next[1]}</span><span class="d">${o.next[2]}</span></div>` : ''}
    ${o.ear ? earBlock(o.ear) : ''}
  </div>`, foot:liveCtrl()};
}

/* Mid-run, one per stage. Stage 1 and 4–5 are interval sessions (run/walk, marathon-pace reps, 800s). */
const LV = {
  1:{sess:'rw15', at:11.8, head:'Week 3 · Run 1½ walk 1½', clock:'11:48 / 25:00', mk:'r', phase:'Run', sub:'Slow enough to chat',
     big:42, len:90, grid:[['Run', '3', '/6'], ['Left', '13:12'], ['Bpm', '141']], next:['w', 'Walk', '1:30'],
     ear:{src:'Voice on · AirPods', say:'Run three of six. Slow enough to chat.', rows:[['0:48 ago', '“Run three of six. Chatty pace.”'], ['In 0:39', `${beeps}then “Walk. Ninety seconds.”`]]}},
  2:{sess:'e30w', at:14.3, head:'Week 5 · Easy run', clock:'14:18 / 30:00', mk:'r', phase:'Easy run', sub:'Full sentences <span>· 6:50–7:20 /km</span>',
     big:762, len:1440, grid:[['Km', '2.05'], ['Pace', '7:01'], ['Bpm', '141']], next:['w', 'Walk', '3:00'],
     ear:{src:'Voice on · AirPods', say:'Kilometre two. Seven oh one. Nice and easy.', rows:[['1:06 ago', '“Kilometre two. 7:01. Easy.”'], ['At 3 km', 'Your time and pace again']]}},
  3:{sess:'e40s', at:17.7, head:'Week 3 · Easy + strides', clock:'17:42 / 40:00', mk:'r', phase:'Easy run', sub:'Full sentences <span>· 6:05–6:35 /km</span>',
     big:858, len:1920, grid:[['Km', '2.91'], ['Pace', '6:04'], ['Bpm', '138']], next:['h', 'Strides', '6 × 0:20'],
     ear:{src:'Voice on · AirPods', say:'Halfway through the easy part. Keep it chatty.', rows:[['1:42 ago', '“Halfway through the easy part.”'], ['In 14:08', `${beeps}then “Strides. Six of them.”`]]}},
  4:{sess:'mp60', at:27.5, head:'Week 13 · Steady 60', clock:'27:30 / 1:00:00', mk:'r', phase:'Rep 2', sub:'Marathon pace <span>· 4:58 /km</span>',
     big:450, len:600, grid:[['Rep', '2', '/3'], ['Pace', '4:57'], ['Bpm', '156']], next:['w', 'Easy', '3:00'],
     ear:{src:'Voice on · AirPods', say:'Rep two of three. Ten minutes at four fifty-eight. Settle in.', rows:[['2:30 ago', '“Rep two of three. Settle in.”'], ['Each km', '“On target” or “Ease off”']]}},
  5:{sess:'i800', at:33.45, head:'Track · 6 × 800 m', clock:'33:27 / 50:00', mk:'h', phase:'Rep 5', sub:'800 m at 3:26 /km',
     bigTxt:'388', bigU:'m left', bigSize:166, prog:412 / 800, grid:[['Rep', '5', '/6'], ['Pace', '3:25'], ['Watts', '322']], next:['w', 'Jog', '1:30'],
     ear:{src:'Voice on · AirPods', say:'Four hundred. One twenty-two. On target.', rows:[['0:42 ago', '“400. 1:22, on target.”'], ['At 600 m', '“200 to go”, then your rep time']]}},
};
def('live', {group:'Run', title:'Live run', notab:true, note:'Built from the runner’s own reference: block name, a countdown you can read at arm’s length, what’s next, then what you just heard. Interval sessions show the rep as a fraction (3/6). Voice and beeps carry every change, so the phone can stay in a pocket; tap anywhere to pause.'}, (c) => {
  const o = LV[c.stage];
  return liveScreen({...o, prog:o.prog != null ? o.prog : (o.len - o.big) / o.len});
});

/* Get ready: five seconds, then the first block. Tells the runner they can put the phone away. */
const READY = {
  1:{sess:'rw15', head:'Week 3 · Run 1½ walk 1½', total:'25:00', first:'Walk · 5:00', grid:[['Runs', '0', '/6'], ['Left', '25:00'], ['Bpm', '—']], next:['r', 'Run', '1:30'],
     now:'“Walk five minutes. Brisk.”', at:['At 5:00', `${beeps}then “Run one of six.”`]},
  2:{sess:'e30w', head:'Week 5 · Easy run', total:'30:00', first:'Walk · 3:00', grid:[['Km', '0.00'], ['Left', '30:00'], ['Bpm', '—']], next:['r', 'Easy run', '24:00'],
     now:'“Walk three minutes to warm up.”', at:['At 3:00', `${beeps}then “Easy run. Full sentences.”`]},
  3:{sess:'e40s', head:'Week 3 · Easy + strides', total:'40:00', first:'Easy run · 32:00', grid:[['Km', '0.00'], ['Left', '40:00'], ['Bpm', '—']], next:['h', 'Strides', '6 × 0:20'],
     now:'“Easy thirty-two minutes. Full sentences.”', at:['Each km', 'Your time and pace']},
  4:{sess:'mp60', head:'Week 13 · Steady 60', total:'1:00:00', first:'Easy · 12:00', grid:[['Reps', '0', '/3'], ['Left', '1:00:00'], ['Bpm', '—']], next:['r', 'Rep 1', '10:00'],
     now:'“Easy twelve minutes, then three reps.”', at:['At 12:00', `${beeps}then “Rep one. 4:58.”`]},
  5:{sess:'i800', head:'Track · 6 × 800 m', total:'50:00', first:'Warm-up · 15:00', grid:[['Reps', '0', '/6'], ['Left', '50:00'], ['Bpm', '—']], next:['h', 'Rep 1', '800 m'],
     now:'“Warm up fifteen. Drills at ten.”', at:['At 15:00', `${beeps}then “Rep one. 3:26.”`]},
};
def('live-ready', {group:'Run', title:'Get ready', notab:true, note:'The reference screen: five seconds to put the phone away. Up first, what comes next, and the first two things you will hear. In the prototype it counts down and starts the run.'}, (c) => {
  const r = READY[c.stage];
  return liveScreen({sess:r.sess, at:0, head:r.head, clock:'0:00 / ' + r.total, mk:'d', phase:'Get ready', sub:'Up first: ' + r.first,
    big:3, len:5, then:'live', prog:.4, grid:r.grid, next:r.next, time:'7:18',
    ear:{src:'Phone away · voice on', say:r.now.replace(/[“”]/g, ''), rows:[['Now', r.now], r.at]}});
});

def('live-spike', {group:'Run', title:'Live: spike guard', notab:true, note:'The strongest new injury evidence (5,205 runners): one run more than 10% past your longest in 30 days raises risk; week-to-week increases didn’t. Spoken first, shown second, never blocking.'}, (c) => {
  const lo = c.stage <= 2;
  const d = lo ? {at:'6.0', km:'5.4', pct:'11', t:'41:52', tot:'40:00', p:'6:58', home:'0.8', time:'8:48'} : {at:'13.7', km:'12.4', pct:'10', t:'1:24:10', tot:'1:20:00', p:'6:08', home:'1.2', time:'9:46'};
  const sess = lo ? 'long40' : 'long80';
  return liveScreen({sess, at:S[sess].min, head:lo ? 'Saturday long run' : 'Sunday long run', clock:d.t + ' / ' + d.tot, time:d.time, tight:true,
    alert:`<div class="lv-alert"><div class="ah">${I('volume', 15)}Spike guard · spoken aloud</div>
      <div class="at">${d.pct}% past your longest run this month</div>
      <div class="as">One big jump in a single run raises injury risk more than a busy week does. Home is ${d.home} km from here.</div>
      <div class="gap12"></div><div class="duo"><button class="btn" style="height:46px;font-size:15px">${I('pin', 17)}Route home</button><button class="btn2" style="height:46px;font-size:15px">Keep going</button></div></div>`,
    mk:'w', phase:'Plan done', sub:`Finished ${lo ? 2 : 4} min ago <span>· walk it in</span>`,
    bigTxt:d.at, bigU:'km', bigSize:150, grid:[['Longest km', d.km], ['Pace', d.p], ['Bpm', '143']]});
});

def('live-low', {group:'Run', title:'Live: low-confidence data', notab:true, stage:3, note:'Honest numbers: wrist heart rate lags a chest strap by 10–20 s in pace changes, and GPS drops under trees. The app says so, switches the source, and dims the number it doesn’t trust.'}, () =>
  liveScreen({sess:'e40s', at:36.13, head:'Week 3 · Easy + strides', clock:'36:08 / 40:00', time:'7:52', tight:true,
    alert:`<div class="lv-alert" style="border-color:var(--rule2)">
      <div class="ar">${I('heart', 16)}<div><b>Heart rate: low confidence.</b> <span>Wrist sensors lag in short bursts.</span></div></div>
      <div class="ar">${I('gps', 16)}<div><b>GPS weak under trees.</b> <span>Pace from your steps.</span></div></div></div>`,
    mk:'h', phase:'Stride 4', sub:'Fast and relaxed, not a sprint', big:12, len:20, prog:.4, bigSize:156,
    grid:[['Stride', '4', '/6'], ['Km', '≈5.93'], ['Bpm', '~150', '', true]], next:['w', 'Walk back', '1:00']}));

def('feel', {group:'Run', title:'How did it feel?', notab:true, note:'The one input that works with no sensors: effort 1–10 (RPE) and the talk test. Session load = RPE × minutes. Optional niggle tag and shoes. Beginners get "Too hard? Repeat this week", not a failed workout.'}, (c) => {
  const sel = c.niggle ? 'Knee' : 'Nothing';
  const rpe = c.stage === 1 ? 5 : c.niggle ? 5 : 4;
  return {body:`
    ${topnav('close', '')}
    <div class="flex sm" style="gap:8px;color:var(--good)">${I('check', 16)}<span class="w5">Saved · ${c.stage === 1 ? '25:00 · run/walk' : '40:12 · 6.48 km'}</span></div>
    <div class="gap8"></div>
    <div class="h1">How did that feel?</div>
    <div class="gap20"></div>
    <div class="rpe">${Array.from({length:10}, (_, i) => `<button class="${i + 1 === rpe ? 'on' : ''}">${i + 1}</button>`).join('')}</div>
    <div class="rpe-words">${['Very easy','Easy','Moderate','Hard','All out'].map((t, i) => `<span class="${Math.ceil(rpe / 2) - 1 === i ? 'on' : ''}">${t}</span>`).join('')}</div>
    <div class="gap24"></div>
    <div class="h3">Could you talk in…</div><div class="gap12"></div>
    <div class="seg"><button class="on">Full sentences</button><button>Short phrases</button><button>A few words</button></div>
    <div class="gap24"></div>
    <div class="between"><div class="h3">Anything sore?</div><span class="xs faint">Optional</span></div><div class="gap12"></div>
    <div class="tagset">${['Nothing','Knee','Shin','Calf','Achilles','Foot','Hip','Back'].map(t => `<button class="${t === sel ? 'on' : ''}">${t}</button>`).join('')}</div>
    ${c.niggle ? `<div class="gap16"></div><div class="note"><div class="grow">
      <div class="between"><span class="sm w6">Left knee · how bad, 0–10?</span><span class="sm w6">4</span></div><div class="gap12"></div>
      <div class="rpe" style="grid-template-columns:repeat(11,1fr);gap:3px">${Array.from({length:11}, (_, i) => `<button style="height:34px;font-size:13px;${i === 4 ? '' : 'background:var(--raised)'}" class="${i === 4 ? 'on' : ''}">${i}</button>`).join('')}</div>
      <div class="xs mute" style="margin-top:10px">We’ll ask again tomorrow morning. If it settles, nothing changes.</div></div></div>` : ''}
    ${c.stage >= 2 ? `<div class="gap16"></div><div class="row" style="border-top:1px solid var(--rule)"><span class="ic">${I('shoe', 18)}</span><div class="grow"><div class="t">Novablast 4</div><div class="s">412 km · daily trainer</div></div><span class="link">Change</span></div>` : ''}`,
    foot:`<button class="btn" data-go="${c.niggle ? 'niggle' : 'summary'}">Save</button>${c.stage === 1 ? `<div class="gap8"></div><button class="btn2">Too hard? Repeat this week</button>` : ''}`};
});
def('feel-niggle', {group:'Run', title:'How did it feel? (niggle)', notab:true, stage:3, note:'Pain 0–10 by body area after the run, checked again next morning: the pain-monitoring model physios use.'}, (c) => SCREENS.feel.fn({...c, niggle:true}));

const SUMM = {
  1:{title:'Run 1½ · walk 1½', when:'Wed 28 Oct · 07:15 · Victoria Park', big:'25:00', bigU:'', kp:[['6 of 6','','Runs done'],['9:00','min','Running'],['2.71','km','Distance']],
     imp:'All six runs done. Your longest non-stop run is now <mark>1½ minutes</mark>, up from 1.', actual:null},
  2:{title:'Easy 30', when:'Wed 28 Oct · 07:15 · Victoria Park', big:'4.21', bigU:'km', kp:[['30:06','','Time'],['7:09','/km','Pace'],['143','bpm','Heart']],
     imp:'Same easy effort, <mark>11 s/km faster</mark> than in September.', actual:[[0,3],[1,12],[2,6],[1,6],[0,3]], drift:'Minutes 15–21 drifted into short-phrases effort, on the hill. That’s 2 of your last 4 easy runs.'},
  3:{title:'Easy 40 + strides', when:'Wed 28 Oct · 07:12 · Victoria Park', big:'6.48', bigU:'km', kp:[['40:12','','Time'],['6:12','/km','Pace'],['141','bpm','Heart']],
     imp:'Same effort, <mark>12 s/km faster</mark> than in August.', impSub:'Easy pace at 145 bpm: 6:02 /km (August: 6:14)', actual:[[1,22],[2,7],[1,3],...R(6,[[3,1/3],[0,1]])], drift:'Minutes 22–29 drifted into short-phrases effort (heart rate 152). That’s 1 of your last 5 easy runs.'},
  4:{title:'Steady 60 · 3 × 10 min', when:'Wed 28 Oct · 06:40 · Lea towpath', big:'12.38', bigU:'km', kp:[['1:00:20','','Time'],['4:52','/km','Pace'],['148','bpm','Heart']],
     imp:'All three marathon-pace reps within <mark>2 s/km</mark> of target, at 4 bpm lower than three weeks ago.', actual:null},
  5:{title:'6 × 800 m', when:'Wed 28 Oct · 18:30 · Mile End track', big:'11.62', bigU:'km', kp:[['50:44','','Time'],['2:44','avg','Per 800 m'],['322','W','Rep power']],
     imp:'Reps averaged <mark>2:44</mark>, 4 s faster than the same session in September at the same power.', actual:null},
};
def('summary', {group:'Run', title:'Run summary', notab:true, note:'Always says one thing that improved against your own past. Plan and done as two bars on one time scale: the orange patch in \u201cdone\u201d is the easy-pace check made visible. Start and end hidden by default.'}, (c) => {
  const m = SUMM[c.stage], w = W[c.stage];
  const splits = [['1','6:21',132,'+4'],['2','6:14',137,'+2'],['3','6:09',143,'−3'],['4','5:58',152,'+6'],['5','6:11',140,'−1'],['6','6:19',146,'0'],['.48','6:02',149,'−2']];
  const sec = p => { const [a, b] = p.split(':').map(Number); return a * 60 + b; };
  return {body:`
    ${topnav('back', '', `<span class="flex"><button class="ib" aria-label="Share" data-go="share">${I('share', 21)}</button><button class="ib" aria-label="More">${I('more', 22)}</button></span>`)}
    <div class="xs faint">${m.when}</div>
    <div class="gap4"></div>
    <div class="h1">${m.title}</div>
    <div class="flex" style="align-items:baseline;gap:8px;margin-top:8px"><span class="disp d2">${m.big}</span>${m.bigU ? `<span class="unit" style="font-size:24px">${m.bigU}</span>` : ''}</div>
    <div class="gap16"></div>
    ${kpis(m.kp)}
    <div class="sec nob" style="padding-top:20px">
      <div class="flex" style="gap:8px;margin-bottom:8px"><span class="chip good">${I('arrowUp', 13)}Improved</span></div>
      <div class="h2" style="font-weight:500;line-height:1.3">${m.imp}</div>${m.impSub ? `<div class="sm mute" style="margin-top:6px">${m.impSub}</div>` : ''}
      <div class="gap12"></div><button class="link" data-go="explain">Explain this${I('chevR', 14)}</button>
    </div>
    <div class="sec">
      <div class="hd"><span class="eyebrow">Planned vs done</span><span class="r">Same time scale</span></div>
      <div class="gap8"></div>
      ${strip(w.today, {actual:m.actual || S[w.today].blocks, labels:false})}
      ${m.drift ? `<div class="gap16"></div><div class="note"><span class="ni">${I('info', 18)}</span><div class="nt sm">${m.drift}</div></div>` : ''}
    </div>
    <div class="sec">
      <div class="hd"><span class="eyebrow">Route</span><span class="r">${c.stage === 4 ? 'Lea towpath' : 'Victoria Park'}</span></div>
      ${routeMap({strides:c.stage === 3})}
      <div class="xs faint flex" style="gap:6px;margin-top:10px">${I('eyeoff', 14)}Start and end hidden when you share (400 m privacy zone)</div>
    </div>
    ${c.stage >= 2 ? `<div class="sec">
      <div class="hd"><span class="eyebrow">Splits</span><span class="r">Longer bar = faster</span></div>
      <div class="splits"><div class="sr h"><span>Km</span><span>Pace</span><span></span><span class="r">Bpm</span><span class="r">Elev</span></div>
      ${splits.map(([k, p, hr, el]) => `<div class="sr"><span class="faint">${k}</span><span class="w6 num">${p}</span><span><div class="sbar${k === '6' ? ' e3' : ''}" style="width:${(420 - sec(p)) / (420 - 340) * 100}%"></div></span><span class="r num">${hr}</span><span class="r num">${el}</span></div>`).join('')}</div>
      <div class="xs faint" style="margin-top:8px">Km 6 includes the strides.</div>
    </div>` : ''}
    ${c.stage >= 3 ? `<div class="sec"><div class="hd"><span class="eyebrow">Data quality</span></div>
      <div class="kv"><span>GPS</span><span class="flex" style="gap:6px">${I('check', 14)}Good</span></div>
      <div class="kv"><span>Heart rate</span><span>Wrist · low confidence in strides</span></div>
      <div class="kv"><span>Session load</span><span>4 × 40 = 160</span></div></div>` : ''}
    <div class="sec"><div class="tagset"><button data-go="share">Share card</button><button>Export FIT</button><button>Send to Strava</button></div></div>`};
});

def('niggle', {group:'Run', title:'Niggle: plan eased', notab:true, stage:3, note:'Pain rules from the physio pain-monitoring model: up to about 5/10 while running is acceptable if it settles by next morning. Rising next morning → reduce and suggest a physio. Never a diagnosis; copy needs clinical review.'}, (c) => ({body:`
  ${topnav('back', 'Left knee')}
  <div class="eyebrow">Niggle check-in · Thu 07:30</div>
  <div class="gap8"></div>
  <div class="h1">It’s up this morning, so we’ve eased the week.</div>
  <div class="gap20"></div>
  <div class="rows">
    ${[['Wed 08:05','After the run',4],['Thu 07:30','This morning',5]].map(([t, l, v], i) => `<div class="row" style="gap:14px"><div style="width:104px"><div class="sm w6">${l}</div><div class="xs faint">${t}</div></div>
      <div class="grow"><div class="bar" style="height:8px"><i style="width:${v * 10}%;background:${i ? 'var(--warn)' : 'var(--ink2)'}"></i></div></div><div class="d5 disp" style="width:52px;text-align:right">${v}<span class="unit" style="font-size:13px">/10</span></div></div>`).join('')}
  </div>
  <div class="sec" style="margin-top:8px">
    <div class="hd"><span class="eyebrow">What changes</span></div>
    ${changeEntry({when:'Thu 07:31', who:'Plan', open:true, items:[['Fri','Tempo 3 × 8 min','Easy 30, flat'],['Sun','Long 80','Easy 45, flat']], because:[['Knee','5/10 next morning, up from 4']]}, true)}
  </div>
  <div class="sec">
    <div class="hd"><span class="eyebrow">See a physio if</span></div>
    ${['It goes above 5/10 while running','It changes how you run','It’s still sore in a week'].map(t => `<div class="flex sm" style="gap:10px;padding:5px 0"><span style="color:var(--warn)">${I('alert', 15)}</span>${t}</div>`).join('')}
    <div class="gap12"></div>
    <div class="xs faint">Steady doesn’t diagnose injuries. This is general guidance written with physiotherapists.</div>
  </div>`,
  foot:`<div class="duo"><button class="btn" data-go="plan">Keep changes</button><button class="btn2">Find a physio</button></div>`}));

def('graduation', {group:'Run', title:'Stage complete', notab:true, stage:1, note:'Graduation from Stage 1: the check is shown, what unlocks is listed, no confetti or badge wall. Runners can stay longer if they want.'}, (c) => ({glow:true, body:`
  <div class="gap24"></div>
  <div class="eyebrow">Stage 1 · Start · complete</div>
  <div class="gap12"></div>
  <div class="disp d2">30:00</div>
  <div class="hl" style="font-size:40px;margin-top:10px">Non-stop. Twice.</div>
  <div class="gap12"></div>
  <div class="lead">Ten weeks ago your longest run was 1 minute. You’re a runner now.</div>
  <div class="gap24"></div>
  ${ladderBar(2, .04)}
  <div class="sec" style="margin-top:24px">
    <div class="hd"><span class="eyebrow">Stage 2 · Build adds</span></div>
    <div class="rows">${[['clock','Pace on your runs','Shown, never a target on easy days'],['shield','Spike guard on long runs','Warns before a jump in distance'],['heart','Easy-pace check','Flags easy runs done too hard'],['dumbbell','Strength twice a week','15 min, bodyweight'],['target','A first 5K','parkrun works']].map(([ic, t, s]) => `<div class="row"><span class="ic">${I(ic, 18)}</span><div class="grow"><div class="t">${t}</div><div class="s">${s}</div></div></div>`).join('')}</div>
  </div>`,
  foot:`<button class="btn" data-go="plan">See my Build plan</button><div class="hint">Or stay at Start for a few more weeks</div>`}));

def('runs', {group:'Runs', title:'Runs', tab:'runs', note:'History as blocks you can count: one block per run, stacked by week, with a dashed goal line and this week in amber. Then the easy/hard mix (the 80/20 check) and one trend, then every run as a dated row. Export is one tap.'}, (c) => {
  const w = W[c.stage], H = HIST[c.stage];
  const rec = c.stage === 1 ? [['Longest non-stop','1:30','today'],['Runs completed','8','since 12 Oct'],['Weeks running','3','in a row']]
    : c.stage === 2 ? [['Longest run','5.4 km','Sat 24 Oct'],['Fastest 1K','6:31','Sat 10 Oct'],['5K','—','parkrun 14 Nov']]
    : c.stage === 3 ? [['5K','24:51','12 Sep · parkrun'],['10K','52:58','4 Oct'],['Longest run','12.4 km','25 Oct'],['Fastest 1K','4:38','12 Sep']]
    : c.stage === 4 ? [['Half marathon','1:36:12','Big Half · 7 Sep'],['10K','44:30','Jul'],['Longest run','32.0 km','11 Oct']]
    : [['Marathon','2:57:40','London · Apr 2026'],['Half marathon','1:22:05','Feb'],['10K','37:12','Oct']];
  const row = ([d, n, k, meta, t]) => `<div class="row" data-go="summary"><div class="dt">${d}<b>${n}</b></div>
    <div class="grow"><div class="ttl">${S[k].short || S[k].name}</div><div class="s">${meta}</div></div><div class="v">${t}</div></div>`;
  return {body:`
    <div class="between" style="align-items:flex-end;margin:16px 0 14px"><div class="page-t" style="margin:0">Runs</div><button class="ulc" style="margin-bottom:6px">Export</button></div>
    <hr class="thick">
    <div style="padding:20px 0 22px">
      <div class="between" style="margin-bottom:30px"><span class="h3">Last 8 weeks</span><span class="sm mute">goal ${H.goal} a week</span></div>
      ${stackChart(H.runs, H.goal, {x:WK8})}
      <div class="sm mute" style="margin-top:14px">${H.line}</div>
    </div>
    <div class="sec">
      <div class="between" style="margin-bottom:14px"><span class="h3">${H.mix.label}</span><span class="sm mute">${H.mix.right}</span></div>
      ${mixBar(H.mix.parts)}
      <div class="sm mute" style="margin-top:12px">${H.mix.sub}</div>
    </div>
    <div class="sec" data-go="${c.stage >= 3 ? 'explain' : 'progress'}">
      <div class="between" style="margin-bottom:16px"><span class="h3">${H.trend.label}</span><span class="sm mute">${H.trend.right}</span></div>
      ${trendBlocks(H.trend.vals, {min:H.trend.min})}
    </div>
    <div class="lhd" style="padding-top:8px"><span class="eyebrow">This week</span><span class="r">${H.wk.length} run${H.wk.length === 1 ? '' : 's'}</span></div>
    <div class="nl rows">${H.wk.map(row).join('')}</div>
    <div class="lhd"><span class="eyebrow">Last week</span><span class="r">${H.runs[6]} runs</span></div>
    <div class="nl rows">${H.last.map(row).join('')}</div>
    <div class="lhd"><span class="eyebrow">Records</span></div>
    <div class="rows">${rec.map(([n, v, s]) => `<div class="row" style="min-height:56px"><div class="grow t">${n}</div><div class="v">${v}<small>${s}</small></div></div>`).join('')}</div>
    <div class="gap16"></div><button class="btn2">${I('download', 18)}Export all · FIT, GPX, TCX</button>`, tab:'runs'};
});

/* ── Audio cues: the whole run as it will sound, then what is said and how ── */
const CUES = {
  1:{name:'Run 1½ · walk 1½', min:25, s:[['0:00', 0, 'Walk five minutes. Brisk, like you’re late for a bus.'], ['5:00', 1, 'Run one of six. Ninety seconds, slow enough to chat.'], ['6:30', 1, 'Walk. Ninety seconds.', 'Run and walk repeat six times'],
     ['14:00', 0, 'Halfway. Three runs to go.'], ['21:30', 1, 'Last run. You’ve done this five times today.'], ['25:00', 0, 'That’s it. Six of six. Tell me how it felt.']]},
  2:{name:'Easy 30', min:30, s:[['0:00', 0, 'Walk three minutes to warm up.'], ['3:00', 1, 'Easy run. Twenty-four minutes. Full sentences.'], ['Each km', 0, 'Kilometre one. 7:04. Nice and easy.'],
     ['If fast', 0, 'A little quick. Slow to chatting pace.', 'Only when you leave 6:50–7:20 /km'], ['27:00', 1, 'Walk three minutes. Run done.'], ['30:00', 0, 'Done. 4.2 kilometres.']]},
  3:{name:'Easy 40 + strides', min:40, s:[['0:00', 0, 'Easy thirty-two minutes. Full sentences.'], ['Each km', 0, 'Kilometre one. 6:21. Easy.'], ['16:00', 0, 'Halfway through the easy part.'],
     ['32:00', 1, 'Stride one of six. Fast and relaxed, not a sprint.'], ['32:20', 1, 'Walk back. One minute.', 'Stride and walk repeat six times'], ['40:00', 0, 'Done. 6.48 kilometres.']]},
  4:{name:'Steady 60 · 3 × 10 min', min:60, s:[['0:00', 0, 'Easy twelve minutes, then three reps at marathon pace.'], ['12:00', 1, 'Rep one of three. Ten minutes at 4:58.'], ['Each km', 0, '4:57. On target.', 'Or “Ease off” / “Pick it up”'],
     ['22:00', 1, 'Easy. Three minutes. That rep: 4:58.', 'Rep and easy repeat three times'], ['51:00', 1, 'Easy nine minutes to finish.'], ['60:00', 0, 'Done. Three of three on target.']]},
  5:{name:'6 × 800 m', min:50, s:[['0:00', 0, 'Warm up fifteen minutes, easy. Drills at ten.'], ['15:00', 1, 'Rep one of six. 800 at 3:26.'], ['15:41', 0, '200. Forty-one, on target.'],
     ['17:45', 1, 'Jog ninety seconds. That one: 2:46.', 'Rep and jog repeat six times'], ['40:30', 1, 'Last rep. Same as the others.'], ['50:00', 0, 'Done. Reps averaged 2:44.']]},
};
def('cues', {group:'Run', title:'Audio cues', notab:true, note:'Research ranks audio cues the single most important beginner feature, and racers want them too. The run is written out as it will sound, with a sample you can play (the prototype speaks it). Every change is spoken, three beeps lead into it, and the watch taps; it works with the phone locked and lowers music while speaking.'}, (c) => {
  const q = CUES[c.stage], st = c.stage;
  const sample = q.s.slice(0, 2).map(([, b, t]) => (b ? '***|' : '') + t).join('|');
  const tg = (on) => on === 'always' ? '<span class="xs faint">Always</span>' : `<span class="toggle${on ? ' on' : ''}"></span>`;
  const say = [
    ['Each change', st === 1 ? '“Run” and “Walk”, with how long' : '“Rep”, “Jog”, “Easy”, with the target', 'always'],
    ['Countdown', 'Three beeps before every change', true],
    ['Halfway and the last one', '', true],
    ['Every kilometre', st === 1 ? 'Time and pace. Off at Stage 1: no pace targets yet' : 'Time and pace', st > 1],
    ...(st > 1 ? [['Pace nudges', '“A little quick” when you leave your range', true]] : []),
    ['Heart rate', 'Off: wrist sensors lag in intervals', false],
    ['Spike guard', 'If a run goes 10% past your longest this month', 'always']];
  return {body:`
    ${topnav('back')}
    <div class="page-t">Audio cues</div>
    <div class="lead">Every change is spoken, so the phone stays in your pocket. Works with the screen locked.</div>
    <div class="gap20"></div>
    <div class="panel">
      <div class="between"><span class="eyebrow acc">Today’s run</span><span class="eyebrow">${q.min} min</span></div>
      <div class="flex" style="align-items:flex-end;gap:12px;margin-top:12px">
        <div class="grow"><div class="h1">Hear it first</div><div class="sm mute" style="margin-top:6px">The start of ${q.name}, as it will sound</div></div>
        <button class="play" data-cue="${sample}" aria-label="Play a sample">${I('play', 26)}</button></div>
    </div>
    <div class="lhd"><span class="eyebrow">Start to finish</span><span class="r">${beeps}= three beeps</span></div>
    <div class="cl rows">${q.s.map(([tm, b, t, rp]) => `<div class="row"><span class="tm">${tm}</span><div class="grow"><div class="q">${b ? beeps : ''}“${t}”</div>${rp ? `<span class="rp">${rp}</span>` : ''}</div></div>`).join('')}</div>
    <div class="lhd"><span class="eyebrow">What it says</span></div>
    <div class="rows">${say.map(([t, s, on]) => `<div class="row"><div class="grow"><div class="t">${t}</div>${s ? `<div class="s">${s}</div>` : ''}</div>${tg(on)}</div>`).join('')}</div>
    <div class="lhd"><span class="eyebrow">How it sounds</span></div>
    <div class="rows">
      <div class="row"><div class="grow"><div class="t">Voice</div><div class="s">Calm · British English</div></div>${I('chevR', 16, 'class="chev"')}</div>
      <div class="row"><div class="grow"><div class="t">Music</div><div class="s">Lower it while I’m speaking</div></div>${tg(true)}</div>
      <div class="row"><div class="grow"><div class="t">Watch taps</div><div class="s">A tap on your wrist at each change</div></div>${tg(true)}</div>
      <div class="row"><div class="grow"><div class="t">Cue volume</div></div><span class="vol">${Array.from({length:10}, (_, i) => `<i class="${i < 7 ? 'on' : ''}"></i>`).join('')}</span></div>
    </div>`};
});

/* ── Share: the run as something worth posting. Four looks; heart rate never leaves by default. ── */
const SHR = {
  1:{title:'Run 1½ · walk 1½', where:'Victoria Park · 07:15', big:'6', bigD:'/6', unit:'Runs done', st:[['Time', '25:00'], ['Running', '9:00'], ['Km', '2.71']],
     brag:'Longest run now 1½ min'},
  2:{title:'Easy 30', where:'Victoria Park · 07:15', big:'4.21', unit:'Kilometres', st:[['Time', '30:06'], ['Pace', '7:09'], ['Streak', '4 wk']], brag:'11 s/km faster than September'},
  3:{title:'Easy 40 + strides', where:'Victoria Park · 07:12', big:'6.48', unit:'Kilometres', st:[['Time', '40:12'], ['Pace', '6:12'], ['Strides', '6']],
     brag:'12 s/km faster than August'},
  4:{title:'Steady 60 · 3 × 10', ptitle:'Steady 60<br>3 × 10 min', where:'Lea towpath · 06:40', big:'12.38', unit:'Kilometres', st:[['Time', '1:00:20'], ['Pace', '4:52'], ['Reps', '3 × 10']],
     reps:{lab:['4:57', '4:58', '4:56'], cls:'s', best:2}, brag:'All 3 reps on target'},
  5:{title:'6 × 800 m', where:'Mile End track · 18:30', big:'11.62', unit:'Kilometres', st:[['Time', '50:44'], ['Avg rep', '2:44'], ['Power', '322 W']],
     reps:{lab:['2:46', '2:45', '2:44', '2:43', '2:44', '2:42'], best:5}, brag:'4 s faster than September'},
};
const cardLogo = (fg, bg, acc) => `<svg width="17" height="17" viewBox="0 0 26 26"><rect width="26" height="26" fill="${fg}"/><rect x="5" y="15" width="4" height="5" fill="${bg}" opacity=".45"/><rect x="10.5" y="11" width="4" height="9" fill="${bg}"/><rect x="16" y="6" width="4" height="14" fill="${acc}"/></svg>`;
function shareCard(stage, tpl) {
  const d = SHR[stage], w = W[stage];
  const ladder = `<span class="lad">${[1, 2, 3, 4, 5].map(n => `<i class="${n <= stage ? 'on' : ''}"></i>`).join('')}</span>`;
  const stg = `<div class="stg"><span>Stage ${stage} · ${STAGES[stage - 1].name}</span>${ladder}</div>`;
  const stats = `<div class="st">${d.st.map(([l, v]) => `<div><div class="l">${l}</div><div class="v">${v}</div></div>`).join('')}</div>`;
  const brag = `<div class="brag"><i></i>${d.brag}</div>`;
  const big = (sz) => `${d.big}${d.bigD ? `<small class="f">${d.bigD}</small>` : ''}`;
  const reps = d.reps ? `<div class="reps" style="grid-template-columns:repeat(${d.reps.lab.length},1fr)">${d.reps.lab.map((l, i) => `<div><i class="${d.reps.cls || ''}"></i><span class="${d.reps.best === i ? 'b' : ''}">${l}</span></div>`).join('')}</div>` : '';
  const date = 'Wed 28 Oct';
  if (tpl === 'bib') {
    const n = (d.big + (d.bigD || '')).length, fs = n <= 3 ? 150 : n === 4 ? 128 : 100;
    return `<div class="sc bib">${[[9, 9], [252, 9], [9, 464], [252, 464]].map(([x, y]) => `<i class="pin" style="left:${x}px;top:${y}px"></i>`).join('')}
      <div class="top"><span class="br">${cardLogo('#0F0F0F', '#E69F00', '#EDEAE4')}Steady</span><span>${date} 2026</span></div>
      <div class="rule"></div>
      <div class="cap" style="margin-top:8px">${d.where}</div>
      <div class="num" style="font-size:${fs}px">${d.big}${d.bigD ? `<small>${d.bigD}</small>` : ''}</div>
      <div class="unit2">${d.unit}</div>
      <div class="ttl2">${d.title}</div>
      <div class="perf"></div>
      ${stats}<div class="gap12"></div>${brag}<div class="gap8"></div>${stg}</div>`;
  }
  if (tpl === 'poster') {
    const n = (d.big + (d.bigD || '')).length, fs = n <= 4 ? 112 : 90;
    return `<div class="sc poster">
      <div class="top"><span class="br">${cardLogo('#EDEAE4', '#0F0F0F', '#E69F00')}Steady</span><span style="color:var(--ink2)">${date}</span></div>
      <div class="ttl2">${d.ptitle || d.title}</div>
      <div class="cap" style="margin-top:9px">${d.where}</div>
      <div class="gap16"></div>
      ${strip(w.today, {h:22, labels:false, px:236})}
      ${reps ? `<div class="gap12"></div>${reps}` : ''}
      <div class="num" style="font-size:${fs}px">${big()}${d.bigD ? '' : '<small>km</small>'}</div>
      ${stats}<div class="gap12"></div><div style="color:var(--e3)">${brag}</div><div class="gap8"></div><div style="color:var(--ink2)">${stg}</div></div>`;
  }
  if (tpl === 'route') {
    return `<div class="sc route">
      <div class="top"><span class="br">${cardLogo('#EDEAE4', '#0F0F0F', '#E69F00')}Steady</span><span style="color:var(--ink2)">${date}</span></div>
      <div class="h1" style="font-size:30px;margin-top:16px">${d.title}</div>
      <div class="cap" style="margin-top:6px">${d.where.split(' · ')[0]}</div>
      <div class="map2"><svg viewBox="54 22 274 168" preserveAspectRatio="xMidYMid meet">
        <path d="M20 40 L360 26 M30 112 L350 98 M20 182 L360 172 M96 0 L76 200 M196 0 L206 200 M290 0 L306 200" stroke="#1E1E1E" stroke-width="7"/>
        <path d="M84 132 C70 104 86 64 132 54 C176 44 240 46 282 66 C316 82 312 128 276 142 C236 158 168 160 126 150 C112 147 98 144 92 138" fill="none" stroke="#EDEAE4" stroke-width="5.5" stroke-linecap="square" stroke-linejoin="round"/>
        ${stage === 3 || stage === 5 ? `<path d="M212 151 C190 155 166 156 142 152" fill="none" stroke="#E69F00" stroke-width="9" stroke-linecap="butt"/>` : ''}
        ${[[132, 54, '1'], [210, 48, '2'], [282, 66, '3'], [300, 122, '4'], [240, 152, '5']].map(([x, y, t]) => `<g transform="translate(${x},${y})"><rect x="-8" y="-8" width="16" height="16" fill="#0F0F0F" stroke="#EDEAE4" stroke-width="1.5"/><text y="4" text-anchor="middle" font-size="11" font-weight="700" fill="#EDEAE4" font-family="Barlow Condensed">${t}</text></g>`).join('')}
        <rect x="68" y="126" width="30" height="30" fill="#0F0F0F" stroke="#77736C" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="83" y="172" text-anchor="middle" font-size="9.5" fill="#77736C" font-family="Hanken Grotesk">hidden</text></svg></div>
      <div class="num">${d.bigD ? '2.71' : d.big}<small>km</small></div>
      ${stats}<div class="gap12"></div><div style="color:var(--e3)">${brag}</div></div>`;
  }
  return `<div class="sc sticker">
    <div class="top" style="gap:7px;color:#fff">${cardLogo('#fff', '#202020', '#E69F00')}Steady</div>
    <div class="gap16"></div>
    <div class="num">${d.bigD ? '2.71' : d.big}<small>km</small></div>
    <div class="ln">${d.st[0][1]} · ${stage === 1 ? d.title : d.st[1][1] + ' /km'}</div>
    <div class="gap12"></div><div style="color:#E69F00">${brag}</div>
    <div class="tag">Transparent: lay it over your own photo</div></div>`;
}
let SHARE_TPL = 'bib';
def('share', {group:'Run', title:'Share card', notab:true, note:'Something worth posting: four looks for the same run. Bib is a race number in the app’s one amber, pinned at the corners. Poster draws the session as the app does, with each rep’s time. Route keeps start and end hidden; Sticker is transparent for the runner’s own photo. Heart rate is health data, so it is off on every card.'}, (c) => {
  const T = [['bib', 'Bib'], ['poster', 'Poster'], ['route', 'Route'], ['sticker', 'Sticker']];
  const cur = c.tpl || SHARE_TPL;
  return {time:'7:58', body:`
    ${topnav('close', 'Share', `<button class="ib" aria-label="Edit">${I('sliders', 20)}</button>`)}
    <div class="sc-wrap">${T.map(([k]) => `<div class="sc-slot${k === cur ? ' on' : ''}" data-slot="${k}">${shareCard(c.stage, k)}</div>`).join('')}</div>
    <div class="sc-tabs">${T.map(([k, l]) => `<button class="${k === cur ? 'on' : ''}" data-tpl="${k}">${l}</button>`).join('')}</div>
    <div class="sc-opts"><button class="on">${I('check', 14)}Pace</button><button class="on">${I('check', 14)}Route</button><button>${I('x', 14)}Heart rate</button></div>`,
    foot:`<div class="sh-t">${[['story', 'Story', 'go'], ['chat', 'Message'], ['upr', 'Strava'], ['download', 'Save'], ['more', 'More']].map(([ic, l, cl]) => `<button class="${cl || ''}"><span class="sq">${I(ic, 24)}</span>${l}</button>`).join('')}</div>`};
});
