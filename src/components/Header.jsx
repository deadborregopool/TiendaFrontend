import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Header = ({ cartItems = [], eliminarDelCarrito }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef();
  const location = useLocation(); // Obtiene la ruta actual
  const currentPath = location.pathname; // Ej: "/soporte-tecnico"

  // Cierra el dropdown si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        !event.target.closest("button svg") // evita que se cierre si haces clic en el ícono del carrito
      ) {
        setCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalCarrito = cartItems.reduce((total, item) => {
    const precioNumerico = parseFloat(item.precio);
    return total + (isNaN(precioNumerico) ? 0 : precioNumerico);
  }, 0);
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const manejarBusqueda = (e) => {
    e.preventDefault(); // Evita que recargue la página
    if (busqueda.trim()) {
      navigate(`/buscar?term=${encodeURIComponent(busqueda.trim())}`);
      setDropdownOpen(false); // Opcional: cierra dropdowns si estuvieran abiertos
      setCartOpen(false);
    }
  };


  return (
    <header className="w-full shadow">
      {/* Parte superior */}
      <div className="flex items-center justify-between px-6 py-3 bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // Asegúrate que esté en la carpeta "public"
            alt="CompuMarket Logo"
            className="h-[93px] w-[200px] object-contain"
          />

        </div>

        {/* Barra de búsqueda */}
        <form
          onSubmit={manejarBusqueda}
          className="flex flex-1 mx-6 rounded-full overflow-hidden border border-green-300"
        >
          <div className="flex items-center pl-4 pr-2 text-gray-500">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full py-2 px-2 focus:outline-none"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button
            type="submit"
            className="bg-lime-500 hover:bg-lime-600 px-6 text-white font-semibold rounded-r-full"
          >
            Buscar
          </button>
        </form>

        {/* Botón de carrito */}
        <button
          className="bg-gray-100 p-3 rounded-lg shadow-sm ml-4"
          onClick={() => setCartOpen(!cartOpen)}
        >
          <FaShoppingCart className="text-blue-600 text-xl" />
        </button>


      </div>

      {/* Menú inferior */}
      <nav className="flex justify-center space-x-10 py-2 bg-white border-t">
        <Link
          to="/"
          className={`${currentPath === "/" ? "bg-blue-600" : "bg-green-600"
            } text-white px-5 py-1.5 rounded-full font-semibold`}
        >
          Inicio
        </Link>
        {/*Boton Drop*/}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-green-600 text-white px-5 py-1.5 rounded-full font-semibold"
          >
            Productos ▼
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg z-20 w-[800px] p-4 grid grid-cols-5 gap-4">
              {/* Cómputo */}
              <div>
                <h3 className="bg-green-600 text-white font-bold text-sm px-2 py-1 rounded-t">
                  <Link to="/categoria/1" className="hover:underline cursor-pointer">Computadoras</Link>
                </h3>
                <ul className="bg-red-100 px-2 py-1 text-sm">
                  <li className="hover:underline cursor-pointer">
                    <Link to="/subcategoria/1" className="hover:underline cursor-pointer">
                      Computadoras
                    </Link>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    <Link to="/subcategoria/2" className="hover:underline cursor-pointer">
                      Teclados/mouses
                    </Link>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    <Link to="/subcategoria/3" className="hover:underline cursor-pointer">
                      Monitores
                    </Link>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    <Link to="/subcategoria/4" className="hover:underline cursor-pointer">
                      Laptops
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Aparatos eléctricos */}
              <div>
                <h3 className="bg-green-600 text-white font-bold text-sm px-2 py-1 rounded-t">
                  <Link to="/categoria/2" className="hover:underline cursor-pointer">Aparatos Electronicos</Link>
                </h3>
                <ul className="bg-red-100 px-2 py-1 text-sm">
                  <li className="hover:underline cursor-pointer">
                    <Link to="/subcategoria/5" className="hover:underline cursor-pointer">
                      Licuadoras
                    </Link>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    <Link to="/subcategoria/6" className="hover:underline cursor-pointer">
                      Tv
                    </Link>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    <Link to="/subcategoria/7" className="hover:underline cursor-pointer">
                      Parlantes
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Celulares */}
              <div>
                <h3 className="bg-green-600 text-white font-bold text-sm px-2 py-1 rounded-t">
                  <Link to="/categoria/3" className="hover:underline cursor-pointer">Celulares</Link>
                </h3>
                <ul className="bg-red-100 px-2 py-1 text-sm">
                  <li className="hover:underline cursor-pointer">Carcasas</li>
                  <li className="hover:underline cursor-pointer">Equipos</li>
                  <li className="hover:underline cursor-pointer">Monitores</li>
                  <li className="hover:underline cursor-pointer">Laptos</li>
                </ul>
              </div>

              {/* Impresoras */}
              <div>
                <h3 className="bg-green-600 text-white font-bold text-sm px-2 py-1 rounded-t">
                  <Link to="/categoria/4" className="hover:underline cursor-pointer">Impresoras</Link>
                </h3>
                <ul className="bg-red-100 px-2 py-1 text-sm">
                  <li className="hover:underline cursor-pointer">Computadoras</li>
                  <li className="hover:underline cursor-pointer">Teclados/mouses</li>
                  <li className="hover:underline cursor-pointer">Monitores</li>
                  <li className="hover:underline cursor-pointer">Laptos</li>
                </ul>
              </div>

              {/* Varios */}
              <div>
                <h3 className="bg-green-600 text-white font-bold text-sm px-2 py-1 rounded-t">
                  <Link to="/categoria/5" className="hover:underline cursor-pointer">Varios</Link>
                </h3>
                <ul className="bg-red-100 px-2 py-1 text-sm">
                  <li className="hover:underline cursor-pointer">Computadoras</li>
                  <li className="hover:underline cursor-pointer">Teclados/mouses</li>
                  <li className="hover:underline cursor-pointer">Monitores</li>
                  <li className="hover:underline cursor-pointer">Laptos</li>
                </ul>
              </div>
            </div>
          )}
        </div>


        {/*Boton Drop*/}
        <Link
          to="/soporte-tecnico"
          className={`${currentPath === "/soporte-tecnico" ? "bg-blue-600" : "bg-green-600"
            } text-white px-5 py-1.5 rounded-full font-semibold`}
        >
          Soporte técnico
        </Link>
        <button className="bg-green-600 text-white px-5 py-1.5 rounded-full font-semibold">
          Ofertas
        </button>
        <Link
          to="/nosotros"
          className={`${currentPath === "/nosotros" ? "bg-blue-600" : "bg-green-600"
            } text-white px-5 py-1.5 rounded-full font-semibold`}
        >
          Nosotros
        </Link>
      </nav>
      {/* Panel lateral del carrito */}
      {cartOpen && (
        <div ref={cartRef} className="fixed top-0 right-0 w-[350px] h-full bg-white shadow-lg z-50 p-4 border-l border-gray-200 flex flex-col">
          {/* Cabecera */}
          <h2 className="text-white text-center bg-blue-600 py-2 rounded font-bold mb-4">
            Carrito de compras
          </h2>

          {/* Lista de productos - Contenedor scrollable */}
          <div className="flex-1 overflow-y-auto space-y-3">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-2 bg-gray-100 p-2 rounded shadow"
              >
                {/* Imagen */}
                <div className="flex-shrink-0 w-16 h-16">
                  <img
                    src={item.imagenes[0] || "/no-image.jpg"}
                    alt={item.nombre}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Contenido Textual */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm break-words whitespace-normal">
                    {item.nombre}
                  </p>
                  <p className="font-bold text-lg mt-1">S/ {item.precio}</p>
                </div>

                {/* Botón Eliminar */}
                <button
                  onClick={() => eliminarDelCarrito(item.idCarrito)}
                  className="self-start text-blue-600 hover:text-red-500 text-xl flex-shrink-0"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          {/* Sección inferior fija */}
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="text-right text-lg font-bold mb-4">
              Total del carrito: <span className="text-black">S/ {totalCarrito.toFixed(2)}</span>
            </div>
            <Link to="/carrito">
              <button className="w-full bg-lime-500 text-white font-bold py-3 rounded-lg hover:bg-lime-600 transition-colors">
                Ver Carrito
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};


export default Header;
