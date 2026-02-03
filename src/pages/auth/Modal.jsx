import React from 'react';

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-xl">
        <h2 className="text-lg font-bold mb-3">{title}</h2>
        <div className="text-sm text-gray-600">{children}</div>
        <button
          onClick={onClose}
          className="mt-5 w-full h-11 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Modal;
