import { render, screen } from '@testing-library/react';
import Checkout from './Checkout';

test('renders checkout form', () => {
    render(<Checkout />);
    const inputElement = screen.getByLabelText(/Nombre del receptor/i);
    expect(inputElement).toBeInTheDocument();
});
