import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';

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

    expect(result.current.cart.length).toBe(1);
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

    act(() => {
      result.current.addToCart(producto);
      result.current.addToCart(producto);
    });

    expect(result.current.cart.length).toBe(1);
    expect(result.current.cart[0].cantidad).toBe(2);
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

    act(() => {
      result.current.addToCart(producto);
      result.current.removeFromCart('FR001');
    });

    expect(result.current.cart.length).toBe(0);
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

    expect(result.current.getTotal()).toBe(2200);
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
      result.current.addToCart(producto);
      result.current.updateQuantity('FR001', 5);
    });

    expect(result.current.cart[0].cantidad).toBe(5);
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
      result.current.clearCart();
    });

    expect(result.current.cart.length).toBe(0);
  });

  // Prueba 7: Contar items totales en el carrito
  it('debería contar correctamente los items del carrito', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    const producto1 = { codigo: 'FR001', nombre: 'Manzanas', precio: 1200 };
    const producto2 = { codigo: 'FR002', nombre: 'Naranjas', precio: 1000 };

    act(() => {
      result.current.addToCart(producto1);
      result.current.addToCart(producto1); // cantidad 2
      result.current.addToCart(producto2); // cantidad 1
    });

    expect(result.current.getItemCount()).toBe(3);
  });
});