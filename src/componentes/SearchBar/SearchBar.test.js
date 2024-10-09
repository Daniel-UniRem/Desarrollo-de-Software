import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders search bar', () => {
    render(<SearchBar onSearch={() => {}} />);
    const searchBarElement = screen.getByPlaceholderText(/Buscar medicamento.../i);
    expect(searchBarElement).toBeInTheDocument();
});
