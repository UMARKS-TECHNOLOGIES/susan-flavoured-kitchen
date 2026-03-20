import React from "react";
import Picture from "../../../assets/chefstory1.jpeg";

const About = () => {
  return (
    <section className="bg-white py-20 px-8 lg:px-24 overflow-hidden">
      <div className="w-full lg:max-w-[1200px] mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">
          Our Culinary <span className="text-orange-600">Story</span>
        </h2>
        <div className="w-24 h-1.5 bg-orange-500 rounded-full mx-auto"></div>
      </div>

      <div className="w-full lg:max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-[45%]">
          <div className="relative group">
            <img
              src={Picture}
              alt="Susan Flavoured Kitchen"
              className="w-full h-[350px] lg:h-[500px] object-cover rounded-2xl shadow-xl transition-transform duration-700 hover:scale-[1.02]"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 p-6 rounded-2xl shadow-lg hidden md:block">
              <p className="text-white font-bold text-2xl">10+ Years</p>
              <p className="text-white/80 text-sm">Of Culinary Excellence</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[55%] flex flex-col gap-6">
          <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-xl">
            Welcome to{" "}
            <span className="font-bold text-gray-900 border-b-2 border-orange-100">
              Susan Flavoured Kitchen Limited
            </span>
            , your home of authentic and flavorful catering in Nottingham.
            Founded in 2020 by Susan Chioma Nwobo,{" "}
            <b className="text-orange-600">SFK</b> was born from a lifelong
            passion for cooking and the joy of bringing people together through
            food.
            <br />
            <br />
            With over 20 years of culinary experience, Susan's mission remains
            simple: to celebrate life's moments with exceptional taste and
            uncompromising quality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            {[
              {
                title: "Quality Ingredients",
                desc: "Fresh, locally sourced produce",
              },
              { title: "Traditional Taste", desc: "Authentic family recipes" },
              { title: "Fast Delivery", desc: "Hot meals at your doorstep" },
              { title: "Event Catering", desc: "Making your moments special" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 bg-orange-50/70 rounded-2xl border border-orange-100/30 hover:bg-orange-50 transition-colors"
              >
                <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-orange-200">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
