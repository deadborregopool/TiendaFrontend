import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaTrash, FaArrowLeft, FaPlus, FaMinus } from "react-icons/fa";

const CarritoCompras = ({ cartItems, eliminarDelCarrito, actualizarCantidad }) => {
  const total = cartItems.reduce((acc, item) => {
    const quantity = item.quantity || 1;
    return acc + (parseFloat(item.precio || 0) * quantity);
  }, 0);

  const generarMensajeWhatsApp = () => {
    const base = "https://wa.me/51960936246?text="; 
    const productos = cartItems.map((item, i) => {
      const quantity = item.quantity || 1;
      return `${i + 1}. ${item.nombre} - Cantidad: ${quantity} - S/ ${(parseFloat(item.precio) * quantity).toFixed(2)}`;
    }).join("%0A");
    
    const mensaje = `Hola, deseo consultar sobre estos productos:%0A%0A${productos}%0A%0ATotal: S/ ${total.toFixed(2)}`;
    return `${base}${mensaje}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
            <FaArrowLeft className="mr-2" />
            <span>Continuar comprando</span>
          </Link>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            Carrito de Compras
          </h1>
          <div className="w-10"></div> {/* Espaciador */}
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-xl shadow-sm">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 flex items-center justify-center mb-6">
              <div className="text-5xl">🛒</div>
            </div>
            <p className="text-xl font-semibold text-gray-700 mb-4">Tu carrito está vacío</p>
            <p className="text-gray-600 max-w-md text-center mb-8">
              Aún no has agregado productos a tu carrito. Explora nuestra tienda y encuentra productos increíbles.
            </p>
            <Link
              to="/"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-blue-600 transition-colors flex items-center gap-2"
            >
              Explorar productos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de productos */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 text-gray-600 font-medium">
                  <div className="col-span-5">Producto</div>
                  <div className="col-span-2 text-center">Precio</div>
                  <div className="col-span-3 text-center">Cantidad</div>
                  <div className="col-span-2 text-center">Subtotal</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => {
                  const quantity = item.quantity || 1;
                  const subtotal = (parseFloat(item.precio) * quantity).toFixed(2);
                  
                  return (
                    <div key={item.idCarrito} className="grid grid-cols-12 gap-4 px-6 py-5 items-center">
                      <div className="col-span-5 flex items-center">
                        <img
                          src={item.imagenes?.[0] || "/no-image.jpg"}
                          alt={item.nombre}
                          className="w-16 h-16 object-contain mr-4 border rounded-lg"
                        />
                        <div>
                          <h3 className="font-medium text-gray-800">{item.nombre}</h3>
                          <p className="text-sm text-gray-500">SKU: {item.id}</p>
                        </div>
                      </div>
                      
                      <div className="col-span-2 text-center text-gray-700">
                        S/ {parseFloat(item.precio).toFixed(2)}
                      </div>
                      
                      <div className="col-span-3 flex justify-center">
                        <div className="flex items-center border rounded-lg">
                          <button 
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            onClick={() => actualizarCantidad(item.idCarrito, quantity - 1)}
                          >
                            <FaMinus />
                          </button>
                          <span className="px-4 py-1">{quantity}</span>
                          <button 
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            onClick={() => actualizarCantidad(item.idCarrito, quantity + 1)}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                      
                      <div className="col-span-2 flex items-center justify-center">
                        <span className="font-medium text-gray-800 mr-2">S/ {subtotal}</span>
                        <button 
                          className="text-red-500 hover:text-red-700"
                          onClick={() => eliminarDelCarrito(item.idCarrito)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Resumen de compra */}
            <div className="bg-white rounded-xl shadow overflow-hidden h-fit">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-4">
                <h3 className="text-xl font-bold">Resumen de la orden</h3>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Productos ({cartItems.length})</span>
                  <span className="font-medium">S/ {total.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600">Envío</span>
                  <span className="text-green-600 font-medium">A consultar</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-xl text-green-600">S/ {total.toFixed(2)}</span>
                  </div>
                </div>
                
                <a
                  href={generarMensajeWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-center py-3 rounded-lg transition-colors flex items-center justify-center gap-3 font-medium mb-4"
                >
                  <FaWhatsapp className="text-xl" />
                  Comprar por WhatsApp
                </a>
                
                <p className="text-sm text-gray-600 text-center mb-6">
                  Al hacer clic en este botón serás redirigido a WhatsApp para confirmar tu pedido
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Política de compra
                  </h4>
                  <p className="text-sm text-gray-600">
                    Los precios están sujetos a disponibilidad. Un asesor se comunicará contigo para confirmar stock y detalles de entrega.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarritoCompras;