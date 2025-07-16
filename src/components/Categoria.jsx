// src/components/Categoria.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductoCard from "./ProductoCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Categoria = ({ agregarAlCarrito }) => {
    const { idCategoria } = useParams();
    const [subcategorias, setSubcategorias] = useState([]);
    const [productos, setProductos] = useState([]);
    const [categoriaNombre, setCategoriaNombre] = useState("");
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        fetch(`https://tienda-kxep.onrender.com/api/categorias/${idCategoria}/subcategorias-productos`)
            .then((res) => res.json())
            .then((data) => {
                setCategoriaNombre(data.categoria || "");
                setSubcategorias(data.subcategorias || []);
                setProductos(data.productos || []);
            })
            .catch((error) => console.error("Error al cargar categoría:", error))
            .finally(() => setLoading(false));
    }, [idCategoria]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600">Cargando categoría...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Encabezado con efecto visual */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4">
                    {categoriaNombre}
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Explora nuestra selección de productos en esta categoría. Encuentra lo que necesitas con la mejor calidad y precio.
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Menú de subcategorías */}
            <div className="mb-10">
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {subcategorias.map((sub) => (
                        <a 
                            key={sub.id} 
                            href={`#sub-${sub.id}`}
                            className="px-5 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow hover:border-green-400"
                        >
                            {sub.nombre}
                        </a>
                    ))}
                </div>
                <div className="text-center">
                    <p className="text-sm text-gray-500 italic">
                        Selecciona una subcategoría para ver sus productos destacados
                    </p>
                </div>
            </div>

            {/* Contenido de subcategorías */}
            {subcategorias.map((sub) => {
                const productosFiltrados = productos.filter((p) => p.subcategoria_id === sub.id);

                return (
                    <div 
                        key={sub.id} 
                        id={`sub-${sub.id}`}
                        className="mb-16 bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl shadow-md"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-green-700 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {sub.nombre}
                                </h2>
                                <p className="text-gray-600 mt-1">
                                    Los mejores productos de {sub.nombre.toLowerCase()} para tus necesidades
                                </p>
                            </div>
                            <Link 
                                to={`/subcategoria/${sub.id}`}
                                className="mt-4 md:mt-0 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-all shadow-md flex items-center"
                            >
                                Ver todos
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {productosFiltrados.length === 0 ? (
                            <div className="text-center py-10 bg-white rounded-xl shadow-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-700 mb-2">Aún no tenemos productos</h3>
                                <p className="text-gray-500 max-w-md mx-auto">
                                    Estamos trabajando para agregar productos a esta sección. ¡Vuelve pronto!
                                </p>
                            </div>
                        ) : (
                            <div className="relative">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation={{
                                        nextEl: `.next-${sub.id}`,
                                        prevEl: `.prev-${sub.id}`,
                                    }}
                                    pagination={{ clickable: true }}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    slidesPerGroup={1}
                                    loop={productosFiltrados.length >= 3}
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
                                        },
                                        1280: {
                                            slidesPerView: 4,
                                            slidesPerGroup: 4
                                        }
                                    }}
                                    className="pb-12" // Espacio para la paginación
                                >
                                    {productosFiltrados.map((producto) => (
                                        <SwiperSlide key={producto.id} className="!h-auto pb-10">
                                            <div className="mx-2">
                                                <ProductoCard
                                                    producto={producto}
                                                    agregarAlCarrito={agregarAlCarrito}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Botones de navegación */}
                                <button className={`prev-${sub.id} absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-green-50 transition-colors hidden md:block`}>
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button className={`next-${sub.id} absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-green-50 transition-colors hidden md:block`}>
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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