import React from 'react';

const LoginSkeleton = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-10 bg-[#fffcfa] animate-pulse">
      <div className="py-5">
        <div className="h-20 w-32 bg-gray-200 rounded mx-auto" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[450px] lg:h-[500px] bg-gray-300 rounded-lg" />

        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-lg bg-white p-6 rounded-xl space-y-5">
            <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto" />
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-1/3 ml-auto" />
            <div className="h-12 bg-gray-300 rounded" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSkeleton;
