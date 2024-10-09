import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <section id="cart">
            <h2>Tu carrito</h2>
            <div id="cart-items">
                {cart.length === 0 ? (
                    <p>El carrito está vacío.</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index}>
                            <p>{item.nombre} - ${item.precio}</p>
                        </div>
                    ))
                )}
            </div>
            <button id="checkout">Checkout</button>
        </section>
    );
}

export default Cart;
