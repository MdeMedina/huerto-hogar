import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

const Contactos = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <Cart />

      <main className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="login-box mx-auto my-5">
          <h2>Contactos aquí</h2>
          <div className="links">
            <a href="https://twitter.com/tu_usuario" target="_blank" rel="noopener noreferrer">
              Twitter / X
            </a>
            <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <p className="small">Contactanos por nuestras redes sociales</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contactos;