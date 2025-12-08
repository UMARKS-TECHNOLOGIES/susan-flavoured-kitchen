import React from "react";
import { PiCookingPotThin } from "react-icons/pi";
import { TfiHandPointRight } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";

const Auth = () => {
  return (
    <section className="bg-[#FFF9F4] mt-8 mb-10 pt-8 md:pt-14 w-full">
      <div className="w-[90%] md:w-full p-6 md:p-15 flex flex-col md:flex-row flex-wrap mx-auto gap-2 rounded-[10px] mt-[15px] bg-[#AB832B] ">
        <div className="flex w-full md:w-[24%] border-b-2 md:border-b-0 md:border-r border-white md:last:border-none">
          <div className="flex text-center md:text-left flex-col items-center align-center w-full h-auto md:h-[200px] py-6 md:pt-4 md:pr-4">
            <PiCookingPotThin className="text-white text-5xl md:text-4xl mb-2" />
            <h1 className="text-xl md:text-2xl font-bold text-white mb-2">
              Authenticity
            </h1>
            <p className="text-white text-base md:text-lg">
              Real Nigerian flavours, cooked traditionally.
            </p>
          </div>
        </div>

        <div className="flex w-full md:w-[24%] border-b-2 md:border-b-0 md:border-r border-white md:last:border-none">
          <div className="flex flex-col items-center align-center w-full text-center md:text-left h-auto md:h-[200px] py-6 md:pt-4 md:pr-4">
            <TfiHandPointRight className="text-white text-5xl md:text-4xl mb-2" />
            <h1 className="text-xl md:text-2xl font-bold text-white mb-2">
              Hygiene
            </h1>
            <p className="text-white text-base md:text-lg">
              Prepared hygienically with utmost care.
            </p>
          </div>
        </div>

        <div className="flex w-full md:w-[24%] border-b-2 md:border-b-0 md:border-r border-white md:last:border-none">
          <div className="flex flex-col items-center align-center w-full text-center h-auto md:h-[200px] py-6 md:pt-4 md:pr-4">
            <CiHeart className="text-white text-5xl md:text-4xl mb-2" />
            <h1 className="text-xl md:text-2xl font-bold text-white mb-2">
              Care
            </h1>
            <p className="text-white text-base md:text-lg">
              Each order made with love, like it’s for family.
            </p>
          </div>
        </div>

        <div className="flex w-full md:w-[24%]">
          <div className="flex flex-col items-center align-center w-full text-center h-auto md:h-[200px] py-6 md:pt-4">
            <CiDeliveryTruck className="text-white text-5xl md:text-4xl mb-2" />
            <h1 className="text-xl md:text-2xl font-bold text-white mb-2">
              Fresh Delivery
            </h1>
            <p className="text-white text-base md:text-lg">
              Hot, well-packed, and always on time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
