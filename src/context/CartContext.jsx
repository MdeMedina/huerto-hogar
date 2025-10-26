import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem('carritoCompras');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('carritoCompras', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.codigo === product.codigo);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.codigo === product.codigo
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
    }
  };

  const removeFromCart = (codigo) => {
    setCart(cart.filter(item => item.codigo !== codigo));
  };

  const updateQuantity = (codigo, cantidad) => {
    if (cantidad <= 0) {
      removeFromCart(codigo);
      return;
    }
    setCart(cart.map(item =>
      item.codigo === codigo
        ? { ...item, cantidad }
        : item
    ));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.precio * item.cantidad);
    }, 0);
  };

  const getItemCount = () => {
    return cart.reduce((count, item) => count + item.cantidad, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotal,
        getItemCount,
        clearCart,
        isCartOpen,
        openCart,
        closeCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};