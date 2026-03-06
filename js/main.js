// ── MOBILE MENU ──
function toggleMobileMenu() { document.getElementById('mobileMenu').classList.toggle('open'); }
function closeMobileMenu() { document.getElementById('mobileMenu').classList.remove('open'); }

// ── PARTICLES ──
(function() {
  const c = document.getElementById('particles');
  const s = ['⚡','₿','⚡','⚡'];
  for(let i=0;i<12;i++){
    const el=document.createElement('div');
    el.className='particle pixel';
    el.textContent=s[Math.floor(Math.random()*s.length)];
    el.style.left=Math.random()*100+'vw';
    el.style.fontSize=(8+Math.random()*8)+'px';
    el.style.animationDuration=(12+Math.random()*20)+'s';
    el.style.animationDelay=(Math.random()*15)+'s';
    c.appendChild(el);
  }
})();

// ── SCROLL PROGRESS ──
window.addEventListener('scroll',()=>{
  const pct=window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;
  document.getElementById('scrollProgress').style.width=pct+'%';
});

// ── SCROLL REVEAL ──
const obs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      e.target.querySelectorAll('[data-target]').forEach(animateCounter);
    }
  });
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
document.querySelectorAll('[data-target]').forEach(el=>{
  new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting) animateCounter(el);
  },{threshold:0.5}).observe(el);
});
function animateCounter(el){
  if(el.dataset.animated) return;
  el.dataset.animated='true';
  const target=parseInt(el.dataset.target);
  let current=0;
  const step=target/60;
  const iv=setInterval(()=>{
    current=Math.min(current+step,target);
    el.textContent=Math.floor(current);
    if(current>=target) clearInterval(iv);
  },20);
}

// ── DON MEMO PIXEL ART ──
function drawMemo(){
  const canvas=document.getElementById('memoCanvas');
  if(!canvas) return;
  const ctx=canvas.getContext('2d');
  const s=4;
  ctx.clearRect(0,0,120,150);
  const sk='#C68642',shirt='#7B8D42',pants='#4A3728',hat='#8B6914';
  ctx.fillStyle=hat;
  ctx.fillRect(3*s,6*s,24*s,2*s); ctx.fillRect(7*s,2*s,16*s,5*s);
  ctx.fillStyle=sk;
  for(let x=5;x<25;x++) ctx.fillRect(x*s,8*s,s,s);
  for(let x=4;x<26;x++) for(let y=9;y<13;y++) ctx.fillRect(x*s,y*s,s,s);
  for(let x=5;x<25;x++) ctx.fillRect(x*s,12*s,s,s);
  ctx.fillStyle='#2C1810';
  ctx.fillRect(8*s,10*s,2*s,s); ctx.fillRect(20*s,10*s,2*s,s);
  ctx.fillStyle='#aaa';
  for(let x=10;x<20;x++) ctx.fillRect(x*s,12*s,s,s*.6);
  ctx.fillStyle=shirt;
  for(let x=5;x<25;x++) ctx.fillRect(x*s,13*s,s,s);
  for(let x=3;x<27;x++) for(let y=14;y<18;y++) ctx.fillRect(x*s,y*s,s,s);
  ctx.fillStyle='#9aad52';
  ctx.fillRect(13*s,13*s,2*s,5*s); ctx.fillRect(16*s,13*s,2*s,5*s);
  ctx.fillStyle=sk;
  ctx.fillRect(s,14*s,3*s,5*s); ctx.fillRect(26*s,14*s,3*s,5*s);
  ctx.fillStyle=shirt;
  ctx.fillRect(s,14*s,3*s,2*s); ctx.fillRect(26*s,14*s,3*s,2*s);
  ctx.fillStyle=pants;
  for(let x=4;x<26;x++) for(let y=18;y<21;y++) ctx.fillRect(x*s,y*s,s,s);
  ctx.fillStyle='#1a1a1a';
  ctx.fillRect(2*s,21*s,6*s,s); ctx.fillRect(22*s,21*s,6*s,s);
  ctx.fillStyle='#8B6914';
  ctx.fillRect(26*s,10*s,s,12*s); ctx.fillRect(24*s,10*s,4*s,s);
}
drawMemo();

// ── TOAST ──
function showToast(msg){
  const t=document.getElementById('toast');
  document.getElementById('toastMsg').textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}

// ── BTC PRICE ──
let btcPriceMXN=null, prevPrice=null, retryCount=0;

