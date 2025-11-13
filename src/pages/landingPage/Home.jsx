import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Herosection from './components/Herosection'
import Categories from './components/Categories'
import PopularDishes from './components/PopularDishes'
import About from './components/About'
import Catering from './components/Catering'
import Testimonial from './components/Testimonial'
import Footer from '../../components/layout/Footer'

const Home = () => {
  return (
    <div className='bg-[#fffcfa] pt-4 overflow-hidden'>
      <Navbar />
      <Herosection />
      <Categories />
      <PopularDishes />
      <About />
      <Catering />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home