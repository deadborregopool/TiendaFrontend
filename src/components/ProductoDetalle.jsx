// src/components/ProductoDetalle.jsx
import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import ProductoCard from "./ProductoCard";
import { FaWhatsapp, FaCartPlus, FaTruck, FaShieldAlt, FaUndo, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductoDetalle = ({ agregarAlCarrito }) => {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);
  const [recomendados, setRecomendados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [error, setError] = useState(null);
  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    fetch(`https://tienda-kxep.onrender.com/api/productos/${idProducto}`)
      .then(res => {
        if (!res.ok) throw new Error("Producto no encontrado");
        return res.json();
      })
      .then((data) => {
        setProducto(data);
        return fetch(`https://tienda-kxep.onrender.com/api/subcategorias/${data.subcategoria_id}/recomendados`);
      })
      .then(res => res.json())
      .then(data => setRecomendados(data.productos || []))
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [idProducto]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="bg-gray-200 rounded-xl h-80 w-full mb-6"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
          <h3 className="font-bold text-lg mb-2">Error al cargar el producto</h3>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-colors"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

  if (!producto) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded max-w-md mx-auto">
          <h3 className="font-bold text-lg mb-2">Producto no encontrado</h3>
          <p>El producto solicitado no está disponible.</p>
          <Link 
            to="/" 
            className="mt-4 inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  // Calcular ahorro si está en oferta
  const ahorro = producto.en_oferta 
    ? (parseFloat(producto.precio) - parseFloat(producto.precio_final)).toFixed(2)
    : 0;

  const imagenes = producto.imagenes?.length > 0 
    ? producto.imagenes 
    : ["/no-image.jpg"];

  const handlePrev = () => {
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      mainSwiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      mainSwiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Vista del producto */}
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        {/* Galería de imágenes reorganizada */}
        <div className="lg:w-1/2">
          {/* Imagen principal sin botones */}
          <div className="mb-4 rounded-xl overflow-hidden bg-white shadow-lg">
            <Swiper
              ref={mainSwiperRef}
              modules={[Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={10}
              className="h-96"
            >
              {imagenes.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Imagen ${index + 1} de ${producto.nombre}`}
                    className="w-full h-full object-contain"
                    onError={(e) => (e.target.src = "/no-image.jpg")}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* Miniaturas */}
          <div className="mt-4">
            <Swiper
              ref={thumbsSwiperRef}
              modules={[FreeMode, Thumbs]}
              onSwiper={setThumbsSwiper}
              freeMode={true}
              watchSlidesProgress={true}
              spaceBetween={10}
              slidesPerView={4}
              className="thumbnails"
            >
              {imagenes.map((img, index) => (
                <SwiperSlide key={index} className="cursor-pointer">
                  <div className="border-2 border-transparent hover:border-green-500 rounded-lg overflow-hidden transition-all">
                    <img
                      src={img}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-20 object-contain bg-white p-1"
                      onError={(e) => (e.target.src = "/no-image.jpg")}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* Botones de navegación debajo de las miniaturas */}
          <div className="flex justify-center mt-4 gap-4">
            <button 
              onClick={handlePrev}
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors"
            >
              <FaChevronLeft className="text-gray-700" />
            </button>
            <button 
              onClick={handleNext}
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors"
            >
              <FaChevronRight className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Información del producto */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            {/* Encabezado */}
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-2xl font-bold text-gray-800">{producto.nombre}</h1>
              
              {/* Badges */}
              <div className="flex gap-2">
                {producto.en_oferta && (
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    -{producto.porcentaje_descuento}%
                  </span>
                )}
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  producto.stock > 0 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {producto.stock > 0 ? 'Disponible' : 'Agotado'}
                </span>
              </div>
            </div>
            
            {/* Estado y categoría */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium">Estado:</span>
                <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {producto.estado}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium">Categoría:</span>
                <span className="ml-2 bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  {producto.categoria}
                </span>
              </div>
            </div>
            
            {/* Precios */}
            <div className="mb-6">
              {producto.en_oferta ? (
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-600">
                      S/ {parseFloat(producto.precio_final).toFixed(2)}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      S/ {parseFloat(producto.precio).toFixed(2)}
                    </span>
                  </div>
                  <div className="text-green-600 font-medium mt-1">
                    Ahorras: S/ {ahorro} ({producto.porcentaje_descuento}%)
                  </div>
                </div>
              ) : (
                <div className="text-3xl font-bold text-green-600">
                  S/ {parseFloat(producto.precio_final).toFixed(2)}
                </div>
              )}
            </div>
            
            {/* Descripción */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-700 mb-2">Descripción</h3>
              <p className="text-gray-600">{producto.descripcion}</p>
            </div>
            
            {/* Especificaciones */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-medium text-gray-700">Orientado a</h4>
                <p className="text-gray-600">{producto.orientado_a}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Stock</h4>
                <p className="text-gray-600">{producto.stock} unidades</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Subcategoría</h4>
                <p className="text-gray-600">{producto.subcategoria}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">SKU</h4>
                <p className="text-gray-600">{producto.id}</p>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => agregarAlCarrito(producto)}
                disabled={producto.stock === 0}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-colors ${
                  producto.stock === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'
                }`}
              >
                <FaCartPlus className="text-lg" />
                Agregar al carrito
              </button>
              
              <a
                href="https://wa.me/51960936246"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                Consultar por WhatsApp
              </a>
            </div>
            
            {/* Beneficios */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <FaTruck className="text-blue-500 text-xl" />
                <div>
                  <p className="text-xs font-medium">Envío rápido</p>
                  <p className="text-xs text-gray-500">24-48 horas</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-green-500 text-xl" />
                <div>
                  <p className="text-xs font-medium">Garantía</p>
                  <p className="text-xs text-gray-500">3 meses</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaUndo className="text-purple-500 text-xl" />
                <div>
                  <p className="text-xs font-medium">Devoluciones</p>
                  <p className="text-xs text-gray-500">30 días</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500 text-xl" />
                <div>
                  <p className="text-xs font-medium">Calidad</p>
                  <p className="text-xs text-gray-500">Garantizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Productos recomendados - Slider de 3 elementos */}
      {recomendados.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos Relacionados</h2>
          
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.custom-next-recomendados',
                prevEl: '.custom-prev-recomendados',
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {recomendados.map((prod) => (
                <SwiperSlide key={prod.id}>
                  <div className="p-2 h-full">
                    <ProductoCard producto={prod} agregarAlCarrito={agregarAlCarrito} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Botones de navegación personalizados */}
            <button className="custom-prev-recomendados absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
              <FaChevronLeft className="text-gray-700" />
            </button>
            <button className="custom-next-recomendados absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
              <FaChevronRight className="text-gray-700" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductoDetalle;