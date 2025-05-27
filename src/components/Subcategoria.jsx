// src/components/Subcategoria.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductoCard from "./ProductoCard";

const Subcategoria = ({ agregarAlCarrito }) => {
  const { idSubcategoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [subcategoriaNombre, setSubcategoriaNombre] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarProductos();
  }, [idSubcategoria]);

  const cargarProductos = () => {
    setLoading(true);
    fetch(`https://tienda-kxep.onrender.com/api/subcategorias/${idSubcategoria}/productos`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.productos || []);
        setSubcategoriaNombre(data.subcategoria || "");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setLoading(false);
      });
  };

  const filtrarPorPrecio = (min, max) => {
    setLoading(true);
    fetch(`https://tienda-kxep.onrender.com/api/subcategorias/${idSubcategoria}/productos?min_precio=${min}&max_precio=${max}`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.productos || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al filtrar productos:", error);
        setLoading(false);
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
        {subcategoriaNombre || "Cargando..."}
      </h1>

      <div className="flex gap-8">
        {/* Panel de filtros */}
        <aside className="w-full max-w-xs bg-blue-100 p-4 rounded shadow">
          <h3 className="font-bold text-blue-800 mb-2">Filtros</h3>
          <p className="text-sm text-blue-700">Precio</p>
          <ul className="text-blue-600 text-sm space-y-1 mt-2">
            <li>
              <button
                onClick={() => filtrarPorPrecio(0, 500)}
                className="hover:underline"
              >
                Menor a mayor (max 500)
              </button>
            </li>
            <li>
              <button
                onClick={() => filtrarPorPrecio(500, 1500)}
                className="hover:underline"
              >
                Mayor a menor (500 - 1500)
              </button>
            </li>
            <li>
              <button
                onClick={cargarProductos}
                className="text-red-600 mt-4 block hover:underline"
              >
                Quitar filtro
              </button>
            </li>
          </ul>
        </aside>

        {/* Sección de productos */}
        <section className="flex-1">
          {loading ? (
            <p className="text-center text-gray-600">Cargando productos...</p>
          ) : productos.length === 0 ? (
            <p className="text-center text-gray-500 py-8 text-lg font-semibold">
              Aún no tenemos productos para esta sección.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {productos.map((producto) => (
                <ProductoCard
                  key={producto.id}
                  producto={producto}
                  agregarAlCarrito={agregarAlCarrito}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Subcategoria;
