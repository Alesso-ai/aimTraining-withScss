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