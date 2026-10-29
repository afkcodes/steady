/* One icon family: 24 grid, 1.6 stroke, round caps (Lucide-style, drawn for Steady). */
const ICONS = {
  today:'<path d="M12 3.5v2.5M5.6 7.1l1.6 1.6M18.4 7.1l-1.6 1.6M3 15.5h2.2M18.8 15.5H21M7.2 15.5a4.8 4.8 0 0 1 9.6 0M3 19.5h18"/>',
  plan:'<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  runs:'<circle cx="6" cy="18.5" r="2"/><circle cx="18" cy="5.5" r="2"/><path d="M8 18.5h8.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H16"/>',
  progress:'<path d="M4 20.5h16M7 16.5v-4M12 16.5V8M17 16.5v-7"/>',
  you:'<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/>',
  play:'<path d="M7.5 4.8v14.4L19 12z" fill="currentColor" stroke="none"/>',
  pause:'<rect x="6.5" y="5" width="3.6" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="13.9" y="5" width="3.6" height="14" rx="1" fill="currentColor" stroke="none"/>',
  stop:'<rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" stroke="none"/>',
  chevR:'<path d="m9.5 6 6 6-6 6"/>', chevL:'<path d="m14.5 6-6 6 6 6"/>', chevD:'<path d="m6 9.5 6 6 6-6"/>', chevU:'<path d="m6 14.5 6-6 6 6"/>',
  x:'<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
  check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  ask:'<path d="M20 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5z"/><path d="M9.6 9.6a2.4 2.4 0 1 1 3.3 2.2c-.6.3-.9.8-.9 1.4M12 15.6v.1"/>',
  talk:'<path d="M20 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5z"/><path d="M8.5 10h7M8.5 13.2h4.5"/>',
  move:'<path d="M4 12h11.5M12 7.5l4.5 4.5-4.5 4.5M20 5v14"/>',
  swap:'<path d="M7.5 4 4 7.5 7.5 11M4 7.5h13M16.5 20l3.5-3.5-3.5-3.5M20 16.5H7"/>',
  easier:'<path d="M12 4.5v14M6.5 13l5.5 5.5 5.5-5.5"/>',
  watch:'<rect x="6" y="6.5" width="12" height="11" rx="3"/><path d="M9 6.5 9.6 3h4.8l.6 3.5M9 17.5l.6 3.5h4.8l.6-3.5M12 9.5V12l1.5 1"/>',
  lock:'<rect x="5" y="11" width="14" height="9.5" rx="2.2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  lap:'<path d="M5.5 21V4M5.5 4h11l-2.2 4 2.2 4h-11"/>',
  volume:'<path d="M4 9.5v5h3.5L12 18V6L7.5 9.5z"/><path d="M15.5 9.2a4 4 0 0 1 0 5.6M18 6.7a7.5 7.5 0 0 1 0 10.6"/>',
  alert:'<path d="M12 4.2 2.9 19.6h18.2z"/><path d="M12 10v4.3M12 16.9v.2"/>',
  info:'<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8v.2"/>',
  heart:'<path d="M12 19.5s-7.5-4.5-7.5-9.8A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.5 2.3c0 5.3-7.5 9.8-7.5 9.8z"/>',
  moon:'<path d="M19.5 14.6A7.8 7.8 0 1 1 9.4 4.5a6.2 6.2 0 0 0 10.1 10.1z"/>',
  drop:'<path d="M12 3.5s6 6.4 6 10.9a6 6 0 0 1-12 0C6 9.9 12 3.5 12 3.5z"/>',
  therm:'<path d="M14 14.3V5.5a2 2 0 0 0-4 0v8.8a4 4 0 1 0 4 0z"/><path d="M12 16.5V10"/>',
  mountain:'<path d="m2.5 19 6.8-10.5 4.2 6.2 2.6-3.6L21.5 19z"/>',
  share:'<path d="M12 14.5V3.8M8 7.6l4-3.8 4 3.8M5 12.5v7.5h14v-7.5"/>',
  download:'<path d="M12 3.8v11M8 11l4 4 4-4M5 19.5h14"/>',
  bt:'<path d="m7 7.5 10 9-5 4.5V3l5 4.5-10 9"/>',
  phone:'<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 18h2"/>',
  shield:'<path d="M12 3.5 5 6.2v5.5c0 4.4 3 7.6 7 8.8 4-1.2 7-4.4 7-8.8V6.2z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
  eyeoff:'<path d="M3.5 3.5l17 17M10.4 6.2A9.6 9.6 0 0 1 12 6c5 0 8.4 4.4 9.4 6-.5.8-1.5 2.2-2.9 3.4M6.4 7.9C4.4 9.3 3.1 11.1 2.6 12c1 1.6 4.4 6 9.4 6 1.4 0 2.7-.3 3.9-.9"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
  pin:'<path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/>',
  shoe:'<path d="M3 16.8V9.6c0-.5.5-.9 1-.7l3.4 1 1.6-2.6 3 1.3c1.3 2.4 3.4 3.7 6.2 4.2 1.7.3 2.8 1.6 2.8 3.2v.8z"/><path d="M3 19.5h18M9.2 11.4l1.5.6M11.2 9.9l1.5.6"/>',
  dumbbell:'<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9.5v5M20.5 9.5v5M6.5 12h11"/>',
  clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  cloud:'<path d="M7 18.5h10.2a4 4 0 0 0 .4-8A5.6 5.6 0 0 0 6.9 11a3.75 3.75 0 0 0 .1 7.5z"/>',
  sliders:'<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
  plus:'<path d="M12 5v14M5 12h14"/>', minus:'<path d="M5 12h14"/>',
  arrowR:'<path d="M5 12h14M13 6l6 6-6 6"/>', arrowUp:'<path d="M12 19V5M6 11l6-6 6 6"/>', arrowDn:'<path d="M12 5v14M6 13l6 6 6-6"/>',
  undo:'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',
  book:'<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"/>',
  gel:'<path d="M8 3h8l-1.2 3.5v11a2.8 2.8 0 0 1-5.6 0v-11z"/><path d="M9.2 10h5.6"/>',
  users:'<circle cx="9" cy="8.5" r="3.5"/><path d="M3 20a6 6 0 0 1 12 0M16 5a3.5 3.5 0 0 1 0 7M18 14.5a5.5 5.5 0 0 1 3 5.5"/>',
  flask:'<path d="M9 3h6M10 3v6.2L4.6 18.8A1.5 1.5 0 0 0 5.9 21h12.2a1.5 1.5 0 0 0 1.3-2.2L14 9.2V3"/><path d="M7.2 15h9.6"/>',
  bolt:'<path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/>',
  repeat:'<path d="M4 12a8 8 0 0 1 13.7-5.7L20 8.5M20 4v4.5h-4.5M20 12a8 8 0 0 1-13.7 5.7L4 15.5M4 20v-4.5h4.5"/>',
  map:'<path d="M9 4.5 3.5 6.5v13L9 17.5l6 2 5.5-2v-13L15 6.5zM9 4.5v13M15 6.5v13"/>',
  gps:'<circle cx="12" cy="12" r="6.5"/><circle cx="12" cy="12" r="2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
  bell:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
  more:'<circle cx="5.5" cy="12" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="18.5" cy="12" r="1.3" fill="currentColor"/>',
  target:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
  file:'<path d="M14 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5z"/><path d="M14 3.5v5h5"/>',
  link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  body:'<circle cx="12" cy="4.8" r="2"/><path d="M8 21l1.6-6.5L12 13l2.4 1.5L16 21M7 10.5l5-2.5 5 2.5M12 8v5"/>',
  story:'<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.6" cy="7.4" r=".9" fill="currentColor"/>',
  chat:'<path d="M4.5 18.8V7a2.5 2.5 0 0 1 2.5-2.5h10A2.5 2.5 0 0 1 19.5 7v7a2.5 2.5 0 0 1-2.5 2.5H8.3z"/>',
  upr:'<path d="M7 17L17 7M9 7h8v8"/>',
  phones:'<path d="M4.5 15v-2.5a7.5 7.5 0 0 1 15 0V15"/><rect x="3.5" y="14" width="4" height="6" rx="1.3"/><rect x="16.5" y="14" width="4" height="6" rx="1.3"/>',
  sparkle:'<path d="M12 3.5l1.8 5 5 1.8-5 1.8-1.8 5-1.8-5-5-1.8 5-1.8z"/>',
};
function I(name, size = 20, extra = '') {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" ${extra}>${ICONS[name] || ''}</svg>`;
}

/* ───────── Data: one runner (Priya), seen at each stage of the ladder ─────────
   Effort levels for the session strip:
   0 walk / very easy · 1 easy, full sentences · 2 steady, short phrases · 3 hard, a few words */
const EFFORT = [
  {k:'Walk', talk:'Walk or very easy'},
  {k:'Easy', talk:'Full sentences'},
  {k:'Steady', talk:'Short phrases'},
  {k:'Hard', talk:'A few words'},
];
const R = (n, pat) => Array.from({length:n}, () => pat).flat();

