import { useEffect, useRef } from 'react';
import { useThemeColors } from '../hooks/useThemeColors';

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();
  const themeColors = useThemeColors();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const isInteractive = !!(e.target as HTMLElement).closest(
        'a, button, [data-hover], input, textarea'
      );
      dotRef.current?.classList.toggle('cursor-dot-big', isInteractive);
      ringRef.current?.classList.toggle('cursor-ring-big', isInteractive);
    };

    const updateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      rafRef.current = requestAnimationFrame(updateRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    rafRef.current = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.12s, height 0.12s',
          background: themeColors.primary,
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          border: `1.5px solid ${themeColors.primary}`,
          opacity: 0.35,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.18s, height 0.18s, opacity 0.18s',
        }}
      />
      <style>{`
        .cursor-dot-big {
          width: 5px !important;
          height: 5px !important;
        }
        .cursor-ring-big {
          width: 50px !important;
          height: 50px !important;
          opacity: 0.55 !important;
        }
      `}</style>
    </>
  );
};
