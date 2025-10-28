import React from 'react';
import ProductCard from '../components/ProductCard';
import './Inicio.css';

function Inicio() {
  const productosDestacados = [
    {
      id: 1,
      nombre: 'Camisa Clásica',
      precio: 29990,
      categoria: 'Hombres',
      imagen: 'https://static.zara.net/assets/public/eb10/a5e6/3add4ba39daf/994999efdb8a/00794102250-000-e1/00794102250-000-e1.jpg?ts=1759144837389&w=352'
    },
    {
      id: 2,
      nombre: 'Vestido Elegante',
      precio: 45990,
      categoria: 'Mujeres',
      imagen: 'https://imgs.search.brave.com/Ddz_xJOZ69bPrSQCtZYT1GNXDX-ZZyGno1zEZLI3ov0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzg0MzA0My1NTE05/NDg2ODE3NzQ3Ml8x/MDIwMjUtRS12ZXN0/aWRvLWV1cm9wZW8t/eS1kZS1tYW5nYS1j/b3J0YS1wYXJhLW11/amVyLWN1ZWxsby1y/ZWRvbmRvLndlYnA'
    },
    {
      id: 3,
      nombre: 'Pantalón Slim',
      precio: 35990,
      categoria: 'Hombres',
      imagen: 'https://i.pinimg.com/474x/3e/b7/30/3eb7306e440b97c8c6b956994366c7bb.jpg'
    },
    {
      id: 4,
      nombre: 'Blusa Moderna',
      precio: 24990,
      categoria: 'Mujeres',
      imagen: 'https://imgs.search.brave.com/s6wYsJrGNztWuj3sWdE0VXhipUv5o3756OVps4Fch9E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjEtbVJHUVNoOEwu/anBn'
    }
  ];

  return (
    <div className="inicio">
      <section className="hero">
        <h1>BIENVENIDO A EL ESTUDIO</h1>
        <p>Moda minimalista y contemporánea</p>
      </section>

      <section className="productos-destacados">
        <h2>Productos Destacados</h2>
        <div className="productos-grid">
          {productosDestacados.map(producto => (
            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              categoria={producto.categoria}
              imagen={producto.imagen}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Inicio;