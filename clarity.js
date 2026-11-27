(function(){
  var me = false;
  try {
    var q = location.search;
    if (/[?&]me=1\b/.test(q)) localStorage.setItem('tb_me', '1');
    if (/[?&]me=0\b/.test(q)) localStorage.removeItem('tb_me');
    me = localStorage.getItem('tb_me') === '1';
  } catch (e) {}
  if (me) { window.clarity = function () {}; return; }
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "zk2m53qdv2");
document.addEventListener('click', function (e) {
  try {
    var a = e.target.closest && e.target.closest('a');
    if (!a) { var b = e.target.closest && e.target.closest('button'); if (b && /gmail\.com/.test(b.textContent)) clarity('event', 'copy_email'); return; }
    var h = a.getAttribute('href') || '';
    if (a.classList.contains('cv-dl') || /\.pdf$/i.test(a.getAttribute('download') || '')) clarity('event', 'resume_download');
    else if (/linkedin\.com/.test(h)) clarity('event', 'click_linkedin');
    else if (/^mailto:/.test(h)) clarity('event', 'click_email');
  } catch (x) {}
}, true);
})();
