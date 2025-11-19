import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "../../../store/useCart";

const Card = ({ product, item }) => {
    const data = product || item;

    const { addToCart, isInCart, getItemQuantity } = useCart();
    const inCart = isInCart(data.id);
    const quantity = getItemQuantity(data.id);

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-center">
                <Link to={`/product/${data.id}`}>
                    <img
                        src={data.image}
                        alt={data.name}
                        className="w-40 h-40 object-cover bg-center rounded-full mb-3"
                    />
                </Link>
            </div>

            <h2 className="font-bold text-2xl">{data.name}</h2>
            <p className="text-gray-600 text-xl font-medium mb-2">{data.description}</p>

            <div className="flex justify-between items-center">
                <p className="font-bold text-lg text-gray-900 mb-3">£{data.price.toFixed(2)}</p>
                <Button
                    onClick={() => addToCart(data)}
                    size="lg"
                    className="bg-orange-600 text-white py-1 px-3 text-sm rounded-md hover:bg-orange-700"
                >
                    {inCart ? `Add More (${quantity})` : 'Add to Cart'}
                </Button>
            </div>
        </div>
    );
};

export default Card;
