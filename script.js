const LANGS={de:'German',fr:'French',it:'Italian'};
const ICONS=['fa-fire-flame-curved','fa-apple-whole','fa-heart-pulse','fa-brain','fa-leaf'];
const GRADS=['g0','g1','g2','g3','g4'];

const DATA=[
  {
    name:'Weight Loss Session',icon:'fa-fire-flame-curved',
    programs:{
      de:[
        {title:'Gewichtsverlust Einführung',dur:'22 min',mod:'Modul 1',url:'#'},
        {title:'Kalorienverbrennung Boost',dur:'18 min',mod:'Modul 2',url:'#'},
        {title:'Gesunde Ernährung',dur:'25 min',mod:'Modul 3',url:'#'},
        {title:'Motivations-Booster',dur:'20 min',mod:'Modul 4',url:'#'},
        
      ],
      fr:[
        {title:'Introduction à la perte de poids',dur:'22 min',mod:'Module 1',url:'#'},
        {title:'Brûleur de graisses intensif',dur:'18 min',mod:'Module 2',url:'#'},
        {title:'Alimentation saine & consciente',dur:'25 min',mod:'Module 3',url:'#'},
        {title:'Motivation & confiance en soi',dur:'20 min',mod:'Module 4',url:'#'},
        {title:'Relaxation profonde & minceur',dur:'30 min',mod:'Module 5',url:'#'},
      ],
      it:[
        {title:'Introduzione alla perdita di peso',dur:'22 min',mod:'Modulo 1',url:'#'},
        {title:'Bruciagrassi intenso',dur:'18 min',mod:'Modulo 2',url:'#'},
        {title:'Alimentazione consapevole',dur:'25 min',mod:'Modulo 3',url:'#'},
        {title:'Motivazione & fiducia',dur:'20 min',mod:'Modulo 4',url:'#'},
        {title:'Rilassamento profondo & dimagrire',dur:'30 min',mod:'Modulo 5',url:'#'},
      ]
    }
  },
  {
    name:'Deep Relaxation Session',icon:'fa-cloud-moon',
    programs:{
      de:[
        {title:'Tiefenentspannung Grundlagen',dur:'20 min',mod:'Modul 1',url:'#'},
        {title:'Schlaf & Erholung',dur:'35 min',mod:'Modul 2',url:'#'},
        {title:'Atemübungen für innere Ruhe',dur:'15 min',mod:'Modul 3',url:'#'},
        {title:'Stress abbauen & loslassen',dur:'28 min',mod:'Modul 4',url:'#'},
        {title:'Innerer Frieden',dur:'25 min',mod:'Modul 5',url:'#'},
      ],
      fr:[
        {title:'Fondamentaux de la relaxation',dur:'20 min',mod:'Module 1',url:'#'},
        {title:'Sommeil profond & réparateur',dur:'35 min',mod:'Module 2',url:'#'},
        {title:'Exercices de respiration douce',dur:'15 min',mod:'Module 3',url:'#'},
        {title:'Libérer le stress & lâcher prise',dur:'28 min',mod:'Module 4',url:'#'},
        {title:'Paix intérieure profonde',dur:'25 min',mod:'Module 5',url:'#'},
      ],
      it:[
        {title:'Fondamenti del rilassamento',dur:'20 min',mod:'Modulo 1',url:'#'},
        {title:'Sonno profondo & ristoratore',dur:'35 min',mod:'Modulo 2',url:'#'},
        {title:'Esercizi di respirazione dolce',dur:'15 min',mod:'Modulo 3',url:'#'},
        {title:'Liberarsi dallo stress',dur:'28 min',mod:'Modulo 4',url:'#'},
        {title:'Pace interiore profonda',dur:'25 min',mod:'Modulo 5',url:'#'},
      ]
    }
  },
  {
    name:'Focus & Energy Session',icon:'fa-seedling',
    programs:{
      de:[
        {title:'Konzentration & geistige Klarheit',dur:'18 min',mod:'Modul 1',url:'#'},
        {title:'Morgenenergie Aktivierung',dur:'12 min',mod:'Modul 2',url:'#'},
        {title:'Produktivitäts-Flow',dur:'22 min',mod:'Modul 3',url:'#'},
        {title:'Mentale Stärke aufbauen',dur:'26 min',mod:'Modul 4',url:'#'},
        {title:'Abendliche Regeneration',dur:'20 min',mod:'Modul 5',url:'#'},
      ],
      fr:[
        {title:'Concentration & clarté mentale',dur:'18 min',mod:'Module 1',url:'#'},
        {title:'Activation énergétique du matin',dur:'12 min',mod:'Module 2',url:'#'},
        {title:'Flow de productivité',dur:'22 min',mod:'Module 3',url:'#'},
        {title:'Construire la force mentale',dur:'26 min',mod:'Module 4',url:'#'},
        {title:'Régénération du soir',dur:'20 min',mod:'Module 5',url:'#'},
      ],
      it:[
        {title:'Concentrazione & chiarezza mentale',dur:'18 min',mod:'Modulo 1',url:'#'},
        {title:'Attivazione energetica mattutina',dur:'12 min',mod:'Modulo 2',url:'#'},
        {title:'Flusso di produttività',dur:'22 min',mod:'Modulo 3',url:'#'},
        {title:'Costruire la forza mentale',dur:'26 min',mod:'Modulo 4',url:'#'},
        {title:'Rigenerazione serale',dur:'20 min',mod:'Modulo 5',url:'#'},
      ]
    }
  }
];

