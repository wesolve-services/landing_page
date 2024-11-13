export async function initTestimonialCarousel() {
  const testimonialContainer = document.querySelector('.testimonials-carousel');
  if (!testimonialContainer) return;

  try {
    //const response = await fetch('/data/testimonials.json');
    //const data = await response.json();
    const data = {
  "testimonials": [
    {
      "id": 1,
      "quote": "WeSolve helped me complete my final year project with the latest technologies. Their guidance was invaluable!",
      "author": "Sarah Johnson",
      "role": "Computer Science Graduate",
      "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100"
    },
    {
      "id": 2,
      "quote": "The mentorship and support from WeSolve team made our project journey smooth and learning-focused.",
      "author": "Michael Chen",
      "role": "IT Engineering Student",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100"
    },
    {
      "id": 3,
      "quote": "Their expertise in cutting-edge technologies helped us create an innovative project that stood out.",
      "author": "Emma Davis",
      "role": "Software Engineering Graduate",
      "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100"
    },
    {
      "id": 4,
      "quote": "The documentation support and project guidance were exceptional. Highly recommended!",
      "author": "Alex Thompson",
      "role": "Computer Engineering Student",
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100"
    }
  ]
}
    const testimonials = data.testimonials;
    let currentIndex = 0;

    // Create carousel indicators
    const indicators = document.createElement('div');
    indicators.className = 'carousel-indicators';
    testimonials.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
      indicators.appendChild(dot);
    });
    testimonialContainer.appendChild(indicators);

    // Create navigation buttons
    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-button prev';
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.setAttribute('aria-label', 'Previous testimonial');

    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-button next';
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.setAttribute('aria-label', 'Next testimonial');

    testimonialContainer.appendChild(prevButton);
    testimonialContainer.appendChild(nextButton);

    // Navigation functions
    const goToNext = () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateCarousel();
    };

    const goToPrev = () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateCarousel();
    };

    prevButton.addEventListener('click', goToPrev);
    nextButton.addEventListener('click', goToNext);

    // Update carousel content
    function updateCarousel() {
      const testimonial = testimonials[currentIndex];
      const template = `
        <div class="testimonial-card" style="opacity: 0">
          <div class="testimonial-content">
            <i class="fas fa-quote-left"></i>
            <p>${testimonial.quote}</p>
            <div class="testimonial-author">
              <img src="${testimonial.image}" alt="${testimonial.author}">
              <div>
                <h4>${testimonial.author}</h4>
                <p>${testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      `;

      const carouselContent = testimonialContainer.querySelector('.carousel-content');
      carouselContent.innerHTML = template;

      // Update indicators
      const dots = indicators.querySelectorAll('.carousel-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });

      // Fade in animation
      requestAnimationFrame(() => {
        carouselContent.querySelector('.testimonial-card').style.opacity = '1';
      });
    }

    // Create carousel content container
    const carouselContent = document.createElement('div');
    carouselContent.className = 'carousel-content';
    testimonialContainer.appendChild(carouselContent);

    // Initial render
    updateCarousel();

    // Auto-play
    let autoplayInterval = setInterval(goToNext, 5000);

    // Pause auto-play on hover
    testimonialContainer.addEventListener('mouseenter', () => {
      clearInterval(autoplayInterval);
    });

    testimonialContainer.addEventListener('mouseleave', () => {
      autoplayInterval = setInterval(goToNext, 5000);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    });

  } catch (error) {
    console.error('Error loading testimonials:', error);
    testimonialContainer.innerHTML = '<p>Error loading testimonials</p>';
  }
}
