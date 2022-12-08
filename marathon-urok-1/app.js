function slidesPlugin(activeSlide) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');

    slides.forEach(slide => {
        
        slide.addEventListener('click', () => {
            slides.forEach(slide => {slide.classList.remove('active');})
            slide.classList.add('active');
        })
    });
}

slidesPlugin(Math.floor(Math.random() * 5));