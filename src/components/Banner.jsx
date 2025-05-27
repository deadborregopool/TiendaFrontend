import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import React from "react";


const Banner = () => {
  const banners = [
    {
      imagen: "/banner1.jpg",
      titulo: "Vastec Slim Business",
      descripcion: "Preparada para reactivar tu labor diaria.",
      precio: "S/ 2,050",
    },
    {
      imagen: "/banner2.jpg",
      titulo: "Monitor LG 27''",
      descripcion: "Calidad profesional para todo uso.",
      precio: "S/ 890",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
         modules={[Pagination]}
         spaceBetween={30}
         slidesPerView={1}
         loop={true}
         pagination={{ clickable: true }}
         autoplay={{ delay: 5000 }}
         className="relative"
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white px-8"
              style={{ backgroundImage: `url(${item.imagen})` }}
            >
              <div className="bg-black/60 p-6 rounded-lg max-w-lg">
                <h2 className="text-2xl font-bold mb-2">{item.titulo}</h2>
                <p className="mb-2">{item.descripcion}</p>
                <p className="text-lg font-semibold">{item.precio}</p>
                <button className="mt-3 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded">
                  Más detalles
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
