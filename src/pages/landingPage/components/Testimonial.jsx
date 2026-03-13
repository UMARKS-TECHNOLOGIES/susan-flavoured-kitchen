import React from "react";
import { User } from "lucide-react";
import Picture1 from "../../../assets/test1.webp";
import Picture2 from "../../../assets/test2.webp";
import Picture3 from "../../../assets/test3.webp";

const Testimonial = () => {
  const testimony = [
    {
      id: 1,
      name: "Ada",
      feedback:
        "The egusi soup tasted just like home! You can tell it was made fresh — clean, flavorful, and perfectly spiced. I’ll definitely order again.",
      img: Picture1,
    },
    {
      id: 2,
      name: "Kemi",
      feedback:
        "“I love how they prioritize hygiene. Every meal arrives well-packaged, hot, and neatly sealed. You can trust them with your stomach!”",
      img: Picture2,
    },
    {
      id: 3,
      name: "Femi",
      feedback:
        " “I love how they prioritize hygiene. Every meal arrives well-packaged, hot, and neatly sealed. You can trust them with your stomach!”",
      img: Picture3,
    },
  ];
  return (
    <section className="mt-10 lg:mt-0 px-4 lg:px-0">
      <div className="w-full lg:max-w-5xl mx-auto">
        <h3 className="text-2xl font-medium mb-4 lg:mb-0">Testimonials</h3>
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-4 my-4 pb-4 snap-x snap-mandatory scroll-smooth lg:pb-0 scrollbar-hide ">
          {testimony.map((items) => (
            <div
              className="flex-shrink-0 w-[calc(100vw-2rem)] lg:w-auto bg-white px-6 py-6 rounded-br-lg rounded-tl-lg shadow-sm border border-black snap-center flex flex-col"
              key={items.id}
            >
              <p className="leading-relaxed text-accent-foreground text-sm lg:text-base font-medium flex-1 w-full whitespace-normal break-words">
                {items.feedback}
              </p>
              <div className="flex justify-between items-center mt-6">
                <h2 className="font-bold text-lg">{items.name}</h2>
                <div className="rounded-full flex items-center justify-center w-20 h-20 bg-orange-100 text-orange-600 overflow-hidden shrink-0 shadow-sm border-2 ">
                  {items.img ? (
                    <img
                      src={items.img}
                      alt={items.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User size={24} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
