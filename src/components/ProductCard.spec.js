// src/components/ProductCard.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { CartProvider } from '../context/CartContext';

describe('ProductCard Component', () => {

  const mockProducto = {
    codigo: 'FR001',
    nombre: 'Manzanas Fuji',
    categoria: 'Frutas Frescas',
    precio: 1200,
    unidad: 'CLP por kilo',
    stock: 150,
    descripcion: 'Manzanas Fuji crujientes y dulces'
  };

  // Prueba 10: Renderizar información del producto
  it('debería renderizar la información del producto correctamente', () => {
    render(
      <CartProvider>
        <ProductCard producto={mockProducto} />
      </CartProvider>
    );

    // Cambiamos toBeInTheDocument por verificaciones de existencia (no ser null)
    expect(screen.getByText('Manzanas Fuji')).not.toBeNull();
    expect(screen.getByText(/FR001/)).not.toBeNull();
    expect(screen.getByText(/Frutas Frescas/)).not.toBeNull();
    // Para el precio, aseguramos que el elemento exista y contenga el texto
    const precioElement = screen.getByText(/1\.200/);
    expect(precioElement).not.toBeNull();
    expect(precioElement.textContent).toContain('1.200'); // Verifica el contenido específico si es necesario
    // También puedes verificar otros elementos si quieres más seguridad
    expect(screen.getByAltText('Manzanas Fuji')).not.toBeNull();
  });
});