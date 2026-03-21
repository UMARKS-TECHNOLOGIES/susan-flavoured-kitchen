import React, { Suspense, lazy } from 'react';
import Herosection from './components/Herosection';

// Lazy loading the components below the fold
const Categories = lazy(() => import('./components/Categories'));
const PopularDishes = lazy(() => import('./components/PopularDishes'));
const About = lazy(() => import('./components/About'));
const Catering = lazy(() => import('./components/Catering'));
const Testimonial = lazy(() => import('./components/Testimonial'));

const Home = () => {
  return (
    <>
      <Herosection />
      <Suspense fallback={
        <div className="w-full h-64 flex items-center justify-center bg-[#fff9f4] animate-pulse">
            <span className="text-gray-400 font-medium">Loading sections...</span>
        </div>
      }>
        <Categories />
        <PopularDishes />
        <About />
        <Catering />
        <Testimonial />
      </Suspense>
    </>
  );
};

export default Home;
