import React from "react";
import { Button } from "../../../components/ui/button";
import Soup from "../../../assets/image2.png";
import Drink from "../../../assets/image3.png";
import Rice from "../../../assets/image4.png";
import Events from "../../../assets/image7.jpg";
import Cakes from "../../../assets/image5.jpg";
import Pastries from "../../../assets/image6.png";
import { Link } from "react-router-dom";

const Categories = () => {
  const categoryItems = [
    {
      id: 1,
      name: "Soup & Stews",
      imageUrl: Soup,
    },
    {
      id: 2,
      name: "Drinks",
      imageUrl: Drink,
    },
    {
      id: 3,
      name: "Rice Dishes",
      imageUrl: Rice,
    },
    {
      id: 4,
      name: "Event Catering",
      imageUrl: Events,
    },
    {
      id: 5,
      name: "Cakes",
      imageUrl: Cakes,
    },
    {
      id: 6,
      name: "Pastries",
      imageUrl: Pastries,
    },
  ];

  return (
    <section className="w-full lg:max-w-5xl mx-auto mt-4 lg:mt-0 relative top-0 lg:top-16 px-4 lg:px-0">
      <h3 className="text-2xl lg:text-3xl font-medium mb-4 lg:mb-0">
        Categories
      </h3>

      {/* Mobile: Horizontal Scroll, Desktop: Grid */}
      <div className="my-5 flex flex-nowrap overflow-x-auto scrollbar-hide gap-4 pb-4 -mx-4 px-4 snap-x snap-mandatory lg:pb-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-9 lg:mx-0 lg:px-0">
        {categoryItems.map((item) => (
          <div
            key={item.id}
            className="relative min-w-[280px] h-[200px] lg:w-80 lg:h-50 items-center text-center flex justify-center bg-cover bg-no-repeat rounded-br-lg rounded-tl-lg shrink-0 snap-center"
            style={{
              backgroundImage: `url(${item.imageUrl})`,
            }}
          >
            <div className="bg-white/70 px-6 py-2 rounded-br-lg rounded-tl-lg backdrop-blur-sm">
              <h3 className="text-xl lg:text-2xl font-bold">{item.name}</h3>
              <Link to='/admin'>
                <Button
                  className="my-3 lg:my-4 bg-orange-600 rounded-br-lg rounded-tl-lg cursor-pointer hover:bg-orange-500 text-white font-medium text-sm lg:text-base h-9 lg:h-11"
                  size="lg"
                >
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
