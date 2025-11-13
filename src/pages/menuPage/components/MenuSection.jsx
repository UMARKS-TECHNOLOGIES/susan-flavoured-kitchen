import React from "react";
import Card from "./Card";

const MenuSection = ({ title, items }) => {
    return (
        <section>
            <h2 className="text-2xl font-bold text-[#00004d] mb-6">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {items.map((item, idx) => (
                    <Card key={idx} item={item} />
                ))}
            </div>
        </section>
    );
};

export default MenuSection;