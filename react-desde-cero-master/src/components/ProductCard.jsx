import React from 'react';
import './ProductCard.css';

function ProductCard({ nombre, precio, imagen, categoria }) {
  return (
    <div className="product-card">
      <div className="product-imagen">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="product-info">
        <p className="product-categoria">{categoria}</p>
        <h3 className="product-nombre">{nombre}</h3>
        <p className="product-precio">${precio}</p>
        <button className="product-btn">Ver Detalles</button>
      </div>
    </div>
  );
}

export default ProductCard;