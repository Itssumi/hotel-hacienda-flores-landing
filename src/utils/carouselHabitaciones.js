document.addEventListener("DOMContentLoaded", () => {
  console.log("Carousel cargado");

  const container = document.getElementById("habitacionesView");
  const buttonPrev = document.getElementById("buttonPrevCarousel");
  const buttonNext = document.getElementById("buttonNextCarousel");

  // Ajusta este valor según el ancho de cada slide
  const slideWidth = container.clientWidth;

  buttonNext.addEventListener("click", () => {
    if (container.scrollLeft + slideWidth >= container.scrollWidth) {
      // Si llega al final, vuelve al inicio
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: slideWidth, behavior: "smooth" });
    }
  });

  buttonPrev.addEventListener("click", () => {
    if (container.scrollLeft <= 0) {
      // Si está al inicio, va al final
      container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -slideWidth, behavior: "smooth" });
    }
  });
});
