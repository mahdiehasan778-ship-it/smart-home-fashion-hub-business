import { useEffect, useState } from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import api from '../utils/api';

const SOCIAL_ICON_MAP = {
  Facebook,
  Instagram,
  Twitter,
  Youtube
};

export default function TopBar() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    let isMounted = true;

    api
      .get('/site-content')
      .then((res) => {
        if (isMounted) setContent(res.data.data.topBar);
      })
      .catch(() => {
        // Fail silently — top bar is decorative, not critical path
        if (isMounted) setContent(null);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Sensible fallback so the bar never collapses if the API is unreachable
  const announcement = content?.announcement ?? 'Delivering the Best for Your Home & Style';
  const pages = content?.pages ?? [];
  const socials = content?.socials ?? [];

  return (
    <div className="hidden md:block bg-navy-900 text-navy-100 text-xs">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-9">
        <p className="truncate">{announcement}</p>

        <div className="flex items-center gap-5">
          <nav className="flex items-center gap-4">
            {pages.map((page) => (
              <a
                key={page.name}
                href={page.path}
                className="hover:text-white transition-colors"
              >
                {page.name}
              </a>
            ))}
          </nav>

          {socials.length > 0 && (
            <div className="flex items-center gap-3 border-l border-navy-700 pl-4">
              {socials.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    aria-label={social.name}
                    className="hover:text-accent-400 transition-colors"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}