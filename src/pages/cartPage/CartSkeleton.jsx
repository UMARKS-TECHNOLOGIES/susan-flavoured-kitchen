const CartSkeleton = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map(i => (
        <div
          key={i}
          className="flex gap-4 bg-white p-4 rounded-xl animate-pulse"
        >
          <div className="w-24 h-24 bg-gray-200 rounded-lg" />
          <div className="flex-1 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-1/3" />
            <div className="h-3 bg-gray-200 rounded w-1/4" />
            <div className="h-8 bg-gray-200 rounded w-32" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartSkeleton;
