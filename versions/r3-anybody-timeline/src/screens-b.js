/* ───────── Screens: the run, after the run, history ───────── */
const LIVE = {
  2:{at:14.3, clock:'14:18', label:'Easy run · full sentences', bigLabel:'Elapsed', big:'14:18', sub:'12:42 left in this block, then walk',
     k:[['2.05','km','Distance'],['7:01','/km','Pace · avg 7:04'],['141','bpm','Heart · easy']], cue:'“Keep it chatty. You’re doing it right.”'},
  3:{at:17.7, clock:'17:42', label:'Easy run · full sentences', bigLabel:'Elapsed', big:'17:42', sub:'14:18 of easy left, then 6 strides',
     k:[['2.91','km','Distance'],['6:04','/km','Pace · avg 6:06'],['138','bpm','Heart · easy']], cue:'“Halfway through the easy part. Keep it chatty.”'},
  4:{at:27.5, clock:'27:30', label:'Rep 2 of 3 · marathon pace', bigLabel:'Current pace', big:'4:57', bigU:'/km', chip:['good','On target · 4:58'],
     k:[['7:30','left','This rep'],['5.34','km','Distance'],['156','bpm','Heart · steady']], cue:'“Rep two. Settle in. Short phrases.”'},
  5:{at:33.45, clock:'33:27', label:'Rep 5 of 6 · 800 m', bigLabel:'Left in this rep', big:'1:18', chip:['good','3:25 /km · 322 W · on target'],
     k:[['33:27','','Elapsed'],['7.14','km','Distance'],['322','W','Power']], cue:'“Rep five. Relax your shoulders.”'},
};
function liveControls() {
  return `<div class="ctrl"><button class="side">${I('lap', 22)}Lap</button>
    <button class="main" data-go="feel" aria-label="Pause">${I('pause', 34)}</button>
    <button class="side">${I('arrowR', 22)}Skip</button></div>
    <div class="xs faint" style="text-align:center;margin-top:10px">Hold pause to finish</div>`;
}
function kpis(rows, faint = []) {
  return `<div class="kpis">${rows.map(([v, u, l], i) => `<div><div class="k" style="${faint.includes(i) ? 'color:var(--ink3)' : ''}">${v}${u ? `<small>${u}</small>` : ''}</div><div class="l">${l}</div></div>`).join('')}</div>`;
}

def('live', {group:'Run', title:'Live run', notab:true, time:'7:29', note:'One number you need now, big enough to read mid-stride; the strip fills as you go, with the now-line. Beginners see Run / Walk and a countdown, never pace. Voice cues carry the session.'}, (c) => {
  if (c.stage === 1) return {time:'7:31', body:`
    <div class="live-top"><span class="rec"><i></i>Recording</span><span class="chip">Run 3 of 6</span></div>
    <div class="gap24"></div>
    <div class="disp" style="font-size:72px;color:var(--accInk)">Run</div>
    <div class="disp d1" data-clock="down" data-t="42">0:42</div>
    <div class="lead" style="margin-top:10px">then walk 1½ min</div>
    <div class="gap32"></div>
    ${strip('rw15', {at:11.8, atLabel:'11:48'})}
    <div class="gap16"></div>
    ${kpis([['11:48','','Elapsed'],['3:48','min','Running so far'],['13:12','','To go']])}
    <div class="gap20"></div>
    <div class="cue">${I('volume', 18)}<q>Run now. Slow enough to chat.</q></div>
`, foot:liveControls()};
  const L = LIVE[c.stage], w = W[c.stage];
  return {time:'7:29', body:`
    <div class="live-top"><span class="rec"><i></i>Recording</span><span class="flex" style="gap:8px"><span class="chip">${I('gps', 13)}GPS good</span><span class="chip">${I('watch', 13)}Watch</span></span></div>
    <div class="gap16"></div>
    <div class="eyebrow">${L.label}</div>
    <div class="gap12"></div>
    <div class="flex" style="align-items:baseline;gap:8px"><span class="disp d1" ${L.bigLabel === 'Elapsed' ? `data-clock="up" data-t="${Math.round(c.stage === 2 ? 858 : 1062)}"` : ''}>${L.big}</span>${L.bigU ? `<span class="unit" style="font-size:24px">${L.bigU}</span>` : ''}</div>
    <div class="sm mute" style="margin-top:10px">${L.chip ? `<span class="chip ${L.chip[0]}">${I('check', 13)}${L.chip[1]}</span>` : L.sub}</div>
    <div class="gap24"></div>
    ${kpis(L.k)}
    <div class="gap32"></div>
    ${strip(w.today, {at:L.at, atLabel:L.clock})}
    <div class="gap12"></div>
    <div class="cue">${I('volume', 18)}<q>${L.cue.replace(/[“”]/g, '')}</q></div>`, foot:liveControls()};
});

