import React from 'react';
import './ProductList.css';

const listaProductos = [
    { nombre: 'Paracetamol 500mg', descripcion: 'Analgésico y antipirético', precio: 5000 },
    { nombre: 'Aspirina 100mg', descripcion: 'Anti-inflamatorio y analgésico', precio: 10000 },
];

const ProductList = ({ setCart }) => {
    const agregarProducto = (producto) => {
        setCart(prevCart => [...prevCart, producto]);
    };

    return (
        <section id="products" className="main-content">
            <h2>Medicamentos</h2>
            <input type="text" id="search-bar" placeholder="Buscar medicamento..." />
            <div id="product-list">
                {listaProductos.map(producto => (
                    <div key={producto.nombre} className="product">
                        <h3>{producto.nombre}</h3>
                        <p>{producto.descripcion}</p>
                        <p>Precio: ${producto.precio}</p>
                        <button onClick={() => agregarProducto(producto)}>Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductList;
