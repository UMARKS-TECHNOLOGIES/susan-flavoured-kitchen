import React from "react";
import Plate from "../../../assets/image1.svg";
import Plate2 from "../../../assets/hero_food_2.png";
import Plate3 from "../../../assets/hero_food_3.png";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Search } from "lucide-react";

const Herosection = () => {
  const heroSlides = [
    {
      id: 1,
      title: "Hygienic Meals, Unforgettable Taste.",
      description:
        "From homemade soups to pastries and drinks — order comfort delivered to your door or book us for your next event.",
      image: Plate,
    },
    {
      id: 2,
      title: "Hygienic Meals, Unforgettable Taste.",
      description:
        "From homemade soups to pastries and drinks — order comfort delivered to your door or book us for your next event.",
      image: Plate2,
    },
    {
      id: 3,
      title: "Hygienic Meals, Unforgettable Taste.",
      description:
        "From homemade soups to pastries and drinks — order comfort delivered to your door or book us for your next event.",
      image: Plate3,
    },
  ];

  return (
    <section className="w-full lg:w-[95%] mt-24 lg:mt-20 mx-auto relative px-4 lg:px-0">
      {/* Mobile Search Bar */}
      <div className="flex lg:hidden w-full gap-2 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search Meals"
            className="w-full h-10 pl-4 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#ff6e00] text-base"
          />
        </div>
        <Button className="bg-[#ff6e00] h-10 text-white px-6 rounded-lg hover:bg-[#e66300]">
          Search
        </Button>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-auto w-full heroSwiper rounded-2xl lg:rounded-lg overflow-hidden"
        style={{ paddingBottom: "50px" }}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-[#ff6e00] flex flex-col lg:flex-row py-8 lg:py-8 px-6 lg:px-12 rounded-2xl lg:rounded-lg gap-6 lg:gap-20 items-center min-h-[500px] lg:min-h-0">
              {/* Image Container */}
              <div className="w-[250px] h-[250px] lg:w-[390px] lg:h-[390px] flex items-center justify-center shrink-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>

              {/* Text Content */}
              <div className="text-white max-w-4xl text-center lg:text-left flex flex-col items-center lg:items-start">
                <h2 className="text-[28px] lg:text-[50px] leading-tight font-bold max-w-2xl">
                  {slide.title}
                </h2>

                <p className="font-medium text-[14px] lg:text-[20px] my-4 lg:my-2 max-w-3xl opacity-90 lg:opacity-100">
                  {slide.description}
                </p>

                <div className="flex justify-center lg:justify-start items-center pt-2 lg:py-6 gap-3 w-full lg:w-auto">
                  <Link to="order-now" className="flex-1 lg:flex-none">
                    <Button className="bg-white w-full lg:w-[100px] h-10 text-[#ff6e00] hover:bg-gray-100 font-semibold border border-white rounded-lg lg:rounded-tr-none lg:rounded-bl-none">
                      Order Now
                    </Button>
                  </Link>
                  <Link to="/book-us" className="flex-1 lg:flex-none">
                    <Button className="bg-transparent w-full lg:w-[140px] h-10 text-white hover:bg-white/10 font-semibold border border-white rounded-lg lg:rounded-tr-none lg:rounded-bl-none">
                      Book Catering
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #ff6e00;
        }
      `}</style>
    </section>
  );
};

export default Herosection;
