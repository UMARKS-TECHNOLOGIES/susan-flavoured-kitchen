import React from 'react'
import { Button } from '../../../components/ui/button'
import Rice from '../../../assets/image8.jpg'
import Soup from '../../../assets/image9.jpg'

const PopularDishes = () => {
    return (
        <section className='mt-15'>
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-medium">Popular Dishes</h2>
                <div className="flex md:flex-row flex-col gap-4 mt-4">
                    <div className="md:w-1/2 w-full p-2 bg-secondary rounded-lg">
                        <img src={Rice} alt="Dish 1" className="w-full h-auto rounded-lg" />
                        <div className="px-4">
                            <h3 className="mt-2 text-lg font-bold capitalize">Jollof rice with grilled chicken</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-lg font-bold ">$30</p>
                                <Button
                                    size="md"
                                    className="ml-4 px-4 py-2 bg-orange-500 rounded-md text-sm font-medium hover:bg-orange-600 text-white cursor-pointer"
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full p-2 bg-secondary rounded-lg">
                        <img src={Soup} alt="Dish 1" className="w-full h-auto rounded-lg" />
                        <div className="px-4">
                            <h3 className="mt-2 text-lg font-bold capitalize">Vegetable Soup and swallow</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-lg font-bold ">$8.38</p>
                                <Button
                                    size="md"
                                    className="ml-4 px-4 py-2 bg-orange-500 rounded-md text-sm font-medium hover:bg-orange-600 text-white cursor-pointer"
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularDishes