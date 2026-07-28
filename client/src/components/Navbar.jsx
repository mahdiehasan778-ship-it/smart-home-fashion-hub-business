import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, Grid3x3 } from 'lucide-react';
import api from '../utils/api';
import { useClickOutside } from '../hooks/useClickOutside';

export default function Navbar({ isMobileMenuOpen = false }) {
  const [navMenu, setNavMenu] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categoriesRef = useClickOutside(() => setIsCategoriesOpen(false));

  useEffect(() => {
    api
      .get('/categories')
      .then((res) => {
        setNavMenu(res.data.data.navMenu ?? []);
        setAllCategories(res.data.data.allCategoriesDropdown ?? []);
      })
      .catch(() => {
        setNavMenu([]);
        setAllCategories([]);
      });
  }, []);

  const linkClasses = ({ isActive }) =>
    `px-3.5 py-3 text-sm font-medium transition-colors border-b-2 ${
      isActive
        ? 'text-white border-accent-500'
        : 'text-navy-200 border-transparent hover:text-white hover:border-navy-400'
    }`;

  return (
    <nav className="bg-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        {/* ALL CATEGORIES dropdown trigger */}
        <div ref={categoriesRef} className="relative shrink-0">
          <button
            type="button"
            onClick={() => setIsCategoriesOpen((open) => !open)}
            className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-4 py-3 transition-colors"
          >
            <Grid3x3 size={16} />
            <span className="hidden sm:inline">ALL CATEGORIES</span>
            <ChevronDown size={14} className={`transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
          </button>

          {isCategoriesOpen && (
            <ul className="absolute top-full left-0 w-64 bg-white rounded-b-lg shadow-card-hover border border-gray-100 py-2 z-40">
              {allCategories.map((cat) => (
                <li key={cat}>
                  <a
                    href={`/category/${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-gray-50 hover:text-accent-500 transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Desktop menu items */}
        <div className="hidden md:flex items-center overflow-x-auto">
          {navMenu.map((item) => (
            <NavLink key={item.name} to={item.path} className={linkClasses} end={item.path === '/'}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile slide-down menu, toggled from the Header hamburger */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy-900 border-t border-navy-700">
          {navMenu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm border-b border-navy-800 ${
                  isActive ? 'text-white bg-navy-800' : 'text-navy-200'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}