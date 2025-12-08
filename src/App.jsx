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
    const handleLoad = async () => {
      // 1. Wait for window load if not already complete
      if (document.readyState !== "complete") {
        await new Promise((resolve) =>
          window.addEventListener("load", resolve)
        );
      }

      // 2. Explicitly wait for all images in the document to be fully loaded
      const imagePromises = Array.from(document.images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Don't block on error
        });
      });

      await Promise.all(imagePromises);

      // 3. Add a small optional delay for animation smoothness
      setTimeout(() => setIsLoading(false), 1500);
    };

    handleLoad();

    // Safety fallback: only force close after 15 seconds if something gets stuck
    const timeout = setTimeout(() => setIsLoading(false), 15000);

    return () => clearTimeout(timeout);
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
