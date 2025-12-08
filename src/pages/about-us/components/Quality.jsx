import React from "react";
import Abt3 from "../../../assets/Abt4.svg";

const Quality = () => {
  return (
    <section className="mx-auto w-[90%] md:w-[85%] gap-[10%] mt-10 md:mt-15 flex flex-col md:flex-row mb-10 md:mb-20">
      <h2 className="text-2xl font-bold pb-4 font-poppins text-center w-full md:hidden order-1">
        Quality and Health
      </h2>

      <div className="w-full md:w-[50%] justify-end object-contain mb-4 md:mb-0 order-2 md:order-1">
        <img
          src={Abt3}
          alt=""
          className="w-full h-[300px] md:h-[350px] object-cover rounded-lg"
        />
      </div>

      <div className="w-full md:w-[50%] flex flex-col justify-center order-3 md:order-2">
        <h2 className="text-2xl font-bold pb-8 font-poppins text-left hidden md:block">
          Quality and Health
        </h2>
        <p className="font-poppins text-base md:text-xl text-justify md:text-left leading-relaxed">
          Offering premium, tasty, healthy food only, using carefully selected
          ingredients and maintaining the highest food safety standards—backed
          by our 5-star FSA hygiene rating.
        </p>
      </div>
    </section>
  );
};

export default Quality;
