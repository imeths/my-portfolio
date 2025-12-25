'use client';
import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // 1. Move the cursor
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      
      // 2. robust detection for buttons/links
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null || // Checks if parent is a link
        target.closest('button') !== null || // Checks if parent is a button
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      // Fixed z-index to 99999 to ensure it stays on top of everything
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-[99999] transition-all duration-200 ease-out
        ${isHovering 
            ? 'w-16 h-16 bg-blue-600/20 border-2 border-blue-600/10' // Hover: Large transparent blue circle
            : 'w-6 h-6 border-2 border-blue-600' // Default: Small empty blue ring
        }
      `}
      style={{ 
        // These negative margins center the div perfectly on the mouse tip
        marginTop: isHovering ? '-2rem' : '-0.75rem', 
        marginLeft: isHovering ? '-2rem' : '-0.75rem' 
      }}
    />
  );
}