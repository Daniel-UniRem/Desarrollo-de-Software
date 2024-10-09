import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Datos guardados: Nombre: ${nombre}, Teléfono: ${telefono}, Dirección: ${direccion}`);
    };

    return (
        <section id="checkout-section">
            <h2>Datos de envío</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre del receptor:</label>
                <input type="text" id="name" required onChange={(e) => setNombre(e.target.value)} />
                
                <label htmlFor="phone">Teléfono:</label>
                <input type="text" id="phone" required onChange={(e) => setTelefono(e.target.value)} />
                
                <label htmlFor="address">Dirección:</label>
                <input type="text" id="address" required onChange={(e) => setDireccion(e.target.value)} />
                
                <button type="submit">Guardar datos</button>
                <button type="button" id="remove-address">Eliminar datos</button>
            </form>
            <p id="saved-address"></p>
        </section>
    );
}

export default Checkout;
