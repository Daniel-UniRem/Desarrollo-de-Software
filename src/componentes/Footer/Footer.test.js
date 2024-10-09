import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer with copyright text', () => {
    render(<Footer />);
    const footerElement = screen.getByText(/2024 Farmacia los responsables/i);
    expect(footerElement).toBeInTheDocument();
});
