(function(){
  var d=document,b=d.getElementById('burger'),m=d.getElementById('menu'),n=d.getElementById('nav');
  function close(){m.classList.remove('open');b.setAttribute('aria-expanded','false');}
  b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);});
  m.addEventListener('click',function(e){if(e.target.tagName==='A')close();});
  d.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  window.addEventListener('scroll',function(){n.classList.toggle('solid',window.scrollY>40);},{passive:true});
  var r=d.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    d.documentElement.classList.add('js');
    var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target);}});},{threshold:.12});
    r.forEach(function(el){o.observe(el);});
  }
})();
