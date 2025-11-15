import React from 'react'
import Home from './pages/landingPage/Home'
import Menu from './pages/menuPage/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/product details/ProductDetails'
import Cart from './pages/cartPage/Cart'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/product' element={<ProductDetails />}/>
        <Route path='/cart' element={<Cart />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App