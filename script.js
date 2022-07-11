// Set slide position
// Get all the slides
// Get total number of slides

// Select the carousel
const carousel = document.querySelector(".carousel");
let carouselOffsetWidth = carousel.offsetWidth;

console.log("carouselOffsetWidth: ", carouselOffsetWidth);

// Get scroll width

let carouselScrollWidth = carousel.scrollWidth;

console.log("carouselScrollWidth: ", carouselScrollWidth);

// Get scroll left width

let carouselScrollLeftWidth = carousel.scrollLeft;

console.log("carouselScrollLeftWidth: ", carouselScrollLeftWidth);


// Select Next BTN
const nextBtn = document.querySelector("#carousel__button--next");

// Select previous BTN
const prevBtn = document.querySelector("#carousel__button--prev");

nextBtn.addEventListener('click', () => {
    console.log('carouselScrollWidth: ', carouselScrollWidth)
    console.log('carouselScrollLeftWidth', carouselScrollLeftWidth)
    // To go back to the beginning
    if (carouselScrollWidth >= carouselScrollLeftWidth) {
        carouselScrollLeftWidth = carouselScrollWidth;
    }
    console.log('carouselScrollLeftWidth after', carouselScrollLeftWidth)
    console.log('carouselScrollWidth after', carouselScrollWidth)
    carousel.scrollLeft = carouselScrollLeftWidth;
    nextBtn.style.display = "none";
    prevBtn.style.display = "block";

});

prevBtn.addEventListener('click', () => {
    console.log('carouselScrollLeftWidth prev: ', carouselScrollLeftWidth)
    if (carouselScrollLeftWidth <= carouselScrollWidth) {
        carouselScrollLeftWidth = 0;
    }
    carousel.scrollLeft = carouselScrollLeftWidth;
    nextBtn.style.display = "block";
    prevBtn.style.display = "none";
});


