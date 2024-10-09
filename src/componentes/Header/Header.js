import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Farmacia los responsables</h1>
            <nav>
                <ul>
                    <li><a href="#Description">Inicio</a></li>
                    <li><a href="#products">Productos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