let sessIdx=0, lang='de', selected=new Set(), mini=false;

function toggleSidebar(){
  mini=!mini;
  document.getElementById('sidebar').classList.toggle('mini',mini);
  document.getElementById('main').classList.toggle('wide',mini);
  document.getElementById('tog-icon').className=mini?'fa-solid fa-chevron-right':'fa-solid fa-chevron-left';
}
function openMobile(){
  document.getElementById('sidebar').classList.add('mobile-open');
  document.getElementById('overlay').classList.add('show');
}
function closeMobile(){
  document.getElementById('sidebar').classList.remove('mobile-open');
  document.getElementById('overlay').classList.remove('show');
}

function selectSess(idx,el){
  sessIdx=idx; selected.clear();
  document.querySelectorAll('.sb-item[data-idx]').forEach(i=>i.classList.remove('active'));
  el.classList.add('active');
  closeMobile(); render();
}

function switchLang(l,btn){
  lang=l; selected.clear();
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); render();
}

function render(){
  const s=DATA[sessIdx], progs=s.programs[lang];
  document.getElementById('tb-icon').innerHTML=`<i class="fa-solid ${s.icon}"></i>`;
  document.getElementById('tb-title').textContent=s.name;
  document.getElementById('h-icon').innerHTML=`<i class="fa-solid ${s.icon}"></i>`;
  document.getElementById('h-title').textContent=s.name;
  document.getElementById('h-sub').innerHTML=`5 audio programs &nbsp;·&nbsp; <strong>${LANGS[lang]}</strong>`;

  const grid=document.getElementById('grid');
  grid.innerHTML='';
  progs.forEach((p,i)=>{
    const sel=selected.has(i);
    const c=document.createElement('div');
    c.className='card'+(sel?' selected':'');
    c.onclick=()=>toggleCard(i,c);
    const safeTitle=p.title.replace(/'/g,"\\'");
    c.innerHTML=`
      <div class="card-cb"><i class="fa-solid fa-check"></i></div>
      <div class="card-thumb">
        <div class="card-thumb-bg ${GRADS[i]}"></div>
        <div class="card-thumb-shimmer"></div>
        <div class="card-thumb-ico"><i class="fa-solid ${ICONS[i]}"></i></div>
        <div class="card-thumb-shade"></div>
        <div class="card-tags">
          <span class="tag tag-mod">${p.mod}</span>
          <span class="tag tag-lang">${lang.toUpperCase()}</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${p.title}</div>
        <div class="card-dur"><i class="fa-regular fa-clock"></i> ${p.dur}</div>
        <div class="card-foot">
          <a href="${p.url}" class="card-dl" target="_blank" rel="noopener"
             onclick="event.stopPropagation();toast('Downloading: ${safeTitle}','success')">
            <i class="fa-solid fa-download"></i> Download
          </a>
        </div>
      </div>`;
    grid.appendChild(c);
  });
  updateUI();
}

function toggleCard(idx,el){
  selected.has(idx)?selected.delete(idx):selected.add(idx);
  el.classList.toggle('selected',selected.has(idx));
  updateUI();
}

function toggleAll(){
  const total=DATA[sessIdx].programs[lang].length;
  if(selected.size===total){
    selected.clear();
    document.querySelectorAll('.card').forEach(c=>c.classList.remove('selected'));
  } else {
    for(let i=0;i<total;i++) selected.add(i);
    document.querySelectorAll('.card').forEach(c=>c.classList.add('selected'));
  }
  updateUI();
}

function clearSel(){
  selected.clear();
  document.querySelectorAll('.card').forEach(c=>c.classList.remove('selected'));
  updateUI();
}

function updateUI(){
  const n=selected.size, total=DATA[sessIdx].programs[lang].length;
  document.getElementById('sel-cnt').textContent=n;
  document.getElementById('sel-pill').classList.toggle('show',n>0);
  document.getElementById('dl-sel-btn').disabled=n===0;
  document.getElementById('clr-btn').style.display=n>0?'inline-flex':'none';
  document.getElementById('sel-all-btn').innerHTML=n===total
    ?'<i class="fa-solid fa-square-xmark"></i> Deselect All'
    :'<i class="fa-regular fa-square-check"></i> Select All';
}

function downloadSel(){
  const progs=DATA[sessIdx].programs[lang];
  const list=[...selected].map(i=>progs[i]);
  fire(list);
  toast(`Downloading ${list.length} program${list.length>1?'s':''}…`,'success');
}

function downloadAll(){
  const progs=DATA[sessIdx].programs[lang];
  fire(progs);
  toast(`Downloading all ${progs.length} programs — ${LANGS[lang]}`,'success');
}

function fire(list){
  list.forEach((p,i)=>{
    setTimeout(()=>{
      const a=document.createElement('a');
      a.href=p.url; a.target='_blank'; a.rel='noopener';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
    },i*380);
  });
}

function toast(msg,type='info'){
  const icons={success:'fa-circle-check',info:'fa-circle-info',error:'fa-triangle-exclamation'};
  const t=document.createElement('div');
  t.className='toast';
  t.innerHTML=`<i class="fa-solid ${icons[type]||icons.info} toast-ic"></i> ${msg}`;
  document.getElementById('toasts').appendChild(t);
  setTimeout(()=>{t.style.animation='tOut .28s var(--ease) forwards';setTimeout(()=>t.remove(),280);},3200);
}

render();