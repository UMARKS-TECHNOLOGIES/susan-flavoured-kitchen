const InputCard = ({ icon, label, error, ...props }) => (
  <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3">
      <span className="w-5 h-5 text-orange-500">{icon}</span>
      <label className="text-xs text-gray-500 font-medium">{label}</label>
    </div>

    <input
      className={`w-full mt-1 bg-white border rounded-lg p-3 focus:ring-2 focus:outline-none shadow-sm
        ${
          error
            ? 'border-red-500 focus:ring-red-300'
            : 'border-gray-200 focus:ring-orange-300'
        }`}
      {...props}
    />

    {/* Error message */}
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

export default InputCard;
