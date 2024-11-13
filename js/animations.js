export function initTypeWriter(tagline, element) {
  if (!element) return;
  
  let i = 0;
  function typeWriter() {
    if (i < tagline.length) {
      element.textContent += tagline.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();
}

export function initIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.service-card').forEach((el) => observer.observe(el));
}