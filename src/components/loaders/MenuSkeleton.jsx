const MenuSkeleton = ({ count = 4 }) => {
  return (
    <div className="space-y-10 animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>
          {/* Category title */}
          <div className="h-6 w-48 bg-gray-300 rounded mb-6" />

          {/* Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, j) => (
              <div key={j} className="p-4 border rounded-xl space-y-4">
                <div className="h-4 w-3/4 bg-gray-300 rounded" />
                <div className="h-4 w-1/2 bg-gray-300 rounded" />
                <div className="h-32 bg-gray-300 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuSkeleton;
