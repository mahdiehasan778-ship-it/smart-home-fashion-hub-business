import { useEffect, useRef } from 'react';

/**
 * Attaches a listener that calls onOutsideClick when a click/touch
 * occurs outside the returned ref's element. Used for dropdowns/menus.
 * @param {() => void} onOutsideClick
 */
export function useClickOutside(onOutsideClick) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [onOutsideClick]);

  return ref;
}