import React, { useEffect } from 'react';

import Home from './pages/landingPage/Home';
import Menu from './pages/menuPage/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/product details/ProductDetails';
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
import { useAuth } from './store/useAuth';
import Categories from './pages/admin/menu/Categories';
import Products from './pages/admin/menu/Products';
import OrdersManagement from './pages/admin/order-management/OrdersManagement';
import Users from './pages/admin/users/Users';
import Payments from './pages/admin/Payments';
import AdminLayout from './pages/admin/adminLayout/AdminLayout';
import Index from './pages/admin/Index';
import SearchPage from './components/layout/Navbar/SearchPage';
import PublicLayout from './components/PublicLayout/PublicLayout';
import { CartProvider } from './pages/cartPage/CartContext';
import { Toaster } from 'react-hot-toast';
import CartPage from './pages/cartPage/CartPage';

const App = () => {
  const { initializeAuth } = useAuth();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-right" />

      <CartProvider>
        <Routes>
          {/* ================= PUBLIC LAYOUT ================= */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/event" element={<HomeEvent />} />
            <Route path="/catering-quote" element={<CateringQuote />} />

            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartPage />
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
          </Route>

          {/* ================= AUTH  ================= */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="/resetpassword" element={<ResetPasswordPage />} />

          {/* ================= ADMIN DASHBOARD ================= */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }
          >
            <Route index element={<Index />} />
            <Route path="categories" element={<Categories />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<OrdersManagement />} />
            <Route path="users" element={<Users />} />
            <Route path="payments" element={<Payments />} />
          </Route>

          {/* ================= USER DASHBOARD ================= */}
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

          {/* ================= PAYMENT ================= */}
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancel" element={<PaymentCancel />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
