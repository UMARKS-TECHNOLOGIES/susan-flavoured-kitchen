import React from "react";
import Logo from "../../assets/Logo.jpeg";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFF9F4]">
      <div className="relative flex flex-col items-center">
        {/* Logo Container with Pulse Effect */}
        <div className="relative mb-8 p-4 rounded-full bg-white shadow-xl animate-pulse">
          <img
            src={Logo}
            alt="Susan Flavoured Kitchen"
            className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-full"
          />
        </div>

        {/* Custom Loading Bar */}
        <div className="w-48 h-1.5 bg-orange-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-500 rounded-full animate-[loading_1.5s_ease-in-out_infinite]"
            style={{
              width: "50%",
              animation: "loading 1.5s ease-in-out infinite",
            }}
          ></div>
        </div>

        <p className="mt-4 text-orange-800 font-medium text-sm tracking-widest uppercase animate-pulse">
          Loading Freshness...
        </p>
      </div>

      <style>{`
        @keyframes loading {
          0% {
            transform: translateX(-150%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(150%);
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
