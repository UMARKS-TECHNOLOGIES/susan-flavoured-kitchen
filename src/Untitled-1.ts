import ProtectedRoute from './routes/ProtectedRoute'
import AdminRoute from './routes/AdminRoute'

<Route path="/cart" element={
  <ProtectedRoute>
    <Cart />
  </ProtectedRoute>
} />
<Route path="/checkout" element={
  <ProtectedRoute>
    <Checkout />
  </ProtectedRoute>
} />
<Route path="/admin" element={
  <AdminRoute>
    <AdminDashboard />
  </AdminRoute>
} />