import React from "react";
import Abt3 from "@/assets/Abt3.svg";
const Mission = () => {
  return (
    <section className="w-[85%] mt-10 flex   mx-auto">
      <div className="w-[40%] ">
        <img src={Abt3} className=" object-contain h-[340px]" alt="" />
      </div>

      <div className="w-[60%] flex flex-col align-center justify-center">
        <h2 className="text-3xl font-bold pb-8 font-poppins">Our Mission</h2>
        <p className="font-poppins text-xl justify-center">
          To provide customers with delicious, freshly cooked, premium, and
          healthy meals—both African and continental—while promoting a “healthy
          and happy home.” We aim to make every event and dining experience
          special, memorable and worth every penny.
        </p>
      </div>
    </section>
  );
};

export default Mission;
