import React from 'react'
import Picture from '../../../assets/catering.jpg'
import { Button } from '../../../components/ui/button'
const Catering = () => {
    return (
        <section className='my-10'>
            <h2 className="text-2xl font-medium px-40">Catering Services</h2>

            <div className=" w-full mt-10 h-96  bg-cover bg-center bg-no-repeat rounded-br-lg rounded-tl-lg" style={{
                backgroundImage: `url(${Picture})`,
            }}>
                <div className="flex w-full h-full bg-black/50 items-center justify-center">
                    <div className="w-2xl">
                        <div className="px-10">
                            <h2 className="font-bold text-white text-5xl">Catering that combines Hygiene, Taste and style</h2>
                            <p className="my-4 leading-tight text-white font-medium text-lg w-[560px]">
                                Whether it’s a private dinner, large celebration, or corporate lunch, we tailor every menu to suit your event’s theme and taste.
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <Button
                                className="my-4 bg-orange-600 rounded-br-lg rounded-tl-lg cursor-pointer hover:bg-orange-500 text-white font-medium"
                                size="lg"
                            >
                                Plan Your Event
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Catering