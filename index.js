import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './indexx.css';

ReactDOM.render(<App />, document.getElementById('root'));
<script src="index.js" type="text/babel"></script>

import React, { useState } from 'react';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import ProductList from './componentes/ProductList/ProductList';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';
import Contact from './componentes/Contact/Contact';
import Home from './componentes/Home/Home';
import SearchBar from './componentes/SearchBar/SearchBar';
import './indexx.css';

function App() {
    const [cart, setCart] = useState([]);

    const handleSearch = (query) => {
        // Implementar lógica de búsqueda si es necesario
    };

    return (
        <div className="container">
            <Header />
            <Home />
            <SearchBar onSearch={handleSearch} />
            <ProductList setCart={setCart} />
            <Cart cart={cart} />
            <Checkout />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;