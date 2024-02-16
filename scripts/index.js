document.addEventListener("DOMContentLoaded", function () {
    const hamburguerBtn = document.querySelector(".hamburguer-btn");
    const navLinks = document.querySelector(".nav-links");
  
    hamburguerBtn.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  });
  
  // Segundo script - Modo oscuro
document.addEventListener('DOMContentLoaded', function () {
  const modoOscuroBtn = document.getElementById('modoOscuroBtn');
  const body = document.body;

  console.log("Script de Modo Oscuro cargado.");

  modoOscuroBtn.addEventListener('click', function () {
    console.log("Botón de Modo Oscuro clickeado.");
    body.classList.toggle('modo-oscuro');

    // Guarda el estado actual del modo en el almacenamiento local
    if (body.classList.contains('modo-oscuro')) {
      localStorage.setItem('modoOscuro', 'activo');
      console.log("Modo oscuro activado.");
    } else {
      localStorage.removeItem('modoOscuro');
      console.log("Modo oscuro desactivado.");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Inicializa Swiper
  const mySwiper = new Swiper(".swiper-container", {
    // Configuración del carrusel
    loop: false, // Desactiva el bucle
    autoplay: {
      delay: 3000, // Intervalo de cambio de imagen en milisegundos
    },
    spaceBetween: 20, // Ajusta el espacio entre las imágenes según tus preferencias
    initialSlide: 0, // Asegura que el carrusel inicie con la primera imagen
  });
});
