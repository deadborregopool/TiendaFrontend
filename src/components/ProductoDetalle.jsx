// src/components/ProductoDetalle.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductoCard from "./ProductoCard";

const ProductoDetalle = ({ agregarAlCarrito }) => {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);
  const [recomendados, setRecomendados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagenSeleccionada, setImagenSeleccionada] = useState("");

  useEffect(() => {
    fetch(`https://tienda-kxep.onrender.com/api/productos/${idProducto}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
        setImagenSeleccionada(data.imagenes?.[0] ?? "/no-image.jpg");
        return fetch(`https://tienda-kxep.onrender.com/api/subcategorias/${data.subcategoria_id}/recomendados`);
      })
      .then((res) => res.json())
      .then((data) => setRecomendados(data.productos || []))
      .catch((error) => console.error("Error al cargar el producto:", error))
      .finally(() => setLoading(false));
  }, [idProducto]);

  if (loading) return <p className="text-center py-10">Cargando producto...</p>;
  if (!producto) return <p className="text-center py-10 text-red-500">Producto no encontrado.</p>;

  return (
    <div className="p-6">
      {/* Vista del producto */}
      <div className="flex flex-col lg:flex-row bg-gray-100 p-6 rounded-xl shadow-xl">
        {/* Imágenes */}
        <div className="lg:w-1/2 flex flex-col items-center">
          {/* Imagen principal */}
          <div className="w-full h-80 mb-4">
            <img
              src={imagenSeleccionada}
              alt={producto.nombre}
              className="w-full h-full object-contain rounded"
              onError={(e) => (e.target.src = "/no-image.jpg")}
            />
          </div>

          {/* Swiper con miniaturas */}
          <div className="relative w-full">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-button-next-mini',
                prevEl: '.swiper-button-prev-mini',
              }}
              spaceBetween={16}
              slidesPerView={3}
              breakpoints={{
                320: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
              }}
              className="w-full"
            >
              {(producto.imagenes || ["/no-image.jpg"]).map((img, index) => (
                <SwiperSlide key={index} className="cursor-pointer">
                  <img
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-20 object-contain border rounded hover:border-blue-500"
                    onClick={() => setImagenSeleccionada(img)}
                    onError={(e) => (e.target.src = "/no-image.jpg")}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Botones de navegación externos */}
            <button className="swiper-button-prev-mini absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow">
              &#10094;
            </button>
            <button className="swiper-button-next-mini absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow">
              &#10095;
            </button>
          </div>
        </div>

        {/* Información del producto */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-10">
          <h1 className="text-xl font-bold uppercase mb-4">{producto.nombre}</h1>
          <ul className="text-sm space-y-1 mb-4">

            <li><strong>Stock:</strong> {producto.stock}</li>
            <li><strong>Estado:</strong> {producto.estado}</li>
            <li><strong>Orientado a:</strong> {producto.orientado_a}</li>
          </ul>
          <div className="text-sm mb-6">
            <strong>Descripción:</strong>
            <p>{producto.descripcion}</p>
          </div>
          <p className="text-lg font-semibold text-green-700 mb-2">
            Precio: S/ {parseFloat(producto.precio).toFixed(2)}
          </p>

          <p className="text-sm italic text-blue-700 mb-2">Consultas de Stock con el asesor mediante carrito de compras</p>
          <button
            onClick={() => agregarAlCarrito(producto)}
            className="bg-green-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-700"
          >
            🛒 Agregar al carrito
          </button>
        </div>
      </div>

      {/* Recomendados */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Productos Relacionados</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {recomendados.map((prod) => (
            <SwiperSlide key={prod.id} className="p-4">
              <ProductoCard producto={prod} agregarAlCarrito={agregarAlCarrito} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductoDetalle;
