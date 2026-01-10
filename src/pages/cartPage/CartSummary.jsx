const CartSummary = ({ subtotal }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-fit sticky top-24">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      <div className="flex justify-between text-sm mb-2">
        <span>Subtotal</span>
        <span>₦{subtotal.toLocaleString()}</span>
      </div>

      <div className="flex justify-between font-semibold text-lg border-t pt-4 mt-4">
        <span>Total</span>
        <span>₦{subtotal.toLocaleString()}</span>
      </div>

      <button className="mt-6 w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-500">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
