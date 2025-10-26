import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ producto }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(producto);
    alert('Producto agregado al carrito');
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img 
          src="https://res.cloudinary.com/dzktjoix0/image/upload/v1757376907/huerto_hogar_transparent_z90f1m.png" 
          className="card-img-top p-3" 
          alt={producto.nombre}
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text text-muted small flex-grow-1">{producto.descripcion}</p>
          
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item px-0 py-2">
              <small><strong>Código:</strong> {producto.codigo}</small>
            </li>
            <li className="list-group-item px-0 py-2">
              <small><strong>Categoría:</strong> {producto.categoria}</small>
            </li>
            <li className="list-group-item px-0 py-2">
              <strong className="text-success fs-5">
                {producto.precio ? `${producto.precio.toLocaleString('es-CL')}` : 'Consultar'}
              </strong>
              {producto.unidad && <small className="d-block text-muted">{producto.unidad}</small>}
            </li>
            <li className="list-group-item px-0 py-2">
              <small><strong>Stock:</strong> {producto.stock !== null ? producto.stock : 'Consultar'}</small>
            </li>
          </ul>
          
          <button 
            className="btn btn-primary w-100 mt-auto"
            onClick={handleAddToCart}
          >
            🛒 Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;