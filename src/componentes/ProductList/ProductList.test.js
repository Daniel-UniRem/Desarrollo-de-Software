import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

test('renders product list with products', () => {
    render(<ProductList setCart={() => {}} />);
    const productElement = screen.getByText(/Paracetamol 500mg/i);
    expect(productElement).toBeInTheDocument();
});
