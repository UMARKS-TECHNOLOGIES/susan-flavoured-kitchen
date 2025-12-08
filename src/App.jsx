import React, { useState, useEffect } from "react";
import Home from "./pages/landingPage/Home";
import Menu from "./pages/menuPage/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/product details/ProductDetails";
import Cart from "./pages/cartPage/Cart";
import { CartProvider } from "./components/shared/CartProvider";
import Checkout from "./pages/checkoutPage/Checkout";
import OrderConfirmation from "./pages/orderConfirmationpage/OrderConfirmation";
import ContactUs from "./pages/contactUsPage/ContactUs";
import AboutUs from "./pages/about-us/AboutUs";
import HomeEvent from "./pages/event-cathering-page/HomeEvent";
import ScrollToTop from "./components/shared/ScrollToTop";
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import SignupPage from "./pages/auth/SignupPage";
import CateringQuote from "./pages/cateringQuotePage/CateringQuote";
import AdminDashboardLayout from "./pages/adminPage/components/AdminDashboardLayout";
import AdminDashboard from "./pages/adminPage/AdminDashboard";
import Preloader from "./components/shared/Preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to hide loader
    const hideLoader = () => {
      setTimeout(() => setIsLoading(false), 1500); // 1.5s delay for smooth experience
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader);
    }

    // Safety fallback: ensure loader goes away after 4 seconds max even if load event lags
    const timeout = setTimeout(hideLoader, 4000);

    return () => {
      window.removeEventListener("load", hideLoader);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <BrowserRouter>
      {isLoading && <Preloader />}
      <ScrollToTop />
      <CartProvider>
        <Routes>
          {/* auth route */}

          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="/resetpassword" element={<ResetPasswordPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* dynamic product route */}
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* other routes */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderconfirmation" element={<OrderConfirmation />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/event" element={<HomeEvent />} />
          <Route path="/catering-quote" element={<CateringQuote />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
