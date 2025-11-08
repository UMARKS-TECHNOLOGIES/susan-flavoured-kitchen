import React from 'react'
import LandingNavbar from '../../components/layout/LandingNavbar'
import Herosection from './components/Herosection'
import Categories from './components/Categories'
import PopularDishes from './components/PopularDishes'

const Home = () => {
  return (
    <div className='bg-[#fffcfa] py-4'>
      <LandingNavbar />
      <Herosection />
      <Categories />
      <PopularDishes />
    </div>
  )
}

export default Home