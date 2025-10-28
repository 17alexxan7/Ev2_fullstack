import React from 'react';
import ProductCard from '../components/ProductCard';
import './Categorias.css';

function Hombres() {
  const productosHombres = [
    {
      id: 1,
      nombre: 'Camisa Blanca Clásica',
      precio: 29990,
      categoria: 'Camisas',
      imagen: 'https://static.zara.net/assets/public/eb10/a5e6/3add4ba39daf/994999efdb8a/00794102250-000-e1/00794102250-000-e1.jpg?ts=1759144837389&w=352'
    },
    {
      id: 2,
      nombre: 'Pantalón Chino Azul',
      precio: 35990,
      categoria: 'Pantalones',
      imagen: 'https://static.zara.net/assets/public/0d02/e34d/c10343ea920b/6da90583a9f1/09959665401-e2/09959665401-e2.jpg?ts=1738915237679'
    },
    {
      id: 3,
      nombre: 'Chaqueta Casual',
      precio: 59990,
      categoria: 'Chaquetas',
      imagen: 'https://static.zara.net/assets/public/c7a2/c739/9fd843389aa1/8beecbcf4936/08574661401-000-e1/08574661401-000-e1.jpg?ts=1755007285161&w=352'
    },
    {
      id: 4,
      nombre: 'Jeans Slim Fit',
      precio: 42990,
      categoria: 'Pantalones',
      imagen: 'https://i.pinimg.com/474x/3e/b7/30/3eb7306e440b97c8c6b956994366c7bb.jpg'
    },
    {
      id: 5,
      nombre: 'Polo Negro',
      precio: 25990,
      categoria: 'Polos',
      imagen: 'https://www.lecoqsportif.com/cdn/shop/files/2410410_2.jpg?v=1705501804'
    },
    {
      id: 6,
      nombre: 'Suéter Gris',
      precio: 38990,
      categoria: 'Suéteres',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLik6m1ySTItzlWRxxoUJc6SBmBIPSYBdOCED0a9UcbbIrtQrd0d5wpilNfGqBAdL8e9U&usqp=CAU'
    }
  ];

  return (
    <div className="categoria-page">
      <h1>Colección Hombres</h1>
      <p className="categoria-descripcion">
        Descubre nuestra selección de ropa masculina con estilo minimalista
      </p>
      <div className="productos-grid">
        {productosHombres.map(producto => (
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

export default Hombres;