const STAGES = [
  {n:1, name:'Start', who:'Never run, or back after years', goal:'Run 30 minutes non-stop'},
  {n:2, name:'Build', who:'Can run 30 minutes', goal:'Run 3–4 times a week; a first 5K'},
  {n:3, name:'Develop', who:'Regular 5K runner', goal:'10K to half marathon; first faster sessions'},
  {n:4, name:'Perform', who:'Half and marathon runner', goal:'Race-specific blocks to a target time'},
  {n:5, name:'Compete', who:'Experienced or coached', goal:'A full season of races'},
];

/* Sessions: blocks are [effort, minutes] */
const S = {
  rw1:   {name:'Run 1 · walk 1½', min:25, blocks:[[0,5],...R(8,[[1,1],[0,1.5]])], labels:[[0,5,'Walk','5 min'],[5,25,'Run 1 · walk 1½','8 times']]},
  rw15:  {name:'Run 1½ · walk 1½', min:25, blocks:[[0,5],...R(6,[[1,1.5],[0,1.5]]),[0,2]], labels:[[0,5,'Walk','5 min'],[5,23,'Run 1½ · walk 1½','6 times']]},
  walk30:{name:'Walk 30', min:30, blocks:[[0,30]], labels:[[0,30,'Brisk walk','30 min']]},
  restart:{name:'Easy 20', min:20, blocks:[[0,3],[1,14],[0,3]], labels:[[0,3,'Walk','3'],[3,17,'Easy','14 min']]},
  e25:   {name:'Easy 25', min:25, blocks:[[0,3],[1,19],[0,3]]},
  e30w:  {name:'Easy 30', min:30, blocks:[[0,3],[1,24],[0,3]], labels:[[0,3,'Walk','3'],[3,27,'Easy run','24 min'],[27,30,'Walk','3']]},
  long40:{name:'Long 40', min:40, blocks:[[0,3],[1,34],[0,3]]},
  e35:   {name:'Easy 35', min:35, blocks:[[1,35]]},
  hills: {name:'Hills 8 × 45 s', min:40, blocks:[[1,12],...R(8,[[3,.75],[0,1.5]]),[1,10]]},
  e40s:  {name:'Easy 40 + strides', short:'Easy + strides', min:40, blocks:[[1,32],...R(6,[[3,1/3],[0,1]])], labels:[[0,32,'Easy run','32 min'],[32,40,'Strides','6 × 20 s']]},
  tempo: {name:'Tempo 3 × 8 min', short:'Tempo 3 × 8', min:50, blocks:[[1,12],...R(3,[[2,8],[1,2]]),[1,8]], labels:[[0,12,'Easy','12'],[12,42,'3 × 8 min steady','2 min easy between'],[42,50,'Easy','8']]},
  long80:{name:'Long 80', min:80, blocks:[[1,80]]},
  e50:   {name:'Easy 50', min:50, blocks:[[1,50]]},
  int5:  {name:'5 × 1 km', min:56, blocks:[[1,15],...R(5,[[3,4.2],[0,2]]),[1,10]]},
  mp60:  {name:'Steady 60 · 3 × 10 min', short:'Marathon pace', min:60, blocks:[[1,12],...R(3,[[2,10],[1,3]]),[1,9]], labels:[[0,12,'Easy','12'],[12,51,'3 × 10 min at marathon pace','3 min easy between'],[51,60,'Easy','9']]},
  e45:   {name:'Easy 45 + strength', short:'Easy 45 + gym', min:45, blocks:[[1,45]]},
  e40:   {name:'Easy 40', min:40, blocks:[[1,40]]},
  long32:{name:'Long 32 km · fuel 70 g/h', short:'Long 32 km', min:165, blocks:[[1,120],[2,35],[1,10]]},
  e60:   {name:'Easy 60', min:60, blocks:[[1,60]]},
  e50s:  {name:'Easy 50 + strides', short:'Easy + strides', min:50, blocks:[[1,44],...R(4,[[3,1/3],[0,1.2]])]},
  i800:  {name:'6 × 800 m', min:50, blocks:[[1,15],...R(6,[[3,2.75],[0,1.5]]),[1,9.5]], labels:[[0,15,'Warm-up','15 + drills'],[15,40.5,'6 × 800 m at 3:26 /km','90 s jog between'],[40.5,50,'Easy','10']]},
  tempo25:{name:'Tempo 25', min:45, blocks:[[1,12],[2,25],[1,8]]},
  long26:{name:'Long 26 km', min:120, blocks:[[1,120]]},
  str15: {name:'Strength 15', strength:true}, str20:{name:'Strength 20', strength:true},
};

const DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

/* Per-stage world */
const W = {
1:{
  label:'Week 3 of 10', goalLine:'30 minutes non-stop', today:'rw15',
  hero:{eyebrow:'Today’s run', title:'Run 1½, walk 1½', big:'25', unit:'min', talk:'Full sentences the whole way. Slow is right.', pace:null},
  why:{chip:'Up from 1 min', text:'Monday felt <b>4 out of 10</b>, so each run gets 30 seconds longer.'},
  week:[
    ['Mon','rw1','done','✓ felt 4/10'],['Tue',null,'rest'],['Wed','rw15','today'],['Thu',null,'rest'],
    ['Fri','rw15','plan'],['Sat',null,'rest'],['Sun','walk30','plan','optional']],
  weekSum:'1 of 3 runs',
  insight:{text:'You ran <mark>8 minutes</mark> on Monday, in 1-minute pieces. Three weeks ago it was 4.', link:'progress'},
  ladder:{p:.12, checks:[['Run 30 min non-stop','Longest so far: 1½ min',.05],['Do it twice, rated easy to moderate','0 of 2',0]]},
  weeks:{label:'Minutes running', unit:'min', blk:4, vals:[12,16,8], part:true, x:['Wk 1','Wk 2','Wk 3']},
  streak:'3 weeks running',
},
2:{
  label:'Week 5 · first 5K on Sat 14 Nov', goalLine:'Hackney Marshes parkrun, 14 Nov', today:'e30w',
  hero:{eyebrow:'Today’s run', title:'Easy run', big:'30', unit:'min', talk:'Full sentences', pace:'about 6:50–7:20 /km'},
  why:{chip:'Easy-pace check', text:'Your last <b>2 easy runs</b> drifted into short-phrases effort. Today, slow down on the hills.'},
  week:[
    ['Mon','e25','done','✓ 3.6 km'],['Tue','str15','done','✓ done'],['Wed','e30w','today'],['Thu',null,'rest'],
    ['Fri','str15','plan'],['Sat','long40','plan','long'],['Sun',null,'rest']],
  weekSum:'1 of 3 runs',
  insight:{text:'Saturday’s 40 min is <mark>9% longer</mark> than your longest run this month. Under 10%, so it stays.', link:'session'},
  ladder:{p:.55, checks:[['Run consistently: 8 of the last 10 weeks','5 of 10 so far',.5],['Get a 5K time','parkrun on Sat 14 Nov',0]]},
  weeks:{label:'Time running', unit:'min', vals:[62,70,0,74,88,96,25], x:['22 Sep','29','6 Oct','13','20','27','Now'], miss:2},
  streak:'4 weeks running',
},
3:{
  label:'Week 3 of 20 · Bath Half', goalLine:'Bath Half, Sun 15 Mar · under 2:00', today:'e40s',
  hero:{eyebrow:'Today’s run', title:'Easy run + strides', big:'40', unit:'min', talk:'Full sentences', pace:'6:05–6:35 /km'},
  why:{chip:'Moved from Wed', moved:true, text:'Tempo moved to Friday. You rated Tuesday’s hills <b>8/10</b>, harder than planned, so today stays easy.'},
  week:[
    ['Mon','e35','done','✓ 5.7 km'],['Tue','hills','done','✓ 7.2 km'],['Wed','e40s','today'],['Thu','str20','plan'],
    ['Fri','tempo','moved','moved'],['Sat',null,'rest'],['Sun','long80','plan','13.1 km']],
  weekSum:'2 of 5 sessions',
  insight:{text:'Same effort, <mark>12 s/km faster</mark> than in August.', sub:'Easy pace at 145 bpm: 6:02 /km (Aug: 6:14)', link:'metric'},
  ladder:{p:.3, checks:[['Long run of 18 km+ with no spike','Longest so far: 13.1 km',.72],['Critical speed steady for 4 weeks','2 of 4 weeks',.5],['5K under 26 min','Done · 24:51 on 12 Sep',1]]},
  weeks:{label:'Time running', unit:'h', vals:[3.1,3.4,2.2,3.6,3.9,3.5,4.1,4.3,3.8,4.4,4.6,1.4], x:['Aug','','','','Sep','','','','Oct','','','Now'], part:true},
  streak:'11 weeks running',
},
4:{
  label:'Week 13 of 18 · Valencia', goalLine:'Valencia Marathon, Sun 6 Dec · 3:30', today:'mp60',
  hero:{eyebrow:'Today’s run', title:'Steady 60, with 3 × 10 min', big:'60', unit:'min', talk:'Short phrases in the 10s', pace:'4:58 /km in the 10s'},
  why:{chip:'As planned', text:'HRV <b>49 ms</b> and sleep <b>7 h 10</b> are inside your normal. You said you feel <b>OK</b>. No change.'},
  recovery:{hrv:49, lo:46, hi:60, sleep:'7 h 10', rhr:48},
  week:[
    ['Mon','e50','done','✓ 9.4 km'],['Tue','int5','done','✓ 12.6 km'],['Wed','mp60','today'],['Thu','e45','plan'],
    ['Fri',null,'rest'],['Sat','e40','plan'],['Sun','long32','plan','32 km']],
  weekSum:'2 of 6 sessions',
  insight:{text:'Late in long runs you now slow <mark>4%</mark> at the same heart rate. In September it was 7%.', link:'durability'},
  ladder:{p:1, checks:[['There’s no ceiling at Perform','Move to Compete when you want a full season',1]]},
  weeks:{label:'Time running', unit:'h', vals:[5.8,6.1,6.6,5.2,6.9,7.2,7.6,6.0,7.9,8.1,6.4,2.1], x:['Aug','','','','Sep','','','','Oct','','','Now'], part:true},
  streak:'34 weeks running',
},
5:{
  label:'Spring season · London', goalLine:'London Marathon, Sun 26 Apr · 2:52', today:'i800',
  hero:{eyebrow:'Today’s run', title:'6 × 800 m', big:'50', unit:'min', talk:'A few words in the reps', pace:'3:26 /km · 318–326 W'},
  why:{chip:'Coach moved this', moved:true, text:'Sam (coach) moved the track session from Thursday: <b>“Track’s free Wednesday, Thursday stays easy.”</b>'},
  recovery:{hrv:71, lo:64, hi:82, sleep:'7 h 45', rhr:41},
  week:[
    ['Mon','e60','done','✓ 12.1 km'],['Tue','e50s','done','✓ 10.2 km'],['Wed','i800','today'],['Thu','e45','plan'],
    ['Fri','e40','plan'],['Sat','tempo25','plan'],['Sun','long26','plan','26 km']],
  weekSum:'2 of 7 sessions',
  insight:{text:'Your 800 m reps averaged <mark>4 s faster</mark> than the same session in September, at the same power.', link:'summary'},
  ladder:{p:1, checks:[['Top of the ladder','Season mode: several races, coach and lab tools',1]]},
  weeks:{label:'Time running', unit:'h', vals:[7.9,8.4,8.8,6.2,8.9,9.3,9.1,7.0,9.6,9.8,8.9,2.6], x:['Aug','','','','Sep','','','','Oct','','','Now'], part:true},
  streak:'2 years, 12 weeks',
},
};

