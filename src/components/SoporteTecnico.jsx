import React from "react";

const SoporteTecnico = () => {
  return (
    <div className="px-[5%] py-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-10">Soporte Tecnico</h1>

      {/* Reparación de Celulares */}
      <div className="flex flex-col md:flex-row mb-10 shadow-lg rounded-xl overflow-hidden bg-white border">
        <img src="/celular-reparacion.jpg" alt="Celular" className="w-full md:w-1/2 object-cover" />
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 w-full md:w-1/2">
          <h2 className="text-lg font-bold mb-4">Reparación y Mantenimiento de Celulares</h2>
          <ul className="list-disc ml-5 mb-4 text-sm">
            <li>¿Tu celular tiene problemas? Nuestro equipo te ayuda con:</li>
            <li>Cambio de pantalla y batería</li>
            <li>Reparación de puertos y botones</li>
            <li>Solución de software</li>
            <li>Optimización y mantenimiento</li>
          </ul>
          <a
            href="https://wa.me/51987654321?text=Hola,%20necesito%20ayuda%20para%20reparar%20mi%20laptop%20o%20computadora."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full inline-flex items-center gap-2 w-fit" // Modificado aquí
          >
            Solicitar reparación
            <img src="/whatsapp.png" alt="wp" className="w-5" />
          </a>
        </div>
      </div>

      {/* Computadoras y Laptops */}
      <div className="flex flex-col md:flex-row mb-10 shadow-lg rounded-xl overflow-hidden bg-white border">
        <img src="/laptop-reparacion.jpg" alt="Laptop" className="w-full md:w-1/2 object-cover" />
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 w-full md:w-1/2">
          <h2 className="text-lg font-bold mb-4">Reparación y Mantenimiento de Computadoras y Laptops</h2>
          <ul className="list-disc ml-5 mb-4 text-sm">
            <li>Cambio de disco duro / ampliación RAM</li>
            <li>Reparación de puertos y teclados</li>
            <li>Eliminación de virus</li>
            <li>Instalación de software</li>
          </ul>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2">
            Solicitar reparación <img src="/whatsapp.png" alt="wp" className="w-5" />
          </button>
        </div>
      </div>

      {/* Impresoras */}
      <div className="flex flex-col md:flex-row mb-10 shadow-lg rounded-xl overflow-hidden bg-white border">
        <img src="/impresora-reparacion.jpg" alt="Impresora" className="w-full md:w-1/2 object-cover" />
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 w-full md:w-1/2">
          <h2 className="text-lg font-bold mb-4">Reparación y Mantenimiento de Impresoras</h2>
          <ul className="list-disc ml-5 mb-4 text-sm">
            <li>Limpieza y mantenimiento preventivo</li>
            <li>Reparación de inyectores y cabezales</li>
            <li>Solución de drivers y conexión</li>
            <li>Cambio de piezas</li>
          </ul>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2">
            Solicitar reparación <img src="/whatsapp.png" alt="wp" className="w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoporteTecnico;
