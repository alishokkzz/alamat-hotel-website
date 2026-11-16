/* DEMO ONLY: frontend validation is NOT secure. Production: server-side single-use, rate-limited, signed QR codes. */
var DEMO_CODES=['ALAMAT-PRIVATE-0001'];
document.addEventListener('DOMContentLoaded',function(){
var p=document.getElementById('pass');if(p)p.onclick=function(){p.classList.toggle('flip')};
var v=document.getElementById('vf');if(v)v.addEventListener('submit',function(e){e.preventDefault();var c=document.getElementById('vc').value.trim().toUpperCase(),r=document.getElementById('vr'),M=I18N[L()],ok=DEMO_CODES.indexOf(c)>-1;r.textContent=ok?M.ok:M.bad;r.style.color=ok?'#2e8b57':'#c0392b';document.getElementById('vl').style.display=ok?'inline-block':'none';if(ok)document.getElementById('pcode').value=c})});
