// ===== 1. Array de películas =====
const productos = [
    {
        nombre: 'Aquamarine board',
        descripcion: '6’5 inch, color Acuamarino, tres aletas de diferentes tamaños, nada que un surfista no pueda controlar.',
        precio: 59.99,
        imagen: 'imagen1.jpg'
    },
    {
        nombre: 'UP softboard',
        descripcion: '5’7 inch, eps de buena calidad, color azul, blanco y rojo, tres aletas ligeramente separadas.',
        precio: 69.99,
        imagen: 'imagen2.jpg'
    },
    {
        nombre: 'Harley’s in hawaii',
        descripcion: '6’7 inch, color amarillo y blanco, tres aletas ligeramente separadas y bordes redondeados.',
        precio: 79.99,
        imagen: 'imagen3.jpg'
    },
    {
        nombre: 'THURSO SURF Lancer',
        descripcion: '5’8 inch, hecha de madera de roble, color azul y blanco, dos aletas ligeramente separadas y con la cola recortada como cola de pez; viene con una correa y 2 tornillos de repuesto.',
        precio: 89.99,
        imagen: 'imagen4.jpg'
    }
];

// ===== 2. Crear tarjeta de película =====
const catalogo = document.getElementById('catalogo');

function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';

    const imagen = document.createElement('imagen');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = `$${producto.precio.toFixed(2)}`;

    const boton = document.createElement('button');
    boton.className = 'btn-comprar';
    boton.textContent = 'Comprar';

    // Insertar los elementos en la tarjeta
    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(boton);

    return card;
}

// ===== 3. Renderizar catálogo =====
function renderizarCatalogo() {
    productos.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto);
        catalogo.appendChild(tarjeta);
    });
}

// ===== 4. Cargar al inicio =====
window.onload = renderizarCatalogo;

