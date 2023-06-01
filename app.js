const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const cantidad = document.getElementById('cantidad');
const precioTotal = document.getElementById('precioTotal');
const cantidadTotal = document.getElementById('cantidadTotal');

let carrito = [];
var selector = null;

fetch('http://localhost:8080/stock.json')
.then(response => response.json())
.then(data => {
    stockBaterias = data.stockBaterias;
    stockGuitarras = data.stockGuitarras;
    stockPianos = data.stockPianos;

    const botonTodos = document.getElementById('todos');
    const botonGuitarras = document.getElementById("guitarras");
    const botonesBaterias = document.getElementById('baterias');
    const botonesPianos = document.getElementById('pianos');

    botonTodos.addEventListener('click', () => {
        selector = null;
        vaciarDiv();
        loadElements();
    })
    
    botonGuitarras.addEventListener('click', () => {
        selector = 0;
        vaciarDiv();
        loadElements();
    })

    botonesBaterias.addEventListener('click', () => {
        selector = 1;
        vaciarDiv();
        loadElements();
    })

    botonesPianos.addEventListener('click', () => {
        selector = 2;
        vaciarDiv();
        loadElements();
    })

    loadElements();
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

function loadElements(){
    switch(selector){
        case 0:{
            stockGuitarras.forEach((producto) => {
                const div = document.createElement('div')
                div.classList.add('producto')

                var img = document.createElement('img');
                img.setAttribute('src', producto.img);
                div.appendChild(img);

                var h3 = document.createElement('h3');
                h3.innerHTML = producto.nombre;
                div.appendChild(h3);

                var p1 = document.createElement('p');
                p1.innerHTML = producto.desc;
                div.appendChild(p1);

                var p2 = document.createElement('p');
                p2.classList.add("precioProducto");
                p2.innerHTML = `Precio: $${producto.precio}`;
                div.appendChild(p2);


                var button = document.createElement('button');
                button.classList.add("boton-agregar");
                button.setAttribute('id', `agregar${producto.id}`);
                button.innerHTML = `Agregar <i class="fas fa-shopping-cart"></i>`;
                div.appendChild(button);
                

                contenedorProductos.appendChild(div)
                   
                button.addEventListener('click', () => {
                    
                    agregarAlCarrito(producto.id, 0)
                    
                
                })
            })
            break;
        }
        case 1:{
            stockBaterias.forEach((producto) => {
                const div = document.createElement('div')
                div.classList.add('producto')

                var img = document.createElement('img');
                img.setAttribute('src', producto.img);
                div.appendChild(img);

                var h3 = document.createElement('h3');
                h3.innerHTML = producto.nombre;
                div.appendChild(h3);

                var p1 = document.createElement('p');
                p1.innerHTML = producto.desc;
                div.appendChild(p1);

                var p2 = document.createElement('p');
                p2.classList.add("precioProducto");
                p2.innerHTML = `Precio: $${producto.precio}`;
                div.appendChild(p2);


                var button = document.createElement('button');
                button.classList.add("boton-agregar");
                button.setAttribute('id', `agregar${producto.id}`);
                button.innerHTML = `Agregar <i class="fas fa-shopping-cart"></i>`;
                div.appendChild(button);

                contenedorProductos.appendChild(div)
                   
                button.addEventListener('click', () => {
            
                    agregarAlCarrito(producto.id, 1)
                
                })
            })
            break;
        }
        case 2:{
            stockPianos.forEach((producto) => {
                const div = document.createElement('div')
                div.classList.add('producto')

                var img = document.createElement('img');
                img.setAttribute('src', producto.img);
                div.appendChild(img);

                var h3 = document.createElement('h3');
                h3.innerHTML = producto.nombre;
                div.appendChild(h3);

                var p1 = document.createElement('p');
                p1.innerHTML = producto.desc;
                div.appendChild(p1);

                var p2 = document.createElement('p');
                p2.classList.add("precioProducto");
                p2.innerHTML = `Precio: $${producto.precio}`;
                div.appendChild(p2);


                var button = document.createElement('button');
                button.classList.add("boton-agregar");
                button.setAttribute('id', `agregar${producto.id}`);
                button.innerHTML = `Agregar <i class="fas fa-shopping-cart"></i>`;
                div.appendChild(button);

                contenedorProductos.appendChild(div)
                   
                button.addEventListener('click', () => {
            
                    agregarAlCarrito(producto.id, 2)
                
                })
            })
            break;
        }
        default:{
            stockGuitarras.forEach((producto) => {
                const div = document.createElement('div')
                div.classList.add('producto')

                var img = document.createElement('img');
                img.setAttribute('src', producto.img);
                div.appendChild(img);

                var h3 = document.createElement('h3');
                h3.innerHTML = producto.nombre;
                div.appendChild(h3);

                var p1 = document.createElement('p');
                p1.innerHTML = producto.desc;
                div.appendChild(p1);

                var p2 = document.createElement('p');
                p2.classList.add("precioProducto");
                p2.innerHTML = `Precio: $${producto.precio}`;
                div.appendChild(p2);


                var button = document.createElement('button');
                button.classList.add("boton-agregar");
                button.setAttribute('id', `agregar${producto.id}`);
                button.innerHTML = `Agregar <i class="fas fa-shopping-cart"></i>`;
                div.appendChild(button);

                contenedorProductos.appendChild(div)
                   
                button.addEventListener('click', () => {
                    
                   
                    agregarAlCarrito(producto.id, 0);
                    swal('Carrito de Compras', 'Agregado correctamente al carrito.', 'success');
                
                })
            })
            stockBaterias.forEach((producto) => {
                const div = document.createElement('div')
                div.classList.add('producto')

                var img = document.createElement('img');
                img.setAttribute('src', producto.img);
                div.appendChild(img);

                var h3 = document.createElement('h3');
                h3.innerHTML = producto.nombre;
                div.appendChild(h3);

                var p1 = document.createElement('p');
                p1.innerHTML = producto.desc;
                div.appendChild(p1);

                var p2 = document.createElement('p');
                p2.classList.add("precioProducto");
                p2.innerHTML = `Precio: $${producto.precio}`;
                div.appendChild(p2);


                var button = document.createElement('button');
                button.classList.add("boton-agregar");
                button.setAttribute('id', `agregar${producto.id}`);
                button.innerHTML = `Agregar <i class="fas fa-shopping-cart"></i>`;
                div.appendChild(button);

                contenedorProductos.appendChild(div)
                   
                button.addEventListener('click', () => {
            
                    agregarAlCarrito(producto.id, 1)
                    swal('Carrito de Compras', 'Agregado correctamente al carrito.', 'success');
                    
                
                })
            })
            stockPianos.forEach((producto) => {
                const div = document.createElement('div')
                div.classList.add('producto')

                var img = document.createElement('img');
                img.setAttribute('src', producto.img);
                div.appendChild(img);

                var h3 = document.createElement('h3');
                h3.innerHTML = producto.nombre;
                div.appendChild(h3);

                var p1 = document.createElement('p');
                p1.innerHTML = producto.desc;
                div.appendChild(p1);

                var p2 = document.createElement('p');
                p2.classList.add("precioProducto");
                p2.innerHTML = `Precio: $${producto.precio}`;
                div.appendChild(p2);


                var button = document.createElement('button');
                button.classList.add("boton-agregar");
                button.setAttribute('id', `agregar${producto.id}`);
                button.innerHTML = `Agregar <i class="fas fa-shopping-cart"></i>`;
                div.appendChild(button);

                contenedorProductos.appendChild(div)
                   
                button.addEventListener('click', () => {
            
                    agregarAlCarrito(producto.id, 2)
                    swal('Carrito de Compras', 'Agregado correctamente al carrito.', 'success');

                    
                
                })
            })
            break;
        }
    }
}

function vaciarDiv(){
    var contenedor = document.getElementById("contenedor-productos");
    contenedor.innerHTML = '';
}

const agregarAlCarrito = (prodId, typeId) => {

    switch(typeId){
        case 0:{
            stockProductos = stockGuitarras;
            break;
        }
        case 1:{
            stockProductos = stockBaterias;
            break;
        }
        case 2:{
            stockProductos = stockPianos;
            break;
        }
    }



    const existe = carrito.some (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => {
           if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
       
        carrito.push(item)
    }

    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 

    carrito.splice(indice, 1) 
  
    actualizarCarrito() 
    console.log(carrito)
}

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = "" 
   

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p class="p1">${prod.nombre}</p>
        <p class="p2">Precio:$${prod.precio}</p>
        <p class="p3">Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    contadorCarrito.innerText = carrito.length 
  
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    
    
  function setSwal(){
    swal('Carrito de Compras','Producto agregado correctamente.', 'success');

  }
}