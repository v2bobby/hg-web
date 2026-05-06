// ============================================
// HiredeyGo — Premium Landing Page Interactions
// Production-quality, clean, accessible
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Tailwind script already in HTML
  initNavbar();
  initScrollReveal();
  initMobileMenu();
  initWaitlistForm();
  initSmoothScroll();
  initStatusStepsHover();
});

// Navbar scroll effect + active section
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Active section highlighting
  const sections = ['problem', 'solution', 'architecture', 'vision', 'roadmap', 'founder'];
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 150;

    sections.forEach(sectionId => {
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-white', 'font-semibold');
      link.classList.add('text-slate-400');
      
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-white', 'font-semibold');
        link.classList.remove('text-slate-400');
      }
    });
  });
}

// Scroll reveal animations
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// Mobile hamburger menu
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('hidden');
    
    if (isOpen) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('mobile-menu');
      hamburger.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6h12v12" />
        </svg>
      `;
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('mobile-menu');
      hamburger.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      `;
    }
  });

  // Close menu when clicking nav links
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      hamburger.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      `;
    });
  });
}

// Waitlist form handling
function initWaitlistForm() {
  const form = document.getElementById('waitlist-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="flex items-center justify-center gap-2">
        <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
        Joining...
      </span>
    `;

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 850));

    // Success state
    showSuccessModal();
    
    // Reset form
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;

    // Optional: Store in localStorage that user joined
    localStorage.setItem('hiredygo_waitlist_joined', 'true');
  });

  // Check if already joined
  if (localStorage.getItem('hiredygo_waitlist_joined') === 'true') {
    const ctaSection = document.getElementById('waitlist');
    if (ctaSection) {
      // Optionally show a subtle "You're on the list" badge
    }
  }
}

