import { UtensilsCrossed } from 'lucide-react';

const EmptyMenuState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600">
      <UtensilsCrossed size={60} className="mb-6 text-orange-500" />

      <h2 className="text-2xl font-semibold mb-2">Menu not available yet</h2>

      <p className="max-w-md text-gray-500">
        We’re currently preparing something delicious for you. Please check back
        shortly 🍲
      </p>
    </div>
  );
};

export default EmptyMenuState;
