let currentSlide = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    if (index >= totalSlides) {
        currentSlide = 0;  // Loop back to first slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1;  // Loop to last slide
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;  // Calculate the offset based on the current slide
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}