/* Metrics that unlock by stage. grade: A/B/C · conf words */
const METRICS = [
  {s:1, until:2, id:'mins', name:'Minutes running this week', v:'8', u:'of 27 min', note:'Walking doesn’t count', g:'A'},
  {s:1, until:2, id:'longest', name:'Longest non-stop run', v:'1:30', u:'min', note:'Today: 1½ min, 6 times', g:'A'},
  {s:1, until:2, id:'feel', name:'How runs felt', v:'4, 5, 4', u:'out of 10', note:'Right where it should be', g:'A'},
  {s:2, until:3, id:'easy', name:'Easy-pace check', v:'2 of 4', u:'too hard', note:'Easy runs that drifted', g:'B', warn:true},
  {s:2, until:3, id:'spike', name:'Long-run spike guard', v:'+9%', u:'Sat', note:'Within 10% of your longest', g:'B'},
  {s:2, until:3, id:'pace2', name:'Average easy pace', v:'7:04', u:'/km', d:'8 s faster', note:'than 4 weeks ago', g:'B'},
  {s:3, id:'cs', name:'Critical speed', v:'5:05', u:'/km', d:'6 s faster', note:'since August · fairly sure', g:'B', go:'metric'},
  {s:3, id:'pred', name:'Half marathon prediction', v:'1:56–2:03', u:'', note:'likely 1:59 · fairly sure', g:'B', go:'predictor'},
  {s:3, id:'hr145', name:'Easy pace at 145 bpm', v:'6:02', u:'/km', d:'12 s faster', note:'than August', g:'C', go:'explain'},
  {s:3, id:'split', name:'Intensity split', v:'74 · 18 · 8', u:'%', note:'easy · steady · hard · pyramidal', g:'B'},
  {s:3, id:'load', name:'Fitness and fatigue', v:'Building', u:'', note:'Fatigue high · freshest on Sat', g:'C'},
  {s:3, id:'vo2', name:'VO₂max (from your watch)', v:'45–50', u:'', note:'rough estimate · shown as a range', g:'C'},
  {s:4, id:'dur', name:'Durability', v:'−4%', u:'after 75 min', d:'from −7%', note:'pace at the same heart rate', g:'C', go:'durability'},
  {s:4, id:'hrv', name:'Overnight HRV', v:'49', u:'ms', note:'inside your normal (46–60)', g:'C'},
  {s:4, id:'heat', name:'Heat response', v:'+2.1', u:'s/km per °C', note:'above 15 °C · learned from 9 runs', g:'C'},
  {s:4, id:'fuel', name:'Fuelling practised', v:'70', u:'g/h', note:'4 of 5 long runs at 60+ g/h', g:'B', go:'race'},
  {s:5, id:'power', name:'Critical power', v:'301', u:'W', note:'Stryd · not comparable across brands', g:'C'},
  {s:5, id:'dyn', name:'Ground contact time', v:'218', u:'ms', note:'trend only · no good or bad', g:'C'},
  {s:5, id:'dfa', name:'Aerobic threshold (lab)', v:'148', u:'bpm', note:'DFA-α1 · chest strap only · experimental', g:'C', lab:true},
];

const CHANGES = [
  {when:'Today, 06:10', who:'Plan', items:[['Wed','Tempo 3 × 8 min','Easy 40 + strides'],['Fri','Easy 35','Tempo 3 × 8 min']],
   because:[['RPE','Tue hills felt 8/10 (planned 6)']], open:true},
  {when:'Sat 24 Oct', who:'Plan', items:[['Sun','Long 85 min','Long 75 min']],
   because:[['Missed','You skipped Thursday’s easy run'],['Rule','We never add missed minutes back']]},
  {when:'Tue 20 Oct', who:'You', items:[['Thu','Easy 35 at 07:00','Easy 35 at 12:30']],
   because:[['If-then','“If it’s raining, I’ll run at lunch”']]},
  {when:'Sun 11 Oct', who:'Plan', items:[['Sun','Long 75 at 6:20 /km','Long 75 at 6:32 /km']],
   because:[['Heat','22 °C forecast at 11:00 · your heat response +2 s/km per °C']]},
];

