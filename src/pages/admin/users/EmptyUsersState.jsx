export default function EmptyUsersState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-6xl mb-4">👤</div>

      <h3 className="text-xl font-semibold text-gray-800">No users yet</h3>

      <p className="text-gray-500 mt-2 max-w-sm">
        Users will appear here once they sign up or place an order.
      </p>
    </div>
  );
}
