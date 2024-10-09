import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    return (
        <input 
            type="text" 
            id="search-bar" 
            placeholder="Buscar medicamento..." 
            onChange={(e) => onSearch(e.target.value)} 
        />
    );
}

export default SearchBar;
