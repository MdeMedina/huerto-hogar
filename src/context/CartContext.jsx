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

  useEffect(() => {
    const savedCart = localStorage.getItem('carritoCompras');
    if (savedCart) {
      try { // Añadir try-catch por si el JSON está corrupto
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error al parsear carrito desde localStorage", e);
        localStorage.removeItem('carritoCompras'); // Limpiar si está corrupto
        setCart([]);
      }
    } else {
      setCart([]); // Asegurar que es un array vacío si no hay nada guardado
    }
  }, []);

  useEffect(() => {
    // Solo guardar si el carrito es un array (evita guardar `null` o `undefined`)
    if (Array.isArray(cart)) {
      localStorage.setItem('carritoCompras', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart(currentCart => { // Usar función de actualización para el estado
      const existingItemIndex = currentCart.findIndex(item => item.codigo === product.codigo);

      if (existingItemIndex > -1) {
        // Si existe, crea un nuevo array con el item actualizado
        const newCart = [...currentCart];
        const updatedItem = {
           ...newCart[existingItemIndex],
           cantidad: newCart[existingItemIndex].cantidad + 1
        };
        newCart[existingItemIndex] = updatedItem;
        return newCart;
      } else {
        // Si no existe, agrégalo con cantidad 1
        return [...currentCart, { ...product, cantidad: 1 }];
      }
    });
  };

  // ... (removeFromCart, updateQuantity, getTotal, etc. se mantienen igual)
   const removeFromCart = (codigo) => {
    setCart(currentCart => currentCart.filter(item => item.codigo !== codigo));
  };

  const updateQuantity = (codigo, cantidad) => {
    if (cantidad <= 0) {
      removeFromCart(codigo);
      return;
    }
    setCart(currentCart => currentCart.map(item =>
      item.codigo === codigo
        ? { ...item, cantidad }
        : item
    ));
  };

  const getTotal = () => {
    // Asegurarse que cart es un array antes de reducir
    if (!Array.isArray(cart)) return 0;
    return cart.reduce((total, item) => {
      // Asegurarse que precio y cantidad son números
      const price = typeof item.precio === 'number' ? item.precio : 0;
      const quantity = typeof item.cantidad === 'number' ? item.cantidad : 0;
      return total + (price * quantity);
    }, 0);
  };

  const getItemCount = () => {
     // Asegurarse que cart es un array antes de reducir
    if (!Array.isArray(cart)) return 0;
    return cart.reduce((count, item) => {
        const quantity = typeof item.cantidad === 'number' ? item.cantidad : 0;
        return count + quantity;
    }, 0);
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