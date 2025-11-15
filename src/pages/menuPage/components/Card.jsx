import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-center">
                <Link to={'/product'}>
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-40 h-40 object-cover bg-center rounded-full mb-3"
                    />
                </Link>
            </div>

            <h2 className="font-bold text-2xl">{item.name}</h2>
            <p className="text-gray-600 text-xl font-medium mb-2">{item.desc}</p>

            <div className="flex justify-between items-center">
                <p className="font-bold text-lg text-gray-900 mb-3">{item.price}</p>
                <Button size="lg" className="bg-orange-600 text-white py-1 px-3 text-sm rounded-md hover:bg-orange-700">
                    Add to Cart
                </Button>
            </div>
        </div>
    );
};

export default Card;
