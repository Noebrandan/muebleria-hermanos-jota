

// Leer el ID de la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const producto = productos[id]; // productos.js ya cargó el array

const contenedor = document.getElementById("detalle-producto");

if (producto) {
    const html = `
        <div class="detalle-contenedor">
            <img src="${producto.imagen}" alt="${producto.nombre}" />
            <div class="detalle-info">
                <h1>${producto.nombre}</h1>
                <p>${producto.descripcion}</p>
                <ul>
                    ${Object.entries(producto.detalles).map(
        ([clave, valor]) => `<li><strong>${clave}:</strong> ${valor}</li>`
    ).join("")}
                </ul>
                <button id="btn-carrito" class="add-to-cart">🛒Agregar al carrito</button>
            </div>
        </div>
`;
    contenedor.innerHTML = html;
} else {
    contenedor.innerHTML = "<p>Producto no encontrado.</p>";
}

document.addEventListener("DOMContentLoaded", () => {
    const botonAgregar = document.getElementById("btn-carrito");

    if (botonAgregar) {
        botonAgregar.addEventListener("click", () => {
            agregarAlCarrito();
        });
    }
});