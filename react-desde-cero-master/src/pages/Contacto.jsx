import React, { useState } from 'react';
import './Contacto.css';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${formData.nombre}, tu mensaje ha sido enviado!`);
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="contacto-page">
      <h1>Contáctanos</h1>
      <p className="contacto-intro">
        ¿Tienes alguna pregunta? Estamos aquí para ayudarte
      </p>

      <div className="contacto-container">
        <div className="contacto-info">
          <h2>Información</h2>
          <div className="info-item">
            <h3>Dirección</h3>
            <p>Av. Providencia 1234, Santiago</p>
          </div>
          <div className="info-item">
            <h3>Teléfono</h3>
            <p>+56 9 1234 5678</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>info@elestudio.com</p>
          </div>
          <div className="info-item">
            <h3>Horario</h3>
            <p>Lunes a Viernes: 10:00 - 20:00</p>
            <p>Sábados: 11:00 - 19:00</p>
          </div>
        </div>

        <form className="contacto-form" onSubmit={handleSubmit}>
          <h2>Envíanos un mensaje</h2>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Mensaje</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-enviar">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;