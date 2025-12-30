import { SearchX } from 'lucide-react';

const EmptySearchState = ({ query }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600">
      <SearchX size={56} className="mb-6 text-gray-400" />

      <h2 className="text-xl font-semibold mb-2">No meals found</h2>

      <p className="max-w-md text-gray-500">
        We couldn’t find anything matching
        <span className="font-medium"> "{query}"</span>. Try a different
        keyword.
      </p>
    </div>
  );
};

export default EmptySearchState;
