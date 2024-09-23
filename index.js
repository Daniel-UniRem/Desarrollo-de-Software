//-----------------------------------------------------------------------------------------------------------------------------------------
//FUNCIONES DEL PRODUCTO
//-----------------------------------------------------------------------------------------------------------------------------------------
const listaProductos = [
    { nombre: 'Paracetamol 500mg', descripcion: 'Analgésico y antipirético', precio: 5000, efectos: 'Náuseas, dolor de cabeza' },
    { nombre: 'Aspirina 100mg', descripcion: 'Anti-inflamatorio y analgésico', precio: 10000, efectos: 'Problemas gástricos, sangrado' },
    { nombre: 'Novalgina 1g', descripcion: 'Antipirético y analgésico', precio: 10000, efectos: 'Arritmias cardaicas, urticaria' },
    { nombre: 'Diclofenaco 75mg', descripcion: 'Antipirético y analgésico', precio: 6000, efectos: 'Diarrea, zumbido en los oidos, mareos' },
    { nombre: 'Dexametasona 4mg', descripcion: 'Esteroide anti-inflamatorio', precio: 5000, efectos: 'Picazon en los genitales' }, 
    { nombre: 'Naproxeno', descripcion: 'Analgesico', precio: 3000, efectos: 'Dolor de cabeza, mareos' }, 
];

// Función para mostrar los productos
function mostrarProductos(productos) {
    const productosLista = document.getElementById('product-list');
    productosLista.innerHTML = '';

    productos.forEach(product => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('product');
        
        productoDiv.innerHTML = `
         
                <h3>${product.nombre}</h3>
                <p>${product.descripcion}</p>
                <p>Precio: $${product.precio}</p>
                <button class="add-to-cart">Agregar al carrito</button>
                <button class="view-details">Ver detalles</button>
         
        `;
        
        productosLista.appendChild(productoDiv);
    });

    // Asignar eventos a los botones de "Agregar al carrito" y "Ver detalles"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productNombre = this.parentElement.querySelector('h3').innerText;
            const producto = listaProductos.find(p => p.nombre === productNombre);  // Encuentra el producto por nombre
            agregarProducto(producto);
        });
    });

    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const productNombre = this.parentElement.querySelector('h3').innerText;
            const producto = listaProductos.find(p => p.nombre === productNombre);
            alert(`Detalles del medicamento:\nDescripción: ${producto.descripcion}\nEfectos secundarios: ${producto.efectos}`);
        });
    });
}

// Mostrar los productos inicialmente
mostrarProductos(listaProductos);

// Filtrar productos
document.getElementById('search-bar').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const productosFiltrados = listaProductos.filter(product =>
        product.nombre.toLowerCase().includes(searchQuery)
    );
    mostrarProductos(productosFiltrados);  // Vuelve a renderizar los productos filtrados
});

//-----------------------------------------------------------------------------------------------------------------------------------------
//FUNCIONES DEL CARRITO
//-----------------------------------------------------------------------------------------------------------------------------------------

// Array para almacenar los productos en el carrito
let cart = [];

// Función para calcular el total
function calcularTotal() {
    let total = cart.reduce((sum, producto) => sum + producto.precio, 0);
    document.getElementById('cart-total').innerText = `Total: $${total}`;
}

// Función para vaciar el carrito y confirmar la compra
function checkout() {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
    } else {
        alert(`Gracias por tu compra. El total fue de $${cart.reduce((sum, producto) => sum + producto.precio, 0)}.`);
        cart = [];  // Vacía el carrito
        actualizaCarrito();  // Actualiza el DOM para reflejar el carrito vacío
        calcularTotal();  // Actualiza el total a $0
    }
}

// Función para actualizar el carrito en el DOM
function actualizaCarrito() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';  // Limpia la vista actual del carrito

    cart.forEach((product, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.innerText = `${product.nombre} - $${product.precio}`;
        
        // Boton para borrar el producto
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Eliminar';
        removeButton.classList.add('remove-item');

        removeButton.onclick = () => {
            cart.splice(index, 1);  // Elimina el producto del carrito
            actualizaCarrito();  // Actualiza el carrito
            calcularTotal();  // Recalcula el total
        };

        productoDiv.appendChild(removeButton);
        cartItemsDiv.appendChild(productoDiv);
    });
}

// Función para agregar productos al carrito
function agregarProducto(product) {
    cart.push(product);
    actualizaCarrito();  // Actualiza la vista del carrito
    calcularTotal();  // Recalcula el total
}

// Agregar el evento de clic al botón de checkout
document.getElementById('checkout').addEventListener('click', checkout);

// Guardar la dirección de envío
document.getElementById('address-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const address = document.getElementById('address').value;
    localStorage.setItem('shippingAddress', address);
    document.getElementById('saved-address').innerText = `Dirección guardada: ${address}`;
});

// Mostrar la dirección guardada si ya existe
window.onload = function() {
    const savedAddress = localStorage.getItem('shippingAddress');
    if (savedAddress) {
        document.getElementById('saved-address').innerText = `Dirección guardada: ${savedAddress}`;
    }
};
