import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

const Story = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Cart />

      <main className="flex-grow-1">
        <div className="container py-5">
          <article className="row align-items-center mb-5 py-4">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h1 className="display-4 mb-4">Nuestra historia</h1>
              <p className="lead">
                En HuertoHogar creemos que lo natural siempre es mejor. Hace más de seis años comenzamos este proyecto con un sueño sencillo pero poderoso: acercar la frescura del campo a cada hogar de Chile.
              </p>
              <p>
                Lo que empezó como una pequeña iniciativa familiar, pronto se convirtió en una tienda online comprometida con llevar productos frescos, saludables y de la más alta calidad directamente a la mesa de miles de familias.
              </p>
              <p>
                Hoy en día, estamos presentes en más de 9 puntos estratégicos del país, llegando a ciudades como Santiago, Puerto Montt, Villarrica, Nacimiento, Viña del Mar, Valparaíso y Concepción. Nuestro crecimiento ha sido posible gracias a la confianza de nuestros clientes y al trabajo dedicado de productores locales que comparten nuestra visión.
              </p>
              <p>
                Nuestra misión sigue siendo la misma: conectar a las familias chilenas con el campo, promoviendo un estilo de vida saludable, sostenible y en armonía con la naturaleza.
              </p>
              <p>
                En HuertoHogar no solo vendemos productos, llevamos pedacitos de campo directo al hogar, con la certeza de que cada pedido es más que una compra: es un aporte a la salud, la comunidad y el medioambiente.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <img 
                className="story-1 img-fluid shadow" 
                src="https://res.cloudinary.com/dzktjoix0/image/upload/v1757378468/istockphoto-1412751704-612x612_rdsfuj.jpg" 
                alt="Historia de HuertoHogar"
              />
            </div>
          </article>

          <hr className="my-5" />

          <article className="row align-items-center mb-5 py-4">
            <div className="col-12 col-md-6 order-md-1 mb-4 mb-md-0">
              <img 
                className="story-1 img-fluid shadow" 
                src="https://res.cloudinary.com/dzktjoix0/image/upload/v1757378468/farmer-1367104_1280_j0jhq5.jpg" 
                alt="Misión"
              />
            </div>
            <div className="col-12 col-md-6 order-md-2 mision">
              <h1 className="display-4 mb-4">Misión</h1>
              <p className="lead">
                Nuestra misión es proporcionar productos frescos y de calidad directamente desde el campo hasta
                la puerta de nuestros clientes, garantizando la frescura y el sabor en cada entrega.
              </p>
              <p>
                Nos comprometemos a fomentar una conexión más cercana entre los consumidores y los agricultores
                locales, apoyando prácticas agrícolas sostenibles y promoviendo una alimentación saludable en
                todos los hogares chilenos.
              </p>
            </div>
          </article>

          <hr className="my-5" />

          <article className="row align-items-center py-4">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h1 className="display-4 mb-4">Visión</h1>
              <p className="lead">
                Nuestra visión es ser la tienda online líder en la distribución de productos frescos y naturales en
                Chile, reconocida por nuestra calidad excepcional, servicio al cliente y compromiso con la
                sostenibilidad.
              </p>
              <p>
                Aspiramos a expandir nuestra presencia a nivel nacional e internacional,
                estableciendo un nuevo estándar en la distribución de productos agrícolas directos del productor al
                consumidor.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <img 
                className="story-1 img-fluid shadow" 
                src="https://res.cloudinary.com/dzktjoix0/image/upload/v1757378469/premium_photo-1661420226112-311050ce30da_mqnses.jpg" 
                alt="Visión"
              />
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Story;