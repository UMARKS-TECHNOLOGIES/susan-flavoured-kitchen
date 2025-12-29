import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Amazing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1s delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="w-full mt-10 lg:mt-15 pb-10 lg:pb-15 h-auto lg:h-[200px] flex flex-col items-center justify-center gap-4">
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col items-center text-center gap-3">
          <Skeleton width="60%" height={32} />
          <Skeleton width="80%" height={20} />
          <Skeleton width="70%" height={20} />
        </div>

        <div className="w-full lg:w-[60%] mx-auto mt-8 lg:mt-15 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
          <Skeleton width="200px" height={48} />
          <Skeleton width="200px" height={48} />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full mt-10 lg:mt-15 pb-10 lg:pb-15 h-auto lg:h-[200px]">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className="mx-auto flex flex-col items-center text-center">
          <h1 className="text-2xl lg:text-3xl font-bold">
            Ready to Bring Amazing Food to Your Event?
          </h1>
          <p className="text-base lg:text-[18px] pt-2 px-2">
            Tell us what you’re planning — we’ll help you serve fresh,
            flavourful dishes your guests will love.
          </p>
        </div>

        <div className="w-full lg:w-[60%] mx-auto mt-8 lg:mt-15 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
          <Link className="bg-[#FF6E00] px-6 py-3 lg:px-5 lg:py-2 rounded rounded-tr-none rounded-bl-none text-white font-bold text-center w-full lg:w-auto hover:bg-orange-600 transition-colors">
            Request Catering quote
          </Link>

          <Link className="bg-transparent border border-[#FF6E00] px-6 py-3 lg:px-16 lg:py-2 rounded rounded-tr-none rounded-bl-none font-bold text-[#FF6E00] text-center w-full lg:w-auto hover:bg-orange-50 transition-colors">
            Call Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Amazing;