def('live-spike', {group:'Run', title:'Live: spike guard', notab:true, note:'The strongest new injury evidence (5,205 runners): one run more than 10% past your longest in 30 days raises risk; week-to-week increases didn’t. Spoken and shown, never blocking.'}, (c) => {
  const lo = c.stage <= 2;
  const d = lo ? {at:'6.0', km:'5.4', pct:'11', t:'41:52', p:'6:58', home:'0.8', time:'8:48'} : {at:'13.7', km:'12.4', pct:'10', t:'1:24:10', p:'6:08', home:'1.2', time:'9:46'};
  return {time:d.time, body:`
    <div class="live-top"><span class="rec"><i></i>${lo ? 'Long run' : 'Sunday long run'}</span><span class="chip">${I('volume', 13)}Spoken aloud</span></div>
    <div class="gap12"></div>
    <div class="banner">
      <div class="flex" style="gap:8px;color:var(--warn)">${I('alert', 18)}<span class="eyebrow" style="color:var(--warn)">Spike guard</span></div>
      <div class="gap8"></div>
      <div class="bt">You’re at ${d.at} km, ${d.pct}% past your longest run this month (${d.km} km).</div>
      <div class="bs">One big jump in a single run raises injury risk more than a busy week does. This is a good place to turn for home: ${d.home} km from here.</div>
      <div class="gap12"></div>
      <div class="duo"><button class="btn" style="height:46px;font-size:15px">${I('pin', 17)}Route home</button><button class="btn2" style="height:46px;font-size:15px">Keep going</button></div>
    </div>
    <div class="gap20"></div>
    <div class="eyebrow">Elapsed</div><div class="gap8"></div>
    <div class="disp d2">${d.t}</div>
    <div class="gap20"></div>
    ${kpis([[d.at, 'km', 'Distance'], [d.p, '/km', 'Pace'], ['143', 'bpm', 'Heart · easy']])}
    <div class="gap24"></div>
    ${strip(lo ? 'long40' : 'long80', {at:lo ? 40 : 80, atLabel:'Plan done', labels:false})}
    <div class="xs faint" style="margin-top:10px">Planned run finished ${lo ? '2' : '4'} minutes ago.</div>`, foot:liveControls()};
});

