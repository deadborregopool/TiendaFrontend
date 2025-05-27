// src/components/CarritoCompras.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CarritoCompras = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.precio || 0), 0);

  const generarMensajeWhatsApp = () => {
    const base = "https://wa.me/51960936246?text="; 
    const productos = cartItems.map((item, i) => `${i + 1}. ${item.nombre} - S/ ${item.precio}`).join("%0A");
    const mensaje = `Hola, deseo consultar sobre estos productos:%0A${productos}`;
    return `${base}${mensaje}`;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-green-700 mb-6 text-center">Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10 text-center">
          <img src="/empty-cart.svg" alt="Carrito vacío" className="w-48 h-48 mb-6" />
          <p className="text-gray-700 text-lg font-semibold mb-4">Tu carrito está vacío</p>
          <Link
            to="/"
            className="bg-lime-500 text-white px-5 py-2 rounded hover:bg-lime-600 transition-colors"
          >
            ← Ir a comprar
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tabla de productos */}
          <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow">
            <table className="w-full text-left">
              <thead className="border-b">
                <tr>
                  <th className="pb-2">Producto</th>
                  <th className="pb-2">Precio</th>
                  <th className="pb-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.idCarrito} className="border-b text-sm">
                    <td className="py-3 flex items-center gap-2">
                      <img
                        src={item.imagenes?.[0] || "/no-image.jpg"}
                        alt={item.nombre}
                        className="w-12 h-12 object-contain"
                      />
                      {item.nombre}
                    </td>
                    <td>S/ {parseFloat(item.precio).toFixed(2)}</td>
                    <td>S/ {parseFloat(item.precio).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Resumen de orden */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-gray-700 mb-3">Resumen de la orden:</h3>
            <div className="text-sm mb-2 bg-lime-100 px-3 py-1 rounded text-lime-700">
              Hay {cartItems.length} artículo(s) en tu carrito
            </div>
            <div className="mb-4 flex justify-between text-sm">
              <span>Total del carrito</span>
              <strong>S/ {total.toFixed(2)}</strong>
            </div>
            <a
              href={generarMensajeWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-lime-500 text-white text-center py-2 rounded hover:bg-lime-600 transition-colors"
            >
              🟢 Compra ahora por WhatsApp
            </a>
            <Link
              to="/"
              className="mt-4 block text-center text-blue-600 hover:underline text-sm"
            >
              ← Seguir comprando
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarritoCompras;
