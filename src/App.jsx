import React from 'react'
import Home from './pages/landingPage/Home'
import Menu from './pages/menuPage/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/product details/ProductDetails'
import Cart from './pages/cartPage/Cart'
import { CartProvider } from './components/shared/CartProvider'
const App = () => {
  return (
    <BrowserRouter>
    <CartProvider>
        <Routes>
          {/* dynamic product route */}
          <Route path='/product/:id' element={<ProductDetails />} />
          {/* other routes */}
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
        </CartProvider>
      </BrowserRouter>
  )
}

export default App