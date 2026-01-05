const Modal = ({ type, message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
      <h2 className={`text-xl font-bold mb-4 ${type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
        {type === 'success' ? 'Success' : 'Error'}
      </h2>
      <p className="mb-6">{message}</p>
      <button
        onClick={onClose}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        OK
      </button>
    </div>
  </div>
);

export default Modal;