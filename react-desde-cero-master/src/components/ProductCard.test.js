import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('ProductCard Component', () => {
  test('renderiza el nombre del producto correctamente', () => {
    render(
      <ProductCard 
        nombre="Camisa Test"
        precio={29990}
        categoria="Test"
        imagen="test.jpg"
      />
    );
    
    const nombreElement = screen.getByText('Camisa Test');
    expect(nombreElement).toBeInTheDocument();
  });

  test('renderiza el precio del producto correctamente', () => {
    render(
      <ProductCard 
        nombre="Camisa"
        precio={29990}
        categoria="Test"
        imagen="test.jpg"
      />
    );
    
    const precioElement = screen.getByText('$29990');
    expect(precioElement).toBeInTheDocument();
  });

  test('renderiza la categoría del producto correctamente', () => {
    render(
      <ProductCard 
        nombre="Camisa"
        precio={29990}
        categoria="Hombres"
        imagen="test.jpg"
      />
    );
    
    const categoriaElement = screen.getByText('Hombres');
    expect(categoriaElement).toBeInTheDocument();
  });
});