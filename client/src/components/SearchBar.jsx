import { useEffect, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import api from '../utils/api';
import { useClickOutside } from '../hooks/useClickOutside';

export default function SearchBar() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [query, setQuery] = useState('');

  const dropdownRef = useClickOutside(() => setIsDropdownOpen(false));

  useEffect(() => {
    api
      .get('/categories')
      .then((res) => setCategories(res.data.data.allCategoriesDropdown ?? []))
      .catch(() => setCategories([]));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // Step 5+/7 will wire this to an actual search results route.
    console.log('Search submitted:', { query, category: selectedCategory });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="hidden md:flex flex-1 max-w-2xl mx-8"
      role="search"
    >
      <div className="flex w-full rounded-lg overflow-hidden border border-navy-200 focus-within:ring-2 focus-within:ring-accent-400 transition-shadow">
        {/* Category dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen((open) => !open)}
            className="h-full flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-navy-700 text-sm px-3 py-2.5 border-r border-navy-200 whitespace-nowrap transition-colors"
          >
            <span className="max-w-[110px] truncate">{selectedCategory}</span>
            <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <ul className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-card-hover border border-gray-100 py-1.5 z-30 max-h-72 overflow-y-auto">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All Categories');
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-navy-700 font-medium"
                >
                  All Categories
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-navy-600"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Text input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for smart home tech, fashion & more..."
          className="flex-1 px-4 py-2.5 text-sm outline-none text-navy-800 placeholder:text-navy-300"
        />

        {/* Submit */}
        <button
          type="submit"
          aria-label="Search"
          className="px-4 bg-accent-500 hover:bg-accent-600 text-white transition-colors"
        >
          <Search size={18} />
        </button>
      </div>
    </form>
  );
}