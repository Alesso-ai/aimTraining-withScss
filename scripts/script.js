// Primer script - Validación de formulario
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const telefono = document.querySelector("#telefono");
const mensaje = document.querySelector("#mensaje");
const enviar = document.querySelector("#enviar");
const errores = document.querySelector("#errores");

let mensajeError = [];

const validar = (e) => {
  e.preventDefault(e);
  mensajeError = [];

  nombre.value.trim().length == 0 &&
    mensajeError.push("El campo nombre es obligatorio");

  !/^[a-zA-Z0-9]*$/.test(nombre.value.trim()) &&
    mensajeError.push("El campo nombre solo acepta caracteres validos");

  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.exec(
    correo.value.trim()
  ) && mensajeError.push("El campo correo electronico no es valido");

  !/^[a-zA-Z0-9]\d{8}$/.test(telefono.value.trim()) &&
    mensajeError.push("El campo telefono solo acepta caracteres validos");

  mensaje.value.trim().length < 10 &&
    mensajeError.push("El campo mensaje debe tener al menos 10 caracteres");

  if (
    mensajeError.length === 0 &&
    confirm("¿Esta seguro de enviar el formulario?")
  ) {
    formulario.submit();
  } else if (mensajeError.length > 0) {
    errores.textContent = "";
    mensajeError.forEach(function (mensaje) {
      const mili = document.createElement("li");
      mili.textContent = mensaje;
      errores.appendChild(mili);
    });
  }
};

formulario.addEventListener("submit", validar);

