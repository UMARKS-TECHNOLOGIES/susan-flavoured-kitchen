import React from "react";
import Picture from "../../../assets/ricebeans.webp";
import { Button } from "../../../components/ui/button";

const About = () => {
  return (
    <section className="mt-10 lg:mt-20">
      <div className="w-full lg:max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="text-2xl font-medium mb-4 lg:mb-8">About Us</h2>

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Image */}
          <div className="w-full lg:w-[500px] h-[300px] lg:h-[400px] rounded-lg overflow-hidden shrink-0">
            <img
              src={Picture}
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 text-justify">
              At SFK, we pride ourselves on delivering delicious, freshly
              prepared, and high-quality meals that make everyday dining and
              special events both memorable and meaningful. We specialise in
              African/Nigerian cuisine, continental dishes, pastries, canapés,
              desserts, and signature non-alcoholic drinks, all crafted with
              care, creativity, and bold flavours. We provide exceptional meal
              prep services, daily meal deliveries, and full indoor and outdoor
              catering for both individuals and corporate clients across the
              East Midlands and beyond.
            </p>

            <Button
              className="bg-orange-600 hover:bg-orange-500 text-white font-medium px-8 py-2 h-11"
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
