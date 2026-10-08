'use strict';
const $=id=>document.getElementById(id);
let current=0,selected=null,stage=0;
function el(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
function box(title,text,cls=''){const b=el('section',undefined,'box '+cls);b.append(el('h3',title),el('p',text));return b;}
function listBox(title,questions,cls=''){const b=el('section',undefined,'box '+cls);b.append(el('h3',title));const l=el('ol');questions.forEach(q=>l.append(el('li',q)));b.append(l);return b;}
function renderNav(){const q=$('search').value.toLowerCase().trim();$('objections').replaceChildren();let count=0;PLAYBOOK.forEach((item,i)=>{if(q&&!JSON.stringify(item).toLowerCase().includes(q))return;count++;const b=el('button',undefined,'objection'+(i===current?' active':''));b.type='button';b.setAttribute('aria-pressed',String(i===current));b.append(el('span',String(i+1).padStart(2,'0'),'num'),el('span',item.title));b.onclick=()=>{current=i;selected=null;stage=0;renderNav();renderDetail();if(matchMedia('(max-width:720px)').matches)$('detail').scrollIntoView({behavior:'auto',block:'start'});};$('objections').append(b);});$('count').textContent=count?`${count} matching objection${count===1?'':'s'}`:'No matching objections. Try another keyword.';}
function renderDetail(){
 const item=PLAYBOOK[current],d=$('detail'),s=selected===null?null:item.scenarios[selected];
 const labels=['Acknowledge','Opening discovery','Choose a scenario','Follow-up discovery','Confirm understanding','Address the concern','Close / next step'];
 d.replaceChildren();
 d.append(el('span',`STEP ${stage+1} OF 7 · ${labels[stage].toUpperCase()}`,'step'),el('h2',item.title));
 const progress=el('progress');progress.max=7;progress.value=stage+1;progress.style.width='100%';progress.style.accentColor='var(--teal)';progress.setAttribute('aria-label','Conversation progress');d.append(progress);
 d.append(el('p',labels.join(' → '),'hint'));
 const focusStep=()=>{renderDetail();const heading=d.querySelector('h2');heading.tabIndex=-1;heading.focus({preventScroll:true});};
 if(stage===0){d.append(box('Say this',item.ack),el('p','Acknowledge the concern calmly. Give the merchant room to respond.','hint'));}
 if(stage===1){d.append(box('Ask this',item.discovery,'discovery'));if(item.extra.length)d.append(listBox('Clarify the previous campaign',item.extra,'discovery'));d.append(el('p','Listen to the answer before choosing a response path.','hint'));}
 if(stage===2){
  d.append(el('p','Which concern best matches what the merchant told you?','hint'));
  const choices=el('div',undefined,'tabs');
  item.scenarios.forEach((scenario,i)=>{const b=el('button',undefined,'tab');b.type='button';b.setAttribute('aria-pressed',String(selected===i));b.append(el('span','SCENARIO '+scenario.letter),el('strong',scenario.title));b.onclick=()=>{selected=i;stage=3;focusStep();};choices.append(b);});d.append(choices);
  d.append(box('None of these fits?','Keep exploring: “Can you tell me more about your main concern?” Use Back to revisit discovery, then choose a scenario only when it fits.','discovery'));
 }
 if(s&&stage>=3){d.append(el('p',`Selected path: ${s.title}`,'hint'));
  if(stage===3){d.append(box('Acknowledge the specific concern',s.ack),listBox('Ask the questions you need',s.questions,'discovery'),el('p','Pause after each question and listen. You do not need to ask every question.','hint'));}
  if(stage===4)d.append(box('Summarize and confirm',s.confirm),el('p','Replace the placeholder with the merchant’s actual concern. If they correct you, go back to discovery.','hint'));
  if(stage===5)d.append(box('Address the concern',s.rebuttal),el('p','Connect the response to what the merchant said. Confirm account details before discussing costs or results.','hint'));
  if(stage===6)d.append(box('Propose a useful next step',s.closing,'closing'),el('p','Let the merchant decide. Respect a decline and agree on a follow-up only if they want one.','hint'));
 }
 const actions=el('div',undefined,'actions');
 const back=el('button','Back');back.type='button';back.disabled=stage===0;back.onclick=()=>{stage--;focusStep();};actions.append(back);
 if(stage!==2&&stage<6){const next=el('button',stage===0?'Next: ask the opening question':stage===1?'Next: choose a scenario':stage===3?'Next: confirm the concern':stage===4?'Concern confirmed: continue':'Next: close / next step','copy');next.type='button';next.onclick=()=>{stage++;focusStep();};actions.append(next);}
 if(stage===6){const restart=el('button','Start again');restart.onclick=()=>{stage=0;selected=null;focusStep();};const copy=el('button','Copy response path','copy');copy.onclick=async()=>{try{await navigator.clipboard.writeText([item.title,item.ack,item.discovery,...item.extra,s.title,s.ack,...s.questions,s.confirm,s.rebuttal,s.closing].join('\n\n'));$('status').textContent='Response path copied.';}catch{$('status').textContent='Clipboard unavailable. Copy the response text manually.';}setTimeout(()=>{$('status').textContent='';},4000);};actions.append(restart,copy);}
 d.append(actions);
}
$('search').addEventListener('input',renderNav);
$('help').onclick=()=>{const open=$('instructions').hidden;$('instructions').hidden=!open;$('help').setAttribute('aria-expanded',String(open));};
renderNav();renderDetail();
