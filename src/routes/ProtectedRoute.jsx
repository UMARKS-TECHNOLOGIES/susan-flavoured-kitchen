import Preloader from '@/components/shared/Preloader';
import { useAuth } from '../store/useAuth';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <Preloader />;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
