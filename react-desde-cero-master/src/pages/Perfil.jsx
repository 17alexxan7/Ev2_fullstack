import React from 'react';
import './Perfil.css';

function Perfil() {
  const usuario = {
    nombre: 'Juan Pérez',
    email: 'juan.perez@email.com',
    telefono: '+56 9 1111 2222',
    direccion: 'Calle Falsa 123'
  };

  const pedidosRecientes = [];


  return (
    <div className="perfil-page">
      <h1>Mi Perfil</h1>

      <div className="perfil-container">
        <section className="perfil-info">
          <h2>Información Personal</h2>
          <div className="info-grid">
            <div className="info-campo">
              <strong>Nombre:</strong>
              <p>{usuario.nombre}</p>
            </div>
            <div className="info-campo">
              <strong>Email:</strong>
              <p>{usuario.email}</p>
            </div>
            <div className="info-campo">
              <strong>Teléfono:</strong>
              <p>{usuario.telefono}</p>
            </div>
            <div className="info-campo">
              <strong>Dirección:</strong>
              <p>{usuario.direccion}</p>
            </div>
          </div>
          <button className="btn-editar">Editar Perfil</button>
        </section>

        <section className="pedidos-recientes">
          <h2>Pedidos Recientes</h2>
          <div className="pedidos-lista">
            {pedidosRecientes.map(pedido => (
              <div key={pedido.id} className="pedido-card">
                <div className="pedido-header">
                  <span className="pedido-id">Pedido #{pedido.id}</span>
                  <span className={`pedido-estado ${pedido.estado.toLowerCase().replace(' ', '-')}`}>
                    {pedido.estado}
                  </span>
                </div>
                <p className="pedido-fecha">Fecha: {pedido.fecha}</p>
                <p className="pedido-total">Total: ${pedido.total.toLocaleString('es-CL')}</p>
                <button className="btn-ver-detalle">Ver Detalle</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Perfil;