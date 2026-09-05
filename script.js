const slides = [
  {
    title: "Experience Pure Sound & Comfort",
    text: "Discover amazing deals and the latest products.",
    image: "casque.svg"
  },
  {
    title: "Smart Technology for You",
    text: "Discover our latest innovative products.",
    image: "smartwatch.svg"
  },
  {
    title: "Everything You Need",
    text: "Quality products at amazing prices.",
    image: "laptop.svg"
  }
];

const title = document.querySelector(".home-content h1");
const text = document.querySelector(".home-content p");
const image = document.querySelector(".home-image img");
const dots = document.querySelectorAll(".dot");

dots.forEach(dot => {
  dot.addEventListener("click", () => {

    const index = dot.dataset.slide;

    title.textContent = slides[index].title;
    text.textContent = slides[index].text;
    image.src = slides[index].image;

    dots.forEach(d => d.classList.remove("active"));
    dot.classList.add("active");
  });
});
let currentSlide = 0;

setInterval(() => {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    title.textContent = slides[currentSlide].title;
    text.textContent = slides[currentSlide].text;
    image.src = slides[currentSlide].image;

    dots.forEach(d => d.classList.remove("active"));
    dots[currentSlide].classList.add("active");

}, 4000);



const header = document.querySelector(".header");
const intro = document.querySelector(".intro");

function updateNavbar() {
    const scroll = window.scrollY;
    const introHeight = intro.offsetHeight;

    const top = Math.max(introHeight - scroll, 0);

    header.style.top = `${top}px`;
}

window.addEventListener("scroll", updateNavbar);
window.addEventListener("resize", updateNavbar);

updateNavbar();