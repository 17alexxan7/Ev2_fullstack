import React from 'react';
import ProductCard from '../components/ProductCard';
import './Categorias.css';

function Mujeres() {
  const productosMujeres = [
    {
      id: 1,
      nombre: 'Vestido Negro Elegante',
      precio: 49990,
      categoria: 'Vestidos',
      imagen: 'https://imgs.search.brave.com/Ddz_xJOZ69bPrSQCtZYT1GNXDX-ZZyGno1zEZLI3ov0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzg0MzA0My1NTE05/NDg2ODE3NzQ3Ml8x/MDIwMjUtRS12ZXN0/aWRvLWV1cm9wZW8t/eS1kZS1tYW5nYS1j/b3J0YS1wYXJhLW11/amVyLWN1ZWxsby1y/ZWRvbmRvLndlYnA'
    },
    {
      id: 2,
      nombre: 'Blusa Blanca',
      precio: 24990,
      categoria: 'Blusas',
      imagen: 'https://imgs.search.brave.com/s6wYsJrGNztWuj3sWdE0VXhipUv5o3756OVps4Fch9E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjEtbVJHUVNoOEwu/anBn'
    },
    {
      id: 3,
      nombre: 'Falda Midi',
      precio: 32990,
      categoria: 'Faldas',
      imagen: 'https://imgs.search.brave.com/z-wTg9FeKiGa4oz0c-vtopURKy6Ccfhxdg42lBcCur0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy96YXJh/LWZhbGRhcy1sYXJn/YXMtbWlkaS10ZW5k/ZW5jaWFzLTYtNjZj/ZGQyZWJjNTFkYy5q/cGc_cmVzaXplPTk4/MDoq'
    },
    {
      id: 4,
      nombre: 'Pantalón Alto',
      precio: 38990,
      categoria: 'Pantalones',
      imagen: 'https://imgs.search.brave.com/lQzYlLEtWmupR3ycKQRaAtbbvl8cY5CUaVa40A1guOk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzcxODQ5Mi1NTE04/NzQ3NDA1Njc5NF8w/NzIwMjUtRS1wYW50/YWxvbi1jYXJnby1t/ZXpjbGlsbGEtc3Ry/ZXRjaC1tdWplci1v/cHBzLWplYW5zLXRp/cm8tYWx0by53ZWJw'
    },
    {
      id: 5,
      nombre: 'Chaqueta Elegante',
      precio: 64990,
      categoria: 'Chaquetas',
      imagen: 'https://imgs.search.brave.com/z8Q6iZ3e5rLt0d9Nxr3wBVDWGMsc9ZalGVsqALiBpEY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmNsYXJhLmVz/L21lZGlvLzIwMjIv/MDkvMTYvY2hhcXVl/dGFzLW11amVyLXph/cmEtbnVldmEtdGVt/cG9yYWRhLTIwMjIt/N184MmI4MTJlNl85/MTh4MTA0OC5qcGc'
    },
    {
      id: 6,
      nombre: 'Suéter Oversize',
      precio: 35990,
      categoria: 'Suéteres',
      imagen: 'https://imgs.search.brave.com/Hg_lcmdATL1uvrFpsUzPzTMg_KItojWIOPvVa9g25gc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I1LzFh/LzY2L2I1MWE2NmE2/ZmUxMWI1ZDZmNDQ1/Yjk2MWVkMTdkNmQ4/LmpwZw'
    }
  ];

  return (
    <div className="categoria-page">
      <h1>Colección Mujeres</h1>
      <p className="categoria-descripcion">
        Elegancia y estilo en cada prenda de nuestra colección femenina
      </p>
      <div className="productos-grid">
        {productosMujeres.map(producto => (
          <ProductCard
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            categoria={producto.categoria}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default Mujeres;