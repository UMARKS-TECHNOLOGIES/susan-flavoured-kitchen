import React from "react";
import Abt3 from "../../../assets/Abt4.svg";

const Commitment = () => {
  return (
    <section className="mx-auto w-[85%] 0 gap-[10%]  mt-15 flex">
      <div className="w-[50%] flex flex-col justify-center">
        <h2 className="text-2xl font-bold pb-8 font-poppins">Our Commitment</h2>
        <p className="font-poppins text-xl justify-center">
          Susan Flavoured Kitchen is dedicated to providing high-quality, luxury
          catering services using the finest ingredients, prepared in a clean
          and professional environment. We strive to make every event we cater
          memorable, every meal delicious, and every client experience
          exceptional.
        </p>
      </div>

      <div className="w-[50%] justify-end object-contain ">
        <img src={Abt3} alt="" className="w-full h-[350px]" />
      </div>
    </section>
  );
};

export default Commitment;
