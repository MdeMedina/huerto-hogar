
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';

// Pages
import Home from './pages/Home';
import Contactos from './pages/Contactos';
import Story from './pages/Story';
import Login from './pages/Login';

// Styles
import './styles/styles.css';
import './styles/carrito.css';
import './styles/contactos.css';
import './styles/story.css';

function App() {
  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/story" element={<Story />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </CartProvider>
      </UserProvider>
    </Router>
  );
}

export default App;