/* Plan panel and Runs history, per stage */
const PLANP = {
  1:{name:'30 min non-stop', sub:'Run/walk · 3 days a week', wk:3, of:10},
  2:{name:'First 5K', sub:'Hackney Marshes parkrun · Sat 14 Nov', wk:5, of:8},
  3:{name:'Bath Half', sub:'Under 2:00 · Sun 15 Mar', wk:3, of:20},
  4:{name:'Valencia', sub:'Marathon in 3:30 · Sun 6 Dec', wk:13, of:18},
  5:{name:'London', sub:'Marathon in 2:52 · Sun 26 Apr', wk:6, of:20},
};
const WK8 = ['7 Sep','14','21','28','5 Oct','12','19','Now'];
const HIST = {
  1:{runs:[0,0,0,0,0,3,4,1], goal:3, line:'8 runs · 3 h 20 m · goal met both full weeks',
     mix:{label:'Run and walk · this week', right:'32% running', parts:[[1,8],[0,17]], sub:'8 min running, 17 min walking. Running grows 30 s at a time.'},
     trend:{label:'Longest non-stop run', right:'1:30 now', vals:[1,1,1,1,1,1,1.5], min:0},
     wk:[['Mon','26','rw1','2.4 km · run/walk · felt 4','25:00']],
     last:[['Sat','24','rw1','2.5 km · run/walk · felt 4','25:00'],['Fri','23','rw1','2.5 km · run/walk · felt 4','25:00'],['Wed','21','rw1','2.4 km · run/walk · felt 5','25:00'],['Mon','19','rw1','2.3 km · run/walk · felt 5','25:00']]},
  2:{runs:[2,3,3,3,0,3,3,1], goal:3, line:'18 runs · 9 h 40 m · goal met 5 of 7 weeks',
     mix:{label:'Easy and steady · last 4 weeks', right:'81% easy', parts:[[1,81],[2,19]], sub:'At Build nearly all running is easy. Two easy runs drifted on hills.'},
     trend:{label:'Average easy pace', right:'7:04 /km now', vals:[36,40,42,45,48,52,56], min:30},
     wk:[['Mon','26','e25','3.6 km · 7:04 /km · RPE 4','25:28']],
     last:[['Sat','24','long40','5.4 km · 7:22 /km · RPE 5','39:48'],['Wed','21','e25','3.5 km · 7:12 /km · RPE 4','25:12'],['Mon','19','e25','3.4 km · 7:18 /km · RPE 4','24:50']]},
  3:{runs:[4,5,4,5,5,4,5,2], goal:5, line:'34 runs · 27 h 50 m · goal met 4 of 7 weeks',
     mix:{label:'Easy and hard · last 4 weeks', right:'74% easy', parts:[[1,74],[2,18],[3,8]], sub:'Aim for about 80% easy. Your easy runs drift on the hills.'},
     trend:{label:'Easy pace at 145 bpm', right:'6:02 /km now', vals:[26,27,29,30,32,35,38], min:20},
     wk:[['Tue','27','hills','7.2 km · avg 152 bpm · RPE 8','40:15'],['Mon','26','e35','5.7 km · avg 138 bpm · RPE 4','35:06']],
     last:[['Sun','25','long80','12.4 km · avg 143 bpm · RPE 6','1:20:04'],['Fri','23','tempo','8.3 km · avg 156 bpm · RPE 7','50:10'],['Wed','21','e35','5.6 km · avg 139 bpm · RPE 4','35:01'],['Tue','20','hills','7.0 km · avg 151 bpm · RPE 7','40:00'],['Mon','19','e40','6.4 km · avg 140 bpm · RPE 4','40:05']]},
  4:{runs:[5,6,6,4,6,6,5,2], goal:6, line:'40 runs · 52 h 30 m · goal met 4 of 7 weeks',
     mix:{label:'Easy and hard · last 4 weeks', right:'76% easy', parts:[[1,76],[2,16],[3,8]], sub:'Marathon blocks carry more steady running. Hard stays under 10%.'},
     trend:{label:'Easy pace at 145 bpm', right:'5:13 /km now', vals:[16,18,20,21,23,25,27], min:10},
     wk:[['Tue','27','int5','12.6 km · avg 158 bpm · RPE 8','56:20'],['Mon','26','e50','9.4 km · avg 136 bpm · RPE 3','50:02']],
     last:[['Sun','25','long32','30.0 km · avg 146 bpm · RPE 7','2:42:10'],['Sat','24','e40','7.6 km · avg 134 bpm · RPE 3','40:01'],['Thu','22','e45','8.4 km · avg 137 bpm · RPE 4','45:05']]},
  5:{runs:[6,7,7,5,7,7,6,2], goal:7, line:'47 runs · 66 h 10 m · goal met 4 of 7 weeks',
     mix:{label:'Easy and hard · last 4 weeks', right:'80% easy', parts:[[1,80],[2,5],[3,15]], sub:'Polarised, as Sam set it: mostly easy, some hard, little in between.'},
     trend:{label:'800 m rep average', right:'2:44 now', vals:[8,9,11,12,13,14,16], min:5},
     wk:[['Tue','27','e50s','10.2 km · avg 139 bpm · RPE 4','50:00'],['Mon','26','e60','12.1 km · avg 135 bpm · RPE 3','1:00:04']],
     last:[['Sun','25','long26','26.1 km · 4:36 /km · RPE 6','2:00:05'],['Sat','24','tempo25','10.8 km · 4:10 /km · RPE 7','45:02'],['Fri','23','e40','8.6 km · 4:39 /km · RPE 3','40:00']]},
};

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
  const h = o.h || (flat ? 32 : 64);
  const gap = mini ? 1.5 : V === 'profile' ? 0 : 3;
  const {L, tx} = stripLayout(blocks, px, mini, gap);
  const P = v => (v / px * 100).toFixed(3) + '%';
  const ht = e => flat ? 100 : H[e] * 100;
  const rad = w => flat ? Math.min(mini ? 1 : 2, w / 2) : mini ? Math.min(1.5, w / 2) : V === 'profile' ? Math.min(3, w / 2) : Math.min(6, w / 2);
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

const dur = m => m >= 60 ? Math.floor(m / 60) + ':' + String(Math.round(m % 60)).padStart(2, '0') + ':00' : Math.floor(m) + ':' + String(Math.round(m % 1 * 60)).padStart(2, '0');
function mainEffort(s) { return Math.max(...s.blocks.map(b => b[0])); }
/* The week as a dated list: done struck through, today with the amber Start square */
function weekRows(stage, opts = {}) {
  const w = opts.rows || W[stage].week;
  return `<div class="wk rows">${w.map(([d, k, st, note]) => {
    const s = S[k];
    const name = s ? (s.short || s.name) : 'Rest';
    const talk = s && !s.strength ? EFFORT[mainEffort(s)].talk : s ? (stage >= 3 ? 'Heavy legs and hops' : 'Bodyweight basics') : '';
    let meta = '', right = '';
    if (st === 'done') { meta = (note || '').replace('✓ ', ''); right = `<span class="stt">Done</span>`; }
    else if (st === 'today') { meta = 'Today · ' + (s.min ? dur(s.min) : ''); right = opts.noPlay ? `<span class="stt v">${dur(s.min)}</span>` : `<button class="play p46" data-go="live-ready" aria-label="Start run">${I('play', 20)}</button>`; }
    else if (st === 'moved') { meta = 'Moved from Wed · ' + talk.toLowerCase(); right = `<span class="chip cap">Moved</span>`; }
    else if (st === 'missed') { meta = talk; right = `<span class="chip cap">Missed</span>`; }
    else if (st === 'rest') { meta = ''; }
    else { meta = [note && !/^\d/.test(note) ? note[0].toUpperCase() + note.slice(1) : note, talk].filter(Boolean).join(' · '); right = s ? `<span class="stt v">${s.strength ? s.name.replace(/\D/g, '') + ':00' : dur(s.min)}</span>` : ''; }
    const go = s ? (st === 'today' ? 'session' : st === 'done' ? (s.strength ? 'strength' : 'summary') : s.strength ? 'strength' : 'session') : '';
    return `<div class="row ${st}" ${go ? `data-go="${go}"` : ''}>
      <div class="day">${d}</div><div class="nm"><div class="ttl">${name}</div>${meta ? `<small>${meta}</small>` : ''}</div>${right}</div>`;
  }).join('')}</div>`;
}
/* Seven squares: done filled, rest dark, today ringed in amber, the rest outlined */
function weekSquares(stage, rows) {
  const w = rows || W[stage].week;
  return `<div class="wsq">${w.map(([, , st]) => `<i class="${st === 'done' ? 'done' : st === 'rest' ? 'rest' : st === 'today' ? 'today' : ''}"></i>`).join('')}</div>
    <div class="wsq-l">${w.map(([d, , st]) => `<span class="${st === 'today' ? 'on' : ''}">${d[0]}</span>`).join('')}</div>`;
}
/* Stacked blocks, one per run, with a dashed goal line; this week in amber */
function stackChart(cols, goal, o = {}) {
  const H = o.h || 150, gap = 4, max = Math.max(goal, ...cols.map(c => c || 0)) + .6;
  const bh = (H - gap * (max - 1)) / max;
  return `<div class="stack" style="height:${H}px">${cols.map((n, i) => {
    const cur = i === cols.length - 1;
    if (!n) return `<div class="col miss"></div>`;
    return `<div class="col${cur ? ' cur' : ''}">${Array.from({length:n}, () => `<i style="height:${bh.toFixed(1)}px"></i>`).join('')}</div>`;
  }).join('')}<div class="goal" style="bottom:${(goal * (bh + gap) - gap / 2).toFixed(1)}px"></div></div>
  ${o.x ? `<div class="bars-x" style="gap:7px">${o.x.map((x, i) => `<span class="${i === o.x.length - 1 ? 'on' : ''}">${x}</span>`).join('')}</div>` : ''}`;
}
/* Effort mix as one segmented bar */
function mixBar(parts) {
  return `<div class="mix">${parts.filter(p => p[1] > 0).map(([e, v]) => `<i style="flex:${v};background:var(--e${e})"></i>`).join('')}</div>`;
}
/* A trend as blocks, latest in amber with its value */
function trendBlocks(vals, o = {}) {
  const mn = o.min != null ? o.min : Math.min(...vals) * .9, mx = Math.max(...vals);
  return `<div class="bars" style="height:${o.h || 86}px;gap:7px">${vals.map((v, i) => {
    const last = i === vals.length - 1, hh = Math.max(4, (v - mn) / (mx - mn) * 100);
    return `<div class="b${last ? ' on' : ''}" style="height:${o.zero && o.zero.includes(i) ? 3 : hh}%;${o.zero && o.zero.includes(i) ? 'background:var(--rule2)' : ''}"></div>`;
  }).join('')}</div>${o.x ? `<div class="bars-x" style="gap:7px">${o.x.map((x, i) => `<span class="${i === o.x.length - 1 ? 'on' : ''}">${x}</span>`).join('')}</div>` : ''}`;
}

