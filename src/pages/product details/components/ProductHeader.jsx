import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import ProductAccordion from './ProductAccordion';
import StarRating from '../../../components/layout/StarRating';
import { useCart } from '../../../store/useCart';


const ProductHeader = ({ product, item }) => {
    const data = product || item;
    if (!data) {
        console.error('ProductHeader: No product/item prop provided');
        return (
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <p className="text-gray-500">Product not found</p>
            </div>
        );
    }

    if (!data.id) {
        console.error('ProductHeader: Product missing id', data);
        return (
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <p className="text-gray-500">Invalid product data</p>
            </div>
        );
    }
    
    const { addToCart, getItemQuantity} = useCart();
    const [localQuantity, setLocalQuantity] = useState(1);
    const cartQuantity = getItemQuantity(data.id);
    const [qty, setQty] = useState(1);

    const handleAddToCart = () => {
        for (let i = 0; i < localQuantity; i++) {
            addToCart(product);
        }
        setLocalQuantity(1);
    };

    return (
        <section className="grid md:grid-cols-2 gap-10 mt-32 max-w-7xl mx-auto px-4">

            <div className="w-[70%] ml-28 bg-white flex items-center justify-center py-16">
                <img
                    src={data.image}
                    alt={data.name}
                    className="w-70 rounded-xl object-cover"
                />
            </div>

            {/* Product Info */}
            <div className="w-full space-y-5">
                <h1 className="text-5xl font-bold leading-tight">
                    {product.name}
                </h1>
                <div className="flex text-center items-center space-x-4">
                    <p className="text-2xl font-bold">£{data.price.toFixed(2)}</p>
                    <div className="text-sm text-gray-500 flex gap-1 text-center items-center justify-center">
                        <StarRating rating={5} size="md" />
                        <span className='text-lg font-medium'>(95 Reviews)</span>
                    </div>
                </div>

                {cartQuantity > 0 && (
                    <div className="mb-3 p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-700 font-medium">
                            {cartQuantity} item{cartQuantity > 1 ? 's' : ''} in cart
                        </p>
                    </div>
                )}

                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setLocalQuantity(Math.max(1, localQuantity - 1))}
                            className="w-10 h-10 border-orange-500 text-orange-500"
                        >
                            <Minus className="w-4 h-4" />
                        </Button>
                        <div className="w-10 h-10 border-2 border-orange-500 text-orange-500 rounded flex items-center justify-center font-bold">
                            {localQuantity}
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setLocalQuantity(localQuantity + 1)}
                            className="w-10 h-10 border-orange-500 text-orange-500"
                        >
                            <Plus className="w-4 h-4" />
                        </Button>
                    </div>



                    <Button
                        onClick={handleAddToCart}
                        className="bg-orange-500 hover:bg-orange-600 text-white text-sm py-1 px-4 rounded-md "
                    >
                        Add to Cart
                    </Button>
                </div>

                <ProductAccordion product={data} />
            </div>

        </section>
    );
}

export default ProductHeader