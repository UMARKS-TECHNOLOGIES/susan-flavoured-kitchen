const DeliveryMethod = ({ deliveryMethod, setDeliveryMethod }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
      <h2 className="text-lg font-semibold">Delivery Method</h2>

      {[
        { id: 'delivery', label: 'Home Delivery' },
        { id: 'pickup', label: 'Pick UP (coming soon)' },
      ].map(m => (
        <label
          key={m.id}
          className={`flex justify-between p-4 border rounded-lg cursor-pointer
          ${deliveryMethod === m.id ? 'border-orange-500 bg-orange-50' : ''}`}
        >
          <span>{m.label}</span>
          <input
            type="radio"
            checked={deliveryMethod === m.id}
            onChange={() => setDeliveryMethod(m.id)}
            disabled={m.id === 'pickup'}
          />
        </label>
      ))}
    </div>
  );
};

export default DeliveryMethod;
