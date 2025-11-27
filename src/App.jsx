<<<<<<< HEAD
import React from "react";
import Home from "./pages/landingPage/Home";
import Menu from "./pages/menuPage/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/product details/ProductDetails";
import Cart from "./pages/cartPage/Cart";
import { CartProvider } from "./components/shared/CartProvider";
import AboutUs from "./pages/about-us/AboutUs";
=======
import React from 'react'
import Home from './pages/landingPage/Home'
import Menu from './pages/menuPage/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/product details/ProductDetails'
import Cart from './pages/cartPage/Cart'
import { CartProvider } from './components/shared/CartProvider'
import Checkout from './pages/checkoutPage/Checkout'
>>>>>>> 0285f0cd7d2d1619f340caa1d94dde52d7199342
const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          {/* dynamic product route */}
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* other routes */}
<<<<<<< HEAD
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutUs />} />
=======
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />

>>>>>>> 0285f0cd7d2d1619f340caa1d94dde52d7199342
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
