import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import ProductCard from '../components/ProductCard';
import { productos, categorias } from '../data/productos';

const Catalogo = () => {
  const [filteredProducts, setFilteredProducts] = useState(productos);
  const [selectedCategory, setSelectedCategory] = useState('Seleccionar categoria');

  useEffect(() => {
    if (selectedCategory === 'Seleccionar categoria') {
      setFilteredProducts(productos);
    } else {
      const filtered = productos.filter(
        producto => producto.categoria === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Cart />
      
      <main className="flex-grow-1">
        <div className="container py-4">
          <h1 className="text-center my-4 display-4">Catálogo de Productos</h1>
          
          <div className="row align-items-center mb-4">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <nav aria-label="Paginación de productos">
                <ul className="pagination justify-content-center justify-content-md-start mb-0">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Anterior">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Siguiente">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-12 col-md-6">
              <select 
                className="form-select" 
                aria-label="Filtro de categoría"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="Seleccionar categoria">Todas las categorías</option>
                {categorias.map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row" id="catalogo">
            {filteredProducts.length === 0 ? (
              <div className="col-12">
                <div className="alert alert-info text-center" role="alert">
                  No hay productos en esta categoría
                </div>
              </div>
            ) : (
              filteredProducts.map((producto) => (
                <ProductCard key={producto.codigo} producto={producto} />
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalogo;