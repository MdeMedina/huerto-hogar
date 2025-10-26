
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';

// Pages
import Home from './pages/Home';
import Contactos from './pages/Contactos';
import Catalogo from './pages/Catalogo';

// Styles
import './styles/styles.css';
import './styles/carrito.css';
import './styles/contactos.css';

function App() {
  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/contactos" element={<Contactos />} />
          </Routes>
        </CartProvider>
      </UserProvider>
    </Router>
  );
}

export default App;