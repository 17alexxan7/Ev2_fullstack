import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('renderiza el logo EL ESTUDIO', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    
    const logo = screen.getByText('EL ESTUDIO');
    expect(logo).toBeInTheDocument();
  });

  test('renderiza todos los enlaces de navegación', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Hombres')).toBeInTheDocument();
    expect(screen.getByText('Mujeres')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
    expect(screen.getByText('Perfil')).toBeInTheDocument();
  });
});