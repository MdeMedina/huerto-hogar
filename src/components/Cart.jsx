import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    getTotal, 
    isCartOpen, 
    openCart, 
    closeCart 
  } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add('cart-open');
    } else {
      document.body.classList.remove('cart-open');
    }

    return () => {
      document.body.classList.remove('cart-open');
    };
  }, [isCartOpen]);

  const handleIncrement = (item) => {
    updateQuantity(item.codigo, item.cantidad + 1);
  };

  const handleDecrement = (item) => {
    if (item.cantidad > 1) {
      updateQuantity(item.codigo, item.cantidad - 1);
    } else {
      removeFromCart(item.codigo);
    }
  };

  return (
    <>
      <button 
        className="cart-toggle" 
        id="openCartBtn" 
        onClick={openCart}
        aria-haspopup="dialog" 
        aria-controls="cartDrawer" 
        aria-expanded={isCartOpen}
      >
        🛒 Abrir carrito ({cart.length})
      </button>

      <aside 
        className="drawer" 
        id="cartDrawer" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="cartTitle" 
        aria-hidden={!isCartOpen}
      >
        <header>
          <h2 id="cartTitle">Tu carrito</h2>
          <button 
            className="icon-btn" 
            id="closeCartBtn" 
            onClick={closeCart}
            aria-label="Cerrar carrito"
          >
            ✕
          </button>
        </header>

        <div className="content" id="cartContent">
          {cart.length === 0 ? (
            <p className="text-center text-muted">Tu carrito está vacío</p>
          ) : (
            cart.map((item) => (
              <article className="item" key={item.codigo} data-id={item.codigo}>
                <div className="thumb">64×64</div>
                <div>
                  <h4>{item.nombre}</h4>
                  <div className="price" data-price={item.precio}>
                    ${item.precio}
                  </div>
                </div>
                <div style={{ display: 'grid', gap: '.4rem', justifyItems: 'end' }}>
                  <div className="qty">
                    <button 
                      className="dec" 
                      onClick={() => handleDecrement(item)}
                      aria-label="Quitar uno"
                    >
                      −
                    </button>
                    <input 
                      className="q" 
                      type="text" 
                      inputMode="numeric" 
                      value={item.cantidad} 
                      readOnly
                      aria-label="Cantidad" 
                    />
                    <button 
                      className="inc" 
                      onClick={() => handleIncrement(item)}
                      aria-label="Agregar uno"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="icon-btn remove" 
                    onClick={() => removeFromCart(item.codigo)}
                  >
                    Eliminar
                  </button>
                </div>
              </article>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <footer>
            <div className="row">
              <span>Total:</span>
              <span className="total value">${getTotal().toLocaleString('es-CL')}</span>
            </div>
            <button className="btn btn-primary w-100">
              Proceder al pago
            </button>
          </footer>
        )}
      </aside>
    </>
  );
};

export default Cart;