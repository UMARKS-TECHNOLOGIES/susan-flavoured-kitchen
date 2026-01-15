const InfoCard = ({ icon, label, value, full }) => (
  <div
    className={`bg-gray-50 rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow ${
      full ? 'sm:col-span-2' : ''
    }`}
  >
    <span className="w-5 h-5 text-orange-500">{icon}</span>
    <div className="flex-1">
      <label className="text-xs text-gray-500 font-medium">{label}</label>
      <div className="mt-1 p-3 bg-white rounded-lg text-gray-700 shadow-inner">
        {value}
      </div>
    </div>
  </div>
);

export default InfoCard;