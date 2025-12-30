import { useAuth } from '../store/useAuth';
import { Navigate } from 'react-router-dom';

export default function AdminRoute({ children }) {
  const { admin, loading } = useAuth();
  if (loading) return null;
  if (!admin) return <Navigate to="/login" replace />;
  if (admin) return children;
}
