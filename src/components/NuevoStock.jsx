// src/components/NuevoStock.jsx
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductoCard from "./ProductoCard";

const NuevoStock = ({ agregarAlCarrito }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("https://tienda-kxep.onrender.com/api/productos")
            .then((res) => res.json())
            .then((data) => {
                const recientes = [...data].reverse().slice(0, 6);
                setProductos(recientes);
            })
            .catch((err) => console.error("Error al cargar productos:", err));
    }, []);

    return (
        <div className="px-[5%] py-8 w-full">
            <h2 className="text-xl font-bold mb-4">Nuevo Stock</h2>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                spaceBetween={30}
                slidesPerView={1}
                slidesPerGroup={1}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 1, slidesPerGroup: 1 },
                    768: { slidesPerView: 2, slidesPerGroup: 2 },
                    1024: { slidesPerView: 3, slidesPerGroup: 3 }
                }}
                className="w-full relative"
            >
                {productos.map((producto) => (
                    <SwiperSlide key={producto.id} className="flex justify-center">
                        <ProductoCard 
                            producto={producto}
                            agregarAlCarrito={agregarAlCarrito}
                        />
                    </SwiperSlide>
                ))}
                
                {/* Botones de navegación actualizados */}
                <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </Swiper>
        </div>
    );
};

export default NuevoStock;