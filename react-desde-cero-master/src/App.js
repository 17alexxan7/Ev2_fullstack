import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Hombres from './pages/Hombres';
import Mujeres from './pages/Mujeres';
import Contacto from './pages/Contacto';
import Perfil from './pages/Perfil';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/hombres" element={<Hombres />} />
            <Route path="/mujeres" element={<Mujeres />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;