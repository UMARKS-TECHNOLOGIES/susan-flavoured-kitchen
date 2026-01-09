import React from 'react';
import Herosection from './components/Herosection';
import Categories from './components/Categories';
import PopularDishes from './components/PopularDishes';
import About from './components/About';
import Catering from './components/Catering';
import Testimonial from './components/Testimonial';

const Home = () => {
  return (
    <>
      <Herosection />
      <Categories />
      <PopularDishes />
      <About />
      <Catering />
      <Testimonial />
    </>
  );
};

export default Home;
