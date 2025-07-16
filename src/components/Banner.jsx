import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import React from "react";

const Banner = () => {
  const banners = [
    {
      imagen: "/banner1.jpg",
      titulo: "Vastec Slim Business",
    },
    {
      imagen: "/banner2.jpg",
      titulo: "Monitor LG 27''",
    },
    {
      imagen: "/banner3.jpg",
      titulo: "Accesorios Gamer",
    }
  ];

  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active'
          }}
          autoplay={{ 
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="banner-swiper rounded-xl overflow-hidden shadow-xl"
        >
          {banners.map((item, index) => (
            <SwiperSlide key={index} className="h-[500px]">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imagen})` }}
                aria-label={item.titulo}
              >
                {/* Contenedor vacío - solo imagen de fondo */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Estilos personalizados para la paginación */}
      <style jsx global>{`
        .banner-swiper {
          width: 100%;
          height: 500px;
        }
        .banner-swiper .swiper-pagination {
          bottom: 20px !important;
        }
        .banner-swiper .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          background: rgba(255, 255, 255, 0.7);
          opacity: 1;
          margin: 0 8px !important;
          transition: all 0.3s ease;
        }
        .banner-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #10b981, #3b82f6);
          transform: scale(1.3);
        }
        @media (max-width: 768px) {
          .banner-swiper {
            height: 300px;
          }
          .banner-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;