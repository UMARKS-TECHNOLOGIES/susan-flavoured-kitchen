import React from "react";
import How from "@/assets/How.svg";
const HowItWorks = () => {
  return (
    <section className="bg-[#FFF9F4] relative pt-8 pb-11 ">
      <div className="w-[85%] mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold">
          How Our Catering Works
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 mt-6 lg:mt-9">
          <div className="flex w-full lg:w-[60%]">
            <div className="w-auto flex-shrink-0">
              <div className="flex flex-col items-center gap-1">
                <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] border rounded-full flex items-center justify-center text-[#FF6E00] font-bold text-lg lg:text-2xl border-[#FF6E00]">
                  1
                </div>
                <div className="h-[60px] lg:h-[80px] border-l-2 border-dashed border-[#FF6E00]"></div>

                <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] border rounded-full flex items-center justify-center text-[#FF6E00] font-bold text-lg lg:text-2xl border-[#FF6E00]">
                  2
                </div>

                <div className="h-[60px] lg:h-[80px] border-l-2 border-dashed border-[#FF6E00]"></div>

                <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] border rounded-full flex items-center justify-center text-[#FF6E00] font-bold text-lg lg:text-2xl border-[#FF6E00]">
                  3
                </div>
                <div className="h-[60px] lg:h-[80px] border-l-2 border-dashed border-[#FF6E00]"></div>

                <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] border rounded-full flex items-center justify-center text-[#FF6E00] font-bold text-lg lg:text-2xl border-[#FF6E00]">
                  4
                </div>
              </div>
            </div>

            <div className="flex-1 ml-4 lg:ml-5">
              <div className="pt-1 lg:pt-2 pb-6 lg:pb-11">
                <h1 className="text-xl lg:text-2xl font-bold pb-2 lg:pb-3">
                  Share Your Event Details
                </h1>
                <p className="font-medium text-[#333333] text-sm lg:text-base">
                  Tell us your date, location, number of guests, and preferred
                  dishes. We'll confirm availability within 24 hours.
                </p>
              </div>

              <div className="pt-2 lg:pt-5 pb-6 lg:pb-11">
                <h1 className="text-xl lg:text-2xl font-bold pb-2 lg:pb-3">
                  Receive a Custom Quote
                </h1>
                <p className="font-medium text-[#333333] text-sm lg:text-base">
                  We create a tailored quote based on your guest count and menu
                  selection — clear, simple, and cost-friendly.
                </p>
              </div>

              <div className="pt-2 lg:pt-6 pb-6 lg:pb-11">
                <h1 className="text-xl lg:text-2xl font-bold pb-2 lg:pb-2">
                  Fresh Preparation on Event Day
                </h1>
                <p className="font-medium text-[#333333] text-sm lg:text-base">
                  Mostly onsite cooking for guaranteed freshness.
                </p>
              </div>

              <div className="pt-2 lg:pt-9">
                <h1 className="text-xl lg:text-2xl font-bold pb-2 lg:pb-3">
                  Strict Hygiene Standards
                </h1>
                <p className="font-medium text-[#333333] text-sm lg:text-base">
                  Fully 5-star hygiene rated by the UK Food Standards Agency.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:flex-1 h-[300px] lg:h-auto mt-6 lg:mt-0">
            <img
              src={How}
              alt=""
              className="w-full h-full object-cover rounded-lg lg:rounded-none"
            />
          </div>
        </div>
      </div>

      <hr className="w-full absolute bottom-0 mx-auto mt-20" />
    </section>
  );
};

export default HowItWorks;
