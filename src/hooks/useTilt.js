import { useRef, useCallback } from 'react';

export function useTilt(intensity = 6) {
  const ref = useRef(null);
  const rafRef = useRef(null);

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const x = mx / rect.width;
        const y = my / rect.height;

        const rotateX = (0.5 - y) * intensity;
        const rotateY = (x - 0.5) * intensity;

        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.025, 1.025, 1.025)`;
        el.style.setProperty('--mx', `${mx}px`);
        el.style.setProperty('--my', `${my}px`);
      });
    },
    [intensity]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    el.style.transition = 'transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)';
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

    setTimeout(() => {
      if (el) el.style.transition = '';
    }, 560);
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
