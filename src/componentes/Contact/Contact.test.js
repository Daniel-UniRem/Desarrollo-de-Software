import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders contact information', () => {
    render(<Contact />);
    const phoneElement = screen.getByText(/Teléfono: 3183186265/i);
    expect(phoneElement).toBeInTheDocument();
});