async function fetchBTC(){
  try{
    const res=await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=mxn,usd&include_24hr_change=true');
    if(!res.ok) throw new Error('HTTP '+res.status);
    const data=await res.json();
    prevPrice=btcPriceMXN;
    btcPriceMXN=data.bitcoin.mxn;
    const usd=data.bitcoin.usd;
    const change=data.bitcoin.mxn_24h_change;

    document.getElementById('priceOffline').style.display='none';
    document.getElementById('navPrice').textContent='BTC: $'+btcPriceMXN.toLocaleString('es-MX',{maximumFractionDigits:0})+' MXN';
    document.getElementById('heroPriceMXN').textContent='$'+btcPriceMXN.toLocaleString('es-MX',{maximumFractionDigits:0})+' MXN';
    document.getElementById('heroPriceUSD').textContent='$'+usd.toLocaleString('en-US',{maximumFractionDigits:0})+' USD';
    const chEl=document.getElementById('heroChange');
    chEl.textContent=(change>=0?'▲':'▼')+Math.abs(change).toFixed(2)+'%';
    chEl.style.color=change>=0?'#16A085':'#C0392B';
    document.getElementById('heroSat').textContent='$'+(btcPriceMXN/1e8).toFixed(6)+' MXN';
    document.getElementById('lastUpdate').textContent=new Date().toLocaleTimeString('es-MX');

    if(prevPrice && prevPrice!==btcPriceMXN){
      const dir=btcPriceMXN>prevPrice?'▲':'▼';
      showToast('⚡ BTC '+dir+' $'+btcPriceMXN.toLocaleString('es-MX',{maximumFractionDigits:0})+' MXN');
    }
    retryCount=0;
    calcInvest(); calcConvert();
  } catch(e){
    retryCount++;
    document.getElementById('navPrice').textContent='BTC: sin conexión';
    document.getElementById('priceOffline').style.display='block';
    if(retryCount<5) setTimeout(fetchBTC, Math.min(5000*retryCount, 30000));
  }
}
fetchBTC();
setInterval(fetchBTC,30000);

// ── CALCULADORA: precios históricos corregidos (MXN aprox peak del año) ──
const historicBTC={
  2015:5500,   // ~$350 USD * 15.7 MXN
  2016:9000,   // ~$600 USD * 15.8 MXN
  2017:320000, // ~$17k USD * 19.0 MXN (peak dic)
  2018:110000, // ~$6k USD * 19.7 MXN (promedio)
  2019:65000,  // ~$3.5k USD * 19.0 MXN (promedio)
  2020:130000, // ~$7k USD * 20.5 MXN (promedio)
  2021:1050000,// ~$56k USD * 20.5 MXN (promedio)
  2022:380000, // ~$19k USD * 20.1 MXN (promedio)
  2023:540000, // ~$27k USD * 17.4 MXN (promedio)
};
const inflationMult={
  2015:1.60,2016:1.54,2017:1.45,2018:1.38,
  2019:1.28,2020:1.20,2021:1.12,2022:1.06,2023:1.02
};

function calcInvest(){
  const amount=parseFloat(document.getElementById('investAmount').value)||1500;
  const year=parseInt(document.getElementById('yearSlider').value);
  const hist=historicBTC[year]||130000;
  const btcBought=amount/hist;
  const now=btcPriceMXN||1500000;
  const todayVal=btcBought*now;
  const pesosVal=amount*(inflationMult[year]||1.2);
  const mult=todayVal/amount;
  document.getElementById('btcResult').textContent='$'+Math.floor(todayVal).toLocaleString('es-MX')+' MXN';
  document.getElementById('pesosResult').textContent='$'+Math.floor(pesosVal).toLocaleString('es-MX')+' MXN';
  document.getElementById('multiplier').textContent='x'+mult.toFixed(0);
  const pct=Math.min(todayVal/Math.max(todayVal,pesosVal)*100,100);
  document.getElementById('btcBar').style.width=pct+'%';
}

function calcConvert(){
  if(!btcPriceMXN) return;
  const amount=parseFloat(document.getElementById('convertAmount').value)||100;
  const btcAmt=amount/btcPriceMXN;
  const sats=Math.floor(btcAmt*1e8);
  document.getElementById('btcAmount').textContent=btcAmt.toFixed(8)+' BTC';
  document.getElementById('satAmount').textContent=sats.toLocaleString('es-MX')+' sats ⚡';
  document.getElementById('satMsg').textContent='Con $'+amount+' pesos tienes '+sats.toLocaleString('es-MX')+' sats';
}

