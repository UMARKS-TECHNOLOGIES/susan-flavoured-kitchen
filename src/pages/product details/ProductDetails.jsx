import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ProductHeader from './components/ProductHeader'
import GoesWellWith from './components/GoesWellWith'
import ReviewList from './components/ReviewList'
import { useNavigate, useParams } from 'react-router-dom'
import { MenuData } from '../menuPage/components/MenuData'
import { Button } from '../../components/ui/button'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const findProducts = (productId) => {
    const allproducts = [
      ...MenuData.soup,
      ...MenuData.rice,
      ...MenuData.snacks,
      ...MenuData.drinks,
    ]
    return allproducts.find(items => items.id === parseInt(productId));
  }
  const product = findProducts(id)

  if (!product) {
    return (
      <section className="bg-[#fffcfa] min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Button
            onClick={() => navigate('/menu')}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Browse Menu
          </Button>
        </div>
        <Footer />
      </section>
    );
  }

  return (
    <section className="bg-[#fffcfa]">
      <Navbar />
      <div className="pt-10 pb-20 space-y-12">
        <ProductHeader product={product} />
        <hr className='border-gray-300 border' />
        <GoesWellWith />
        <ReviewList />
      </div>
      <Footer />
    </section>
  )
}

export default ProductDetails