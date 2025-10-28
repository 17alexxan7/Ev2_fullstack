import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-seccion">
          <h3>EL ESTUDIO</h3>
          <p>Moda contemporánea para todos</p>
        </div>
        <div className="footer-seccion">
          <h4>Contacto</h4>
          <p>Email: info@elestudio.com</p>
          <p>Tel: +56 9 1234 5678</p>
        </div>
        <div className="footer-seccion">
          <h4>Síguenos</h4>
          <p>Instagram | Facebook | Twitter</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 El Estudio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;