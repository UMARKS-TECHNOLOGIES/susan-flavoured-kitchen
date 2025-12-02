import React from "react";
import Picture from "../../../assets/chefstory1.jpeg";
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
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 text-justify lg:text-left">
              At Susan Flavoured Kitchen, we bring the heart of home cooking to
              your table. Our passion for authentic flavors and fresh
              ingredients ensures every meal is a delightful experience. Whether
              you're craving a quick lunch or planning a special dinner, we are
              here to serve you with love and excellence.
              <br className="hidden lg:block" />
              <br className="hidden lg:block" />
              Join us on a culinary journey where tradition meets modern taste.
              We believe in creating memories through food, one dish at a time.
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
