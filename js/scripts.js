// Basic site JS: slogan rotation and nav toggle. Lightweight and accessible.
document.addEventListener('DOMContentLoaded', function(){
  // Slogan rotation for hero
  const slogans = ['Drill Your Day.','Fuel for the Reckless.','From the Earth to the Grind.'];
  let i = 0;
  const el = document.getElementById('hero-slogan');
  if(el){
    setInterval(()=>{
      i = (i+1) % slogans.length;
      el.textContent = slogans[i];
    }, 3500);
  }

  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if(nav.style.display === 'flex'){
        nav.style.display = '';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
      }
    });
  }

  // Highlight active nav link (works with relative URLs)
  const current = (window.location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.site-nav a, .footer-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if(!href) return;
    // Handle root/home links
    if((current === '' || current === 'index.html') && (href === 'index.html' || href === '/')){
      a.classList.add('active');
    } else if(href.endsWith(current)) {
      a.classList.add('active');
    }
  });

  // Parallax on hero background (reduced motion aware)
  const preferReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = document.querySelector('.hero');
  if(hero && !preferReduced){
    hero.addEventListener('mousemove', (e)=>{
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      hero.style.backgroundPosition = `${50 + x*4}% ${50 + y*4}%`;
    });
  }

  // Reveal on scroll for product cards
  const observer = ('IntersectionObserver' in window) ? new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.15}) : null;

  if(observer){
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  }
});
