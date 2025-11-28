import React from "react";
import Cl1 from "@/assets/CL1.jpg";
const ClientReview = () => {
  return (
    <section className="h-[400px]  relative">
      <div className="w-full absolute">
        <img
          src={Cl1}
          className="h-[400px] relative z-1 object-cover w-full rounded-b-[10px]"
          alt=""
        />
        <div className="bg-black/70 w-full h-[400px] absolute top-0 z-2 rounded-b-[10px]"></div>
      </div>

      <div className="absolute pl-[150px] w-[80%] top-[80px] z-3">
        <h1 className="text-5xl leading-[1.2] pb-3 text-white font-bold">
          What Our Clients Are Saying
        </h1>
        <p className="text-white pt-16 pl-40 w-[70%] text-lg">
          “Everything was beyond perfect! The food arrived fresh, beautifully
          packaged, and full of flavour. Our guests couldn’t stop talking about
          it.”  -Amara, Wedding Reception
        </p>
      </div>
    </section>
  );
};

export default ClientReview;
