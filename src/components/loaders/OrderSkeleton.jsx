const OrderSkeleton = () => (
  <div className="bg-white border rounded-2xl p-5 animate-pulse">
    <div className="flex justify-between mb-4">
      <div className="h-3 w-20 bg-gray-200 rounded" />
      <div className="h-5 w-16 bg-gray-200 rounded-full" />
    </div>

    <div className="h-7 w-28 bg-gray-200 rounded mb-2" />
    <div className="h-4 w-32 bg-gray-200 rounded" />
  </div>
);
export default OrderSkeleton;
