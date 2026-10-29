const fs=require('fs');const code=fs.readFileSync(__dirname+'/bundle.js','utf8').replace(/document\.fonts && .*render\(\);/,'');
global.document={fonts:null,getElementById:()=>({innerHTML:''}),addEventListener(){},documentElement:{dataset:{}},querySelector:()=>null,querySelectorAll:()=>[],body:{style:{}}};
global.window={addEventListener(){},innerHeight:900};global.location={hash:''};global.history={replaceState(){}};global.setInterval=()=>{};
const test=`
let bad=0;for(const id of ORDER){for(const st of [1,2,3,4,5]){for(const th of ['light','dark']){try{const h=renderScreen(id,st,th);if(/undefined|NaN/.test(h)){const i=h.search(/undefined|NaN/);console.log('BAD TEXT in',id,st,th,h.slice(i-140,i+20).replace(/\\s+/g,' '));}}catch(e){bad++;console.log('ERR',id,st,th,e.stack.split('\\n').slice(0,2).join(' '))}}}}
for(const v of ['board','system','proto']){try{state.view=v;({board:boardView,system:systemView,proto:protoView})[v]()}catch(e){console.log('VIEW ERR',v,e.message)}}
const missing=Object.keys(SCREENS).filter(k=>!ORDER.includes(k));console.log('not in ORDER:',missing);
console.log('screens',ORDER.length,'errors',bad);`;
require('vm').runInThisContext(code+'\n'+test);