function grade(g) { return `<span class="grade" title="Evidence grade">${g}</span>`; }
function gradeWords(g) { return {A:'Strong evidence', B:'Moderate evidence', C:'Early evidence'}[g]; }

function ladderBar(stage, p) {
  return `<div class="ladder">${STAGES.map(s => `<div class="st${s.n < stage ? ' done' : ''}">${s.n === stage ? `<i style="width:${Math.max(6, p * 100)}%"></i>` : ''}</div>`).join('')}</div>
  <div class="ladder-l">${STAGES.map(s => `<span class="${s.n === stage ? 'on' : ''}">${s.name}</span>`).join('')}</div>`;
}

function weekBars(cfg, opts = {}) {
  const vals = cfg.vals, H = opts.h || 120, max = Math.max(...vals) * 1.12;
  const last = vals.length - 1, sel = cfg.part ? last - 1 : last;
  const blk = cfg.unit === 'h' ? 1 : cfg.blk || 15, seg = blk / max * H;
  const fmt = v => cfg.unit === 'h' ? (Math.floor(v) + ' h ' + String(Math.round((v % 1) * 60)).padStart(2, '0')) : v + ' min';
  const blocks = (v, c) => {   // whole blocks, with a remainder too thin to read folded into the top one
    const n = Math.floor(v / blk + 1e-9), r = (v / blk - n) * seg, hs = Array(n).fill(seg);
    if (r >= 7 || !hs.length) hs.push(r); else hs[hs.length - 1] += r;
    return hs.map(h => `<i style="height:${Math.max(2, h - 3).toFixed(1)}px;background:${c}"></i>`).join('');
  };
  return `<div class="bars" style="height:${H}px;gap:6px">${vals.map((v, i) => {
    const cur = cfg.part && i === last, zero = !v;
    const c = cur ? 'var(--acc)' : i === sel ? 'var(--ink)' : 'var(--e2)';
    return `<div class="b${zero ? ' zero' : ' blocks'}" style="height:${zero ? 3 : (v / max * H).toFixed(1) + 'px'}">${zero ? '' : blocks(v, c)}${i === sel ? `<span class="cv"${i > vals.length - 3 ? ' style="left:auto;right:0;transform:none"' : ''}>${fmt(v)}</span>` : ''}${cur ? `<span class="pv" style="left:auto;right:0;transform:none">${fmt(v)}</span>` : ''}</div>`;
  }).join('')}</div><div class="bars-x" style="gap:6px">${cfg.x.map((x, i) => `<span class="${i === sel ? 'on' : ''}">${x}</span>`).join('')}</div>`;
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
    ${pts.map((v, i) => i < pts.length - 1 ? `<rect x="${X(i) - 2.5}" y="${Y(v) - 2.5}" width="5" height="5" fill="var(--ink)"/>` : '').join('')}
    <rect x="${lx - 6}" y="${ly - 6}" width="12" height="12" fill="var(--acc)" stroke="var(--bg)" stroke-width="2.5"/>
    ${o.tag ? `<g transform="translate(${lx + 8},${ly - 12})"><rect x="0" y="0" width="${o.tag.length * 8 + 12}" height="22" rx="2" fill="var(--ink)"/><text x="6" y="16.5" font-size="16" font-weight="700" fill="var(--bg)" font-family="Barlow Condensed">${o.tag}</text></g>` : ''}
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
  return `<div class="topnav">${l}<span class="tt">${title}</span>${right || '<span style="width:40px"></span>'}</div>`;
}

function evidence(g, conf) {
  return `<span class="gradechip">${grade(g)}${gradeWords(g)}${conf ? ' · ' + conf : ''}</span>`;
}

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
    <div class="flex" style="gap:10px">${logo()}<span class="cap" style="font-size:22px;letter-spacing:.14em">Steady</span></div>
    <div class="gap32"></div>
    <div class="hl" style="font-size:56px">One coach from your first run to your first marathon.</div>
    <div class="gap16"></div>
    <div class="lead">Plans in minutes and plain words. Every number explains itself. Works with just your phone.</div>
    <div class="gap24"></div>
    <div class="rows">${rows.map(([n, k], i) => `<div class="row" style="min-height:52px;padding:6px 0;gap:14px">
      <span class="cap faint" style="width:24px;font-size:18px;letter-spacing:0">0${i + 1}</span>
      <div style="width:84px"><div class="ttl" style="font-size:20px">${n}</div><div class="xs faint">${S[k].min} min</div></div>
      <div class="grow">${strip(k, {h:20, labels:false, w:Math.max(30, S[k].min / 60 * 100) + '%', px:2.1 * Math.max(30, S[k].min / 60 * 100)})}</div></div>`).join('')}</div>
    <div class="xs faint" style="margin-top:10px">Each bar is one run, to scale. Grey is easy, amber is hard.</div>`,
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
    <div class="hd"><span class="eyebrow">First week · from 2 Nov</span><span class="r">4 runs · 3 h 25</span></div>
    ${weekRows(3, {rows:[['Mon','e35','plan'],['Tue','hills','plan'],['Wed',null,'rest'],['Thu','str20','plan'],['Fri','tempo','plan'],['Sat',null,'rest'],['Sun','long80','plan','13.1 km']]})}
  </div>`,
  foot:`<button class="btn" data-go="today">Start my plan</button>`}));

