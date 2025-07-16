import React from "react";
import { FaTools, FaDesktop, FaLaptop, FaPrint, FaWhatsapp } from "react-icons/fa";

const SoporteTecnico = () => {
  const servicios = [
    {
      id: 1,
      titulo: "Reparación y Mantenimiento de Computadores",
      icono: <FaDesktop className="text-4xl text-blue-500" />,
      imagen: "/computador-reparacion.jpg",
      items: [
        "Diagnóstico de hardware y software",
        "Cambio de disco duro / ampliación RAM",
        "Reparación de fuentes de poder",
        "Limpieza interna profunda",
        "Optimización de rendimiento"
      ],
      whatsapp: "https://wa.me/51987654321?text=Hola,%20necesito%20ayuda%20con%20mi%20computador."
    },
    {
      id: 2,
      titulo: "Reparación y Mantenimiento de Laptops",
      icono: <FaLaptop className="text-4xl text-green-500" />,
      imagen: "/laptop-reparacion.jpg",
      items: [
        "Cambio de pantalla y teclado",
        "Reparación de puertos y conectores",
        "Solución de problemas de sobrecalentamiento",
        "Reemplazo de batería",
        "Mantenimiento preventivo"
      ],
      whatsapp: "https://wa.me/51987654321?text=Hola,%20necesito%20ayuda%20con%20mi%20laptop."
    },
    {
      id: 3,
      titulo: "Reparación y Mantenimiento de Impresoras",
      icono: <FaPrint className="text-4xl text-purple-500" />,
      imagen: "/impresora-reparacion.jpg",
      items: [
        "Limpieza y mantenimiento preventivo",
        "Reparación de inyectores y cabezales",
        "Solución de drivers y conexión",
        "Cambio de piezas",
        "Calibración y ajustes"
      ],
      whatsapp: "https://wa.me/51987654321?text=Hola,%20necesito%20ayuda%20con%20mi%20impresora."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-blue-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <FaTools className="text-4xl" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Soporte Técnico Profesional</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Soluciones rápidas y confiables para tus equipos de computación
          </p>
          <div className="mt-8">
            <div className="inline-block bg-white/20 px-6 py-2 rounded-full">
              <p className="flex items-center justify-center">
                <FaWhatsapp className="mr-2 text-green-300" />
                <span>Contacto: 044-22155</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Servicios Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Servicios de Reparación</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Contamos con técnicos especializados en equipos de cómputo para resolver cualquier problema
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicios.map((servicio) => (
            <div 
              key={servicio.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={servicio.imagen} 
                  alt={servicio.titulo} 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
                  {servicio.icono}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-24"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                  {servicio.titulo}
                </h3>
              </div>
              
              <div className="p-6">
                <ul className="mb-6 space-y-3">
                  {servicio.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={servicio.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  <FaWhatsapp className="text-xl" />
                  Solicitar reparación
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Proceso de Reparación */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestro Proceso de Reparación</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {icon: "1", title: "Diagnóstico", desc: "Evaluamos el problema con equipos especializados"},
              {icon: "2", title: "Presupuesto", desc: "Te enviamos un presupuesto detallado sin compromiso"},
              {icon: "3", title: "Reparación", desc: "Nuestros técnicos realizan la reparación con componentes de calidad"},
              {icon: "4", title: "Entrega", desc: "Probamos el equipo contigo y garantizamos el servicio"}
            ].map((paso, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {paso.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{paso.title}</h3>
                <p className="text-gray-600">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Garantía Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-700 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Garantía en Todas Nuestras Reparaciones</h2>
            <p className="text-xl mb-6">
              Confía en nuestro servicio técnico con garantía de 3 meses en todas las reparaciones
            </p>
            <div className="inline-flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 px-6 py-3 rounded-full">Técnicos certificados</div>
              <div className="bg-white/20 px-6 py-3 rounded-full">Repuestos originales</div>
              <div className="bg-white/20 px-6 py-3 rounded-full">Servicio rápido</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoporteTecnico;