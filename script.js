// script.js - THRONO'S GYM
// Validación del formulario de consultas y mensaje de confirmación
// Guía de Actividades N° 4 - Victoria 7° 2°

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("formConsultas");
  const mensajeExito = document.getElementById("mensajeExito");

  if (!form) return;

  form.addEventListener("submit", function (evento) {

    // Si hay campos inválidos, detiene todo y muestra errores
    if (!form.checkValidity()) {
      evento.preventDefault();
      evento.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    // Campos válidos: muestra el mensaje de éxito
    const nombre = document.getElementById("nombreApellido").value.trim();
    const tipo   = document.getElementById("tipoConsulta").value;

    mensajeExito.classList.remove("d-none");
    mensajeExito.innerHTML =
      "✅ <strong>¡Consulta enviada con éxito, " + nombre + "!</strong> " +
      "Recibimos tu solicitud de: <em>" + tipo + "</em>. " +
      "Te responderemos a la brevedad. ¡Gracias por contactarte con THRONO'S GYM!";

    mensajeExito.scrollIntoView({ behavior: "smooth", block: "center" });

    // Deja que el formulario se envíe normalmente a FormSubmit (NO llama a preventDefault)

  });

});
