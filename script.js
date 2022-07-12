window.addEventListener('load', (event) => {
    {
        // Get elements
        const carouselWrapper = document.querySelector(".carousel-wrapper");
        const carousel = document.querySelector(".carousel");
        const carouselItem = document.querySelector(".carousel__item");
        const carouselOffsetWidth = carousel.offsetWidth;
        const carouselScrollWidth = carousel.scrollWidth;
        const carouselItemOffsetWidth = carouselItem.offsetWidth;
        const nextBtn = document.querySelector("#carousel__button--next");
        const prevBtn = document.querySelector("#carousel__button--prev");

        let carouselScrollLeftWidth = carousel.scrollLeft;

        //Handle Next BTN click
        nextBtn.addEventListener('click', function () {
            carouselScrollLeftWidth += carouselItemOffsetWidth;
            if ((carouselScrollLeftWidth + carouselOffsetWidth) >= carouselScrollWidth) {
                hideNextBTN();
                showPrevBTN();
            } else {
                showPrevBTN();
            }
            carousel.scrollLeft = carouselScrollLeftWidth;
        });

        //Handle Prev BTN click
        prevBtn.addEventListener('click', () => {
            carouselScrollLeftWidth -= carouselItemOffsetWidth;
            if (carouselScrollLeftWidth <= 0) {
                showNextBTN();
                hidePrevBTN();
                carouselScrollLeftWidth = 0;
            } else {
                showNextBTN();
            }
            carousel.scrollLeft = carouselScrollLeftWidth;
        });


        // Show Carousel arrows on carousel hover
        carouselWrapper.addEventListener("mouseover", showCarouselBTNs);

        function showCarouselBTNs() {
            // If I can slide to the right then hide the prev BTN
            showNextBTN();
            showPrevBTN();
            // show the right arrow if we can scroll to the left. if I am at the end of the scroll left
            if ((carouselScrollLeftWidth + carouselOffsetWidth) >= carouselScrollWidth) {
                // The end of the scroll
                // Hide right arrow
                hideNextBTN();
                showPrevBTN();
            } else {
                showPrevBTN();
            }

            // show the left arrow if I am at the right scroll
            if (carouselScrollLeftWidth <= 0) {
                showNextBTN();
                hidePrevBTN();
                carouselScrollLeftWidth = 0;
            } else {
                showPrevBTN();
            }
        }

        // Hide Carousel arrows on carousel hover
        carouselWrapper.addEventListener("mouseout", hideCarouselBTNs);

        function hideCarouselBTNs() {
            hideNextBTN();
            hidePrevBTN();
        }

        function showNextBTN() {
            nextBtn.style.display = "block";
        }

        function showPrevBTN() {
            prevBtn.style.display = "block";
        }

        function hideNextBTN() {
            nextBtn.style.display = "none";
        }

        function hidePrevBTN() {
            prevBtn.style.display = "none";
        }
    }
});
