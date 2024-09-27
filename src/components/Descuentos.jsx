import React, { useState } from "react";

const Descuento = ({ actualizarDescuento }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoDescuento = 10;
    actualizarDescuento(nuevoDescuento);
    alert(`¡Gracias por registrarte, ${nombre}! Has obtenido un descuento.`);
    setNombre("");
    setEmail("");
    setTelefono("");
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <h2 className="col-md-2 mx-3">Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-4">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={{ width: "400px" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "400px" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            style={{ width: "400px" }}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Obtener Descuento
        </button>
      </form>
    </div>
  );
};

export default Descuento;
