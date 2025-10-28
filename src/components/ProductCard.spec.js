import React from 'react';
import { render, screen} from '@testing-library/react';
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

    expect(screen.getByText('Manzanas Fuji')).toBeInTheDocument();
    expect(screen.getByText(/FR001/)).toBeInTheDocument();
    expect(screen.getByText(/Frutas Frescas/)).toBeInTheDocument();
    expect(screen.getByText(/1\.200/)).toBeInTheDocument();
  });
});