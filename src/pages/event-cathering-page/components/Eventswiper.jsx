import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "../../../index.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import img1 from "@/assets/wed.webp";
import img2 from "@/assets/bd.webp";
import img3 from "@/assets/evnent.webp";

const Eventswiper = () => {
  return (
    <>
      <style>{`
        .eventSwiper .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          margin-top: 2rem !important;
        }
        .eventSwiper .swiper-pagination-bullet {
          background: #374151 !important;
          opacity: 0.5 !important;
          width: 12px !important;
          height: 12px !important;
        }
        .eventSwiper .swiper-pagination-bullet-active {
          opacity: 0.8 !important;
          background: #1f2937 !important;
        }
      `}</style>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4 whitespace-nowrap">
              Perfect for Every Event
            </h2>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[FreeMode, Pagination]}
            className="eventSwiper"
          >
            {/* Slide 1 - Weddings */}
            <SwiperSlide>
              <div className="h-60 shadow-lg overflow-hidden relative hover:scale-105 transition-transform duration-300">
                <img
                  src={img1}
                  alt="Weddings"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Weddings</h3>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 - Birthdays */}
            <SwiperSlide>
              <div className="h-60 shadow-lg overflow-hidden relative hover:scale-105 transition-transform duration-300">
                <img
                  src={img2}
                  alt="Birthdays"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Birthdays</h3>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 - Corporate Events */}
            <SwiperSlide>
              <div className="h-60 shadow-lg overflow-hidden relative hover:scale-105 transition-transform duration-300">
                <img
                  src={img3}
                  alt="Corporate Events"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">
                    Corporate Events
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 - Weddings (repeat) */}
            <SwiperSlide>
              <div className="h-60 shadow-lg overflow-hidden relative hover:scale-105 transition-transform duration-300">
                <img
                  src={img1}
                  alt="Weddings"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Weddings</h3>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 5 - Birthdays (repeat) */}
            <SwiperSlide>
              <div className="h-60 shadow-lg overflow-hidden relative hover:scale-105 transition-transform duration-300">
                <img
                  src={img2}
                  alt="Birthdays"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Birthdays</h3>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 6 - Corporate Events (repeat) */}
            <SwiperSlide>
              <div className="h-60 shadow-lg overflow-hidden relative hover:scale-105 transition-transform duration-300">
                <img
                  src={img3}
                  alt="Corporate Events"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">
                    Corporate Events
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 7 - Weddings (repeat) */}
            <SwiperSlide>
              <div className="h-60 shadow-lg overflow-hidden relative hover:scale-105 transition-transform duration-300">
                <img
                  src={img1}
                  alt="Weddings"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Weddings</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Eventswiper;
