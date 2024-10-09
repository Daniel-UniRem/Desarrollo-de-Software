import { render, screen } from '@testing-library/react';
import Cart from './Cart';

test('renders cart with items', () => {
    render(<Cart cart={[{ nombre: 'Paracetamol 500mg', precio: 5000 }]} />);
    const cartItemElement = screen.getByText(/Paracetamol 500mg/i);
    expect(cartItemElement).toBeInTheDocument();
});
