import React from "react";
import P1 from "@/assets/P1.svg";
import P2 from "@/assets/P2.svg";
import P3 from "@/assets/P3.svg";
import P4 from "@/assets/P4.svg";
import P5 from "@/assets/P5.svg";
import P6 from "@/assets/P6.svg";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <section className="bg-[#FFF9F4] relative  pb-6 pt-8 w-full">
      <div className="w-[85%] mx-auto">
        <h1 className="text-2xl lg:text-3xl mb-5 font-bold">
          Popular Catering Dishes
        </h1>

        <div className="flex flex-wrap gap-6 lg:gap-10 justify-center">
          <div className="w-full md:w-[48%] lg:w-[30%] mb-6 shadow-sm hover:shadow-md transition-shadow">
            <img
              src={P1}
              alt=""
              className="h-[250px] lg:h-[300px] w-full object-cover"
            />
            <div className="bg-[#ffffff] p-3 pb-6">
              <p className="text-lg lg:text-xl pb-1 pt-2 font-bold">
                Jollof Rice & Chicken
              </p>
              <p className="text-sm lg:text-md">
                Signature smoky Jollof rice served with tender grilled chicken.
                Ideal for parties and large gatherings.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[48%] lg:w-[30%] mb-6 shadow-sm hover:shadow-md transition-shadow">
            <img
              src={P2}
              alt=""
              className="h-[250px] lg:h-[300px] w-full object-cover"
            />
            <div className="bg-[#ffffff] p-3 pb-6">
              <p className="text-lg lg:text-xl pb-1 pt-2 font-bold">
                Fried Rice
              </p>
              <p className="text-sm lg:text-md">
                Colourful fried rice cooked with vegetables, seasonings, and
                your choice of chicken or beef.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[48%] lg:w-[30%] mb-6 shadow-sm hover:shadow-md transition-shadow">
            <img
              src={P4}
              alt=""
              className="h-[250px] lg:h-[300px] w-full object-cover"
            />
            <div className="bg-[#ffffff] p-3 pb-6">
              <p className="text-lg lg:text-xl pb-1 pt-2 font-bold">
                Pepper Soup
              </p>
              <p className="text-sm lg:text-md">
                A bold, aromatic pepper soup with assorted meats — warm, spicy,
                and perfect for events.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[48%] lg:w-[30%] mb-6 shadow-sm hover:shadow-md transition-shadow">
            <img
              src={P3}
              alt=""
              className="h-[250px] lg:h-[300px] w-full object-cover"
            />
            <div className="bg-[#ffffff] p-3 pb-6">
              <p className="text-lg lg:text-xl pb-1 pt-2 font-bold">
                Pounded Yam & Egusi
              </p>
              <p className="text-sm lg:text-md">
                Rich, flavourful Egusi soup paired with soft pounded yam — a
                crowd favourite at any celebration.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[48%] lg:w-[30%] mb-6 shadow-sm hover:shadow-md transition-shadow">
            <img
              src={P5}
              alt=""
              className="h-[250px] lg:h-[300px] w-full object-cover"
            />
            <div className="bg-[#ffffff] p-3 pb-6">
              <p className="text-lg lg:text-xl pb-1 pt-2 font-bold">Moi Moi</p>
              <p className="text-sm lg:text-md">
                Fluffy, protein-rich steamed bean pudding. A great side dish for
                buffets.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[48%] lg:w-[30%] mb-6 shadow-sm hover:shadow-md transition-shadow">
            <img
              src={P6}
              alt=""
              className="h-[250px] lg:h-[300px] w-full object-cover"
            />
            <div className="bg-[#ffffff] p-3 pb-6">
              <p className="text-lg lg:text-xl pb-1 pt-2 font-bold">
                Small Chops
              </p>
              <p className="text-sm lg:text-md">
                Crispy spring rolls, samosas, puff-puff, and prawn rolls —
                perfect for receptions and casual events.
              </p>
            </div>
          </div>
        </div>

        <div className="flex mx-auto justify-center mt-6">
          <Link
            to={"/catering-quote"}
            className="bg-[#FF6E00] text-white px-5 py-3 rounded rounded-tr-none rounded-bl-none font-bold hover:bg-orange-600 transition-colors"
          >
            Request Quote
          </Link>
        </div>
      </div>

      <hr className="w-full absolute bottom-0 mx-auto mt-20" />
    </section>
  );
};

export default Popular;
