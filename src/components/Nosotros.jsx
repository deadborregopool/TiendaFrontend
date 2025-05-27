import React from "react";

const Nosotros = () => {
  return (
    <section className="px-[5%] py-10 bg-white">
      <h2 className="text-4xl font-bold text-green-600 text-center mb-8">Nosotros</h2>

      {/* ¿Quiénes Somos? */}
      <div className="mb-8">
        <h3 className="text-green-700 text-xl font-semibold mb-2">¿Quiénes Somos?</h3>
        <p className="text-sm text-justify leading-relaxed">
          En CompuMarket, nos apasiona la tecnología y estamos comprometidos con ofrecer productos de calidad a precios accesibles.
          Desde nuestra fundación, hemos trabajado para convertirnos en una tienda confiable, brindando a nuestros clientes una experiencia de compra segura y personalizada.
          Nuestro catálogo incluye las últimas innovaciones en computadoras, laptops, accesorios y más, asegurando que cada cliente encuentre la mejor opción según sus necesidades.
        </p>
      </div>

      {/* Misión y Visión */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Misión */}
        <div>
          <h3 className="text-green-600 text-lg font-semibold mb-2">Nuestra Misión</h3>
          <p className="text-sm text-justify">
            Nuestra misión es acercar la tecnología a todas las personas, ofreciendo productos de alto rendimiento con precios competitivos y un servicio al cliente excepcional.
            Creemos que la tecnología debe ser accesible para todos, ya sea para el hogar, el trabajo o el estudio.
          </p>
        </div>

        {/* Visión */}
        <div>
          <h3 className="text-green-600 text-lg font-semibold mb-2">Nuestra Visión</h3>
          <p className="text-sm text-justify">
            Aspiramos a ser la tienda de tecnología líder en el mercado, destacándonos no solo por nuestra variedad de productos, sino también por nuestra atención al cliente y confianza.
            Nos esforzamos en estar siempre a la vanguardia, innovando y expandiéndonos para llegar a más clientes con soluciones tecnológicas eficientes y seguras.
          </p>
        </div>
      </div>

      {/* Contacto y ubicación */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Información de contacto */}
        <div className="bg-gray-100 p-4 text-center text-sm">
          <h4 className="text-blue-600 font-bold mb-2">Contacto y Ubicación</h4>
          <p>📍 Dirección: Urb. San Isidro, Mza "S" Lote N°11 - Tercera etapa</p>
          <p>📞 Teléfono: +51 999 999 999</p>
          <p>📧 Correo: contacto@compumarket.com</p>
          <h5 className="text-blue-600 font-bold mt-4">🕒 Horarios de Atención:</h5>
          <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
          <p>Sábados: 9:00 AM - 5:00 PM</p>
        </div>

        {/* Mapa */}
        <div>
          <h4 className="text-blue-600 font-bold text-center mb-2">Ubícanos en:</h4>
          <iframe
            className="w-full h-52"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6278.760097234924!2d-79.01362520832873!3d-8.107279867738745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d9000000001%3A0x26d3e2047e8413b9!2sCompumarket%20Corporation!5e0!3m2!1ses-419!2spe!4v1715998552059!5m2!1ses-419!2spe"
            loading="lazy"
          ></iframe>
        </div>

        {/* Imagen del local */}
        <div>
          <h4 className="text-blue-600 font-bold text-center mb-2">Nuestro Local</h4>
          <img src="/local.jpg" alt="Local de CompuMarket" className="w-full h-52 object-cover rounded-md shadow" />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
