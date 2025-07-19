import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ProductoCard from "./ProductoCard";
import { FaSearch, FaTimes } from "react-icons/fa";

const Busqueda = ({ agregarAlCarrito }) => {
  const [searchParams] = useSearchParams();
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const termino = searchParams.get("term");

  useEffect(() => {
    if (!termino) return;

    setLoading(true);
    setError(null);
    fetch(`https://tienda-kxep.onrender.com/api/productos/buscar?term=${termino}`)
      .then(res => {
        if (!res.ok) throw new Error("Error en la búsqueda");
        return res.json();
      })
      .then(data => {
        setResultados(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al buscar productos:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [termino]);

  const renderSkeletons = () => {
    return Array(8).fill(0).map((_, index) => (
      <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col h-full w-[240px] mx-auto animate-pulse">
        <div className="relative">
          <div className="w-full h-52 bg-gray-200"></div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-6"></div>
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="mt-auto flex justify-center gap-3">
            <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
            <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      {/* Cabecera de búsqueda */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4">
          Resultados de Búsqueda
        </h1>
        
        {/* Barra de término buscado - Ahora es solo visual */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-3 flex items-center border border-green-200">
            <FaSearch className="text-green-600 mr-3" />
            <span className="font-medium text-gray-800">Término buscado: </span>
            <span className="ml-2 bg-white px-4 py-1 rounded-full font-semibold text-green-700 border border-green-300">
              {termino}
            </span>
            <button 
              onClick={() => navigate('/')}
              className="ml-4 text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
        </div>
        
        {/* Nuevo campo de búsqueda para nuevas consultas */}
       
      </div>

      {/* Estado de carga */}
      {loading && (
        <div className="flex flex-wrap justify-center gap-6">
          {renderSkeletons()}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center py-10">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
            <h3 className="font-bold text-lg mb-2">Error en la búsqueda</h3>
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-colors"
            >
              Intentar de nuevo
            </button>
          </div>
        </div>
      )}

      {/* Sin resultados */}
      {!loading && resultados.length === 0 && !error && (
        <div className="text-center py-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 inline-block border border-green-200 max-w-2xl">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <FaSearch className="text-5xl text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              No encontramos resultados para "{termino}"
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              Revisa la ortografía o prueba con términos diferentes. También puedes explorar nuestras categorías.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-colors"
              >
                Volver al inicio
              </button>
              <button 
                onClick={() => navigate('/ofertas')}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-colors"
              >
                Ver ofertas
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Resultados */}
      {!loading && resultados.length > 0 && (
        <>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-8 border border-green-200">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center">
                <span className="font-medium text-gray-700">
                  Mostrando {resultados.length} resultados para:
                </span>
                <span className="ml-2 bg-white px-3 py-1 rounded-full font-semibold text-green-700 border border-green-300">
                  {termino}
                </span>
              </div>
              <button 
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-800 flex items-center mt-2 sm:mt-0"
              >
                <FaTimes className="mr-1" /> Limpiar búsqueda
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {resultados.map(producto => (
              <ProductoCard
                key={producto.id}
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
              />
            ))}
          </div>
          
          {/* Mensaje final */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
              <p className="text-gray-700">
                ¿No encontraste lo que buscabas? Prueba con términos similares o{" "}
                <a 
                  href="https://wa.me/51960936246" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  consulta con nuestro equipo
                </a>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Busqueda;