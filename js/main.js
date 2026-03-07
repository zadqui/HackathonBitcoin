// ── SCROLL RESET ON LOAD ──
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

// ── MOBILE MENU ──
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const nav = document.querySelector('nav');
  if (nav) menu.style.top = nav.offsetHeight + 'px';
  menu.classList.toggle('open');
}
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

// ── TYPEWRITER HERO ──
function typewriter(el, text, delay, cb) {
  el.textContent = '';
  let i = 0;
  const iv = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) { clearInterval(iv); if (cb) cb(); }
  }, delay);
}
window.addEventListener('load', () => {
  const tw1 = document.getElementById('tw1');
  const tw2 = document.getElementById('tw2');
  const tw3 = document.getElementById('tw3');
  if (!tw1) return;
  setTimeout(() => {
    typewriter(tw1, 'APRENDE', 50, () => {
      setTimeout(() => {
        typewriter(tw2, 'BITCOIN', 50, () => {
          setTimeout(() => typewriter(tw3, 'CON DON MEMO', 45), 100);
        });
      }, 150);
    });
  }, 600);
});

// ── PUERTA MEXICANA PIXEL ART ──
function drawDoor(ctx, openPct) {
  // openPct: 0 = cerrada, 1 = abierta
  const W = 160, H = 200;
  ctx.clearRect(0, 0, W, H);

  const s = 4; // tamaño pixel

  // Marco de la puerta — naranja quemado estilo barro
  const frameColor = '#8B4513';
  const frameLight = '#A0522D';
  ctx.fillStyle = frameColor;
  // Lados del marco
  ctx.fillRect(0, 0, 3*s, H);           // izq
  ctx.fillRect(W-3*s, 0, 3*s, H);       // der
  ctx.fillRect(0, 0, W, 3*s);           // top
  ctx.fillRect(0, H-2*s, W, 2*s);       // base
  // Detalle arco superior (pixel art)
  ctx.fillStyle = frameLight;
  for(let x = 3; x < W/s-3; x++) {
    ctx.fillRect(x*s, 2*s, s, s);
  }

  // Pared — color adobe mexicano
  ctx.fillStyle = '#C4833A';
  ctx.fillRect(3*s, 3*s, W-6*s, H-5*s);

  // Azulejos decorativos en el marco (estilo talavera)
  const tileColors = ['#1B6CA8','#E8C547','#C0392B','#27AE60'];
  for(let i = 0; i < 4; i++) {
    ctx.fillStyle = tileColors[i];
    ctx.fillRect(s*0.5, (4+i*4)*s, 2*s, 2*s);   // izq
    ctx.fillRect(W-2.5*s, (4+i*4)*s, 2*s, 2*s); // der
  }

  // Hoja de la puerta — madera oscura
  const doorW = W - 8*s;
  const doorH = H - 6*s;
  const doorX = 4*s;
  const doorY = 3*s;
  const skew = openPct * doorW * 0.75; // perspectiva al abrir

  ctx.fillStyle = '#5D3A1A';
  // Dibuja la puerta con perspectiva simple (reducir ancho)
  const visibleW = doorW * (1 - openPct * 0.85);
  if (visibleW > 2) {
    ctx.fillRect(doorX, doorY, visibleW, doorH);

    // Tablones de madera
    ctx.fillStyle = '#6B4226';
    for(let y = 1; y < 6; y++) {
      ctx.fillRect(doorX + s, doorY + y*(doorH/6), visibleW - 2*s, s);
    }

    // Panel superior decorativo
    ctx.fillStyle = '#4A2C0A';
    ctx.fillRect(doorX + 2*s, doorY + 2*s, visibleW - 4*s, doorH*0.35);

    // Panel inferior
    ctx.fillRect(doorX + 2*s, doorY + doorH*0.45, visibleW - 4*s, doorH*0.45);

    // Cruz decorativa estilo colonial
    if (visibleW > 20) {
      ctx.fillStyle = '#8B6914';
      const cx = doorX + visibleW * 0.5;
      ctx.fillRect(cx - s*0.5, doorY + 2*s, s, doorH*0.35);
      ctx.fillRect(doorX + 2*s, doorY + doorH*0.18, visibleW - 4*s, s);
    }

    // Aldaba (manija)
    if (visibleW > 30 && openPct < 0.5) {
      ctx.fillStyle = '#D4A017';
      ctx.fillRect(doorX + visibleW - 4*s, doorY + doorH*0.42, 2*s, 4*s);
      ctx.fillRect(doorX + visibleW - 5*s, doorY + doorH*0.42, s, s);
      ctx.fillRect(doorX + visibleW - 5*s, doorY + doorH*0.42 + 3*s, s, s);
    }

    // Borde de luz en la puerta
    ctx.fillStyle = '#7B4F2E';
    ctx.fillRect(doorX, doorY, s, doorH);
  }

  // Oscuridad interior cuando se abre
  if (openPct > 0.1) {
    ctx.fillStyle = `rgba(0,0,0,${openPct * 0.85})`;
    ctx.fillRect(doorX, doorY, doorW, doorH);
  }
}

