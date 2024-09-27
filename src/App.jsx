import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Narbar";
import Productos from "./components/Productos";
import Descuento from "./components/Descuentos";

function App() {
  const [descuento, setDescuento] = useState(0);

  const actualizarDescuento = (nuevoDescuento) => {
    setDescuento(nuevoDescuento);
  };

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<h1>Bienvenido a Mi Tienda</h1>} />
          <Route
            path="/descuentos"
            element={<Descuento actualizarDescuento={actualizarDescuento} />}
          />
          <Route
            path="/productos"
            element={<Productos descuento={descuento} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
