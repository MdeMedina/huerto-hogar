
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';

// Pages
import Home from './pages/Home';

// Styles
import './styles/styles.css';
import './styles/carrito.css';

function App() {
  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </CartProvider>
      </UserProvider>
    </Router>
  );
}

export default App;