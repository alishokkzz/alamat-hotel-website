(function(){var k='alamat-theme',t=localStorage.getItem(k)||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
function set(v){document.documentElement.dataset.theme=v;localStorage.setItem(k,v);var b=document.getElementById('theme');if(b){b.textContent=v==='dark'?'☀':'☾';b.setAttribute('aria-pressed',v==='dark')}}
set(t);document.addEventListener('DOMContentLoaded',function(){set(document.documentElement.dataset.theme);document.getElementById('theme').onclick=function(){set(document.documentElement.dataset.theme==='dark'?'light':'dark')}})})();
