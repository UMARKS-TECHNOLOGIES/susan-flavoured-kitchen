import React from "react";
import Cl1 from "@/assets/outdoor.jpeg";
const ClientReview = () => {
  return (
    <section className="h-auto pb-10 lg:pb-0 lg:h-[400px] relative bg-[#FFF9F4] lg:bg-transparent">
      <div className="hidden lg:block w-full absolute inset-0">
        <img
          src={Cl1}
          className="h-[400px] object-cover w-full rounded-b-[10px] relative z-1"
          alt=""
        />
        <div className="bg-black/70 w-full h-full absolute top-0 z-2 rounded-b-[10px]"></div>

        {/* Mobile Overlay Text - Visible only on mobile inside the image area if desired, or we can keep it below. 
            The design usually has text over image. Let's try keeping text over image for mobile too if possible, 
            or below if it's too much text. The text is quite long. 
            Let's put the Title on image in mobile, and quote below? Or all on image?
            Code implies Overlay. Let's keep overlay for desktop. For mobile, maybe stack it?
            Actually, the previous Hero refactor used stacking. Let's stack here too for consistency and readability.
        */}
      </div>

      <div className="static lg:absolute px-6 lg:pl-[150px] w-full lg:w-[80%] pt-16 lg:pt-0 lg:mt-0 lg:top-[80px] z-3 text-center lg:text-left">
        {/* On mobile, let's make this text dark since it's on white background now (if stacked). 
            Wait, if I stack it below the image, the background is white. 
            Navigate: text-gray-800 on mobile, text-white on desktop.
        */}
        <h1 className="text-3xl lg:text-5xl leading-tight lg:leading-[1.2] pb-3 text-gray-900 lg:text-white font-bold">
          What Our Clients Are Saying
        </h1>
        <p className="text-gray-700 lg:text-white pt-4 lg:pt-16 lg:pl-40 w-full lg:w-[70%] text-base lg:text-lg italic">
          “Everything was beyond perfect! The food arrived fresh, beautifully
          packaged, and full of flavour. Our guests couldn’t stop talking about
          it.”  -Amara, Wedding Reception
        </p>
      </div>
    </section>
  );
};

export default ClientReview;
