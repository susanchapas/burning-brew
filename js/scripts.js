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
});
