/* Demo booking request. TODO backend: POST /api/booking-requests, availability check, payment, email. */
document.addEventListener('DOMContentLoaded',function(){var f=document.getElementById('bk');if(!f)return;f.removeAttribute('data-demo');var q=new URLSearchParams(location.search).get('type');if(q)f.type.value=q;
var t=new Date().toISOString().slice(0,10);f.ci.min=t;f.co.min=t;
function nights(){return Math.round((new Date(f.co.value)-new Date(f.ci.value))/864e5)}
function sum(){var M=I18N[L()],n=nights();document.getElementById('sm').textContent=M.sum+': '+f.type.selectedOptions[0].textContent+' · '+(n>0?n+' '+M.n:'—')+' · '+(+f.ad.value||0)+'+'+(+f.ch.value||0)}
f.addEventListener('input',sum);document.addEventListener('langchange',sum);sum();
f.addEventListener('submit',function(e){e.preventDefault();var ok=validate(f),M=I18N[L()];
if(f.ci.value&&f.ci.value<t){f.ci.parentNode.querySelector('.err').textContent=M.past;ok=false}
if(f.ci.value&&f.co.value&&nights()<1){f.co.parentNode.querySelector('.err').textContent=M.dates;ok=false}
if(+f.ad.value<1){f.ad.parentNode.querySelector('.err').textContent=M.adults;ok=false}
if(ok)finish(f)})});
