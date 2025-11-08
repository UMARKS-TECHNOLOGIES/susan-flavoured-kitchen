import React from 'react'
import Plate from '../../../assets/image1.png'
import { Button } from '../../../components/ui/button'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

const Herosection = () => {
    const heroSlides = [
        {
            id: 3,
            title: "Hygenic meals, Unforgettable taste",
            description: "From homemade soups to pastries and drinks — order comfort delivered to your door or book us for your next event.",
            image: Plate
        },
        {
            id: 2,
            title: "Hygenic meals, Unforgettable taste",
            description: "From homemade soups to pastries and drinks — order comfort delivered to your door or book us for your next event.",
            image: Plate
        },
        {
            id: 3,
            title: "Hygenic meals, Unforgettable taste",
            description: "From homemade soups to pastries and drinks — order comfort delivered to your door or book us for your next event.",
            image: Plate
        },

    ]

    return (
        <section className='px-5 py-4 relative h-[70vh]'>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                    clickable: true,
                }}
                effect="fade"
                autoplay={{
                    delay: 3000, // 3 seconds
                    disableOnInteraction: false,
                }}
                loop={true}
                className="h-full w-full relative"
            >

            {heroSlides.map((heroSlides) => (
                <SwiperSlide key={heroSlides.id}>
                    <div className="bg-[#ff6e00] flex py-4 px-10 rounded-lg gap-20 items-center">
                        <div className="">
                            <img src={heroSlides.image} alt="" className="w-90" />
                        </div>
                        <div className="text-white max-w-4xl">
                            <h2 className="text-5xl leading-tight font-bold max-w-2xl">
                                {heroSlides.title}
                            </h2>
    
                            <p className='font-medium text-2xl my-2 max-w-3xl'>
                                {heroSlides.description}
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
                        </div>
                    </div>
                </SwiperSlide>
                ))
            }
            </Swiper>
        </section>
    )
}

{/* <div className="text-white max-w-4xl">
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

        </div> */}
export default Herosection