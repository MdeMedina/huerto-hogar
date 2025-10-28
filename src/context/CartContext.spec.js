// src/context/CartContext.spec.js
import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';

// Limpia el localStorage antes de cada prueba
beforeEach(() => {
  localStorage.clear();
});

// Mockear localStorage si es necesario (a veces útil en entornos de test más estrictos)
// let localStorageMock = {};
// beforeEach(() => {
//   localStorageMock = {};
//   spyOn(localStorage, 'getItem').and.callFake((key) => localStorageMock[key] || null);
//   spyOn(localStorage, 'setItem').and.callFake((key, value) => (localStorageMock[key] = value + ''));
//   spyOn(localStorage, 'clear').and.callFake(() => (localStorageMock = {}));
//   spyOn(localStorage, 'removeItem').and.callFake((key) => delete localStorageMock[key]);
// });


describe('CartContext', () => {

  // Prueba 1: Agregar producto al carrito
  it('debería agregar un producto al carrito', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    const producto = {
      codigo: 'FR001',
      nombre: 'Manzanas Fuji',
      precio: 1200
    };

    act(() => {
      result.current.addToCart(producto);
    });

    expect(result.current.cart.length).toBe(1); // Ahora debería ser 1
    expect(result.current.cart[0].codigo).toBe('FR001');
    expect(result.current.cart[0].cantidad).toBe(1);
  });

  // Prueba 2: Incrementar cantidad de producto existente
  it('debería incrementar la cantidad si el producto ya existe', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    const producto = {
      codigo: 'FR001',
      nombre: 'Manzanas Fuji',
      precio: 1200
    };

     // Aseguramos estado inicial limpio agregando aquí o confiando en beforeEach
     act(() => {
        result.current.clearCart(); // Opcional si ya usas localStorage.clear() en beforeEach
        localStorage.clear(); // Redundante si ya está en beforeEach, pero asegura
      });


    act(() => {
      result.current.addToCart(producto);
    });
    // Forzamos actualización para simular recarga o cambio
     act(() => {
        result.current.addToCart(producto); // Agrega el mismo producto de nuevo
      });


    expect(result.current.cart.length).toBe(1);
    expect(result.current.cart[0].cantidad).toBe(2); // Ahora debería ser 2
  });

  // Prueba 3: Eliminar producto del carrito
  it('debería eliminar un producto del carrito', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    const producto = {
      codigo: 'FR001',
      nombre: 'Manzanas Fuji',
      precio: 1200
    };

    // Estado inicial
    act(() => {
      result.current.addToCart(producto);
    });
    // Verificación intermedia (opcional)
    expect(result.current.cart.length).toBe(1);


    // Acción de eliminar
    act(() => {
      result.current.removeFromCart('FR001');
    });

    expect(result.current.cart.length).toBe(0); // Ahora debería ser 0
  });

  // Prueba 4: Calcular total del carrito
  it('debería calcular el total correctamente', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    const producto1 = { codigo: 'FR001', nombre: 'Manzanas', precio: 1200 };
    const producto2 = { codigo: 'FR002', nombre: 'Naranjas', precio: 1000 };

    act(() => {
      result.current.addToCart(producto1);
      result.current.addToCart(producto2);
    });

    expect(result.current.getTotal()).toBe(2200); // Esto ya debería funcionar bien si el estado está aislado
  });

  // Prueba 5: Actualizar cantidad de producto
  it('debería actualizar la cantidad de un producto', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    const producto = {
      codigo: 'FR001',
      nombre: 'Manzanas Fuji',
      precio: 1200
    };

    act(() => {
      result.current.addToCart(producto); // Inicia con cantidad 1
    });

     // Asegúrate que el producto está antes de actualizar
     expect(result.current.cart.length).toBe(1);
     expect(result.current.cart[0].codigo).toBe('FR001');
     expect(result.current.cart[0].cantidad).toBe(1);


    act(() => {
      result.current.updateQuantity('FR001', 5);
    });

     // Verifica después de actualizar
     expect(result.current.cart.length).toBe(1); // Sigue habiendo un producto
     expect(result.current.cart[0].cantidad).toBe(5); // Ahora la cantidad debería ser 5
  });

  // Prueba 6: Limpiar carrito
  it('debería limpiar todo el carrito', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    const producto = {
      codigo: 'FR001',
      nombre: 'Manzanas Fuji',
      precio: 1200
    };

    act(() => {
      result.current.addToCart(producto);
    });
     // Verificación intermedia (opcional)
     expect(result.current.cart.length).toBe(1);

    act(() => {
      result.current.clearCart();
    });

    expect(result.current.cart.length).toBe(0); // Esto ya debería funcionar bien
  });

  // Prueba 7: Contar items totales en el carrito
  it('debería contar correctamente los items del carrito', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    const producto1 = { codigo: 'FR001', nombre: 'Manzanas', precio: 1200 };
    const producto2 = { codigo: 'FR002', nombre: 'Naranjas', precio: 1000 };

     // Estado inicial limpio asegurado por beforeEach

    act(() => {
      result.current.addToCart(producto1); // cantidad 1 de FR001
      result.current.addToCart(producto1); // cantidad 2 de FR001
      result.current.addToCart(producto2); // cantidad 1 de FR002
    });

    expect(result.current.getItemCount()).toBe(3); // 2 manzanas + 1 naranja = 3 items
  });
});