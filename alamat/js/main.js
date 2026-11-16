document.addEventListener('DOMContentLoaded',function(){
var m=document.getElementById('menu'),bu=document.getElementById('burger');bu.onclick=function(){var o=m.classList.toggle('open');bu.setAttribute('aria-expanded',o)};
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})});document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
var g=[].slice.call(document.querySelectorAll('.gal .ph')),lb=document.getElementById('lb'),i=0;
if(lb&&g.length){var show=function(n){i=(n+g.length)%g.length;lb.querySelector('.ph').innerHTML=g[i].innerHTML};
g.forEach(function(e,n){e.tabIndex=0;e.onclick=function(){show(n);lb.classList.add('on')};e.onkeydown=function(ev){if(ev.key==='Enter')e.click()}});
lb.querySelector('.p').onclick=function(){show(i-1)};lb.querySelector('.n').onclick=function(){show(i+1)};lb.querySelector('.x').onclick=function(){lb.classList.remove('on')};
document.onkeydown=function(e){if(!lb.classList.contains('on'))return;if(e.key==='Escape')lb.classList.remove('on');if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)}}
/* Shared demo validation. Real submission must go to a backend (see README). */
window.validate=function(f){var ok=true,M=I18N[L()];f.querySelectorAll('[name]').forEach(function(x){var e=x.parentNode.querySelector('.err');if(!e)return;var v=x.value.trim(),msg='';
if(x.required&&!v)msg=M.req;else if(v&&x.type==='email'&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v))msg=M.email;else if(v&&x.type==='tel'&&v.replace(/\D/g,'').length<7)msg=M.phone;
e.textContent=msg;if(msg)ok=false});return ok};
window.finish=function(f){f.style.display='none';f.parentNode.querySelector('.done').classList.add('show')};
document.querySelectorAll('form[data-demo]').forEach(function(f){f.noValidate=true;f.addEventListener('submit',function(e){e.preventDefault();if(validate(f))finish(f)})})});
