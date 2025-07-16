import React from "react";
import { FaSearch, FaShoppingCart, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Header = ({ cartItems = [], eliminarDelCarrito }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef();
  const location = useLocation();
  const currentPath = location.pathname;
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cierra el dropdown si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        !event.target.closest("button svg")
      ) {
        setCartOpen(false);
      }
      if (isMobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const totalCarrito = cartItems.reduce((total, item) => {
    const precioNumerico = parseFloat(item.precio);
    return total + (isNaN(precioNumerico) ? 0 : precioNumerico);
  }, 0);

  const manejarBusqueda = (e) => {
    e.preventDefault();
    if (busqueda.trim()) {
      navigate(`/buscar?term=${encodeURIComponent(busqueda.trim())}`);
      setDropdownOpen(false);
      setCartOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      {/* Parte superior - Desktop */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/logo.png"
              alt="CompuMarket Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Barra de búsqueda */}
        <form
          onSubmit={manejarBusqueda}
          className="flex flex-1 mx-6 max-w-2xl rounded-full overflow-hidden border border-gray-300 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-green-500"
        >
          <div className="flex items-center pl-4 pr-2 text-gray-500">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Buscar productos, marcas, categorías..."
            className="w-full py-3 px-2 focus:outline-none"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 px-6 text-white font-semibold transition-colors"
          >
            Buscar
          </button>
        </form>

        {/* Botón de carrito */}
        <div className="relative">
          <button
            className="p-3 rounded-full flex items-center relative group"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <div className="relative">
              <FaShoppingCart className="text-blue-600 text-xl" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
              Carrito
            </span>
          </button>
        </div>
      </div>

      {/* Parte superior - Mobile */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        {/* Logo Mobile */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-blue-800">Compu<span className="text-green-600">Market</span></span>
        </Link>
        
        <div className="flex items-center space-x-4">
          {/* Botón de búsqueda móvil */}
          <button 
            onClick={() => navigate('/buscar')}
            className="p-2"
          >
            <FaSearch className="text-blue-600 text-xl" />
          </button>
          
          {/* Botón de carrito móvil */}
          <button
            className="p-2 relative"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <FaShoppingCart className="text-blue-600 text-xl" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
          
          {/* Botón de menú móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            <div className="w-6 h-0.5 bg-blue-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-blue-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-blue-600"></div>
          </button>
        </div>
      </div>

      {/* Menú inferior - Desktop */}
      <nav className="hidden md:flex justify-center py-2 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-6xl w-full flex justify-between px-4">
          <Link
            to="/"
            className={`${
              currentPath === "/"
                ? "bg-white text-blue-700 shadow-md"
                : "text-white hover:bg-blue-500"
            } px-5 py-2 rounded-md font-medium transition-all duration-300`}
          >
            Inicio
          </Link>
          
          {/* Botón Dropdown de Productos */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`${
                dropdownOpen
                  ? "bg-white text-blue-700 shadow-md"
                  : "text-white hover:bg-blue-500"
              } px-5 py-2 rounded-md font-medium flex items-center transition-all duration-300`}
            >
              Productos {dropdownOpen ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-20 w-[800px] p-4 grid grid-cols-5 gap-4">
                {/* Cómputo */}
                <div>
                  <h3 className="bg-blue-50 text-blue-700 font-bold text-sm px-3 py-2 rounded-md mb-2 border-l-4 border-blue-600">
                    <Link to="/categoria/1" className="hover:underline">Computadoras</Link>
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <Link to="/subcategoria/1" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Computadoras
                      </Link>
                    </li>
                    <li>
                      <Link to="/subcategoria/2" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Teclados/mouses
                      </Link>
                    </li>
                    <li>
                      <Link to="/subcategoria/3" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Monitores
                      </Link>
                    </li>
                    <li>
                      <Link to="/subcategoria/4" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Laptops
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Aparatos eléctricos */}
                <div>
                  <h3 className="bg-blue-50 text-blue-700 font-bold text-sm px-3 py-2 rounded-md mb-2 border-l-4 border-blue-600">
                    <Link to="/categoria/2" className="hover:underline">Aparatos Electronicos</Link>
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <Link to="/subcategoria/5" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Licuadoras
                      </Link>
                    </li>
                    <li>
                      <Link to="/subcategoria/6" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        TV
                      </Link>
                    </li>
                    <li>
                      <Link to="/subcategoria/7" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Parlantes
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Celulares */}
                <div>
                  <h3 className="bg-blue-50 text-blue-700 font-bold text-sm px-3 py-2 rounded-md mb-2 border-l-4 border-blue-600">
                    <Link to="/categoria/3" className="hover:underline">Celulares</Link>
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <Link to="/subcategoria/8" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Equipos
                      </Link>
                    </li>
                    <li>
                      <Link to="/subcategoria/9" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Carcasas
                      </Link>
                    </li>
                    <li>
                      <Link to="/subcategoria/10" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Cargadores
                      </Link>
                    </li>
                    <li>
                      <Link to="/subcategoria/11" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Fundas
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Impresoras */}
                <div>
                  <h3 className="bg-blue-50 text-blue-700 font-bold text-sm px-3 py-2 rounded-md mb-2 border-l-4 border-blue-600">
                    <Link to="/categoria/4" className="hover:underline">Impresoras</Link>
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <Link to="/subcategoria/12" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Modelos
                      </Link>
                    </li>
                    <li>
                      <Link to="/subcategoria/13" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Tintas
                      </Link>
                    </li>
                    <li>
                      <Link to="/subcategoria/14" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Accesorios
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Varios */}
                <div>
                  <h3 className="bg-blue-50 text-blue-700 font-bold text-sm px-3 py-2 rounded-md mb-2 border-l-4 border-blue-600">
                    <Link to="/categoria/5" className="hover:underline">Varios</Link>
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <Link to="/subcategoria/15" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Accesorios Diversos
                      </Link>
                    </li>
                    <li>
                      <Link to="/subcategoria/16" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Baterías y Pilas
                      </Link>
                    </li>
                    <li>
                      <Link to="/subcategoria/17" className="text-sm text-gray-700 hover:text-green-600 hover:underline block py-1 px-2 hover:bg-blue-50 rounded">
                        Iluminación
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/soporte-tecnico"
            className={`${
              currentPath === "/soporte-tecnico"
                ? "bg-white text-blue-700 shadow-md"
                : "text-white hover:bg-blue-500"
            } px-5 py-2 rounded-md font-medium transition-all duration-300`}
          >
            Soporte técnico
          </Link>
          <Link
            to="/ofertas"
            className={`${
              currentPath === "/ofertas"
                ? "bg-white text-blue-700 shadow-md"
                : "text-white hover:bg-blue-500"
            } px-5 py-2 rounded-md font-medium transition-all duration-300`}
          >
            Ofertas
          </Link>
          <Link
            to="/nosotros"
            className={`${
              currentPath === "/nosotros"
                ? "bg-white text-blue-700 shadow-md"
                : "text-white hover:bg-blue-500"
            } px-5 py-2 rounded-md font-medium transition-all duration-300`}
          >
            Nosotros
          </Link>
        </div>
      </nav>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden mobile-menu-container fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-4/5 bg-white shadow-lg p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-blue-800">Menú</h2>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            
            {/* Barra de búsqueda móvil */}
            <form
              onSubmit={manejarBusqueda}
              className="flex rounded-full overflow-hidden border border-gray-300 mb-6"
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
                className="bg-green-600 px-4 text-white"
              >
                Buscar
              </button>
            </form>
            
            {/* Enlaces móviles */}
            <div className="space-y-2">
              <Link
                to="/"
                className={`${
                  currentPath === "/" ? "bg-blue-100 text-blue-700" : "text-gray-700"
                } block px-4 py-3 rounded-lg font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full text-left px-4 py-3 rounded-lg font-medium text-gray-700 flex justify-between items-center"
              >
                <span>Productos</span>
                {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {dropdownOpen && (
                <div className="ml-4 bg-gray-50 p-3 rounded-lg">
                  <Link
                    to="/categoria/1"
                    className="block py-2 px-3 text-gray-700 hover:bg-blue-100 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Computadoras
                  </Link>
                  <Link
                    to="/categoria/2"
                    className="block py-2 px-3 text-gray-700 hover:bg-blue-100 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Aparatos Electronicos
                  </Link>
                  <Link
                    to="/categoria/3"
                    className="block py-2 px-3 text-gray-700 hover:bg-blue-100 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Celulares
                  </Link>
                  <Link
                    to="/categoria/4"
                    className="block py-2 px-3 text-gray-700 hover:bg-blue-100 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Impresoras
                  </Link>
                  <Link
                    to="/categoria/5"
                    className="block py-2 px-3 text-gray-700 hover:bg-blue-100 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Varios
                  </Link>
                </div>
              )}
              
              <Link
                to="/soporte-tecnico"
                className={`${
                  currentPath === "/soporte-tecnico" ? "bg-blue-100 text-blue-700" : "text-gray-700"
                } block px-4 py-3 rounded-lg font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Soporte técnico
              </Link>
              
              <Link
                to="/ofertas"
                className={`${
                  currentPath === "/ofertas" ? "bg-blue-100 text-blue-700" : "text-gray-700"
                } block px-4 py-3 rounded-lg font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ofertas
              </Link>
              
              <Link
                to="/nosotros"
                className={`${
                  currentPath === "/nosotros" ? "bg-blue-100 text-blue-700" : "text-gray-700"
                } block px-4 py-3 rounded-lg font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Panel lateral del carrito */}
      {cartOpen && (
        <div ref={cartRef} className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
          {/* Cabecera */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Carrito de compras</h2>
            <button
              onClick={() => setCartOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Lista de productos - Contenedor scrollable */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <FaShoppingCart className="text-gray-300 text-5xl mb-4" />
                <p className="text-gray-500 text-lg font-medium">Tu carrito está vacío</p>
                <p className="text-gray-400 mt-2">
                  Agrega productos desde nuestro catálogo
                </p>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 py-4 border-b border-gray-100"
                >
                  {/* Imagen */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img
                      src={item.imagenes[0] || "/no-image.jpg"}
                      alt={item.nombre}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  {/* Contenido Textual */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 truncate">
                      {item.nombre}
                    </p>
                    <p className="text-lg font-bold text-green-600">S/ {item.precio}</p>
                  </div>

                  {/* Botón Eliminar */}
                  <button
                    onClick={() => eliminarDelCarrito(item.idCarrito)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Sección inferior fija */}
          <div className="border-t border-gray-200 bg-gray-50 p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-gray-700">Total:</span>
              <span className="text-xl font-bold text-green-600">S/ {totalCarrito.toFixed(2)}</span>
            </div>
            <Link to="/carrito">
              <button 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition-colors"
                onClick={() => setCartOpen(false)}
              >
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