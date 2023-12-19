const swiper = new Swiper(".swiper", {
  // Parámetros opcionales
  direction: "horizontal",
  loop: true,

  // Paginación
  pagination: {
    el: ".swiper-pagination",
  },

  // Navegación
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});