// ── SECUENCIA PUERTA + DON MEMO ──
window.addEventListener('load', () => {
  const canvas = document.getElementById('doorCanvas');
  const memo   = document.getElementById('memoImg');
  if (!canvas || !memo) return;
  const ctx = canvas.getContext('2d');

  let openPct = 0;
  let phase = 'opening'; // opening → waiting → closing → done

  // Dibuja puerta cerrada al inicio
  drawDoor(ctx, 0);

  setTimeout(() => {
    // Fase 1: abrir puerta
    const openInterval = setInterval(() => {
      openPct = Math.min(openPct + 0.04, 1);
      drawDoor(ctx, openPct);
      if (openPct >= 1) {
        clearInterval(openInterval);
        // Fase 2: Don Memo aparece
        setTimeout(() => {
          memo.style.transition = 'opacity 0.4s ease, transform 0.5s ease';
          memo.style.opacity = '1';
          memo.style.transform = 'translateX(-50%)';

          // Fase 3: cerrar puerta
          setTimeout(() => {
            const closeInterval = setInterval(() => {
              openPct = Math.max(openPct - 0.05, 0);
              drawDoor(ctx, openPct);
              if (openPct <= 0) {
                clearInterval(closeInterval);
                // Fase 4: desvanecer canvas y activar idle
                canvas.style.transition = 'opacity 0.5s ease';
                canvas.style.opacity = '0';
                setTimeout(() => {
                  canvas.style.display = 'none';
                  memo.style.transition = '';
                  memo.classList.add('memo-idle');
                }, 500);
              }
            }, 20);
          }, 600);
        }, 300);
      }
    }, 20);
  }, 500);
});

// ── CARD FLASH al entrar al viewport ──
const cardFlashObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.classList.add('card-flash');
        e.target.addEventListener('animationend', () => {
          e.target.classList.remove('card-flash');
        }, { once: true });
      }, i * 150);
      cardFlashObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.porque-card').forEach(el => cardFlashObs.observe(el));

// ── TOAST ──
function showToast(msg){
  const t=document.getElementById('toast');
  document.getElementById('toastMsg').textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}

// ── BTC PRICE ──
let btcPriceMXN=null, prevPrice=null, retryCount=0;
let usdMxnRate=17.5; // fallback

async function fetchUSDMXN(){
  try{
    const res=await fetch('https://api.frankfurter.app/latest?from=USD&to=MXN');
    const data=await res.json();
    usdMxnRate=data.rates.MXN;
  } catch(e){ /* usa fallback */ }
}

async function fetchBTC(){
  try{
    const [btcRes, chRes]=await Promise.all([
      fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'),
      fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT')
    ]);
    if(!btcRes.ok) throw new Error('HTTP '+btcRes.status);
    const btcData=await btcRes.json();
    const chData=await chRes.json();

    const usd=parseFloat(btcData.price);
    const change=parseFloat(chData.priceChangePercent);
    prevPrice=btcPriceMXN;
    btcPriceMXN=Math.round(usd*usdMxnRate);

    document.getElementById('priceOffline').style.display='none';
    document.getElementById('navPrice').textContent='BTC: $'+btcPriceMXN.toLocaleString('es-MX',{maximumFractionDigits:0})+' MXN';
    document.getElementById('heroPriceMXN').textContent='$'+btcPriceMXN.toLocaleString('es-MX',{maximumFractionDigits:0})+' MXN';
    document.getElementById('heroPriceUSD').textContent='$'+Math.round(usd).toLocaleString('en-US',{maximumFractionDigits:0})+' USD';
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

fetchUSDMXN().then(fetchBTC);
setInterval(fetchBTC,30000);
setInterval(fetchUSDMXN,300000);

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

// ── THEME TOGGLE ──
function toggleTheme() {
  const html = document.documentElement;
  const isLight = html.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');

  // Desktop button
  const desktop = document.getElementById('themeToggle');
  if (desktop) desktop.textContent = isLight ? '🌑 MODO' : '🌙 MODO';

  // Mobile — ícono grande + label separado
  const mobileIcon  = document.getElementById('themeIconMobile');
  const mobileLabel = document.getElementById('themeLabelMobile');
  if (mobileIcon)  mobileIcon.textContent  = isLight ? '☀️' : '🌙';
  if (mobileLabel) mobileLabel.textContent = isLight ? 'MODO CLARO' : 'MODO OSCURO';

  // Logos — claro/oscuro
  updateLogos(isLight);
}

function updateLogos(isLight) {
  const navSrc = isLight ? 'assets/img/logoclaro.png' : 'assets/img/logodark.png';
  const navLogo = document.getElementById('navLogo');
  if (navLogo) navLogo.src = navSrc;
  // Footer siempre logodark sin importar el tema
  const footerLogo = document.getElementById('footerLogo');
  if (footerLogo) footerLogo.src = 'assets/img/logodark.png';
  // Favicon
  const favicon = document.getElementById('favicon');
  if (favicon) favicon.href = navSrc;
}

// ── RESTORE SAVED THEME O DETECTAR SISTEMA ──
(function() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isLight = saved ? saved === 'light' : !prefersDark;

  if (isLight) {
    document.documentElement.classList.add('light');
  }

  window.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('themeToggle');
    if (el) el.textContent = isLight ? '🌑 MODO' : '🌙 MODO';
    const mi = document.getElementById('themeIconMobile');
    const ml = document.getElementById('themeLabelMobile');
    if (mi) mi.textContent = isLight ? '☀️' : '🌙';
    if (ml) ml.textContent = isLight ? 'MODO CLARO' : 'MODO OSCURO';
    updateLogos(isLight);
  });

  // Escuchar cambios del sistema en tiempo real (si no hay preferencia guardada)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      const nowLight = !e.matches;
      const html = document.documentElement;
      nowLight ? html.classList.add('light') : html.classList.remove('light');
      const el = document.getElementById('themeToggle');
      if (el) el.textContent = nowLight ? '🌑 MODO' : '🌙 MODO';
      const mi = document.getElementById('themeIconMobile');
      const ml = document.getElementById('themeLabelMobile');
      if (mi) mi.textContent = nowLight ? '☀️' : '🌙';
      if (ml) ml.textContent = nowLight ? 'MODO CLARO' : 'MODO OSCURO';
      updateLogos(nowLight);
    }
  });
})();