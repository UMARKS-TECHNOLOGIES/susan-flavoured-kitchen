import React from "react";
import Card from "./Card";
import { useRef } from "react";

const DrinksSection = ({ title, items }) => {
    const drinksRef = useRef(null);

    return (
        <div className="w-full mt-12" ref={drinksRef}>
            <hr className="border-gray-300 mb-10" />

            <div className="max-w-5xl mx-auto mb-10">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-[#00004d]">{title}</h2>
                    <button className="text-orange-600 font-bold text-xl">
                        See More &gt;
                    </button>
                </div>

                {/* 3-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, idx) => (
                        <Card key={idx} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DrinksSection;