def('live-low', {group:'Run', title:'Live: low-confidence data', notab:true, stage:3, note:'Honest numbers: wrist heart rate lags a chest strap by 10–20 s in pace changes, and GPS drops under trees. The app says so, switches the source, and marks the numbers.'}, (c) => ({time:'7:52', body:`
  <div class="live-top"><span class="rec"><i></i>Recording</span><span class="chip">Stride 4 of 6</span></div>
  <div class="gap12"></div>
  <div class="rows" style="border-top:1px solid var(--rule);border-bottom:1px solid var(--rule)">
    <div class="row" style="min-height:0;padding:10px 0;align-items:flex-start"><span style="color:var(--warn);margin-top:1px">${I('heart', 17)}</span><div class="grow sm"><b class="w6">Heart rate: low confidence.</b> <span class="mute">Wrist sensors lag in short fast bursts. Using effort for the strides.</span></div></div>
    <div class="row" style="min-height:0;padding:10px 0;align-items:flex-start"><span style="color:var(--warn);margin-top:1px">${I('gps', 17)}</span><div class="grow sm"><b class="w6">GPS weak under trees.</b> <span class="mute">Pace from your steps until it’s back.</span></div></div>
  </div>
  <div class="gap20"></div>
  <div class="eyebrow">Stride · fast and relaxed</div><div class="gap12"></div>
  <div class="flex" style="align-items:baseline;gap:8px"><span class="disp d1">0:12</span><span class="unit" style="font-size:24px">left</span></div>
  <div class="sm mute" style="margin-top:10px">then walk back 1:00</div>
  <div class="gap24"></div>
  ${kpis([['36:08', '', 'Elapsed'], ['≈5.93', 'km', 'Distance · from steps'], ['~150', 'bpm', 'Heart · low confidence']], [2])}
  <div class="gap32"></div>
  ${strip('e40s', {at:36.13, atLabel:'36:08'})}`, foot:liveControls()}));

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
    ${topnav('back', '', `<span class="flex"><button class="ib" aria-label="Share">${I('share', 21)}</button><button class="ib" aria-label="More">${I('more', 22)}</button></span>`)}
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
    <div class="sec"><div class="tagset"><button>${'Share card'}</button><button>Export FIT</button><button>Send to Strava</button></div></div>`};
});

def('niggle', {group:'Run', title:'Niggle: plan eased', notab:true, stage:3, note:'Pain rules from the physio pain-monitoring model: up to about 5/10 while running is acceptable if it settles by next morning. Rising next morning → reduce and suggest a physio. Never a diagnosis; copy needs clinical review.'}, (c) => ({body:`
  ${topnav('back', 'Left knee')}
  <div class="eyebrow">Niggle check-in · Thu 07:30</div>
  <div class="gap8"></div>
  <div class="h1">It’s up this morning, so we’ve eased the week.</div>
  <div class="gap20"></div>
  <div class="rows">
    ${[['Wed 08:05','After the run',4],['Thu 07:30','This morning',5]].map(([t, l, v], i) => `<div class="row" style="gap:14px"><div style="width:104px"><div class="sm w6">${l}</div><div class="xs faint">${t}</div></div>
      <div class="grow"><div class="bar" style="height:8px"><i style="width:${v * 10}%;background:${i ? 'var(--warn)' : 'var(--ink2)'}"></i></div></div><div class="d5 disp" style="width:44px;text-align:right">${v}<span class="unit" style="font-size:13px">/10</span></div></div>`).join('')}
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
  <div class="h2" style="margin-top:8px">Non-stop. Twice.</div>
  <div class="gap12"></div>
  <div class="lead">Ten weeks ago your longest run was 1 minute. You’re a runner now.</div>
  <div class="gap24"></div>
  ${ladderBar(2, .04)}
  <div class="sec" style="margin-top:24px">
    <div class="hd"><span class="eyebrow">Stage 2 · Build adds</span></div>
    <div class="rows">${[['clock','Pace on your runs','Shown, never a target on easy days'],['shield','Spike guard on long runs','Warns before a jump in distance'],['heart','Easy-pace check','Flags easy runs done too hard'],['dumbbell','Strength twice a week','15 min, bodyweight'],['target','A first 5K','parkrun works']].map(([ic, t, s]) => `<div class="row"><span class="ic">${I(ic, 18)}</span><div class="grow"><div class="t">${t}</div><div class="s">${s}</div></div></div>`).join('')}</div>
  </div>`,
  foot:`<button class="btn" data-go="plan">See my Build plan</button><div class="hint">Or stay at Start for a few more weeks</div>`}));

def('runs', {group:'Runs', title:'Runs', tab:'runs', note:'History with the same strips, records and a full export you own (FIT, GPX, TCX).'}, (c) => {
  const w = W[c.stage];
  const done = w.week.filter(r => r[2] === 'done' && !S[r[1]].strength);
  const last = c.stage === 1 ? [['Fri 23','rw1','25 min','felt 4'],['Wed 21','rw1','25 min','felt 5'],['Mon 19','rw1','25 min','felt 5']]
    : c.stage === 2 ? [['Sat 24','long40','5.4 km','7:22'],['Wed 21','e25','3.5 km','7:12'],['Mon 19','e25','3.4 km','7:18']]
    : c.stage === 3 ? [['Sun 25','long80','12.4 km','6:27'],['Fri 23','tempo','8.3 km','6:01'],['Wed 21','e35','5.6 km','6:16'],['Tue 20','hills','7.0 km','5:41']]
    : c.stage === 4 ? [['Sun 25','long32','30.0 km','5:24'],['Sat 24','e40','7.6 km','5:16'],['Thu 22','e45','8.4 km','5:21']]
    : [['Sun 25','long26','26.1 km','4:36'],['Sat 24','tempo25','10.8 km','4:10'],['Fri 23','e40','8.6 km','4:39']];
  const rec = c.stage === 1 ? [['Longest non-stop','1:30','today'],['Runs completed','8','since 12 Oct'],['Weeks running','3','in a row']]
    : c.stage === 2 ? [['Longest run','5.4 km','Sat 24 Oct'],['Fastest 1K','6:31','Sat 10 Oct'],['5K','—','parkrun 14 Nov']]
    : c.stage === 3 ? [['5K','24:51','12 Sep · parkrun'],['10K','52:58','4 Oct'],['Longest run','12.4 km','25 Oct'],['Fastest 1K','4:38','12 Sep']]
    : c.stage === 4 ? [['Half marathon','1:36:12','Big Half · 7 Sep'],['10K','44:30','Jul'],['Longest run','32.0 km','11 Oct']]
    : [['Marathon','2:57:40','London · Apr 2026'],['Half marathon','1:22:05','Feb'],['10K','37:12','Oct']];
  return {body:`
    <div class="page-t">Runs</div>
    <div class="sm mute">${c.stage === 1 ? '8 runs since 12 Oct' : '41 runs since August · ' + w.streak}</div>
    <div class="sec nob" style="padding-top:14px">
      <div class="hd"><span class="eyebrow">This week</span><span class="r">${done.length} run${done.length === 1 ? '' : 's'}</span></div>
      <div class="wk rows">${done.map(([d, k, , n]) => `<div class="row" data-go="summary"><div class="day">${d}</div><div class="nm">${S[k].name}</div><div class="sp">${mini(k, 80)}</div><div class="stt">${n.replace('✓ ', '')}</div></div>`).join('')}</div>
    </div>
    <div class="sec">
      <div class="hd"><span class="eyebrow">Last week</span><span class="r">${last.length} runs</span></div>
      <div class="wk rows">${last.map(([d, k, a, b]) => `<div class="row" data-go="summary"><div class="day" style="width:48px">${d}</div><div class="nm">${S[k].name}<small>${a} · ${b}${c.stage >= 2 && c.stage !== 1 ? ' /km' : ''}</small></div><div class="sp">${mini(k, Math.max(80, S[k].min))}</div><div class="stt">${I('chevR', 16, 'class="chev"')}</div></div>`).join('')}</div>
    </div>
    <div class="sec">
      <div class="hd"><span class="eyebrow">Records</span></div>
      <div class="rows">${rec.map(([n, v, s]) => `<div class="row" style="min-height:48px"><div class="grow t">${n}</div><div class="v">${v}<small>${s}</small></div></div>`).join('')}</div>
    </div>
    <div class="sec"><button class="btn2">${I('download', 18)}Export all runs · FIT, GPX, TCX</button></div>`, tab:'runs'};
});