function logo(size = 26) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 26 26"><rect width="26" height="26" rx="4" fill="var(--ink)"/>
    <rect x="5" y="15" width="4" height="5" fill="var(--bg)" opacity=".45"/><rect x="10.5" y="11" width="4" height="9" fill="var(--bg)"/><rect x="16" y="6" width="4" height="14" fill="var(--e3)"/></svg>`;
}

/* ── Today ── */
function dayHead(title = 'Morning.', right = '') {
  return `<div class="between" style="padding-top:12px;min-height:40px"><span class="eyebrow">Wednesday 28 October · 11° dry</span>${right || `<button class="ib" data-go="ask" aria-label="Ask Steady" style="margin-right:-8px">${I('ask', 24)}</button>`}</div>
    <div class="hl" style="font-size:54px">${title}</div>
    <div class="gap16"></div><hr class="thick">`;
}
function weekHero(stage, rows, label) {
  const w = rows || W[stage].week;
  const runs = w.filter(r => r[1] && !S[r[1]].strength && !(r[3] === 'optional'));
  const done = runs.filter(r => r[2] === 'done').length, total = runs.length;
  return `<div class="flex" style="gap:20px;align-items:flex-end;padding:24px 0 26px">
      <div class="disp" style="font-size:108px;letter-spacing:-.025em;margin-bottom:-6px">${done}<span class="dim">/${total}</span></div>
      <div class="grow"><div class="h3" style="margin-bottom:11px">${label || 'This week · ' + (total - done) + ' to go'}</div>${weekSquares(stage, w)}</div></div>`;
}
def('today', {group:'Today', title:'Today', tab:'today', note:'The week as one big fraction and seven squares, then today’s run in the one panel: the session drawn to scale and the amber Start square. Why it changed sits right under it. Ask lives in the typed line, like a search.'}, (c) => {
  const w = W[c.stage], h = w.hero, st = stg(c.stage), s = S[w.today];
  const rec = w.recovery;
  return {body:`
    ${dayHead()}
    ${weekHero(c.stage)}
    <div class="panel">
      <div class="between"><span class="eyebrow acc">Today’s run</span><button class="eyebrow" data-go="progress">Stage ${c.stage} · ${st.name}</button></div>
      <div class="flex" style="gap:14px;align-items:flex-start;margin-top:12px">
        <div class="grow"><div class="h1">${h.title}</div><div class="sm mute" style="margin-top:7px">${h.talk}${h.pace ? ' · ' + h.pace : ''}</div></div>
        <button class="play" data-go="live-ready" aria-label="Start run">${I('play', 26)}</button>
      </div>
      <div class="gap20"></div>
      <div data-go="session">${strip(w.today, {px:324})}</div>
    </div>
    <div class="gap24"></div>
    <div class="note"><div class="nt">${w.why.text}${w.why.moved ? ` <button class="link" data-go="changes">What changed</button>` : ''}</div></div>
    ${rec ? `<div class="gap16"></div><div class="flex sm" style="gap:12px">
      <span class="mute" style="white-space:nowrap">HRV <b class="w6" style="color:var(--ink)">${rec.hrv}</b> ms</span>
      <div class="grow">${rangeBar(rec.lo, rec.hi, rec.hrv, rec.lo - 10, rec.hi + 10)}</div>
      <span class="xs faint" style="white-space:nowrap">normal ${rec.lo}–${rec.hi}</span></div>` : ''}
    <div class="gap20"></div>
    <div class="links"><button class="ul" data-go="move">Move</button><button class="ul" data-go="move">Swap</button><button class="ul" data-go="move">Make it easier</button></div>
    <div class="gap8"></div>
    <button class="typeline" data-go="ask"><span>Ask — can I run with a cold?</span>${I('plus', 22)}</button>
    <div class="lhd"><span class="eyebrow">This week</span><span class="r">${w.weekSum}</span></div>
    ${weekRows(c.stage)}
    <div class="sec" style="margin-top:6px">
      <div class="h2" style="font-weight:500;line-height:1.3">${w.insight.text}</div>
      ${w.insight.sub ? `<div class="sm mute" style="margin-top:6px">${w.insight.sub}</div>` : ''}
      <div class="gap16"></div><button class="link" data-go="${w.insight.link === 'metric' ? 'explain' : w.insight.link}">Explain this</button>
    </div>
    <div class="sec" data-go="progress">
      <div class="hd" style="margin-bottom:12px"><span class="eyebrow">${c.stage < 5 && c.stage !== 4 ? 'Next: Stage ' + (c.stage + 1) + ' · ' + stg(c.stage + 1).name : 'Stage ' + c.stage + ' · ' + st.name}</span><span class="r">${w.ladder.checks.filter(x => x[2] >= 1).length} of ${w.ladder.checks.length} done</span></div>
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
    ${spike ? `<div class="sec"><div class="flex" style="gap:12px;align-items:flex-start"><span class="ic" style="width:34px;height:34px;border-radius:5px;background:var(--goodT);color:var(--good);display:flex;align-items:center;justify-content:center;flex:none">${I('shield', 18)}</span>
      <div class="grow"><div class="t w6">Spike guard: fine</div><div class="sm mute">${spike[0]}. ${spike[1]}. A single run more than 10% past that raises injury risk; today is well inside.</div><div class="gap8"></div>${evidence('B')}</div></div></div>` : ''}
    <div class="sec"><div class="hd"><span class="eyebrow">Audio cues</span></div>
      <div class="rows"><div class="row" data-go="cues"><span class="ic">${I('phones', 18)}</span><div class="grow"><div class="t">Every change spoken</div><div class="s">${c.stage === 1 ? '“Run now” / “Walk now”, three beeps before each' : 'Each block with its target, every km, three beeps before each change'}</div></div>${I('chevR', 16, 'class="chev"')}</div></div></div>
    <div class="sec"><div class="hd"><span class="eyebrow">On your wrist</span></div>
      <div class="rows"><div class="row"><span class="ic">${I('watch', 18)}</span><div class="grow"><div class="t">Apple Watch Ultra 2</div><div class="s">In the Workout app as “Steady · ${s.name}”</div></div><span class="chip good">${I('check', 13)}Sent 06:12</span></div></div></div>`,
    foot:`<button class="btn go" data-go="live-ready">${I('play', 20)}Start run</button>`};
});

/* ── Sheets over Today ── */
def('move', {group:'Today', title:'Can’t run today? (sheet)', base:'today', notab:true, note:'Move, swap, shorten or skip: one tap, consequences stated before you choose. We never add missed minutes back.'}, (c) => ({sheet:`
  <div class="h1">Can’t run today?</div>
  <div class="sm mute" style="margin:8px 0 16px">No problem. Here’s what each choice does to your week.</div>
  ${[['Move to tomorrow','Thursday’s strength moves to Friday. Nothing else changes.',true],
     ['Make it shorter','Easy 20 instead of 40. Still counts for the week.'],
     ['Swap with Sunday’s long run','Long run on Thursday, easy on Sunday. Two easy days stay between hard ones.'],
     ['Skip it','The week still works. We don’t add missed minutes back.']].map(([t, s, on]) =>
    `<button class="choice${on ? ' on' : ''}"><span class="rad"></span><span class="grow"><div class="t">${t}</div><div class="s">${s}</div></span></button>`).join('')}
  <div class="gap8"></div>
  <button class="btn" data-go="back">Move to Thursday</button>`}));

def('ask', {group:'Ask', title:'Ask: a cold (sheet)', base:'today', notab:true, note:'Free questions about your running. Answers use only data Steady recorded or you granted (never Strava API data). Any plan change is proposed, never applied, until you approve it.'}, (c) => ({sheet:`
  <div class="between"><div class="h1">Ask Steady</div><button class="ib well" data-go="back" aria-label="Close" style="width:32px;height:32px">${I('x', 16)}</button></div>
  <div class="gap16"></div>
  <div class="bubble">I’ve got a cold. What should I change this week?</div>
  <div class="answer">
    <p>Sorry you’re ill. A common rule of thumb: if it’s only <b>above the neck</b> (runny nose, sore throat) and you feel OK, easy running is usually fine. If it’s in your <b>chest</b>, or you have a fever or aches, rest until it clears.</p>
    <p>If you’d like, here’s an easier week:</p>
  </div>
  <div class="rows" style="background:var(--well2);border-radius:6px;padding:2px 14px">
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
  <div class="between"><div class="h1">Ask Steady</div><button class="ib well" data-go="back" aria-label="Close" style="width:32px;height:32px">${I('x', 16)}</button></div>
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

def('lapse', {group:'Today', title:'Back after a break', tab:'today', stage:2, note:'After 2 missed weeks: a gentle restart week instead of a broken streak. Streaks count weeks, never days.'}, (c) => {
  const rows = [['Mon',null,'rest'],['Tue',null,'rest'],['Wed','restart','today'],['Thu',null,'rest'],['Fri','restart','plan'],['Sat',null,'rest'],['Sun','restart','plan']];
  return {body:`
  ${dayHead('Welcome back.')}
  ${weekHero(2, rows, 'Restart week')}
  <div class="panel">
    <span class="eyebrow acc">It’s been 15 days</span>
    <div class="flex" style="gap:14px;align-items:flex-start;margin-top:12px">
      <div class="grow"><div class="h1">Easy 20</div><div class="sm mute" style="margin-top:7px">Full sentences the whole way</div></div>
      <button class="play" data-go="live-ready" aria-label="Start run">${I('play', 26)}</button>
    </div>
    <div class="gap20"></div>
    ${strip('restart', {px:324})}
  </div>
  <div class="gap24"></div>
  <div class="note"><div class="nt">Three easy 20-minute runs this week, then your plan carries on from week 5. We never add missed runs back.</div></div>
  <div class="lhd"><span class="eyebrow">Restart week</span><span class="r">0 of 3</span></div>
  ${weekRows(2, {rows:rows.filter(r => r[1])})}
  <div class="sec" style="margin-top:6px"><div class="flex" style="gap:14px"><span class="disp d4">4</span>
    <div class="grow"><div class="t w6">Your streak is paused, not lost</div><div class="sm mute">4 weeks. It carries on when you run this week.</div></div></div></div>`, tab:'today'};
});

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
function weekCells(stage) {
  const ph = PHASES[stage], P = PLANP[stage];
  let n = 0;
  return `<div class="flex" style="gap:8px;align-items:flex-start">${ph.map(([name, wks]) => {
    const cells = Array.from({length:wks}, () => { n++; const f = n < P.wk ? 1 : n === P.wk ? .45 : 0;
      return `<i style="flex:1;height:12px;background:linear-gradient(90deg,var(--acc) ${f * 100}%,var(--well2) ${f * 100}%)"></i>`; }).join('');
    const on = n - wks < P.wk && P.wk <= n;
    return `<div style="flex:${wks};min-width:0"><div class="flex" style="gap:3px">${cells}</div><div class="cap" style="font-size:12.5px;margin-top:9px;white-space:nowrap;color:${on ? 'var(--ink)' : 'var(--ink3)'}">${name}</div></div>`;
  }).join('')}</div>`;
}
def('plan', {group:'Plan', title:'Plan', tab:'plan', note:'The block in one panel: goal, week number as a big fraction, every week as a cell. Then this week as a list: done runs struck through, today with the amber Start square. Spike guard is built into plan generation; taper is automatic.'}, (c) => {
  const w = W[c.stage], P = PLANP[c.stage], pad = n => String(n).padStart(2, '0');
  const spike = {1:'Friday’s run/walk is the same length as today. Run minutes rise by 30 s at most.', 2:'Saturday’s 40 min (about 5.9 km) is 9% longer than your longest run this month (5.4 km). Under 10%, so it stays.', 3:'Sunday’s 13.1 km is 6% longer than your longest run in the last 30 days (12.4 km). Under 10%, fine.', 4:'Sunday’s 32 km is 7% longer than your longest run in the last 30 days (30 km). Under 10%, fine.', 5:'Sunday’s 26 km is shorter than your longest run in the last 30 days (28 km).'}[c.stage];
  return {body:`
    <div class="page-t">Plan</div>
    <div class="panel">
      <div class="between"><span class="eyebrow acc">Active</span><span class="eyebrow">Week ${P.wk} of ${P.of}</span></div>
      <div class="flex" style="align-items:flex-end;gap:10px;margin-top:12px">
        <div class="grow"><div class="h1" style="font-size:36px;line-height:.95">${P.name}</div></div>
        <div class="disp" style="font-size:84px;letter-spacing:-.02em;margin-bottom:-5px">${pad(P.wk)}<span class="dim">/${pad(P.of)}</span></div>
      </div>
      <div class="sm mute" style="margin-top:12px">${P.sub}</div>
      <div class="gap16"></div>
      ${weekCells(c.stage)}
    </div>
    <div class="lhd"><span class="eyebrow">This week · 26 Oct – 1 Nov</span><span class="r">${w.weekSum}</span></div>
    ${weekRows(c.stage)}
    <div class="links" style="padding:20px 0 22px;border-top:1px solid var(--rule)"><button class="ul">Repeat this week</button><button class="ul">Edit plan</button><button class="ul" data-go="build">Build intervals</button></div>
    <hr class="thick">
    <div style="padding:20px 0 22px"><div class="flex" style="gap:8px;margin-bottom:8px;color:var(--good)">${I('shield', 17)}<span class="eyebrow" style="color:var(--good)">Spike guard · fine</span></div><div class="sm">${spike}</div></div>
    ${c.stage >= 2 ? `<div class="sec" data-go="changes">
      <div class="hd"><span class="eyebrow">What changed</span><button class="link">All changes</button></div>
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
    foot:`<button class="btn go">${I('play', 20)}Start session</button>`};
});

