import React from 'react'
import LandingNavbar from '../../components/layout/LandingNavbar'
import Herosection from './components/Herosection'

const Home = () => {
  return (
    <div className='bg-[#fffcfa] py-4'>
      <LandingNavbar />
      <Herosection />
    </div>
  )
}

export default Home