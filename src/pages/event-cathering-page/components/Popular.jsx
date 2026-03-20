import React from "react";
import cath1 from "@/assets/cath1.jpeg";
import cath2 from "@/assets/cath2.jpeg";
import cath3 from "@/assets/cath3.jpeg";
import cath4 from "@/assets/cath4.jpeg";
import cath5 from "@/assets/cath5.jpeg";
import cath6 from "@/assets/cath6.jpeg";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <section className="bg-[#FFF9F4] relative  pb-6 pt-8 w-full">
      <div className="w-[85%] mx-auto">
        <h1 className="text-2xl lg:text-3xl mb-5 font-bold">
          Popular Catering Dishes
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          <div className="flex flex-col mb-6 shadow-sm hover:shadow-md transition-shadow">
            <img
              src={cath1}
              alt=""
              className="h-[250px] lg:h-[300px] w-full object-cover rounded-t-xl"
            />
            <div className="bg-[#ffffff] p-3 pb-6 rounded-b-xl shadow-sm border border-gray-50 flex-1">
              <p className="text-lg lg:text-xl pb-1 pt-2 font-bold">
                Spaghetti & Turkey
              </p>
              <p className="text-sm lg:text-md">
                This is our special Spaghetti and turkey, made from your
                favourite SFK with a mix of spices, turkey and turkey stock.
                Spaghetti and turkey is eaten as a main dish. It can also be
                served with moi moi for the complete SFK special taste.
              </p>
            </div>
          </div>

          <div className="flex flex-col mb-6 shadow-sm hover:shadow-md transition-shadow">
            <img
              src={cath2}
              alt=""
              className="h-[250px] lg:h-[300px] w-full object-cover rounded-t-xl"
            />
            <div className="bg-[#ffffff] p-3 pb-6 rounded-b-xl shadow-sm border border-gray-50 flex-1">
              <p className="text-lg lg:text-xl pb-1 pt-2 font-bold">
                Fried Rice
              </p>
              <p className="text-sm lg:text-md">
                Colourful fried rice cooked with vegetables, seasonings, and
                your choice of chicken or beef.
              </p>
            </div>
          </div>

          <div className="flex flex-col mb-6 shadow-sm hover:shadow-md transition-shadow">
            <img
              src={cath3}
              alt=""
              className="h-[250px] lg:h-[300px] w-full object-cover rounded-t-xl"
            />
            <div className="bg-[#ffffff] p-3 pb-6 rounded-b-xl shadow-sm border border-gray-50 flex-1">
              <p className="text-lg lg:text-xl pb-1 pt-2 font-bold">
                Eforiro
              </p>
              <p className="text-sm lg:text-md">
                This is our rich Nigerian vegetable soup made with leafy greens,
                palm oil, assorted meats, and spices, delivering a deep, savory
                flavor. It is a staple in Yoruba cuisine, often enjoyed with
                swallow foods like pounded yam or fufu for a satisfying, hearty
                meal.
              </p>
            </div>
          </div>

          <div className="flex flex-col mb-6 shadow-sm hover:shadow-md transition-shadow">
            <img
              src={cath4}
              alt=""
              className="h-[250px] lg:h-[300px] w-full object-cover rounded-t-xl"
            />
            <div className="bg-[#ffffff] p-3 pb-6 rounded-b-xl shadow-sm border border-gray-50 flex-1">
              <p className="text-lg lg:text-xl pb-1 pt-2 font-bold">
                Soup & Stew
              </p>
              <p className="text-sm lg:text-md">
                This is our Soup and stews delicacy. It is a rich, flavorful
                dishes made with a blend of spices, meats, fish, chicken and/or
                beef. They are essential in everyday meals, typically served
                with rice, yam, or swallow foods like eba, fufu, or pounded yam.
              </p>
            </div>
          </div>

          <div className="flex flex-col mb-6 shadow-sm hover:shadow-md transition-shadow">
            <img
              src={cath5}
              alt=""
              className="h-[250px] lg:h-[300px] w-full object-cover rounded-t-xl"
            />
            <div className="bg-[#ffffff] p-3 pb-6 rounded-b-xl shadow-sm border border-gray-50 flex-1">
              <p className="text-lg lg:text-xl pb-1 pt-2 font-bold">Moi Moi</p>
              <p className="text-sm lg:text-md">
                Fluffy, protein-rich steamed bean pudding. A great side dish for
                buffets.
              </p>
            </div>
          </div>

          <div className="flex flex-col mb-6 shadow-sm hover:shadow-md transition-shadow">
            <img
              src={cath6}
              alt=""
              className="h-[250px] lg:h-[300px] w-full object-cover rounded-t-xl"
            />
            <div className="bg-[#ffffff] p-3 pb-6 rounded-b-xl shadow-sm border border-gray-50 flex-1">
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
