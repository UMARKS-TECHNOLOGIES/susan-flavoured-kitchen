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
    <section className="bg-[#FFF9F4] relative mb-5 pb-6 pt-8 w-full">
      <div className="w-[85%] mx-auto">
        <h1 className="text-2xl mb-5 font-bold">Popular Cathering Dishes</h1>

        <div className="flex flex-wrap gap-13 ">
          <div className="w-[30%] mb-6  ">
            <img src={P1} alt="" className="h-[300px]" />
            <div className="bg-[#ffffff] p-3">
              <p className="text-xl pb-1 pt-2 font-bold">
                Jollof Rice & Chicken
              </p>
              <p className="text-md">
                Signature smoky Jollof rice served with tender grilled chicken.
                Ideal for parties and large gatherings.
              </p>
            </div>
          </div>

          <div className="w-[30%] mb-6 ">
            <img src={P2} alt="" className="h-[300px]" />
            <div className="bg-[#ffffff] p-3">
              <p className="text-xl pb-1 pt-2 font-bold">Fried Rice</p>
              <p className="text-md">
                Colourful fried rice cooked with vegetables, seasonings, and
                your choice of chicken or beef.
              </p>
            </div>
          </div>

          <div className="w-[30%] mb-6 ">
            <img src={P4} alt="" className="h-[300px]" />
            <div className="bg-[#ffffff] p-3">
              <p className="text-xl pb-1 pt-2 font-bold">Pepper Soup</p>
              <p className="text-md">
                A bold, aromatic pepper soup with assorted meats — warm, spicy,
                and perfect for events.
              </p>
            </div>
          </div>

          <div className="w-[30%] mb-6 ">
            <img src={P3} alt="" className="h-[300px]" />
            <div className="bg-[#ffffff] p-3">
              <p className="text-xl pb-1 pt-2 font-bold">Pounded Yam & Egusi</p>
              <p className="text-md">
                Rich, flavourful Egusi soup paired with soft pounded yam — a
                crowd favourite at any celebration.
              </p>
            </div>
          </div>

          <div className="w-[30%] mb-6 ">
            <img src={P5} alt="" className="h-[300px]" />
            <div className="bg-[#ffffff] pb-9 p-3">
              <p className="text-xl pb-1 pt-2 font-bold">Moi Moi</p>
              <p className="text-md">
                Fluffy, protein-rich steamed bean pudding. A great side dish for
                buffets.
              </p>
            </div>
          </div>

          <div className="w-[30%] mb-6 ">
            <img src={P6} alt="" className="h-[300px]" />
            <div className="bg-[#ffffff] p-3">
              <p className="text-xl pb-1 pt-2 font-bold">Small Chops</p>
              <p className="text-md">
                Crispy spring rolls, samosas, puff-puff, and prawn rolls —
                perfect for receptions and casual events.
              </p>
            </div>
          </div>
        </div>

        <div className="flex mx-auto justify-center">
          <Link
            to={"/quote"}
            className="bg-[#FF6E00] text-white px-5 py-2 rounded rounded-tr-none rounded-bl-none"
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
