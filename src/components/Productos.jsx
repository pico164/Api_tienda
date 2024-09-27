import React, { useState, useEffect } from "react";

const Productos = ({ descuento }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  const productosConDescuento = productos.map((producto) => {
    const descuentop = (producto.price * descuento) / 100;
    const precioConDescuento = producto.price - descuentop;
    return {
      ...producto,
      price: precioConDescuento > 0 ? precioConDescuento : 0,
    };
  });

  return (
    <div className="container text-center">
      <h1 className="my-4">Lista de Productos</h1>
      <div className="row">
        {productosConDescuento.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={producto.image}
                alt={producto.title}
                className="card-img-top"
                style={{ height: "300px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">${producto.price.toFixed(2)}</p>
              </div>
              <div className="p-3">
                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