/* ── Build your own intervals: type it like a timer, read it back drawn to scale ──
   Grammar kept to what runners actually type: "6 × 400 m, 90 s jog", "Run 2 min, walk 1 min × 8". */
const BLD = {   // per stage: work effort, paces (min/km) and the 30-day longest, for the spike check
  1:{txt:'Run 2 min, walk 1 min × 8', e:1, work:8.5, easy:8.5, rec:'walk', warm:[0, 5, 'Walk'], cool:[0, 3, 'Walk'], target:'Slow enough to chat', longestRun:1.5},
  2:{txt:'10 × 1 min steady, 1 min easy', e:2, work:6.3, easy:7.1, rec:'walk', warm:[0, 5, 'Walk'], cool:[0, 3, 'Walk'], target:'Short phrases · about 6:20 /km', longest:5.4},
  3:{txt:'6 × 400 m, 90 s jog', e:3, work:4.75, easy:6.3, rec:'jog', warm:[1, 10, 'Warm-up'], cool:[1, 8, 'Cool-down'], target:'A few words · 4:40–4:50 /km', pace:'4:45', longest:12.4},
  4:{txt:'5 × 2 km, 2 min jog', e:3, work:4.08, easy:5.6, rec:'jog', warm:[1, 12, 'Warm-up'], cool:[1, 10, 'Cool-down'], target:'A few words · 4:05 /km', pace:'4:05', longest:30},
  5:{txt:'10 × 400 m, 60 s jog', e:3, work:3.3, easy:5, rec:'jog', warm:[1, 15, 'Warm-up'], cool:[1, 10, 'Cool-down'], target:'A few words · 3:18 /km', pace:'3:18', longest:28},
};
const BUILD_TXT = {};
const PRESETS = {
  lo:['Run 1 min, walk 1 min × 10', 'Run 3 min, walk 1 min × 5', 'Run 5 min, walk 1 min × 4', '10 × 1 min steady, 1 min easy'],
  hi:['6 × 400 m, 90 s jog', '5 × 1 km, 2 min jog', '8 × 1 min hard, 1 min easy', '3 × 10 min steady, 2 min jog'],
};
function parseIntervals(txt, stage) {
  const b = BLD[stage], t = (txt || '').toLowerCase().replace(/×/g, 'x');
  const qty = [...t.matchAll(/(\d+):(\d{2})|(\d+(?:\.\d+)?)\s*(km|k|m|min|mins|minutes?|s|secs?|seconds?)\b/g)].map(m => {
    if (m[1]) return {min:+m[1] + m[2] / 60, time:true};
    const v = +m[3], u = m[4];
    if (u === 'km' || u === 'k') return {km:v};
    if (u === 'm') return {km:v / 1000};
    if (u[0] === 's') return {min:v / 60, time:true};
    return {min:v, time:true};
  });
  const rm = t.match(/(\d+)\s*x(?![a-z])/) || t.match(/x\s*(\d+)\s*$/);
  if (!qty.length || !rm) return null;
  const n = Math.min(+rm[1], 30), w = qty[0], r = qty[1] || {min:1.5, time:true};
  const wMin = w.time ? w.min : w.km * b.work;
  const recWord = (t.match(/\b(walk|jog|easy|rest)\b(?![\s\S]*\b(walk|jog|easy|rest)\b)/) || [])[1] || b.rec;
  const recE = recWord === 'easy' ? 1 : 0;
  const e = /steady|tempo/.test(t) ? 2 : /hard|fast/.test(t) ? 3 : b.e;
  const rMin = r.time ? r.min : r.km * 9;
  const blocks = [[b.warm[0], b.warm[1]], ...R(n, [[e, wMin], [recE, rMin]]), [b.cool[0], b.cool[1]]];
  const min = sum(blocks.map(x => x[1]));
  const km = (b.warm[1] + b.cool[1]) / b.easy + n * (w.km || wMin / b.work) + n * rMin / (recE ? b.easy : 9.5);
  const workLab = w.km ? (w.km < 1 ? Math.round(w.km * 1000) + ' m' : w.km + ' km') : clk(Math.round(wMin * 60));
  const recLab = clk(Math.round(rMin * 60)) + ' ' + (recWord === 'rest' ? 'rest' : recWord);
  return {n, e, wMin, rMin, workLab, recLab, recWord, blocks, min, km, hard:e === 3 ? n * wMin : 0,
    sess:{blocks, min, labels:[[0, b.warm[1], b.warm[2], dur(b.warm[1])], [b.warm[1], min - b.cool[1], n + ' × ' + workLab, recLab + ' between'], [min - b.cool[1], min, b.cool[2], dur(b.cool[1])]]}};
}
function buildParsed(stage, txt) {
  const b = BLD[stage], p = parseIntervals(txt, stage);
  if (!p) return `<div class="bd-empty"><div class="t">Couldn’t read that yet.</div><div class="sm mute">Try “6 × 400 m, 90 s jog” or “Run 2 min, walk 1 min × 8”.</div></div>`;
  const word = ['Walk', 'Easy', 'Steady', 'Hard'][p.e];
  let guard;
  if (stage === 1) guard = p.wMin > b.longestRun * 1.1
    ? `<div class="note warn"><span class="ni">${I('alert', 18)}</span><div class="nt sm">Your longest run so far is <b>1½ min</b>. ${clk(Math.round(p.wMin * 60))} is a big jump. <button class="ul" data-preset="Run 1:30, walk 1 min × 8">Make it 1:30</button></div></div>`
    : `<div class="note"><span class="ni">${I('shield', 18)}</span><div class="nt sm">Runs no longer than you’ve done. Good.</div></div>`;
  else guard = p.km > b.longest * 1.1
    ? `<div class="note warn"><span class="ni">${I('alert', 18)}</span><div class="nt sm">About ${p.km.toFixed(1)} km, more than 10% past your longest run this month (${b.longest} km). Single big jumps raise injury risk.</div></div>`
    : `<div class="note"><span class="ni">${I('shield', 18)}</span><div class="nt sm">Spike guard: about ${p.km.toFixed(1)} km, inside your longest this month (${b.longest} km).</div></div>`;
  const nw = n => ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'][n] || n;
  const long = p.wMin % 1 ? clk(Math.round(p.wMin * 60)) : p.wMin + (p.wMin === 1 ? ' minute' : ' minutes');
  const say = stage <= 2 ? `“${word === 'Easy' ? 'Run' : word} one of ${nw(p.n)}. ${long}.”` : `“Rep one of ${nw(p.n)}. ${p.workLab} at ${b.pace}.”`;
  return `
    <div class="gap24"></div>
    ${strip(p.sess, {px:346})}
    <div class="lv-grid" style="margin-top:14px">${[['Time', dur(Math.round(p.min))], ['Km', '≈' + p.km.toFixed(1)], [p.e === 3 ? 'Hard' : word, dur(Math.round(p.n * p.wMin))]].map(([l, v]) => `<div><div class="l">${l}</div><div class="v">${v}</div></div>`).join('')}</div>
    <div class="steps">
      <div class="st"><span class="i">01</span><span><span class="sw" style="background:var(--e${b.warm[0]})"></span>${b.warm[2]}<span class="w">${EFFORT[b.warm[0]].talk}</span></span><span class="d">${dur(b.warm[1])}</span></div>
      <div class="st"><span class="i">02</span><span><span class="sw" style="background:var(--e${p.e})"></span>${p.n} × ${p.workLab}, ${p.recLab}<span class="w">${p.e === b.e ? b.target : EFFORT[p.e].talk}</span></span><span class="d">${dur(Math.round(p.n * (p.wMin + p.rMin)))}</span></div>
      <div class="st"><span class="i">03</span><span><span class="sw" style="background:var(--e${b.cool[0]})"></span>${b.cool[2]}<span class="w">${EFFORT[b.cool[0]].talk}</span></span><span class="d">${dur(b.cool[1])}</span></div>
    </div>
    <div class="gap12"></div>${guard}
    <div class="lv-ear" style="padding-top:18px"><div class="eh"><span class="l">${I('phones', 16)}You’ll hear</span><button class="rp" data-cue="***|${say.replace(/[“”]/g, '')}">Play</button></div>
      <div class="er"><span class="k">At ${dur(b.warm[1])}</span><span class="tx"><span class="bp"><i></i><i></i><i></i></span>then ${say}</span></div></div>`;
}
def('build', {group:'Plan', title:'Build intervals', notab:true, note:'Type a session the way you would say it, like the timer app in the reference. It is read back drawn to scale, with paces from the runner’s own zones, a spike-guard check and the first cue. Beginners get a gentle nudge, never a block. A built session counts toward the week; the plan adapts and asks first.'}, (c) => {
  const txt = BUILD_TXT[c.stage] || BLD[c.stage].txt;
  const pr = PRESETS[c.stage <= 2 ? 'lo' : 'hi'];
  return {time:'18:04', body:`
    ${topnav('close', 'New session')}
    <div class="page-t">Build intervals</div>
    <label class="typeline bd-in">${I('plus', 22)}<input data-build value="${txt}" aria-label="Type a session" spellcheck="false" autocomplete="off"></label>
    <div class="bd-parsed">${buildParsed(c.stage, txt)}</div>
    <div class="lhd"><span class="eyebrow">Quick start</span><span class="r">Tap to fill</span></div>
    <div class="nl rows">${pr.map((p, i) => { const q = parseIntervals(p, c.stage);
      return `<div class="row" data-preset="${p}"><span class="n">0${i + 1}</span><div class="grow"><div class="ttl">${p}</div><div class="s">${q.n} × ${q.workLab} · ${q.recLab}</div></div><span class="ttl v">${dur(Math.round(q.min))}</span></div>`; }).join('')}</div>
    <div class="xs faint" style="margin-top:14px">Counts toward this week. If it changes your plan, Steady shows you how and asks first.</div>`,
    foot:`<div class="duo" style="grid-template-columns:1fr 1.6fr"><button class="btn2">Save</button><button class="btn go" data-go="live-ready">${I('play', 20)}Start</button></div>`};
});

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
        <span style="width:22px;height:22px;border-radius:3px;flex:none;display:flex;align-items:center;justify-content:center;margin-top:1px;${p >= 1 ? 'background:var(--acc);color:var(--onAcc)' : 'border:1.5px solid var(--rule2)'}">${p >= 1 ? I('check', 14) : ''}</span>
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
        <div class="v">${m.v}${m.u ? ` <span class="unit" style="font-size:13px">${m.u}</span>` : ''}${m.d ? `<small class="${m.warn ? 'warnc' : 'goodc'}">${m.d}</small>` : m.warn ? '<small class="warnc">flagged</small>' : ''}</div>
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
        `<div class="row" style="min-height:48px"><span style="width:8px;height:30px;background:var(--e${e})"></span><div class="grow"><div class="t">${n}</div><div class="s">${t}</div></div><div class="v">${p}<span class="unit" style="font-size:13px"> /km</span></div></div>`).join('')}</div>
    </div>
    <div class="sec">
      <div class="rows"><div class="row" data-go="tests"><span class="ic">${I('flask', 18)}</span><div class="grow"><div class="t">Make it sharper</div><div class="s">3-min + 12-min test · narrows the range to about ±2%</div></div><span class="link">Plan it</span></div></div>
    </div>`};
});

def('explain', {group:'Progress', title:'Explain this (sheet)', base:'metric', notab:true, minStage:3, note:'"Explain this" on every number, in three layers: one plain sentence for everyone; why it matters and what to do; the science with method, evidence grade, your range and the study. Beginners stay at layer 1.'}, (c) => ({sheet:`
  <div class="eyebrow">Explain this</div><div class="gap8"></div>
  <div class="between" style="align-items:flex-end"><div class="h1">Critical speed</div><div><span class="disp d4">5:05</span><span class="unit"> /km</span></div></div>
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
  ${[['September','−7%',7,false],['October','−4%',4,true]].map(([m, t, v, on]) => `<div class="flex" style="gap:12px;margin-bottom:12px"><span class="sm ${on ? 'w6' : 'mute'}" style="width:78px">${m}</span><div class="grow"><div style="height:22px;width:${v / 8 * 100}%;background:${on ? 'var(--acc)' : 'var(--e1)'}"></div></div><span class="sm w6 num" style="width:40px;text-align:right">${t}</span></div>`).join('')}
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
        `<div class="row" style="min-height:48px"><div style="width:84px" class="sm w6">${k}</div><div class="grow xs mute">${n}</div><div class="v">${p}<span class="unit" style="font-size:13px"> /km</span></div></div>`).join('')}</div>
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
      <div class="bars" style="height:80px">${[7.9,8.1,6.4,8.3,8.5,8.0,4.6,3.2].map((v, i) => `<div class="b ${i === 2 ? 'on' : ''}" style="height:${v / 9 * 100}%;${i === 2 ? '' : i > 5 ? 'background:var(--e1)' : 'background:var(--e2)'}">${i === 2 ? '<span class="cv">This week</span>' : ''}</div>`).join('')}</div>
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
    ${[['Novablast 4','Daily · easy and long',412,700],['Endorphin Speed 4','Fast days',188,600]].map(([n, s, k, mx]) => `<div class="row" style="display:block;padding:12px 0"><div class="between"><div><div class="t">${n}</div><div class="s">${s}</div></div><div class="v">${k}<span class="unit" style="font-size:13px"> / ${mx} km</span></div></div><div class="bar" style="margin-top:10px;height:8px"><i style="width:${k / mx * 100}%"></i></div></div>`).join('')}
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
      <div class="row" data-go="cues"><span class="ic">${I('phones', 18)}</span><div class="grow"><div class="t">Audio cues</div><div class="s">Every change spoken, three beeps, watch taps</div></div>${I('chevR', 16, 'class="chev"')}</div>
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

