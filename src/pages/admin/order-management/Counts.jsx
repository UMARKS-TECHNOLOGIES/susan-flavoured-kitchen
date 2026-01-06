export default function Counts({ counts }) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
        Total Orders: {counts.total}
      </span>
      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">
        Pending: {counts.pending}
      </span>
      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">
        Preparing: {counts.preparing}
      </span>
      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
        Delivered: {counts.delivered}
      </span>
      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-medium">
        Cancelled: {counts.cancelled}
      </span>
      <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full font-medium">
        Payment Failed: {counts.paymentFailed}
      </span>
    </div>
  );
}
