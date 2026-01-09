import EmptyMenuState from '@/components/loaders/EmptyMenuState';
import EmptySearchState from '@/components/loaders/EmptySearchState';
import MenuSkeleton from '@/components/loaders/MenuSkeleton';
import MenuSection from '@/pages/menuPage/components/MenuSection';

function MenuUI({
  loading,
  searchTerm,
  setSearchTerm,
  setSearchQuery,
  categories,
  activeCategory,
  setActiveCategory,
  groupedMenu,
  searchQuery,
}) {


  return (
    <div className="bg-[#fffcfa] overflow-hidden">

      {/* MOBILE SEARCH */}
      <div className="px-4 mt-24 mb-6 lg:hidden">
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Search Meals"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-[65%] px-4 py-2 border rounded-lg"
          />
          <button
            onClick={() => setSearchQuery(searchTerm)}
            className="w-[30%] bg-orange-600 text-white rounded-lg"
          >
            Search
          </button>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-4">
          {['All', ...categories].map(category => (
            <div
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer ${
                activeCategory === category
                  ? 'text-orange-600 font-semibold'
                  : 'text-gray-600'
              }`}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* MENU SECTIONS */}
      <section className="px-6 lg:px-12 mt-10 max-w-5xl mx-auto">
        {loading && <MenuSkeleton />}

        {/* EMPTY MENU (no items at all) */}
        {!loading && Object.keys(groupedMenu).length === 0 && !searchQuery && (
          <EmptyMenuState />
        )}

        {/* EMPTY SEARCH */}
        {!loading && Object.keys(groupedMenu).length === 0 && searchQuery && (
          <EmptySearchState query={searchQuery} />
        )}

        {/* SUCCESS */}
        {!loading &&
          Object.entries(groupedMenu).map(([category, items]) => {
            if (
              (activeCategory !== 'All' && activeCategory !== category) ||
              items.length === 0
            )
              return null;

            return (
              <div key={category} className="mb-16">
                <MenuSection title={category} items={items} showMore />
                <hr className="border-gray-300 mt-10" />
              </div>
            );
          })}
      </section>

    </div>
  );
}

export default MenuUI;
