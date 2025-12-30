import React from "react";
import Picture from "../../../assets/bigcatering.jpeg";
import { Button } from "../../../components/ui/button";
const Catering = () => {
  return (
    <section className="my-10">
      <div className="w-full lg:max-w-7xl mx-auto">
        <h2 className="text-2xl font-medium px-4 lg:px-40 mb-4 lg:mb-0">
          Catering Services
        </h2>

        <div className="px-4 lg:px-0">
          <div
            className="w-full mt-4 lg:mt-10 h-[400px] lg:h-96 bg-cover bg-center bg-no-repeat rounded-lg lg:rounded-br-lg lg:rounded-tl-lg overflow-hidden"
            style={{
              backgroundImage: `url(${Picture})`,
            }}
          >
            <div className="flex w-full h-full bg-black/60 lg:bg-black/50 items-center justify-center">
              <div className="w-full px-4 lg:px-0 lg:w-[70%] text-center lg:text-left">
                <div className="lg:px-10 flex flex-col items-center lg:items-start">
                  <h2 className="font-bold text-white text-3xl lg:text-5xl leading-tight text-center lg:text-left">
                    Catering that combines Hygiene, Taste and style
                  </h2>
                  <p className="my-4 leading-snug lg:leading-tight text-white font-medium text-base lg:text-lg w-full lg:w-[560px] text-center lg:text-left opacity-90 lg:opacity-100">
                    Whether it’s a private dinner, large celebration, or
                    corporate lunch, we tailor every menu to suit your event’s
                    theme and taste.
                  </p>
                </div>
                <div className="flex items-center justify-center lg:justify-center mt-4 lg:mt-0">
                  <Button
                    className="bg-orange-600 rounded-br-lg rounded-tl-lg cursor-pointer hover:bg-orange-500 text-white font-medium px-8 py-6 lg:px-4 lg:py-2"
                    size="lg"
                  >
                    Plan Your Event
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catering;
