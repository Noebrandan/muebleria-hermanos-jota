// =======================
// 1. ARRAY DE PRODUCTOS
// =======================
const productos = [
    {
        nombre: "Aparador Uspallata",
        descripcion: "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos",
        imagen: "../img/aparador_uspallata.png",
        detalles: {
            medidas: "180 × 45 × 75 cm",
            materiales: "Nogal macizo FSC®, herrajes de latón",
            acabado: "Aceite natural ecológico",
            peso: "68 kg",
            capacidad: "6 compartimentos interiores"
        }
    },
    {
        nombre: "Biblioteca Recoleta",
        descripcion: "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
        imagen: "../img/biblioteca_recoleta.png",
        detalles: {
            medidas: "100 × 35 × 200 cm",
            materiales: "Estructura de acero, estantes de roble",
            acabado: "Laca mate ecológica",
            capacidad: "45 kg por estante",
            modulares: "5 estantes ajustables"
        }
    },
    {
        nombre: "Butaca Mendoza",
        descripcion: "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, con diseño orgánico que aporta calidez y sofisticación.",
        imagen: "../img/butaca_mendoza.png",
        detalles: {
            medidas: "80 × 75 × 85 cm",
            materiales: "Guatambú macizo, tela bouclé",
            acabado: "Cera vegetal, tapizado premium",
            tapizado: "Repelente al agua y manchas",
            confort: "Espuma alta densidad"
        }
    },
    {
        nombre: "Sillón Copacabana",
        descripcion: "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con diseño icónico.",
        imagen: "../img/sillon_copacabana.png",
        detalles: {
            medidas: "90 × 85 × 95 cm",
            materiales: "Cuero curtido vegetal, acero pintado",
            acabado: "Cuero anilina premium",
            rotacion: "360° silenciosa y suave",
            garantia: "10 años en estructura"
        }
    },
    {
        nombre: "Mesa de Centro Araucaria",
        descripcion: "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en nogal. Combina la frialdad del mármol con la calidez de la madera para un diseño minimalista.",
        imagen: "../img/mesa_de_centro_araucaria.png",
        detalles: {
            medidas: "90 × 90 × 45 cm",
            materiales: "Mármol Patagonia, patas de nogal",
            acabado: "Mármol pulido, aceite natural en madera",
            peso: "42 kg",
            capacidad: "25 kg distribuidos"
        }
    },
    {
        nombre: "Mesa de Noche Aconcagua",
        descripcion: "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Ofrece almacenamiento discreto y elegante para objetos personales.",
        imagen: "../img/mesa_de_noche_aconcagua.png",
        detalles: {
            medidas: "45 × 35 × 60 cm",
            materiales: "Roble macizo FSC®, herrajes soft-close",
            acabado: "Barniz mate de poliuretano",
            almacenamiento: "1 cajón + repisa inferior",
            caracteristicas: "Cajón con cierre suave"
        }
    },
    {
        nombre: "Cama Neuquén",
        descripcion: "Cama plataforma con cabecero flotante tapizado en lino natural. Su diseño minimalista y sofisticado crea un ambiente de serenidad y elegancia.",
        imagen: "../img/logo.svg",
        detalles: {
            medidas: "160 × 200 × 90 cm",
            materiales: "Roble macizo FSC®, tapizado lino",
            acabado: "Aceite natural, tapizado premium",
            colchon: "Compatible con colchón 160×200",
            caracteristicas: "Cabecero flotante acolchado"
        }
    },
    {
        nombre: "Sofá Patagonia",
        descripcion: "Sofá de tres cuerpos tapizado en lino Warm Alabaster. Cojines con espuma de alta resiliencia y plumón reciclado para comodidad sostenible.",
        imagen: "../img/sofa_patagonia.png",
        detalles: {
            medidas: "220 × 90 × 80 cm",
            estructura: "Madera de eucalipto certificada FSC®",
            tapizado: "Lino 100% natural premium",
            relleno: "Espuma HR + plumón reciclado",
            sostenibilidad: "Materiales 100% reciclables"
        }
    },
    {
        nombre: "Mesa Comedor Pampa",
        descripcion: "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Ideal para reuniones íntimas o grandes celebraciones.",
        imagen: "../img/mesa_comedor_pampa.png",
        detalles: {
            materiales: "Roble macizo FSC®, mecanismo alemán",
            acabado: "Aceite-cera natural",
            capacidad: "6-10 comensales",
            extension: "Sistema de mariposa central"
        }
    },
    {
        nombre: "Sillas Córdoba",
        descripcion: "Set de cuatro sillas apilables en contrachapado de nogal con estructura tubular verde Sage. Diseño ergonómico y durabilidad para uso diario.",
        imagen: "../img/sillas_cordoba.png",
        detalles: {
            medidas: "45 × 52 × 80 cm (cada una)",
            materiales: "Contrachapado nogal, tubo de acero",
            acabado: "Laca mate, pintura epoxi",
            apilables: "Hasta 6 sillas",
            incluye: "Set de 4 sillas"
        }
    },
    {
        nombre: "Escritorio Costa",
        descripcion: "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Funcionalidad moderna con estética sostenible.",
        imagen: "../img/escritorio_costa.png",
        detalles: {
            medidas: "120 × 60 × 75 cm",
            materiales: "Bambú laminado, herrajes ocultos",
            acabado: "Laca mate resistente",
            almacenamiento: "1 cajón con organizador",
            cables: "Pasacables integrado"
        }
    },
    {
        nombre: "Silla de Trabajo Belgrano",
        descripcion: "Silla ergonómica con respaldo de malla y asiento tapizado reciclado. Ideal para largas jornadas de trabajo en oficina o en casa.",
        imagen: "../img/silla_de_trabajo_belgrano.png",
        detalles: {
            medidas: "60 × 60 × 90-100 cm",
            materiales: "Malla técnica, tejido reciclado",
            acabado: "Base cromada, tapizado premium",
            regulacion: "Altura + inclinación respaldo",
            certificacion: "Ergonomía europea EN 1335"
        }
    }
    // ... más productos si querés
];

