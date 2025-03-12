const images = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg"
];

// Select slider container
const slides = document.querySelectorAll(".slide");

// Apply images to slides dynamically
slides.forEach((slide, index) => {
    if (images[index]) {
        slide.style.background = `url('${images[index]}') no-repeat center center/cover`;
    }
});

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");

    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("current");
    } else {
        slides[0].classList.add("current");
    }
};

const prevSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");

    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("current");
    } else {
        slides[slides.length - 1].classList.add("current");
    }
};

// Button events
next.addEventListener("click", () => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener("click", () => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}
