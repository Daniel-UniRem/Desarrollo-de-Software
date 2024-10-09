import React, { useState } from 'react';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import ProductList from './componentes/ProductList/ProductList';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';
import Contact from './componentes/Contact/Contact';
import Description from './componentes/Description/Description';
import SearchBar from './componentes/SearchBar/Searchbar';
import './indexx.css';

function App() { // Asegúrate de que 'function' esté escrito correctamente
    const [cart, setCart] = useState([]);

    return (
        <div className="container">
            <Header />
            <Description/>
            <SearchBar onSearch={() => {}} />
            <ProductList setCart={setCart} />
            <Cart cart={cart} />
            <Checkout />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
