import React from 'react';
import { Link } from 'react-router-dom';
const ProductoCard = ({ producto, agregarAlCarrito, onVerDetalle }) => {
  // Manejo seguro incluyendo verificación de array
  const imagen = producto.imagenes?.[0] ?? "/no-image.jpg";

  return (
    <div className="bg-gray-200 border-2 border-gray-300 rounded-2xl shadow-lg w-[250px] overflow-hidden flex flex-col mx-auto h-full">
      {/* Contenedor imagen - Ocupa 40% del espacio */}
      <div className="w-full h-48 relative"> {/* Aumentamos la altura */}
        <img
          src={imagen}
          alt={producto.nombre}
          className="w-full h-full object-contain bg-white" // Añadido object-center
        />
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200/50"></div>
      </div>

      {/* Contenido texto - Ocupa 60% */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <p className="text-sm font-semibold line-clamp-3 mb-2">
            {producto.nombre}
          </p>
          <p className="text-lg font-bold text-center">
            S/ {parseFloat(producto.precio).toFixed(2)}
          </p>
        </div>

        {/* Botones */}
        <div className="flex justify-between gap-3 mt-4">
          <Link to={`/producto/${producto.id}`} className="flex-1">
            <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors">
              <img src="/vista.png" alt="Vista" className="h-6 w-6 mx-auto" />
            </button>
          </Link>

          <button
            onClick={() => agregarAlCarrito(producto)}
            className="flex-1 bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition-colors"
          >
            <img
              src="/carrito-de-compras.png"
              alt="Carrito"
              className="h-6 w-6 mx-auto"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;  