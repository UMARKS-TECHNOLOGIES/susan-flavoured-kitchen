import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ProductHeader from './components/ProductHeader'
import ProductAccordion from './components/ProductAccordion'
import GoesWellWith from './components/GoesWellWith'
import ReviewList from './components/ReviewList'

const ProductDetails = () => {
  return (
    <section className="bg-[#fffcfa]">
      <Navbar />
      <div className="pt-10 pb-20 space-y-12">
        <ProductHeader />
        <hr className='border-gray-300 border'/>
        <GoesWellWith />
        <ReviewList />
      </div>
      <Footer />
    </section>
  )
}

export default ProductDetails