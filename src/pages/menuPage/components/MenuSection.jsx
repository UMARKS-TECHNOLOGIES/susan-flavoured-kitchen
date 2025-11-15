import React from "react";
import Card from "./Card";

const MenuSection = ({ title, items, showMore }) => {
    return (
        <section className="w-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-[#00004d]">{title}</h2>
                {showMore && (
                    <button className="text-orange-600 font-bold text-xl">
                        See More &gt;
                    </button>
                )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {items.map((item, idx) => (
                    <Card key={idx} item={item} />
                ))}
            </div>
        </section>
    );
};

export default MenuSection;