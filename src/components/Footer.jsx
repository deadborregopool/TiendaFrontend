import React from "react";
import { FaGoogle, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-blue-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-800 to-green-800 py-8 px-4">
        
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Media */}
          <div className="md:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full">
              <img
                src="/logoBg.png"
                alt="CompuMarket Logo"
                className="h-16 object-contain mb-6 mx-auto md:mx-0"
              />
              <p className="text-blue-100 mb-6">
                Tu tienda confiable de tecnología con los mejores productos y servicios técnicos.
              </p>
              
              <h3 className="font-bold text-lg mb-4">Síguenos:</h3>
              <div className="flex space-x-4 mb-4">
                <a href="https://www.google.com" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all">
                  <FaGoogle className="text-xl hover:text-yellow-400" />
                </a>
                <a href="https://www.facebook.com" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all">
                  <FaFacebookF className="text-xl hover:text-blue-400" />
                </a>
                <a href="https://www.instagram.com" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all">
                  <FaInstagram className="text-xl hover:text-pink-400" />
                </a>
              </div>
              
              <div className="flex text-sm text-blue-100 justify-center md:justify-start">
                <span className="mr-4">Google</span>
                <span className="mr-4">Facebook</span>
                <span>Instagram</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full">
              <h3 className="font-bold text-lg mb-4">Navegación</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/" 
                    className="flex items-center hover:text-green-300 transition-colors group"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:animate-pulse"></span>
                    Inicio
                  </a>
                </li>
                <li>
                  <a 
                    href="/soporte-tecnico" 
                    className="flex items-center hover:text-green-300 transition-colors group"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:animate-pulse"></span>
                    Soporte Tecnico
                  </a>
                </li>
                <li>
                  <a 
                    href="/ofertas" 
                    className="flex items-center hover:text-green-300 transition-colors group"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:animate-pulse"></span>
                    Ofertas
                  </a>
                </li>
                <li>
                  <a 
                    href="/nosotros" 
                    className="flex items-center hover:text-green-300 transition-colors group"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:animate-pulse"></span>
                    Sobre Nosotros
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full">
              <h3 className="font-bold text-lg mb-4">Contacto</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-blue-700 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold">Dirección:</p>
                    <p className="text-blue-100">Av. Atahualpa, Casa Grande 13761</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-700 p-3 rounded-full mr-4">
                    <FaPhoneAlt className="text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold">Teléfono:</p>
                    <p className="text-blue-100">044-433399</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-700 p-3 rounded-full mr-4">
                    <FaHome className="text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold">Horario:</p>
                    <p className="text-blue-100">Lun-Sáb: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="font-bold mb-3">Ubícanos:</p>
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-blue-700">
                  <iframe
                    title="Google Map"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%&height=200&hl=es&q=Av.+Atahualpa,+Casa+Grande+13761+(Ubicación)&ie=UTF8&t=&z=17&iwloc=B&output=embed"
                    style={{ border: 0 }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} CompuMarket. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="/politica-privacidad" className="text-blue-200 hover:text-white text-sm mr-4">
                Política de Privacidad
              </a>
              <a href="/terminos-servicio" className="text-blue-200 hover:text-white text-sm mr-4">
                Términos de Servicio
              </a>
              <a href="/preguntas-frecuentes" className="text-blue-200 hover:text-white text-sm">
                Preguntas Frecuentes
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;