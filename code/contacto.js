document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Captura y trim de valores
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validación campos vacíos
        if (!nombre || !email || !mensaje) {
            mostrarMensajeError("Por favor completá todos los campos.");
            return;
        }

        // Validar nombre solo letras y espacios
        if (!validarNombre(nombre)) {
            mostrarMensajeError("El nombre solo puede contener letras y espacios.");
            return;
        }

        // Validar email
        if (!validarEmail(email)) {
            mostrarMensajeError("El correo electrónico no es válido.");
            return;
        }

        // Si pasa validaciones
        form.reset();
        mostrarMensajeExito("¡Mensaje enviado correctamente!");
    });

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarNombre(nombre) {
        // Solo letras mayúsculas/minúsculas y espacios (incluye letras acentuadas)
        const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
        return regex.test(nombre);
    }

    function mostrarMensajeExito(texto) {
        const mensajeExito = document.getElementById("mensaje-exito");
        const textoExito = mensajeExito.querySelector(".texto");
        textoExito.textContent = texto;
        mensajeExito.style.display = "flex";

        const mensajeError = document.getElementById("mensaje-error");
        mensajeError.style.display = "none";

        setTimeout(() => {
            mensajeExito.style.display = "none";
        }, 4000);
    }

    function mostrarMensajeError(texto) {
        const mensajeError = document.getElementById("mensaje-error");
        const textoError = mensajeError.querySelector(".texto");
        textoError.textContent = texto;
        mensajeError.style.display = "flex";

        const mensajeExito = document.getElementById("mensaje-exito");
        mensajeExito.style.display = "none";

        setTimeout(() => {
            mensajeError.style.display = "none";
        }, 4000);
    }
});
