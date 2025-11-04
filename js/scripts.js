// Basic site JS: slogan rotation and nav toggle. Lightweight and accessible.
document.addEventListener('DOMContentLoaded', function(){
  // Hero slogan rotation removed: user requested the flashing text be removed.
  // The hero now shows a single static headline; no rotating/flashing content.

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

  // Hero video crossfade controller
  (function heroCrossfade(){
    const a = document.getElementById('hero-video-a');
    const b = document.getElementById('hero-video-b');
    if(!a || !b) return; // nothing to do

    // Respect reduced motion - keep a single video visible
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce){
      a.style.opacity = '1';
      b.style.opacity = '0';
      return;
    }

    // Crossfade parameters (seconds)
    const FADE_TIME = 0.9;
    const PRELOAD_BEFORE_END = 0.9; // start the standby this far before the active ends

    // Ensure videos have smooth CSS transition for opacity (defensive)
    [a,b].forEach(v=>{
      v.style.transition = `opacity ${FADE_TIME}s linear`;
      v.style.willChange = 'opacity';
      // Make sure initial inline opacity is set so transitions run predictably
      if(!v.style.opacity) v.style.opacity = '0';
    });

    let active = a;
    let standby = b;
    let isSwitching = false;

    // Helper to start playing a video and ignore play() rejection (autoplay policy)
    function safePlay(vid){ vid.play && vid.play().catch(()=>{}); }
    function safePause(vid){ try{ vid.pause(); }catch(e){} }

    // Initialize states once metadata is loaded
    function initOnceReady(vid, cb){
      if(isFinite(vid.duration) && vid.duration > 0) return cb();
      const handler = ()=>{ vid.removeEventListener('loadedmetadata', handler); cb(); };
      vid.addEventListener('loadedmetadata', handler);
    }

    initOnceReady(active, ()=>{
      // show active, hide standby
      active.style.opacity = '1';
      standby.style.opacity = '0';
      // ensure only active is playing
      safePlay(active);
      safePause(standby);
    });

    // Main tick using rAF to detect proximity to end of clip
    let rafId;
    function tick(){
      if(document.hidden){ rafId = requestAnimationFrame(tick); return; }
      if(!isSwitching && isFinite(active.duration) && active.duration > 0){
        const remaining = active.duration - active.currentTime;
        if(remaining <= PRELOAD_BEFORE_END){
          // Begin switch
          isSwitching = true;
          try{
            // start standby slightly into the file to avoid potential black frame at 0s
            standby.currentTime = Math.min(0.05, standby.duration || 0);
          }catch(e){}
          safePlay(standby);

          // ensure standby is brought to front by making it opaque
          requestAnimationFrame(()=>{
            standby.style.opacity = '1';
            active.style.opacity = '0';
          });

          // After fade completes, pause the old active and reset it for next cycle
          setTimeout(()=>{
            try{ safePause(active); active.currentTime = 0; }catch(e){}
            // swap references
            const tmp = active; active = standby; standby = tmp;
            isSwitching = false;
          }, (FADE_TIME * 1000) + 60);
        }
      }
      rafId = requestAnimationFrame(tick);
    }
    tick();

    // Pause playback when page hidden; resume the current active when visible
    document.addEventListener('visibilitychange', ()=>{
      if(document.hidden){ safePause(a); safePause(b); }
      else safePlay(active);
    });
  })();
});
