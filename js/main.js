document.addEventListener('DOMContentLoaded', () => {
  // Hero Fade-in Effect on Mouse Move
  const heroSection = document.getElementById('homeHero');
  const heroContent = document.querySelector('.hero-content');
  if (heroSection && heroContent) {
    const triggerFadeIn = () => {
      heroContent.classList.add('fade-in');
      const overlay = heroSection.querySelector('.hero-overlay');
      if (overlay) overlay.classList.add('fade-in');
      heroSection.removeEventListener('mousemove', triggerFadeIn);
      heroSection.removeEventListener('touchstart', triggerFadeIn);
    };
    heroSection.addEventListener('mousemove', triggerFadeIn);
    heroSection.addEventListener('touchstart', triggerFadeIn);
  }

  // Mobile Navigation Hamburger Toggle
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileNavToggle && navLinks) {
    mobileNavToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Animate hamburger lines
      const spans = mobileNavToggle.querySelectorAll('span');
      if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // Close nav menu on click outside (mobile)
  document.addEventListener('click', (e) => {
    if (navLinks && navLinks.classList.contains('active') && mobileNavToggle && !mobileNavToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      const spans = mobileNavToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Menu Category Tab Filtering
  const filterButtons = document.querySelectorAll('.menu-tab-btn');
  const menuSections = document.querySelectorAll('.menu-section');

  if (filterButtons.length > 0 && menuSections.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Toggle active button class
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Show/Hide sections
        menuSections.forEach(section => {
          if (filter === 'all' || section.getAttribute('id') === filter) {
            section.style.display = 'block';
          } else {
            section.style.display = 'none';
          }
        });
      });
    });
  }

  // Mock Form Submission Handler
  const inquiryForm = document.getElementById('inquiryForm');
  const formStatus = document.getElementById('formStatus');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const inquiryType = document.getElementById('inquiryType').value;
      const message = document.getElementById('message').value;

      // Mock save to LocalStorage (as structured log/lead)
      const lead = {
        name,
        email,
        phone,
        inquiryType,
        message,
        timestamp: new Date().toISOString()
      };

      const existingLeads = JSON.parse(localStorage.getItem('pepetons_leads') || '[]');
      existingLeads.push(lead);
      localStorage.setItem('pepetons_leads', JSON.stringify(existingLeads));

      // Display Success Message
      if (formStatus) {
        formStatus.innerHTML = `
          <div class="alert-success">
            Thank you, ${name}! Your inquiry about "${inquiryType}" has been received. We will get back to you shortly.
          </div>
        `;
        formStatus.scrollIntoView({ behavior: 'smooth' });
      }

      // Reset Form
      inquiryForm.reset();
    });
  }

  // Hero Background Slideshow Cycling
  const slides = document.querySelectorAll('#homeHero .hero-slide');
  if (slides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 3000);
  }

  // Sound Mute/Unmute Toggle
  const soundToggle = document.getElementById('heroSoundToggle');
  if (soundToggle) {
    let isMuted = false;
    soundToggle.addEventListener('click', (e) => {
      e.preventDefault();
      isMuted = !isMuted;
      
      const soundIcon = document.getElementById('soundIcon');
      if (soundIcon) {
        if (isMuted) {
          // Mute Icon Path
          soundIcon.innerHTML = `<path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>`;
          soundToggle.setAttribute('aria-label', 'Unmute Sound');
        } else {
          // Speaker Icon Path
          soundIcon.innerHTML = `
            <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.11 3.89z"/>
            <path d="M8.707 11.182A4.5 4.5 0 0 0 10 8c0-1.25-.504-2.382-1.293-3.182l-.707.707A3.49 3.49 0 0 1 9 8c0 .9-.387 1.71-1 2.293z"/>
            <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/>
          `;
          soundToggle.setAttribute('aria-label', 'Mute Sound');
        }
      }
    });
  }

  // Specialty Dish Modal Dynamic Preview
  const specialtyCards = document.querySelectorAll('.menu-item.specialty, [data-specialty="true"]');
  if (specialtyCards.length > 0) {
    // Create modal element dynamically
    const modal = document.createElement('div');
    modal.id = 'specialtyModal';
    modal.className = 'specialty-modal';
    modal.innerHTML = `
      <div class="specialty-modal-content">
        <button class="specialty-modal-close" aria-label="Close modal">&times;</button>
        <div class="specialty-modal-body">
          <div class="specialty-modal-img-container">
            <div class="specialty-modal-img image-placeholder"></div>
          </div>
          <div class="specialty-modal-info">
            <span class="specialty-modal-badge">Specialty</span>
            <h2 class="specialty-modal-name"></h2>
            <p class="specialty-modal-price"></p>
            <p class="specialty-modal-desc"></p>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const modalImgContainer = modal.querySelector('.specialty-modal-img-container');
    const modalName = modal.querySelector('.specialty-modal-name');
    const modalPrice = modal.querySelector('.specialty-modal-price');
    const modalDesc = modal.querySelector('.specialty-modal-desc');
    const closeBtn = modal.querySelector('.specialty-modal-close');

    specialtyCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // Do not open modal if user clicked on a link or button (like order buttons or CTAs)
        if (e.target.closest('a') || e.target.closest('button')) return;

        const imgEl = card.querySelector('.menu-item-img img, .menu-item-img .image-placeholder, .image-placeholder');
        const nameEl = card.querySelector('.menu-item-name');
        const priceEl = card.querySelector('.menu-item-price');
        const descEl = card.querySelector('.menu-item-desc');

        if (imgEl) {
          modalImgContainer.innerHTML = '';
          const clonedImg = imgEl.cloneNode(true);
          clonedImg.style.transform = 'none';
          clonedImg.style.transition = 'none';
          modalImgContainer.appendChild(clonedImg);
        }

        if (nameEl) {
          // Strip any badges or tags from name text
          const text = Array.from(nameEl.childNodes)
            .filter(node => node.nodeType === Node.TEXT_NODE)
            .map(node => node.textContent.trim())
            .join(' ');
          modalName.textContent = text;
        }

        if (priceEl) modalPrice.textContent = priceEl.textContent;
        if (descEl) modalDesc.textContent = descEl.textContent;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Auto-filter based on URL query parameter ?filter=name
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  if (filterParam) {
    const targetBtn = document.querySelector(`.menu-tab-btn[data-filter="${filterParam}"]`);
    if (targetBtn) {
      targetBtn.click();
      const section = document.getElementById(filterParam);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  // Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }
});
