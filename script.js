document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Enhanced form handling
  const form = document.querySelector('.signup-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const goal = form.querySelector('select').value;

      if (!name || !email) {
        alert('Please fill in all required fields.');
        return;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Show success message with more details
      const message = `Thank you, ${name}!

Your enlistment request has been received for: ${goal}

We'll contact you at ${email} within 24 hours to begin your training.

Welcome to TheGreatEnglishWarriors! 🏆`;

      alert(message);
      form.reset();
    });
  }

  // Add animation to program cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe program cards
  const programCards = document.querySelectorAll('.program-card, .feature-item, .curriculum-week');
  programCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Add hover effects to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-2px) scale(1.02)';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Progress page animations
  const progressBars = document.querySelectorAll('.progress-fill');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });

  // Achievement unlock animation
  const achievements = document.querySelectorAll('.achievement-card.unlocked');
  achievements.forEach((achievement, index) => {
    achievement.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s both`;
  });

  // Add CSS animation for achievements
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
