// JavaScript for Mahavira Printpack Website

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Simple Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.style.display = i === index ? 'block' : 'none';
  });
}

setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 4000);

// Animate on scroll using AOS (if AOS is included)
AOS.init({
  duration: 1000,
  once: true
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Contact Form Validation and Submission
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();
    const status = contactForm.querySelector('.form-status');

    if (!name || !email || !message) {
      status.textContent = 'Please fill out all fields.';
      status.classList.add('error');
      return;
    }

    status.textContent = 'Sending...';
    status.classList.remove('error');

    // Simulate submission (replace with real backend API later)
    setTimeout(() => {
      status.textContent = 'Message sent successfully!';
      contactForm.reset();
    }, 1500);
  });
}

// Page Load Animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// OUR PRODUCTS INFO (DYNAMIC DISPLAY OR STATIC SECTION IN HTML)
const productsData = `
  A complete box manufacturing plant customisable according to your needs and demands

  - 4 colour Heidelberg printing machines - 2
  - 5 colour Heidelberg printing machines - 2
  - UV Hybrid, Aquas gloss/matt, varnish, base coat, blister coating, Full UV
  - Leafing / hot stamping
  - 4 lamination machines (Cold and Thermal)
  - Spot UV machine for excellent packing
  - 5 corrugation machines for all types of rolls
  - E Flute, Narrow Flute, Micro Flute
  - Sister concerns: Jain Printers, Adarsh Enterprises
  - Mahavira Container, Rithala
`;

console.log('Our Products:', productsData);
