import React from "react";
import Food from "../../../assets/ricebeans.jpg";
const About = () => {
  return (
    <section className="mt-15">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-medium">About Us</h2>
        <div className="py-4 flex justify-center items-center space-x-8">
          <div
            className="w-3xl h-80 bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-br-lg"
            style={{
              backgroundImage: `url(${Food})`,
            }}
          ></div>
          <div className="max-w-lg">
            <p className="text-lg font-medium leading-tight">
              At SFK, we pride ourselves on delivering delicious, freshly
              prepared, and high-quality meals that make everyday dining and
              special events both memorable and meaningful. We specialise in{" "}
              <br /> <br />
              African/Nigerian cuisine, continental dishes, pastries, canapés,
              desserts, and signature non-alcoholic drinks, all crafted with{" "}
              <br /> <br />
              care, creativity, and bold flavours. We provide exceptional meal
              prep services, daily meal deliveries, and full indoor and outdoor
              catering for both individuals and corporate clients across the
              East Midlands and beyond.preparation in every bite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
