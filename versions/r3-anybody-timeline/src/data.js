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
  hero:{eyebrow:'Today’s run', title:'Run 1½ min, walk 1½ min', big:'25', unit:'min', talk:'Full sentences the whole way. Slow is right.', pace:null},
  why:{chip:'Up from 1 min', text:'Monday felt <b>4 out of 10</b>, so each run gets 30 seconds longer.'},
  week:[
    ['Mon','rw1','done','✓ felt 4/10'],['Tue',null,'rest'],['Wed','rw15','today'],['Thu',null,'rest'],
    ['Fri','rw15','plan'],['Sat',null,'rest'],['Sun','walk30','plan','optional']],
  weekSum:'1 of 3 runs',
  insight:{text:'You ran <mark>8 minutes</mark> on Monday, in 1-minute pieces. Three weeks ago it was 4.', link:'progress'},
  ladder:{p:.12, checks:[['Run 30 min non-stop','Longest so far: 1½ min',.05],['Do it twice, rated easy to moderate','0 of 2',0]]},
  weeks:{label:'Minutes running', unit:'min', vals:[12,16,8], part:true, x:['Wk 1','Wk 2','Wk 3']},
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
