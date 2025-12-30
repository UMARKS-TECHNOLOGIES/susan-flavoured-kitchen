import React from 'react';

import Home from './pages/landingPage/Home';
import Menu from './pages/menuPage/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/product details/ProductDetails';
import Cart from './pages/cartPage/Cart';
import { CartProvider } from './components/shared/CartProvider';
import Checkout from './pages/checkoutPage/Checkout';
import OrderConfirmation from './pages/orderConfirmationpage/OrderConfirmation';
import ContactUs from './pages/contactUsPage/ContactUs';
import AboutUs from './pages/about-us/AboutUs';
import HomeEvent from './pages/event-cathering-page/HomeEvent';
import ScrollToTop from './components/shared/ScrollToTop';
import LoginPage from './pages/auth/LoginPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import SignupPage from './pages/auth/SignupPage';
import CateringQuote from './pages/cateringQuotePage/CateringQuote';
import AdminDashboardLayout from './pages/adminPage/components/AdminDashboardLayout';
import AdminDashboard from './pages/adminPage/AdminDashboard';
import PaymentSuccess from './pages/Payment/PaymentSuccess';
import PaymentCancel from './pages/Payment/PaymentCancel';

import ProtectedRoute from './routes/ProtectedRoute';
import AdminRoute from './routes/AdminRoute';
import DashboardLayout from './pages/user/dashboard/DashboardLayout';
import DashboardOrders from './pages/user/dashboard/DashboardOrders';
import DashboardCart from './pages/user/dashboard/DashboardCart';
import DashboardProducts from './pages/user/dashboard/DashboardProducts';
import DashboardHome from './pages/user/dashboard/DashboardHome';
import AccountSettings from './pages/user/dashboard/AccountSettings';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orderconfirmation"
          element={
            <ProtectedRoute>
              <OrderConfirmation />
            </ProtectedRoute>
          }
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/event" element={<HomeEvent />} />
        <Route path="/catering-quote" element={<CateringQuote />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="products" element={<DashboardProducts />} />
          <Route path="cart" element={<DashboardCart />} />
          <Route path="orders" element={<DashboardOrders />} />
          <Route path="account" element={<AccountSettings />} />
        </Route>

        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/cancel" element={<PaymentCancel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