// Success modal
function showSuccessModal() {
  const modalHTML = `
    <div id="success-modal" class="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-6" onclick="closeSuccessModal()">
      <div class="modal glass max-w-md w-full rounded-3xl p-9 text-center border border-slate-700" onclick="event.stopImmediatePropagation()">
        <div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        
        <h3 class="text-3xl font-semibold tracking-tight mb-3">You're on the list.</h3>
        <p class="text-slate-400 text-[15px] leading-relaxed mb-8">
          Thank you for believing in a better way to hire.<br>
          We'll notify you the moment HiredeyGo launches in Q3 2026.
        </p>
        
        <div class="flex flex-col gap-3">
          <button onclick="closeSuccessModal()" 
                  class="btn btn-primary w-full justify-center text-base py-3.5">
            Return to Homepage
          </button>
          <button onclick="shareOnX()" 
                  class="btn btn-secondary w-full justify-center text-sm">
            Share on X
          </button>
        </div>
        
        <p class="mt-6 text-[10px] text-slate-500 tracking-[0.5px]">You’ll also receive early access to the private beta.</p>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // Close on Escape
  document.addEventListener('keydown', function handler(ev) {
    if (ev.key === 'Escape') {
      closeSuccessModal();
      document.removeEventListener('keydown', handler);
    }
  }, { once: true });
}

function closeSuccessModal() {
  const modal = document.getElementById('success-modal');
  if (modal) {
    modal.style.transition = 'opacity 0.2s ease';
    modal.style.opacity = '0';
    setTimeout(() => modal.remove(), 200);
  }
}

function shareOnX() {
  const text = encodeURIComponent("HiredeyGo is building the future of merit-based hiring — verified skill over resumes, transparency over ghosting. I'm in. Join the waitlist:");
  const url = encodeURIComponent("https://hiredygo.xyz");
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        const offset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Subtle hover enhancement for status steps
function initStatusStepsHover() {
  const steps = document.querySelectorAll('.status-step');
  steps.forEach(step => {
    step.addEventListener('mouseenter', () => {
      const icon = step.querySelector('.status-icon');
      if (icon) icon.style.transform = 'scale(1.05)';
    });
    step.addEventListener('mouseleave', () => {
      const icon = step.querySelector('.status-icon');
      if (icon) icon.style.transform = 'scale(1)';
    });
  });
}

// Optional: Keyboard accessibility for modal
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement.tagName === 'BODY') {
    const waitlistInput = document.querySelector('#waitlist-form input');
    if (waitlistInput) {
      e.preventDefault();
      waitlistInput.focus();
    }
  }
});

// Easter egg: Konami code for fun (not necessary but premium touch)
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiPattern.join(',')) {
    document.body.style.transition = 'filter 0.6s ease';
    document.body.style.filter = 'hue-rotate(45deg) saturate(1.2)';
    setTimeout(() => {
      document.body.style.filter = 'none';
    }, 2200);
    konamiCode = [];
  }
});

// Demo modal for conceptual shortlist preview
function showDemoModal() {
  const modalHTML = `
    <div id="demo-modal" class="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-6" onclick="closeDemoModal()">
      <div class="modal glass max-w-2xl w-full rounded-3xl overflow-hidden border border-slate-700" onclick="event.stopImmediatePropagation()">
        <div class="px-8 pt-8 pb-6 bg-[#0F172A] border-b border-slate-700 flex items-center justify-between">
          <div>
            <div class="font-semibold text-xl tracking-tight">Recruiter Shortlist • Senior Product Engineer</div>
            <div class="text-xs text-emerald-400 mt-1">47 candidates ranked by verified merit • Updated moments ago</div>
          </div>
          <button onclick="closeDemoModal()" class="text-slate-400 hover:text-white text-2xl leading-none">×</button>
        </div>
        
        <div class="p-8">
          <div class="text-xs uppercase tracking-[1.5px] text-slate-500 mb-4">TOP MATCHES (SORTED BY MERIT SCORE)</div>
          
          <div class="space-y-3 text-sm">
            <div class="flex items-center justify-between p-4 bg-slate-800/60 rounded-2xl">
              <div class="flex items-center gap-4">
                <div class="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400/20 to-slate-700 flex items-center justify-center font-mono text-xs font-bold">AO</div>
                <div>
                  <div class="font-semibold">Adaobi Okoro <span class="text-emerald-400 text-xs ml-1">• Lagos</span></div>
                  <div class="text-xs text-slate-400">Accuracy 96% • Velocity 18m • Consistency 4.8</div>
                </div>
              </div>
              <div class="text-right font-mono">
                <div class="text-3xl font-semibold text-emerald-400 tracking-tighter">94</div>
                <div class="text-[10px] text-emerald-400/60 -mt-1">MERIT</div>
              </div>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-slate-800/60 rounded-2xl">
              <div class="flex items-center gap-4">
                <div class="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400/20 to-slate-700 flex items-center justify-center font-mono text-xs font-bold">KO</div>
                <div>
                  <div class="font-semibold">Kehinde Okafor <span class="text-emerald-400 text-xs ml-1">• Abuja</span></div>
                  <div class="text-xs text-slate-400">Accuracy 91% • Velocity 21m • Consistency 4.6</div>
                </div>
              </div>
              <div class="text-right font-mono">
                <div class="text-3xl font-semibold text-emerald-400 tracking-tighter">89</div>
                <div class="text-[10px] text-emerald-400/60 -mt-1">MERIT</div>
              </div>
            </div>
          </div>
          
          <div class="mt-8 text-center">
            <button onclick="closeDemoModal()" class="btn btn-primary px-8">This is what recruiters will see at launch</button>
            <p class="text-xs text-slate-500 mt-4">Full interactive dashboards, filters, and one-click outreach available in Q3 2026.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closeDemoModal() {
  const modal = document.getElementById('demo-modal');
  if (modal) {
    modal.style.transition = 'opacity 0.2s ease';
    modal.style.opacity = '0';
    setTimeout(() => modal.remove(), 180);
  }
}

console.log('%c[HiredeyGo] Premium landing page initialized. Built for clarity and impact.', 'color:#64748B; font-size:9px');