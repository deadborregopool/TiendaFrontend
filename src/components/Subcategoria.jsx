// src/components/Subcategoria.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductoCard from "./ProductoCard";

const Subcategoria = ({ agregarAlCarrito }) => {
  const { idSubcategoria } = useParams();
  const [allProductos, setAllProductos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [subcategoriaNombre, setSubcategoriaNombre] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [minStock, setMinStock] = useState("");

  useEffect(() => {
    cargarProductos();
  }, [idSubcategoria]);

  const cargarProductos = () => {
    setLoading(true);
    fetch(`https://tienda-kxep.onrender.com/api/subcategorias/${idSubcategoria}/productos`)
      .then((res) => res.json())
      .then((data) => {
        const productosData = data.productos || [];
        setAllProductos(productosData);
        setProductos(productosData);
        setSubcategoriaNombre(data.subcategoria || "");
        setLoading(false);
        setActiveFilter("all");
        setSortOption("default");
        setMinStock("");
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setLoading(false);
      });
  };

  // Filtrar productos por precio usando la API
  const filtrarPorPrecio = (min, max) => {
    setLoading(true);
    fetch(`https://tienda-kxep.onrender.com/api/productos/filtrar/precio?min=${min}&max=${max}`)
      .then((res) => res.json())
      .then((data) => {
        // Filtrar por subcategoría
        const filtered = data.filter(
          (producto) => producto.subcategoria_id == idSubcategoria
        );
        setProductos(filtered);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al filtrar por precio:", error);
        setLoading(false);
      });
  };

  // Filtrar productos por stock usando la API
  const filtrarPorStock = (stock) => {
    setLoading(true);
    fetch(`https://tienda-kxep.onrender.com/api/productos/filtrar/stock?stock=${stock}`)
      .then((res) => res.json())
      .then((data) => {
        // Filtrar por subcategoría
        const filtered = data.filter(
          (producto) => producto.subcategoria_id == idSubcategoria
        );
        setProductos(filtered);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al filtrar por stock:", error);
        setLoading(false);
      });
  };

  // Manejador para filtros de precio
  const handlePriceFilter = (option) => {
    setMinStock("");
    setActiveFilter(option);
    
    if (option === "low") {
      filtrarPorPrecio(0, 500);
    } else if (option === "medium") {
      filtrarPorPrecio(500, 1500);
    } else if (option === "high") {
      filtrarPorPrecio(1500, 1000000);
    }
  };

  // Manejador para filtro de stock
  const handleStockFilter = () => {
    if (minStock === "") return;
    
    setActiveFilter("stock");
    filtrarPorStock(minStock);
  };

  // Ordenar productos (local)
  const sortProducts = (option) => {
    setSortOption(option);
    const sortedProducts = [...productos];
    
    if (option === "price-asc") {
      sortedProducts.sort((a, b) => a.precio_final - b.precio_final);
    } else if (option === "price-desc") {
      sortedProducts.sort((a, b) => b.precio_final - a.precio_final);
    } else if (option === "name") {
      sortedProducts.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    
    setProductos(sortedProducts);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Encabezado con efecto visual */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
          {subcategoriaNombre || "Cargando..."}
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explora nuestra selección de productos en esta categoría. Encuentra lo que necesitas con la mejor calidad y precio.
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Filtros y ordenamiento */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Panel de filtros */}
        <aside className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Filtros</h2>
            <button 
              onClick={cargarProductos}
              className="text-sm text-blue-600 hover:underline"
            >
              Limpiar filtros
            </button>
          </div>

          {/* Filtro por precio */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Rango de Precio
            </h3>
            <div className="space-y-2">
              <button 
                onClick={() => handlePriceFilter("low")}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeFilter === "low" ? "bg-green-100 text-green-800 border border-green-300" : "hover:bg-gray-100"}`}
              >
                Menos de S/ 500
              </button>
              <button 
                onClick={() => handlePriceFilter("medium")}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeFilter === "medium" ? "bg-green-100 text-green-800 border border-green-300" : "hover:bg-gray-100"}`}
              >
                S/ 500 - S/ 1500
              </button>
              <button 
                onClick={() => handlePriceFilter("high")}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeFilter === "high" ? "bg-green-100 text-green-800 border border-green-300" : "hover:bg-gray-100"}`}
              >
                Más de S/ 1500
              </button>
            </div>
          </div>

          {/* Nuevo Filtro por stock */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              Stock Mínimo
            </h3>
            <div className="flex">
              <input
                type="number"
                min="0"
                value={minStock}
                onChange={(e) => setMinStock(e.target.value)}
                placeholder="Ej: 10"
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleStockFilter}
                className={`bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700 transition-colors ${
                  minStock === "" ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={minStock === ""}
              >
                Aplicar
              </button>
            </div>
          </div>

          {/* Ordenamiento */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
              </svg>
              Ordenar por
            </h3>
            <div className="space-y-2">
              <button 
                onClick={() => sortProducts("default")}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${sortOption === "default" ? "bg-green-100 text-green-800 border border-green-300" : "hover:bg-gray-100"}`}
              >
                Predeterminado
              </button>
              <button 
                onClick={() => sortProducts("price-asc")}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${sortOption === "price-asc" ? "bg-green-100 text-green-800 border border-green-300" : "hover:bg-gray-100"}`}
              >
                Precio: Menor a Mayor
              </button>
              <button 
                onClick={() => sortProducts("price-desc")}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${sortOption === "price-desc" ? "bg-green-100 text-green-800 border border-green-300" : "hover:bg-gray-100"}`}
              >
                Precio: Mayor a Menor
              </button>
              <button 
                onClick={() => sortProducts("name")}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${sortOption === "name" ? "bg-green-100 text-green-800 border border-green-300" : "hover:bg-gray-100"}`}
              >
                Nombre (A-Z)
              </button>
            </div>
          </div>

          {/* Información adicional */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-100">
            <h4 className="font-bold text-green-700 mb-2">¿Necesitas ayuda?</h4>
            <p className="text-sm text-gray-600">
              Nuestros asesores están disponibles para ayudarte a encontrar el producto perfecto.
            </p>
            <button className="mt-3 text-sm text-blue-600 hover:underline">
              Contactar a un asesor
            </button>
          </div>
        </aside>

        {/* Sección de productos */}
        <section className="lg:col-span-3">
          {/* Contador de productos */}
          <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-600">
              {loading ? "Cargando..." : `${productos.length} productos encontrados`}
            </p>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2 hidden md:block">Ordenar:</span>
              <select 
                onChange={(e) => sortProducts(e.target.value)}
                value={sortOption}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="default">Predeterminado</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="name">Nombre (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Estado de carga */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Sin productos */}
          {!loading && productos.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No encontramos productos</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-6">
                No hay productos disponibles con los filtros seleccionados. Intenta con otros criterios.
              </p>
              <button 
                onClick={cargarProductos}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition-colors"
              >
                Ver todos los productos
              </button>
            </div>
          )}

          {/* Lista de productos */}
          {!loading && productos.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {productos.map((producto) => (
                <ProductoCard
                  key={producto.id}
                  producto={producto}
                  agregarAlCarrito={agregarAlCarrito}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Subcategoria;