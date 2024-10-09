import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header with navigation', () => {
    render(<Header />);
    const navElement = screen.getByText(/Farmacia los responsables/i);
    expect(navElement).toBeInTheDocument();
});
