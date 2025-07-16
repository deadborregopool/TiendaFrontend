import React from "react";

const Nosotros = () => {
  return (
    <section className="px-[5%] py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Encabezado con efecto visual tecnológico */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4 relative z-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            Tecnología que Transforma tu Vida
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Especialistas en electrónica, computación y electrodomésticos para tu hogar y oficina
        </p>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      {/* Sección Quiénes Somos con enfoque en tecnología */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div className="relative">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
          <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <div>
                <p className="font-bold text-lg">+5,000</p>
                <p className="text-sm">Productos en stock</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center mb-6">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-700">¿Quiénes Somos?</h3>
          </div>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            En CompuMarket, somos tu destino definitivo para tecnología y electrodomésticos. Desde computadoras de última generación hasta los electrodomésticos más innovadores para tu hogar, ofrecemos productos que combinan calidad, rendimiento y diseño.
          </p>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Especializados en el mundo digital, nuestro catálogo incluye desde los componentes más avanzados para gamers hasta electrodomésticos inteligentes que simplifican tu vida diaria. Cada producto es cuidadosamente seleccionado para garantizar la mejor experiencia a nuestros clientes.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Tecnología de vanguardia</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Electrodomésticos inteligentes</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Soporte técnico especializado</span>
          </div>
        </div>
      </div>

      {/* Áreas de especialización */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-green-700 text-center mb-10">Nuestras Especialidades</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {/* Computación */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center transition-transform hover:scale-105">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">Computación</h4>
            <p className="text-gray-600 text-sm">
              Laptops, PCs de escritorio, componentes, monitores y accesorios para gamers y profesionales
            </p>
          </div>
          
          {/* Periféricos */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center transition-transform hover:scale-105">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">Periféricos</h4>
            <p className="text-gray-600 text-sm">
              Teclados, mouses, headsets, impresoras y todo lo necesario para tu setup ideal
            </p>
          </div>
          
          {/* Electrónica */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center transition-transform hover:scale-105">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">Electrónica</h4>
            <p className="text-gray-600 text-sm">
              Smartphones, tablets, wearables y dispositivos inteligentes para mantenerte conectado
            </p>
          </div>
          
          {/* Electrodomésticos */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center transition-transform hover:scale-105">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">Electrodomésticos</h4>
            <p className="text-gray-600 text-sm">
              Televisores, parlantes, refrigeradoras y más para un hogar inteligente y eficiente
            </p>
          </div>
        </div>
      </div>

      {/* Misión y Visión con iconos tecnológicos */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {/* Misión */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-700">Nuestra Misión</h3>
          </div>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Facilitar el acceso a tecnología de calidad que mejore la vida diaria de las personas. Buscamos ser el puente entre las innovaciones tecnológicas y nuestros clientes, ofreciendo productos confiables con asesoramiento experto.
          </p>
          <div className="mt-6">
            <div className="flex items-start mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Tecnología accesible para todos los peruanos</p>
            </div>
            <div className="flex items-start mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Asesoramiento técnico especializado</p>
            </div>
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Garantía y soporte post-venta confiable</p>
            </div>
          </div>
        </div>

        {/* Visión */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple-700">Nuestra Visión</h3>
          </div>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Liderar la revolución tecnológica en Perú, siendo reconocidos como la tienda de referencia para soluciones digitales y electrodomésticos inteligentes. Aspiramos a crear comunidades tecnológicas que impulsen la innovación en el país.
          </p>
          <div className="mt-6 flex">
            <div className="mr-8">
              <p className="text-3xl font-bold text-green-700">2025</p>
              <p className="text-gray-600">Tienda Casa Grande</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-700">2030</p>
              <p className="text-gray-600">Líderes en innovación tecnológica</p>
            </div>
          </div>
          <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-100">
            <p className="text-gray-700 italic">
              "La tecnología bien aplicada simplifica la vida y potencia el potencial humano"
            </p>
          </div>
        </div>
      </div>

      {/* Servicios destacados */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-green-700 text-center mb-10">Nuestros Servicios</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h4 className="font-bold text-lg text-gray-800">Garantía Extendida</h4>
            </div>
            <p className="text-gray-600">
              Protege tus dispositivos con nuestras opciones de garantía extendida que cubren fallas técnicas y daños accidentales.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h4 className="font-bold text-lg text-gray-800">Soporte Técnico</h4>
            </div>
            <p className="text-gray-600">
              Expertos disponibles para resolver problemas técnicos, instalaciones y configuraciones avanzadas de tus dispositivos.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="font-bold text-lg text-gray-800">Entrega e Instalación</h4>
            </div>
            <p className="text-gray-600">
              Servicio de entrega a domicilio a nivel local con instalación profesional para electrodomésticos grandes y sistemas complejos.
            </p>
          </div>
        </div>
      </div>

      {/* Contacto y ubicación con enfoque tecnológico */}
      <div className="bg-gradient-to-r from-green-700 to-blue-700 rounded-2xl overflow-hidden shadow-xl">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Información de contacto */}
          <div className="p-8 text-white">
            <h3 className="text-3xl font-bold mb-6">Contáctanos</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-300 mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h4 className="font-bold text-green-200">Ubicación</h4>
                  <p>Urb. San Isidro, Mza "S" Lote N°11 - Tercera etapa</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-300 mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h4 className="font-bold text-green-200">Teléfonos</h4>
                  <p>+51 999 999 999</p>
                  <p>+51 988 888 888</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-300 mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h4 className="font-bold text-green-200">Correo Electrónico</h4>
                  <p>contacto@compumarket.com</p>
                  <p>soporte@compumarket.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-300 mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-bold text-green-200">Horarios de Atención</h4>
                  <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                  <p>Sábados: 9:00 AM - 5:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <a href="#" className="bg-white text-green-700 p-3 rounded-full hover:bg-green-100 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="bg-white text-green-700 p-3 rounded-full hover:bg-green-100 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
              <a href="#" className="bg-white text-green-700 p-3 rounded-full hover:bg-green-100 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Mapa y foto del local */}
          <div className="bg-white p-6">
            <div className="rounded-xl overflow-hidden shadow-lg h-full">
              <div className="h-1/2">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6278.760097234924!2d-79.01362520832873!3d-8.107279867738745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d9000000001%3A0x26d3e2047e8413b9!2sCompumarket%20Corporation!5e0!3m2!1ses-419!2spe!4v1715998552059!5m2!1ses-419!2spe"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="h-1/2 flex">
                <div className="bg-gray-200 border-2 border-dashed w-1/2" />
                <div className="bg-gray-300 border-2 border-dashed w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Nosotros;