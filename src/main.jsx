import { useAuth } from './store/useAuth';
import { useEffect } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthInitializer />
    <App />
  </StrictMode>
);

function AuthInitializer() {
  useEffect(() => {
    useAuth.getState().fetchUser();
  }, []);
  return null;
}
