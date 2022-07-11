window.addEventListener('load', (event) => {

    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const carousel = document.querySelector(".carousel");
    const carouselItem = document.querySelector(".carousel__item");
    const carouselOffsetWidth = carousel.offsetWidth;
    const carouselScrollWidth = carousel.scrollWidth;
    const nextBtn = document.querySelector("#carousel__button--next");
    const prevBtn = document.querySelector("#carousel__button--prev");
    const carouselItemOffsetWidth = carouselItem.offsetWidth;
    let carouselScrollLeftWidth = carousel.scrollLeft;
    nextBtn.addEventListener('click', function () {
        carouselScrollLeftWidth += carouselItemOffsetWidth;
        if ((carouselScrollLeftWidth + carouselOffsetWidth) >= carouselScrollWidth) {
            nextBtn.style.display = "none";
            prevBtn.style.display = "block";
        } else {
            prevBtn.style.display = "block";
        }
        carousel.scrollLeft = carouselScrollLeftWidth;
    });

    prevBtn.addEventListener('click', () => {
        carouselScrollLeftWidth -= carouselItemOffsetWidth;
        if (carouselScrollLeftWidth <= 0) {
            nextBtn.style.display = "block";
            prevBtn.style.display = "none";
            carouselScrollLeftWidth = 0;
        } else {
            nextBtn.style.display = "block";
        }
        carousel.scrollLeft = carouselScrollLeftWidth;
    });


// Show Carousel arrows on carousel hover
    carouselWrapper.addEventListener("mouseover", showCarouselArrows);

    function showCarouselArrows() {
        // If I can slide to the right then hide the prev BTN
        nextBtn.style.display = "block";
        prevBtn.style.display = "block";

        // show the right arrow if we can scroll to the left. if I am at the end of the scroll left
        if ((carouselScrollLeftWidth + carouselOffsetWidth) >= carouselScrollWidth) {
            // The end of the scroll
            // Hide right arrow
            nextBtn.style.display = "none";
            prevBtn.style.display = "block";
        } else {
            prevBtn.style.display = "block";
        }

        // show the left arrow if I am at the right scroll
        if (carouselScrollLeftWidth <= 0) {
            nextBtn.style.display = "block";
            prevBtn.style.display = "none";
            carouselScrollLeftWidth = 0;
        }
    }

    carouselWrapper.addEventListener("mouseout", hideCarouselArrows);

    function hideCarouselArrows() {
        nextBtn.style.display = "none";
        prevBtn.style.display = "none";
    }
});
