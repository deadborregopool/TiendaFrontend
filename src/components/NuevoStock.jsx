// src/components/NuevoStock.jsx
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductoCard from "./ProductoCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NuevoStock = ({ agregarAlCarrito }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        // Cargar productos desde el endpoint
        const fetchProductos = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch("https://tienda-kxep.onrender.com/api/productos");
                if (!response.ok) {
                    throw new Error("Error al cargar los productos");
                }
                const data = await response.json();
                
                // Obtener los 6 productos más recientes
                const recientes = [...data]
                    .sort((a, b) => new Date(b.fecha_creacion) - new Date(a.fecha_creacion))
                    .slice(0, 6);
                
                setProductos(recientes);
            } catch (err) {
                console.error("Error al cargar productos:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    // Funciones para controlar la navegación del swiper
    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    // Skeleton Loader
    const renderSkeletons = () => {
        return Array(3).fill(0).map((_, index) => (
            <SwiperSlide key={index} className="flex justify-center">
                <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col h-full w-[240px] mx-auto animate-pulse">
                    <div className="w-full h-52 bg-gray-200"></div>
                    <div className="p-4 flex flex-col flex-grow">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2 mb-6"></div>
                        <div className="mt-auto flex justify-center gap-3">
                            <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
                            <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ));
    };

    if (error) {
        return (
            <div className="px-[5%] py-12 w-full bg-gradient-to-b from-white to-gray-50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4">
                        Nuevo Stock
                    </h2>
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
                        <p className="font-bold">Error al cargar productos</p>
                        <p>{error}</p>
                        <button 
                            onClick={() => window.location.reload()}
                            className="mt-3 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-colors"
                        >
                            Intentar de nuevo
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="px-[5%] py-12 w-full bg-gradient-to-b from-white to-gray-50">
            {/* Encabezado con gradiente */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
                    Nuevo Stock
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Descubre nuestras últimas incorporaciones, productos recién llegados con las mejores especificaciones.
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="relative">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: ".custom-prev-button",
                        nextEl: ".custom-next-button",
                    }}
                    breakpoints={{
                        480: { 
                            slidesPerView: 1, 
                            slidesPerGroup: 1 
                        },
                        640: { 
                            slidesPerView: 2, 
                            slidesPerGroup: 2 
                        },
                        1024: { 
                            slidesPerView: 3, 
                            slidesPerGroup: 3 
                        },
                    
                    }}
                >
                    {loading ? renderSkeletons() : (
                        productos.length > 0 ? (
                            productos.map((producto) => (
                                <SwiperSlide key={producto.id} className="flex justify-center">
                                    <ProductoCard 
                                        producto={producto}
                                        agregarAlCarrito={agregarAlCarrito}
                                    />
                                </SwiperSlide>
                            ))
                        ) : (
                            <div className="text-center py-10 w-full">
                                <p className="text-gray-500">Actualmente no hay nuevos productos disponibles.</p>
                                <p className="text-gray-500 mt-2">¡Pronto llegará nuestro nuevo stock!</p>
                            </div>
                        )
                    )}
                </Swiper>
                
                {/* Botones de navegación mejorados */}
                {productos.length > 0 && !loading && (
                    <>
                        <button 
                            onClick={handlePrev}
                            className="custom-prev-button absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors cursor-pointer text-green-600 hover:text-green-800"
                            aria-label="Anterior"
                            style={{ transform: 'translateY(-50%) translateX(-50%)' }}
                        >
                            <FaArrowLeft className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={handleNext}
                            className="custom-next-button absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors cursor-pointer text-green-600 hover:text-green-800"
                            aria-label="Siguiente"
                            style={{ transform: 'translateY(-50%) translateX(50%)' }}
                        >
                            <FaArrowRight className="w-6 h-6" />
                        </button>
                    </>
                )}
            </div>
            
            {/* Indicador visual */}
           
        </div>
    );
};

export default NuevoStock;