document.addEventListener('DOMContentLoaded', () => {
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
});
