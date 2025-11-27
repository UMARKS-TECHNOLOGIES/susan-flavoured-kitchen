import React from "react";
import { PiCookingPotThin } from "react-icons/pi";
import { TfiHandPointRight } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";

const Auth = () => {
  return (
    <section className="bg-[#FFF9F4] mt-8 mb-10 pt-14 w-full">
      <div className="w-full p-15  flex flex-wrap mx-auto gap-2 rounded-[10px] mt-[15px] bg-[#AB832B] ">
        <div className="flex  w-[24%] ">
          <div className="border-r flex text-left flex-col items-center  align-center w-full  h-[150px]  pt-4 pr-4">
            <PiCookingPotThin className="text-white text-4xl" />
            <h1 className="text-2xl font-bold text-white">Authencity</h1>
            <p className="text-white text-lg">
              Real Nigerian flavours, cooked traditionally.
            </p>
          </div>
        </div>

        <div className="flex  w-[24%]  ">
          <div className="border-r flex flex-col items-center align-center w-full text-left h-[150px]  pt-4 pr-4">
            <TfiHandPointRight className="text-white text-4xl" />
            <h1 className="text-2xl font-bold text-white">Hygiene</h1>
            <p className="text-white ml-4 text-lg">
              Prepared hygienically with utmost care.
            </p>
          </div>
        </div>

        <div className="flex  w-[24%]  ">
          <div className="border-r flex flex-col items-center align-center w-full text-center h-[150px]  pt-4 pr-4">
            <CiHeart className="text-white text-4xl" />
            <h1 className="text-2xl font-bold text-white">Care</h1>
            <p className="text-white text-left ml-6 text-lg">
              Each order made with love, like it’s for family.
            </p>
          </div>
        </div>

        <div className="flex  w-[24%]  ">
          <div className=" flex flex-col items-center align-center w-full text-center h-[150px]  pt-4 ">
            <CiDeliveryTruck className="text-white text-4xl" />
            <h1 className="text-2xl font-bold text-white">Fresh Delivery</h1>
            <p className="text-white text-left ml-4 text-lg">
              Hot, well-packed, and always on time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
