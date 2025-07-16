import React from 'react';
import { Link } from 'react-router-dom';

const ProductoCard = ({ producto, agregarAlCarrito }) => {
  const imagen = producto.imagenes?.[0] ?? "/no-image.jpg";
  
  const ahorro = producto.en_oferta 
    ? (parseFloat(producto.precio) - parseFloat(producto.precio_final)).toFixed(2)
    : 0;

  // Determinar color y texto para el stock
  const getStockInfo = () => {
    if (producto.stock === 0) {
      return { text: "Agotado", color: "bg-red-100 text-red-800" };
    } else if (producto.stock <= 5) {
      return { text: `Últimas ${producto.stock} unidades`, color: "bg-orange-100 text-orange-800" };
    } else {
      return { text: `Stock: ${producto.stock}`, color: "bg-green-100 text-green-800" };
    }
  };
  
  const stockInfo = getStockInfo();

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-[240px] mx-auto">
      {/* Encabezado con imagen y etiquetas */}
      <div className="relative">
        {/* Badge de oferta */}
        {producto.en_oferta && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10 shadow-md">
            -{producto.porcentaje_descuento}%
          </span>
        )}
        
        {/* Badge de estado */}
        {producto.estado && (
          <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10 shadow-md">
            {producto.estado}
          </span>
        )}
        
        {/* Imagen del producto */}
        <div className="w-full h-52 bg-gray-50 flex items-center justify-center p-4">
          <img
            src={imagen}
            alt={producto.nombre}
            className="max-h-[90%] max-w-[90%] object-contain"
          />
        </div>
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="p-4 flex flex-col flex-grow text-center">
        {/* Nombre del producto */}
        <h3 className="font-bold text-gray-800 text-base mb-2 line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
          {producto.nombre}
        </h3>
        
        {/* Información de stock */}
        <div className={`text-xs px-3 py-1.5 rounded-full mb-3 mx-auto ${stockInfo.color}`}>
          {stockInfo.text}
        </div>
        
        {/* Precios */}
        <div className="mb-4">
          {producto.en_oferta ? (
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-2 justify-center">
                <span className="text-xl font-bold text-gray-900">
                  S/ {parseFloat(producto.precio_final).toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  S/ {parseFloat(producto.precio).toFixed(2)}
                </span>
              </div>
              <div className="text-sm text-green-600 mt-1">
                Ahorras: S/ {ahorro}
              </div>
            </div>
          ) : (
            <span className="text-xl font-bold text-gray-900">
              S/ {parseFloat(producto.precio_final).toFixed(2)}
            </span>
          )}
        </div>

        {/* Botones de acción */}
        <div className="mt-auto flex justify-center gap-3">
          <Link 
            to={`/producto/${producto.id}`} 
          >
            <button className="flex items-center gap-1.5 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="text-sm font-medium">Ver</span>
            </button>
          </Link>

          <button
            onClick={() => agregarAlCarrito(producto)}
            disabled={producto.stock === 0}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors ${
              producto.stock === 0 
                ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-sm font-medium">Añadir</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;