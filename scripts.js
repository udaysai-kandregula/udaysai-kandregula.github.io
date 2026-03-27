
  /* Nav scroll */
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', scrollY > 50);
  });

  /* Typing effect */
  const roles = ['Frontend Developer','Data Enthusiast','Open Source Contributor','Problem Solver'];
  let ri = 0, ci = 0, del = false;
  const el = document.getElementById('typed-role');
  function type() {
    const cur = roles[ri];
    if (!del) {
      el.textContent = cur.slice(0, ++ci);
      if (ci === cur.length) { del = true; setTimeout(type, 2000); return; }
    } else {
      el.textContent = cur.slice(0, --ci);
      if (ci === 0) { del = false; ri = (ri+1) % roles.length; }
    }
    setTimeout(type, del ? 50 : 80);
  }
  type();

  /* Reveal on scroll */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        if (e.target.classList.contains('skill-card')) {
          const bar = e.target.querySelector('.skill-bar');
          if (bar) bar.style.transform = `scaleX(${bar.style.getPropertyValue('--w') || 1})`;
        }
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal, .skill-card').forEach(el => observer.observe(el));

  /* Skill bar widths */
  document.querySelectorAll('.skill-bar').forEach(bar => {
    const w = parseFloat(bar.style.getPropertyValue('--w') || getComputedStyle(bar).getPropertyValue('--w'));
    bar.style.setProperty('--target', w);
  });

  /* Form submit */
  function handleSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.innerHTML = '<span>Sending...</span>';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = '<span>Message Sent ✓</span>';
      btn.style.background = 'linear-gradient(135deg, #00c896, #00a878)';
      e.target.reset();
      setTimeout(() => {
        btn.innerHTML = '<span>Send Message</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8H14M10 4L14 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1500);
  }

  /* Smooth anchor scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
  });