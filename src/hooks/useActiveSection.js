import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach(o => o?.disconnect());
  }, [sectionIds]);

  return active;
}
