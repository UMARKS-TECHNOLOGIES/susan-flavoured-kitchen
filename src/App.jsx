import React from 'react'
import Home from './pages/landingPage/Home'
import Menu from './pages/menuPage/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/product details/ProductDetails'
import Cart from './pages/cartPage/Cart'
import { CartProvider } from './components/shared/CartProvider'
import Checkout from './pages/checkoutPage/Checkout'
import OrderConfirmation from './pages/orderConfirmationpage/OrderConfirmation'
import ContactUs from './pages/contactUsPage/ContactUs'
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
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/orderconfirmation' element={<OrderConfirmation />} />
          <Route path='/contact-us' element={<ContactUs />} />

        </Routes>
        </CartProvider>
      </BrowserRouter>
  )
}

export default App