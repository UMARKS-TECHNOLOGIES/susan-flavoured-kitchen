const OrderDetailsModal = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Order #{order.id}</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="space-y-2 text-sm">
          <p>Status: {order.status || 'Pending'}</p>
          <p>Total: £{order.total}</p>
          <p>Date: {new Date(order.date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
