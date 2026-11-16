/* Page texts live inline as data-kz / data-en attributes; JS messages below. */
window.I18N={kz:{req:'Міндетті өріс',email:'Email қате',phone:'Телефон нөмірі қате',dates:'Кету күні келу күнінен кейін болуы керек',past:'Өткен күнді таңдауға болмайды',adults:'Кемінде 1 ересек',ok:'Жарамды демо-код (тек демонстрация)',bad:'Код табылмады',sum:'Сұрау жиынтығы',n:'түн'},
en:{req:'Required field',email:'Invalid email',phone:'Invalid phone number',dates:'Check-out must be after check-in',past:'Past dates are not allowed',adults:'At least 1 adult',ok:'Valid demo code (demonstration only)',bad:'Code not found',sum:'Request summary',n:'nights'}};
window.L=function(){return localStorage.getItem('alamat-lang')||'kz'};
window.setLang=function(l){localStorage.setItem('alamat-lang',l);document.documentElement.lang=l==='kz'?'kk':'en';
document.querySelectorAll('[data-kz]').forEach(function(e){e.textContent=e.dataset[l]});
document.querySelectorAll('[data-pkz]').forEach(function(e){e.placeholder=e.dataset['p'+l]});
var b=document.getElementById('lang');if(b)b.textContent=l==='kz'?'EN':'KZ';document.dispatchEvent(new Event('langchange'))};
document.addEventListener('DOMContentLoaded',function(){setLang(L());document.getElementById('lang').onclick=function(){setLang(L()==='kz'?'en':'kz')}});
