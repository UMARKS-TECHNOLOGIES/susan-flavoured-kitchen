import React from "react";
import Home from "./pages/landingPage/Home";
import Menu from "./pages/menuPage/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/product details/ProductDetails";
import Cart from "./pages/cartPage/Cart";
import { CartProvider } from "./components/shared/CartProvider";
import AboutUs from "./pages/about-us/AboutUs";
import Checkout from "./pages/checkoutPage/Checkout";
import HomeEvent from "./pages/event-cathering-page/HomeEvent";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          {/* dynamic product route */}
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* other routes */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/event" element={<HomeEvent />}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
