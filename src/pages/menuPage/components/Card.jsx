import React from "react";
import { Button } from "@/components/ui/button";

const Card = ({ item }) => {
    return (
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="p-4 flex justify-between items-center flex-col">
                <div className="rounded-full w-40 h-40">
                    <img
                        src={item.image}
                        alt={item.name}
                        className=" rounded-full w-40 h-40 object-cover object-center"
                    />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800 text-2xl pt-2 capitalize">{item.name}</h4>
                    <p className="font-semibold text-gray-400 text-lg py-4">{item.paragraph}</p>
                </div>
                <div className="flex text-center items-center space-x-25">
                    <p className="text-lg font-medium">{item.price}</p>
                    <Button
                        size="lg"
                        className="bg-orange-600 text-white text-lg hover:bg-orange-700 rounded-br-lg rounded-tl-lg">
                        Add to cart
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default Card;
