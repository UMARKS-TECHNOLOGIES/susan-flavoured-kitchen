export default function UsersSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-5 shadow-sm animate-pulse space-y-3"
        >
          <div className="h-4 w-1/3 bg-gray-200 rounded" />
          <div className="h-3 w-1/2 bg-gray-200 rounded" />
          <div className="h-20 bg-gray-100 rounded" />
        </div>
      ))}
    </div>
  );
}