const SCORES = `<table class="pg-score">
<tr><th>Quality</th><th>Round 3 · Anybody, light</th><th>Round 4 · your reference</th></tr>
<tr><td>Composition</td><td class="m">Matches · run block ~45% of the fold</td><td class="m">Matches · fraction + seven squares, then the one panel with the Start square, all inside the first 470 px, as the reference’s 2/4 and Repeat last</td></tr>
<tr><td>Scale</td><td class="m">Matches · 92 px duration</td><td class="m">Matches · 108 px week fraction, 148 px live clock, 54 px greeting over 15 px body</td></tr>
<tr><td>Atmosphere</td><td class="m">Matches · warm glow behind the hero</td><td class="m">Matches · no glow at all: bone on near-black and one amber carry it, like the reference</td></tr>
<tr><td>Bespoke element</td><td class="x">Rejected twice by you, then fixed as a flat timeline</td><td class="m">Matches · the strip sits in the panel, grey easy and amber hard, reps cut into cells; history is one block per run under a dashed goal line</td></tr>
<tr><td>Typographic character</td><td class="m">Matches · Anybody 800 italic</td><td class="m">Matches · Barlow Condensed 700 capitals for numbers, titles, labels and tabs; Hanken Grotesk for reading</td></tr>
<tr><td>Micro-detail</td><td class="m">Matches</td><td class="m">Matches · amber-ringed today square, struck-through done runs, square toggle knob, bar over the active tab, dimmed denominators</td></tr>
<tr><td>Real content</td><td class="m">Matches</td><td class="m">Matches · fractions follow the stage (1/3 to 2/7); runs per week agree with the dated history list</td></tr>
<tr><td>Confidence</td><td class="m">Matches</td><td class="w">Weaker in light only · the reference is dark, so light mode is a careful mirror rather than a designed look of its own</td></tr>
</table>
<p style="font-size:13px;color:var(--pg-ink2);margin-top:14px;line-height:1.5">Round 4 swept all 34 screens at 390 px in dark (now the default) and six in light, and fixed what showed: a clashing style that greyed the small Start icon, top-of-bar slivers in the weekly chart, live controls covering the last line, a clipped chart label and three wrapping labels. Rounds 1–3 are saved in versions/r3-anybody-timeline.</p>
<div class="pg-facts" style="margin-top:22px">
<div><b>Not done: a readiness score</b>HRV evidence is mixed, so it appears as a range bar that can soften a day. It never becomes a number that overrides the runner.</div>
<div><b>Not done: a map on the live screen</b>The strip shows progress through the session; the map is in the summary, with start and end hidden.</div>
<div><b>Not done: badges and confetti</b>Graduation shows the check you passed and what unlocks. Streaks count weeks, so rest days never break them.</div>
<div><b>Not done: rainbow zones</b>Effort runs from grey (walk, easy, steady) to amber (hard), so the screen keeps one accent and reads in greyscale.</div>
</div>`;
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
render(); if (!window.SOLO && document.fonts) document.fonts.ready.then(render);
