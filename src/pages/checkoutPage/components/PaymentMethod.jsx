const PaymentMethod = ({ paymentType, setPaymentType }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
      <h2 className="text-lg font-semibold">Payment Method</h2>

      <label
        className={`flex justify-between p-4 border rounded-lg cursor-pointer
        ${paymentType === 'card' ? 'border-orange-500 bg-orange-50' : ''}`}
      >
        <div>
          <p className="font-medium">Card Payment</p>
          <p className="text-sm text-gray-500">Pay securely online</p>
        </div>
        <input
          type="radio"
          checked={paymentType === 'card'}
          onChange={() => setPaymentType('card')}
        />
      </label>

      <label
        className={`flex justify-between p-4 border rounded-lg cursor-pointer
        ${paymentType === 'cash' ? 'border-orange-500 bg-orange-50' : ''}`}
      >
        <div>
          <p className="font-medium">Cash on Delivery</p>
          <p className="text-sm text-gray-500">Pay when order arrives</p>
        </div>
        <input
          type="radio"
          checked={paymentType === 'cash'}
          onChange={() => setPaymentType('cash')}
        />
      </label>
    </div>
  );
};

export default PaymentMethod;
