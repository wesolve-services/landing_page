import { initTypeWriter, initIntersectionObserver } from './js/animations.js';
import { initSmoothScroll } from './js/navigation.js';
import { initCounterAnimation } from './js/counter.js';
import { initTestimonialCarousel } from './js/testimonialCarousel.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize smooth scrolling
  initSmoothScroll();

  // Initialize animations
  initIntersectionObserver();

  // Initialize counter animations
  initCounterAnimation();

  // Initialize testimonial carousel
  initTestimonialCarousel();

  // Initialize typing animation
  const tagline = "Solutions that simplify your life";
  const taglineElement = document.querySelector('.tagline');
  initTypeWriter(tagline, taglineElement);
});