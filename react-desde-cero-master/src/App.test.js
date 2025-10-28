import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renderiza el componente App sin errores', () => {
    render(<App />);
    const linkElement = screen.getByText(/EL ESTUDIO/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renderiza el Navbar en la aplicación', () => {
    render(<App />);
    expect(screen.getByText('Inicio')).toBeInTheDocument();
  });
});