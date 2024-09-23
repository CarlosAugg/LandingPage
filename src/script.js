document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");

  setTimeout(() => {
      intro.classList.add("fade-out");
  }, 200);

  const typedText = document.getElementById("typed-text");
  const text = "Hello World!";
  let typedIndex = 0;

  function type() {
      if (typedIndex < text.length) {
          typedText.textContent += text.charAt(typedIndex);
          typedIndex++;
          setTimeout(type, 150);
      }
  }

  type();

  // Carousel functionality
  let carouselIndex = 0;

  function moveCarousel(direction) {
      const carouselItems = document.querySelectorAll(".carousel-item");
      carouselIndex += direction;

      if (carouselIndex < 0) {
          carouselIndex = carouselItems.length - 1;
      } else if (carouselIndex >= carouselItems.length) {
          carouselIndex = 0;
      }

      const offset = -carouselIndex * 100;
      document.querySelector(".carousel-wrapper").style.transform = `translateX(${offset}%)`;
  }

  // Adicionando eventos aos botões
  document.querySelector(".prev").addEventListener("click", () => moveCarousel(-1));
  document.querySelector(".next").addEventListener("click", () => moveCarousel(1));
});
