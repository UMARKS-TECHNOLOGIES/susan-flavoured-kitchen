export default function Counts({ counts }) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 text-[10px] sm:text-xs">
      <span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-full font-bold uppercase tracking-wider">
        Total Orders: {counts.total}
      </span>
      <span className="px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-full font-bold uppercase tracking-wider">
        Pending: {counts.pending}
      </span>
      <span className="px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full font-bold uppercase tracking-wider">
        Preparing: {counts.preparing}
      </span>
      <span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full font-bold uppercase tracking-wider">
        Delivered: {counts.delivered}
      </span>
      <span className="px-3 py-1.5 bg-red-100 text-red-700 rounded-full font-bold uppercase tracking-wider">
        Cancelled: {counts.cancelled}
      </span>
      <span className="px-3 py-1.5 bg-pink-100 text-pink-700 rounded-full font-bold uppercase tracking-wider">
        Payment Failed: {counts.paymentFailed}
      </span>
    </div>
  );
}
