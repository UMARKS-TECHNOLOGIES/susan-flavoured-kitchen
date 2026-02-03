import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const AuthPromptModal = ({ open, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose();
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 mx-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              You need an account to continue
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Sign in or register to add items to your cart and place orders. It
              only takes a minute.
            </p>

            <div className="mt-5 flex gap-3">
              <button
                onClick={() => navigate('/login')}
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-medium"
              >
                Login
              </button>

              <button
                onClick={() => navigate('/signup')}
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm font-medium"
              >
                Register
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              We&apos;ll save your cart when you sign in.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="text-gray-400 hover:text-gray-600 p-2 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPromptModal;
