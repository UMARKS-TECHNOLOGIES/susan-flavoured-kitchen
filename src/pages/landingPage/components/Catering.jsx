import React from "react";
import Picture from "../../../assets/cath.webp";
import { Button } from "../../../components/ui/button";
const Catering = () => {
  return (
    <section className="mt-15 lg:mt-28 mb-10">
      <div className="w-full lg:max-w-7xl mx-auto">
        <h2 className="text-2xl font-medium px-4 lg:px-30 lg:mb-0">
          Catering Services
        </h2>

        <div className=" lg:px-0">
          <div
            className="w-full mt-2 lg:mt-4 h-[400px] lg:h-96 bg-center bg-cover bg-no-repeat rounded lg:rounded-br-lg lg:rounded-tl-lg overflow-hidden"
            style={{
              backgroundImage: `url(${Picture})`,
            }}
          >
            <div className="flex w-full h-full bg-black/70 items-center justify-center flex-col relative px-4 text-center">
              <div className="max-w-[700px] flex flex-col items-center justify-center">
                <h2 className="font-bold text-white text-3xl lg:text-5xl leading-tight mb-4">
                  Catering that combines Hygiene, Taste and style
                </h2>
                <p className="leading-snug lg:leading-relaxed text-white font-medium text-base lg:text-lg w-full max-w-[560px] opacity-90 lg:opacity-100 mb-8 mx-auto">
                  Whether it’s a private dinner, large celebration, or corporate
                  lunch, we tailor every menu to suit your event’s theme and
                  taste.
                </p>

                <Button
                  className="bg-[#ff6e00] hover:bg-[#e66300] hover:shadow-lg hover:-translate-y-0.5 transition-all text-white font-semibold px-6 py-3 lg:px-8 lg:py-3 h-11 lg:h-12 rounded-lg text-base lg:text-lg"
                  size="lg"
                >
                  Plan Your Event
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catering;
