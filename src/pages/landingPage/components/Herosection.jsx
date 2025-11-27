import React from "react";
import Plate from "../../../assets/image1.svg";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Herosection = () => {
  const heroSlides = [
    {
      id: 1,
      title: "Hygenic meals, Unforgettable taste",
      description:
        "From homemade soups to pastries and drinks — order comfort delivered to your door or book us for your next event.",
      image: Plate,
    },
    {
      id: 2,
      title: "Hygenic meals, Unforgettable taste",
      description:
        "From homemade soups to pastries and drinks — order comfort delivered to your door or book us for your next event.",
      image: Plate,
    },
    {
      id: 3,
      title: "Hygenic meals, Unforgettable taste",
      description:
        "From homemade soups to pastries and drinks — order comfort delivered to your door or book us for your next event.",
      image: Plate,
    },
  ];

  return (
    <section className="w-[95%] top-30 mx-auto relative">
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
        className="h-[90vh] w-full"
        style={{ paddingBottom: "50px" }}
      >
        {heroSlides.map((heroSlides) => (
          <SwiperSlide key={heroSlides.id}>
            <div className="bg-[#ff6e00] flex py-8 px-12 rounded-lg gap-20 items-center">
              <div className="">
                <img src={heroSlides.image} alt="" className="w-90" />
              </div>
              <div className="text-white max-w-4xl">
                <h2 className="text-[60px] leading-tight font-bold max-w-2xl">
                  {heroSlides.title}
                </h2>

                <p className="font-medium text-[20px] my-2 max-w-3xl">
                  {heroSlides.description}
                </p>
                <div className="flex justify-center items-center py-6 gap-3">
                  <Link to="order-now">
                    <Button className="bg-white w-[100px] h-[40px] text-orange-400   hover:bg-transparent hover:text-white border rounded-tr-none rounded-bl-none cursor-pointer">
                      Order Now
                    </Button>
                  </Link>
                  <Link to="/book-us">
                    <Button className="bg-transparent w-[140px] h-[40px] text-white    hover:bg-transparent hover:text-white border rounded-tr-none rounded-bl-none cursor-pointer">
                      Book Catering
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

{
  /* <div className="text-white max-w-4xl">
            <h2 className="text-5xl leading-tight font-bold">
                Hygenic meals, <br />
                Unforgettable taste
            </h2>

            <p className='font-medium text-2xl my-2'>
                From homemade soups to pastries and drinks — order comfort <br /> delivered to your door or book us for your next event.
            </p>
            <div className='flex justify-center items-center py-6 gap-3'>
                <Link to='order-now'>
                    <Button
                        size="lg"
                        className="bg-white text-orange-400 rounded-br-2xl rounded-tl-2xl hover:bg-transparent hover:text-white border-2 border-white cursor-pointer"
                    >
                        Order Now
                    </Button>
                </Link>
                <Link to='/book-us'>
                    <Button
                        size="lg"
                        className="bg-transparent text-white border-2 border-white rounded-br-2xl rounded-tl-2xl hover:bg-white hover:text-orange-400 cursor-pointer"
                    >
                        Book Catering
                    </Button>
                </Link>
            </div>

        </div> */
}
export default Herosection;
