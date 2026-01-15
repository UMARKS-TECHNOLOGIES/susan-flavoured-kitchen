import React, { useState } from "react";
import Picture from "../../../assets/chefstory1.jpeg";
import { Button } from "../../../components/ui/button";

const About = () => {
  const [expanded, setExpanded] = useState(false);

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
            <p
              className={`text-gray-600 text-base lg:text-lg leading-relaxed mb-6 text-justify lg:text-left
                overflow-hidden transition-all duration-500 ease-in-out
                ${expanded ? "max-h-[1000px]" : "max-h-[120px]"}`}
            >
              Welcome to Susan Flavoured Kitchen Limited, a fast-growing food and catering business based in Nottingham, United kingdom, Founded in 2020
              by Susan Chioma Nwobo, SFK was born from a lifelong passion for cooking and the joy of bringing people together through food. Susan's cullinary journey
              began more than 20 years ago when she catered her own birthday celebrations at ages 16 and 20
              <br className="hidden lg:block" />
              <br className="hidden lg:block" />
              With every dish she prepared for family, friends, and community events, her love for cooking grew into a purposeful mission-and today,
              that mission is the heart of <b className="text-orange-600">SFK</b>
            </p>

            <Button
              className="bg-orange-600 hover:bg-orange-500 text-white font-medium px-8 py-2 h-11 transition-all"
              size="lg"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show Less" : "Learn More"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
