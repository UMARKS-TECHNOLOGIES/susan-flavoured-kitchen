import React from "react";
import How from "@/assets/How.svg";
const HowItWorks = () => {
  return (
    <section className="bg-[#FFF9F4] relative pt-8 pb-11 ">
      <div className="w-[85%] mx-auto">
        <h1 className="text-4xl font-bold">How Our Cathering Works</h1>

        <div className="flex gap-6 mt-9">
          <div className="flex w-[60%]">
            <div className="w-auto">
              <div className="flex flex-col items-center gap-5">
                <div className="w-[50px] h-[50px] border rounded-full flex items-center justify-center text-[#FF6E00] font-bold text-2xl border-[#FF6E00]">
                  1
                </div>
                <div className="h-[80px] border-l-2 border-dashed border-[#FF6E00]"></div>

                <div className="w-[50px] h-[50px] border rounded-full flex items-center justify-center text-[#FF6E00] font-bold text-2xl border-[#FF6E00]">
                  2
                </div>

                <div className="h-[80px] border-l-2 border-dashed border-[#FF6E00]"></div>

                <div className="w-[50px] h-[50px] border rounded-full flex items-center justify-center text-[#FF6E00] font-bold text-2xl border-[#FF6E00]">
                  3
                </div>
                <div className="h-[80px] border-l-2 border-dashed border-[#FF6E00]"></div>

                <div className="w-[50px] h-[50px] border rounded-full flex items-center justify-center text-[#FF6E00] font-bold text-2xl border-[#FF6E00]">
                  4
                </div>
              </div>
            </div>

            <div className="flex-1 ml-5">
              <div className="pt-2 pb-11">
                <h1 className="text-2xl font-bold pb-3">
                  Share Your Event Details
                </h1>
                <p className="font-medium text-[#333333] text-medium">
                  Tell us your date, location, number of guests, and preferred
                  dishes. We'll confirm availability within 24 hours.
                </p>
              </div>

              <div className="pt-5 pb-11">
                <h1 className="text-2xl font-bold pb-3">
                  Receive a Custom Quote
                </h1>
                <p className="font-medium text-[#333333] text-medium">
                  We create a tailored quote based on your guest count and menu
                  selection — clear, simple, and cost-friendly.
                </p>
              </div>

              <div className="pt-6 pb-11">
                <h1 className="text-2xl font-bold pb-2">
                  Fresh Preparation on Event Day
                </h1>
                <p className="font-medium text-[#333333] text-medium">
                  Mostly onsite cooking for guaranteed freshness.
                </p>
              </div>

              <div className="pt-9">
                <h1 className="text-2xl font-bold pb-3">
                  Strict Hygiene Standards
                </h1>
                <p className="font-medium text-[#333333] text-medium">
                  Fully 5-star hygiene rated by the UK Food Standards Agency.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <img src={How} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <hr className="w-full absolute bottom-0 mx-auto mt-20" />
    </section>
  );
};

export default HowItWorks;