// ── ENCUESTA con resultados diferenciados ──
const pollAnswers={};
// Clave: q1(a/b/c) + q2(a/b/c) + q3(a/b/c)
// q1: a=sabe BTC, b=más o menos, c=no sabe
// q2: a=tiene banco, b=no tiene, c=no le interesa
// q3: a=manda remesas, b=familia manda, c=nunca
const resultMap={
  // Sabe BTC
  'aaa':{e:'💡',t:'YA CASI LO TIENES.',m:'Sabes de Bitcoin y mandas remesas. Don Memo te va a mostrar exactamente cuánto estás perdiendo en comisiones cada mes.'},
  'aab':{e:'💡',t:'INTERESANTE.',m:'Conoces Bitcoin y tu familia manda remesas. Comparte esto con quien manda el dinero — Don Memo tiene algo urgente que decirle.'},
  'aac':{e:'💡',t:'BIEN SITUADO.',m:'Sabes de Bitcoin y tienes banco. Don Memo tiene algo que decirte sobre ese banco y lo que te cobra sin que lo notes.'},
  'aba':{e:'⚡',t:'PERFECTO.',m:'Sin banco y mandas remesas. Bitcoin fue inventado para ti. Don Memo lo aprendió tarde — tú puedes aprenderlo hoy.'},
  'abb':{e:'⚡',t:'PERFECTO.',m:'Sin banco, tu familia manda remesas. Esta historia es directamente para tu familia. Compártela después.'},
  'abc':{e:'⚡',t:'INDEPENDENCIA TOTAL.',m:'Sin banco y sin remesas. Puedes ser completamente libre. Don Memo te muestra cómo funciona.'},
  // Más o menos sabe BTC
  'baa':{e:'🎯',t:'CASI LO TIENES.',m:'Sabes algo de Bitcoin y mandas remesas. En 15 minutos Don Memo te llena los huecos y te muestra cuánto estás perdiendo.'},
  'bba':{e:'🎯',t:'BUEN PUNTO DE PARTIDA.',m:'Sin banco y con remesas. Bitcoin puede ser tu banco y tu sistema de pagos. Don Memo vivió exactamente tu situación.'},
  'bca':{e:'🔥',t:'ESTO ES URGENTE.',m:'Sin banco, con remesas y sin entender bien Bitcoin. Don Memo perdió miles de pesos así. Escucha su historia antes de mandar el próximo pago.'},
  // No sabe BTC
  'caa':{e:'🚀',t:'EMPECEMOS DE CERO.',m:'Nunca escuchaste de Bitcoin pero usas banco y mandas remesas. Don Memo tampoco sabía. Hoy eso va a cambiar.'},
  'cba':{e:'🚀',t:'PUNTO DE PARTIDA PERFECTO.',m:'Sin banco ni Bitcoin. En 15 minutos Don Memo va a cambiar cómo ves tu dinero para siempre.'},
  'cca':{e:'🚀',t:'BIENVENIDO.',m:'Don Memo aprendió Bitcoin a los 58 años partiendo de cero. Si él pudo, tú también puedes — y en mucho menos tiempo.'},
};
const defaultResult={e:'🎯',t:'PERFECTO.',m:'Don Memo tiene algo justo para ti. En 15 minutos vas a entender todo sobre Bitcoin.'};

function answerPoll(q,answer){
  pollAnswers[q]=answer;
  document.querySelectorAll('#q'+q+' .poll-btn').forEach(btn=>{
    if(btn.getAttribute('onclick').includes("'"+answer+"'")) btn.classList.add('selected');
  });
  setTimeout(()=>{
    if(q<3){
      document.getElementById('q'+q).style.display='none';
      document.getElementById('q'+(q+1)).style.display='block';
      const dots=document.getElementById('pollDots').children;
      for(let i=0;i<dots.length;i++) dots[i].style.background=i<=q-1?'var(--btc)':'#333';
      dots[q].style.background='var(--btc)';
    } else {
      document.getElementById('q'+q).style.display='none';
      document.getElementById('pollDots').style.display='none';
      const key=(pollAnswers[1]||'c')+(pollAnswers[2]||'a')+(pollAnswers[3]||'c');
      const r=resultMap[key]||defaultResult;
      document.getElementById('resultEmoji').textContent=r.e;
      document.getElementById('resultTitle').textContent=r.t;
      document.getElementById('resultMsg').textContent=r.m;
      document.getElementById('pollResult').style.display='block';
    }
  },400);
}
