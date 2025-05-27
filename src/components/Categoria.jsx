// src/components/Categoria.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductoCard from "./ProductoCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Categoria = ({ agregarAlCarrito }) => {
    const { idCategoria } = useParams();
    const [subcategorias, setSubcategorias] = useState([]);
    const [productos, setProductos] = useState([]);
    const [categoriaNombre, setCategoriaNombre] = useState("");
    
    useEffect(() => {
        fetch(`https://tienda-kxep.onrender.com/api/categorias/${idCategoria}/subcategorias-productos`)
            .then((res) => res.json())
            .then((data) => {
                setCategoriaNombre(data.categoria || "");
                setSubcategorias(data.subcategorias || []);
                setProductos(data.productos || []);
            })
            .catch((error) => console.error("Error al cargar categoría:", error));
    }, [idCategoria]);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
                {categoriaNombre || "Cargando categoría..."}
            </h1>

            {subcategorias.map((sub) => {
                const productosFiltrados = productos.filter((p) => p.subcategoria_id === sub.id);

                return (
                    <div key={sub.id} className="mb-10 relative">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">{sub.nombre}</h2>
                            <Link 
                                to={`/subcategoria/${sub.id}`}
                                className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition-colors"
                            >
                                Ver más
                            </Link>
                        </div>

                        {productosFiltrados.length === 0 ? (
                            <p className="text-gray-500 text-center py-4 italic font-medium">
                                Aún no tenemos productos para esta sección
                            </p>
                        ) : (
                            <div className="relative px-4">  {/* Reducimos el padding */}
                                <Swiper
                                    modules={[Navigation]}
                                    navigation={{
                                        nextEl: `.next-${sub.id}`,
                                        prevEl: `.prev-${sub.id}`,
                                    }}
                                    spaceBetween={20}
                                    slidesPerView={1}  // Valor por defecto para móviles
                                    slidesPerGroup={1} // Grupo de 1 para móviles
                                    loop={productosFiltrados.length >= 3} // Solo loop si hay suficientes
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            slidesPerGroup: 1
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            slidesPerGroup: 2
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            slidesPerGroup: 3
                                        }
                                    }}
                                    className="w-full"
                                >
                                    {productosFiltrados.map((producto) => (
                                        <SwiperSlide key={producto.id} className="!h-auto pb-6">
                                            <ProductoCard
                                                producto={producto}
                                                agregarAlCarrito={agregarAlCarrito}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Botones de navegación */}
                                <button className={`prev-${sub.id} absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button className={`next-${sub.id} absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Categoria;