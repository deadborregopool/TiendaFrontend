import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductoCard from "./ProductoCard"; // Ajusta la ruta

const Busqueda = ({ agregarAlCarrito }) => { // Asegúrate de recibir agregarAlCarrito
  const [searchParams] = useSearchParams();
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

  const termino = searchParams.get("term");

  useEffect(() => {
    if (!termino) return;

    setLoading(true);
    fetch(`https://tienda-kxep.onrender.com/api/productos/filtrar/nombre?term=${termino}`)
      .then(res => res.json())
      .then(data => {
        setResultados(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al buscar productos:", err);
        setLoading(false);
      });
  }, [termino]);

  const handleVerDetalle = (producto) => {
    // Implementa la navegación a detalle del producto
    console.log("Ver detalle:", producto);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Resultados de búsqueda para: <span className="text-blue-600">"{termino}"</span>
      </h2>

      {loading && <p>Cargando...</p>}

      {!loading && resultados.length === 0 && (
        <p className="text-gray-600">No se encontraron productos con ese término.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
        {resultados.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
            onVerDetalle={() => handleVerDetalle(producto)}
          />
        ))}
      </div>
    </div>
  );
};

export default Busqueda;
