import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const LoginPromptModal = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsOpen(false);
    navigate('/login'); 
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 max-w-sm w-full text-center">
        <Dialog.Title className="text-lg font-semibold mb-4">
          Login Required
        </Dialog.Title>
        <Dialog.Description className="text-gray-600 mb-6">
          You need to login to add this item to your cart.
        </Dialog.Description>
        <div className="flex justify-center gap-4">
          <Button
            onClick={handleLogin}
            className="bg-orange-600 hover:bg-orange-500 text-white"
          >
            Login Now
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
            Cancel
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default LoginPromptModal;
