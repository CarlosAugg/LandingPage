document.addEventListener("DOMContentLoaded", () => {
  // Parte 1: Animação de fade-out e digitação
  const intro = document.getElementById("intro");

  setTimeout(() => {
    intro.classList.add("fade-out");
  }, 0);

  const typedText = document.getElementById("typed-text");
  const text = "Hello World!";
  let index = 0;

  function type() {
    if (index < text.length) {
      typedText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // Velocidade de digitação
    }
  }

  type();

  // Parte 2: Carrossel
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");
  let currentIndex = 0;

  function updateCarousel() {
    const itemWidth = items[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length; // Loop infinito
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop infinito para trás
    updateCarousel();
  });

  // Atualiza o carrossel se a tela for redimensionada
  window.addEventListener("resize", updateCarousel);
});
