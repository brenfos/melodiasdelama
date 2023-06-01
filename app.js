const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');
const botonVaciar = document.getElementById('vaciar-carrito');

let carrito = [];
let stock = [];
let selector;

document.getElementById('todos').addEventListener('click', () => mostrarProductos(stock.flat()));
document.getElementById('guitarras').addEventListener('click', () => mostrarProductos(stock[0]));
document.getElementById('baterias').addEventListener('click', () => mostrarProductos(stock[1]));
document.getElementById('pianos').addEventListener('click', () => mostrarProductos(stock[2]));
botonVaciar.addEventListener('click', vaciarCarrito);

fetch('http://localhost:8080/stock.json')
    .then(response => response.json())
    .then(data => {
        stock = [data.stockGuitarras, data.stockBaterias, data.stockPianos];
        mostrarProductos(stock.flat());
    });

// Funciones
function mostrarProductos(productos) {
    contenedorProductos.innerHTML = '';
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <div class = "images"><img src="${producto.img}"></div>
            <h3>${producto.nombre}</h3>
            <p class = "desc">${producto.desc}</p>
            <p class="precioProducto">Precio: $${producto.precio}</p>
            <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `;
        contenedorProductos.appendChild(div);
        document.getElementById(`agregar${producto.id}`).addEventListener('click', () => agregarAlCarrito(producto));
    });
}

function agregarAlCarrito(producto) {
    const existe = carrito.find(item => item.id === producto.id);
    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({...producto, cantidad: 1});
    }
    actualizarCarrito();
    swal('Carrito de Compras', 'Agregado correctamente al carrito.', 'success');
}

function eliminarProducto(id) {
    const producto = carrito.find(item => item.id === id);
    producto.cantidad--;
    if (producto.cantidad <= 0) {
        carrito = carrito.filter(item => item.id !== id);
    }
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function actualizarCarrito() {
    contenedorCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `
            <p class="carri">${producto.nombre}</p>
            <p class="carri">Precio: $${producto.precio}</p>
            <p class="carri">Cantidad: <span id="cantidad${producto.id}">${producto.cantidad}</span></p>
            <button onclick="eliminarProducto(${producto.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `;
        contenedorCarrito.appendChild(div);
    });
    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + (prod.cantidad * prod.precio), 0);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}