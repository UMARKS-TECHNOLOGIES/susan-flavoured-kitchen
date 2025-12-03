import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const DrinksSection = ({ title, items }) => {
  return (
    <div className="w-full mt-12">
      <hr className="border-gray-300 mb-10" />

      <div className="max-w-5xl mx-auto mb-10 px-4 lg:px-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg md:text-2xl font-bold text-[#00004d]">
            {title}
          </h2>
          <Link
            to="/menu/drinks"
            className="text-orange-600 font-bold text-sm md:text-xl hover:text-orange-700"
          >
            See More &gt;
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {items
            .slice(0, window.innerWidth < 1024 ? 2 : items.length)
            .map((item, idx) => (
              <Card key={idx} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DrinksSection;
