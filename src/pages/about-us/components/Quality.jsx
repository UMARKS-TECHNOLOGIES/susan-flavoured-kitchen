import React from "react";
import Abt3 from "../../../assets/Abt4.svg";

const Quality = () => {
  return (
    <section className="mx-auto w-[85%] 0 gap-[10%]  mt-15 flex">
      <div className="w-[50%] justify-end object-contain ">
        <img src={Abt3} alt="" className="w-full h-[350px]" />
      </div>

      <div className="w-[50%] flex flex-col justify-center">
        <h2 className="text-2xl font-bold pb-8 font-poppins">
          Quality and Health
        </h2>
        <p className="font-poppins text-xl justify-center">
          Offering premium, tasty, healthy food only, using carefully selected
          ingredients and maintaining the highest food safety standards—backed
          by our 5-star FSA hygiene rating.
        </p>
      </div>
    </section>
  );
};

export default Quality;