// ===============================
// 2. SELECCIÓN DE DESTACADOS (x4)
// ===============================
const productosDestacados = productos.slice(0, 3);

// ===============================
// 3. FUNCIONES 
// ===============================


const catalogoProductos = document.querySelector("#catalogo-productos");
const contenedorProductosDestacados = document.querySelector("#productos-destacados");

function crearTarjetaDeProducto(producto, contenedor) {
    const index = productos.indexOf(producto);
    const esDestacado = contenedor === contenedorProductosDestacados;
    const link = document.createElement("a");
    link.href = esDestacado ? `./html/producto.html?id=${index}` : `producto.html?id=${index}`;

    const card = document.createElement("div");
    card.classList.add("producto-card");

    const imagen = document.createElement("img");
    imagen.alt = producto.nombre;
    imagen.src = esDestacado ? producto.imagen.replace("../", "./") : producto.imagen

    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;

    const lista = document.createElement("ul");
    Object.entries(producto.detalles).forEach(([clave, valor]) => {
        const item = document.createElement("li");
        item.innerHTML = `<strong>${clave}:</strong> ${valor}`;
        lista.appendChild(item);
    });

    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(lista);

    link.appendChild(card);
    contenedor.appendChild(link);
}

// Actualiza el contador del carrito
function actualizarContadorCarrito() {
    const contador = localStorage.getItem("cartCount") || "0";
    const cartCountElements = document.querySelectorAll("#cart-count");
    cartCountElements.forEach(el => el.textContent = contador);
}

// Suma 1 al carrito
function agregarAlCarrito() {
    let contador = parseInt(localStorage.getItem("cartCount") || "0", 10);
    contador++;
    localStorage.setItem("cartCount", contador);
    actualizarContadorCarrito();
    mostrarMensaje("Producto agregado al carrito");
}

function mostrarMensaje(texto) {
    const mensaje = document.createElement("div");
    mensaje.textContent = texto;
    mensaje.style.position = "fixed";
    mensaje.style.bottom = "20px";
    mensaje.style.right = "20px";
    mensaje.style.backgroundColor = "#4CAF50";
    mensaje.style.color = "white";
    mensaje.style.padding = "12px 20px";
    mensaje.style.borderRadius = "6px";
    mensaje.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.2)";
    mensaje.style.zIndex = "1000";
    mensaje.style.opacity = "0";
    mensaje.style.transition = "opacity 0.3s ease";

    document.body.appendChild(mensaje);

    // Fade in
    setTimeout(() => mensaje.style.opacity = "1", 10);

    // Desaparece a los 3 segundos
    setTimeout(() => {
        mensaje.style.opacity = "0";

        setTimeout(() => mensaje.remove(), 300);
    }, 3000);
}


// ===================================
// 4. CARGA ASÍNCRONA DE PRODUCTOS
// ===================================
function obtenerListaAsync(lista) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista);
        }, 1000); // Simula carga
    });
}

async function cargarProductos() {
    try {
        const destacados = await obtenerListaAsync(productosDestacados);
        destacados.forEach(producto => crearTarjetaDeProducto(producto, contenedorProductosDestacados));
    } catch (error) {
        console.error("Error al cargar productos destacados:", error);
    }

    try {
        const catalogo = await obtenerListaAsync(productos);
        catalogo.forEach(producto => crearTarjetaDeProducto(producto, catalogoProductos));
    } catch (error) {
        console.error("Error al cargar catálogo completo:", error);
    }
}

// ===================================
// 5. INICIALIZACIÓN AL CARGAR PÁGINA
// ===================================
document.addEventListener("DOMContentLoaded", () => {

    cargarProductos();
    actualizarContadorCarrito();

    // BUSCADOR EN CATALOGO
    const inputBusqueda = document.getElementById("input-busqueda");
    const mensajeVacio = document.getElementById("mensaje-vacio");

    inputBusqueda.addEventListener("input", () => {
        const texto = inputBusqueda.value.toLowerCase();

        const productosFiltrados = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(texto) ||
            producto.descripcion.toLowerCase().includes(texto)
        );

        catalogoProductos.innerHTML = "";

        if (productosFiltrados.length === 0) {
            mensajeVacio.style.display = "block";
        } else {
            mensajeVacio.style.display = "none";
            productosFiltrados.forEach(producto =>
                crearTarjetaDeProducto(producto, catalogoProductos)
            );
        }
    });

    //CARRITO
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", agregarAlCarrito);
    });
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('fijo');
    } else {
        header.classList.remove('fijo');
    }
});