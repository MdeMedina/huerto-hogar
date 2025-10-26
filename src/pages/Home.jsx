import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <>
      <Header />
      <Cart />
      
      <section className="seccion-princ d-flex flex-column justify-content-center align-items-center text-center">
        <h1>Bienvenido a HuertoHogar</h1>
        <p>Tu tienda online de confianza para productos de jardinería y agricultura urbana.</p>
        <Link to="/catalogo" className="btn btn-success btn-lg mt-3">
          Explorar Catálogo
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default Home;