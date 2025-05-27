import React from "react";
import { FaGoogle, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-blue-900 text-white px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Redes sociales */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Redes Sociales:</h3>
          <div className="flex items-center space-x-4 mb-4">
            <a href="#"><FaGoogle className="text-3xl hover:text-yellow-400" /></a>
            <a href="#"><FaFacebookF className="text-3xl hover:text-blue-500" /></a>
            <a href="#"><FaInstagram className="text-3xl hover:text-pink-400" /></a>
          </div>
          <p className="text-sm">Google &nbsp; Facebook &nbsp; Instagram</p>
          <img
            src="/logoBg.png"
            alt="CompuMarket Logo"
            className="mt-6 h-16 object-contain"
          />
        </div>

        {/* Columna 2: Navegación */}
        <div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">• Inicio</a></li>
            <li><a href="#" className="hover:underline">• Productos/Servicios Técnicos</a></li>
            <li><a href="#" className="hover:underline">• Ofertas</a></li>
            <li><a href="#" className="hover:underline">• Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="text-sm">
          <p><span className="font-bold">Dirección:</span> Urb. San Isidro Mza “S” Lote N°11 - 1era etapa</p>
          <p className="mt-2"><span className="font-bold">Teléfono:</span> 044-22155</p>
          <p className="mt-4 font-bold">Ubícanos :</p>
          <div className="mapouter" style={{ position: "relative", textAlign: "right", width: "100%", height: 224 }}>
  <div className="gmap_canvas" style={{ overflow: "hidden", background: "none!important", width: "100%", height: 224 }}>
    <iframe
      className="gmap_iframe"
      title="Google Map"
      width="100%"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      src="https://maps.google.com/maps?width=512&amp;height=224&amp;hl=en&amp;q=2880 Broadway, New York&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      style={{ height: "224px!important" }}
    ></iframe>
    <a href="https://embed-googlemap.com">embed-googlemap.com</a>
  </div>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
