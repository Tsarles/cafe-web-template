// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Theme toggle functionality
const themeToggle = document.querySelector('#theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or use default
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
  // Header animations
  gsap.to('.logo', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  });
  
  gsap.to('.nav-links li', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  });
  
  // Hero animations
  gsap.to('.hero h1', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
  });
  
  gsap.to('.hero p', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.7,
    ease: 'power3.out'
  });
  
  gsap.to('.hero .btn', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.9,
    ease: 'power3.out'
  });
  
  gsap.to('.order-buttons .btn', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.1,
    stagger: 0.1,
    ease: 'power3.out'
  });
  
  gsap.to('.hero-img', {
    opacity: 1,
    x: 0,
    duration: 1.2,
    delay: 0.3,
    ease: 'power3.out'
  });
  
  // Scroll animations
  gsap.registerPlugin(ScrollTrigger);
  
  // Section titles
  gsap.utils.toArray('.section-title').forEach(title => {
    gsap.to(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  });
  
  // Coffee cards
  gsap.utils.toArray('.coffee-card').forEach((card, index) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power3.out'
    });
  });
  
  // Featured CTA button
  gsap.to('.featured-cta .btn', {
    scrollTrigger: {
      trigger: '.featured-cta',
      start: 'top 85%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  });
  
  // About section
  gsap.to('.about-img', {
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 70%',
    },
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power3.out'
  });
  
  gsap.to('.about-text', {
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 70%',
    },
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
  });
  
  // Contact section
  gsap.to('.contact-form', {
    scrollTrigger: {
      trigger: '.contact-content',
      start: 'top 70%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  });
  
  gsap.to('.contact-info', {
    scrollTrigger: {
      trigger: '.contact-content',
      start: 'top 70%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out'
  });
  
  // Map container animation
  gsap.to('.map-container', {
    scrollTrigger: {
      trigger: '.map-container',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  });
  
  // Button animations for About section
  gsap.to('.button-group .btn', {
    scrollTrigger: {
      trigger: '.button-group',
      start: 'top 85%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  });

  gsap.to('.top-banner', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.utils.toArray('.review-card').forEach((card, i) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      }
    });
  });
});
const openModalBtn = document.getElementById('open-review-modal');
const closeModalBtn = document.getElementById('close-review-modal');
const closeXBtn = document.getElementById('close-review-x');
const modalOverlay = document.getElementById('review-modal');

const closeModal = () => {
  modalOverlay.style.display = 'none';
};

openModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
});

closeModalBtn.addEventListener('click', closeModal);
closeXBtn.addEventListener('click', closeModal);

