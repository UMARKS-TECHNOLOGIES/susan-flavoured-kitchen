import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Image5 from '../../../assets/jollof-rice.jpg'
import ProductAccordion from './ProductAccordion';


const ProductHeader = () => {
    const [qty, setQty] = useState(1);

    return (
        <section className="grid md:grid-cols-2 gap-10 mt-32 max-w-7xl mx-auto px-4">

            <div className="w-[70%] ml-28 bg-white flex items-center justify-center py-16">
                <img
                    src={Image5}
                    alt="Jollof Rice"
                    className="w-70 rounded-xl object-cover"
                />
            </div>

            {/* Product Info */}
            <div className="w-full space-y-5">
                <h1 className="text-5xl font-bold leading-tight">
                    Smoky Jollof Rice & Grilled Chicken
                </h1>
                <div className="flex text-center items-center space-x-4">
                    <p className="text-2xl font-bold">£8.50</p>
                    <p className="text-sm text-gray-500 flex gap-1 text-center items-center justify-center">
                        ⭐⭐⭐⭐⭐ <span className='text-lg font-medium'>(95 Reviews)</span>
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-lg px-3 py-2 gap-3">
                        <Minus
                            className="cursor-pointer"
                            onClick={() => setQty(Math.max(1, qty - 1))}
                        />
                        <span className="font-medium">{qty}</span>
                        <Plus className="cursor-pointer" onClick={() => setQty(qty + 1)} />
                    </div>

                    <Button className="bg-orange-600 hover:bg-orange-700">
                        Add to Cart
                    </Button>
                </div>

                <ProductAccordion />
            </div>

        </section>
    );
}

export default ProductHeader