import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { user, logout } = useUser();
  const { openCart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="row py-0 px-0">
      <div className="col-2 d-flex align-items-center justify-content-start">
        <Link to="/">
          <img 
            src="https://res.cloudinary.com/dzktjoix0/image/upload/v1757376907/huerto_hogar_transparent_z90f1m.png" 
            alt="logo"
          />
        </Link>
      </div>
      
      <div className="col-5 d-flex justify-content-center align-items-center">
        <nav>
          <Link to="/story">Nuestra Historia</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/contactos">Contacto</Link>
        </nav>
      </div>
      
      <div className="col-5 d-flex align-items-center justify-content-end" id="user">
        {user ? (
          <>
            <span className="me-3">Hola, {user}</span>
            <button onClick={handleLogout} className="login btn btn-link">
              Cerrar Sesión
            </button>
          </>
        ) : (
          <Link to="/login" className="login">
            Iniciar Sesión
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;