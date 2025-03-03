document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeInUp");
          observer.unobserve(entry.target); // Para que no se repita la animación
        }
      });
    },
    { threshold: 0.3 }
  );

  elementos.forEach((el) => observer.observe(el));
});
