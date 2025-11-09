import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Herosection from './components/Herosection'
import Categories from './components/Categories'
import PopularDishes from './components/PopularDishes'
import About from './components/About'

const Home = () => {
  return (
    <div className='bg-[#fffcfa] py-4'>
      <Navbar />
      <Herosection />
      <Categories />
      <PopularDishes />
      <About />
    </div>
  )
}

export default Home