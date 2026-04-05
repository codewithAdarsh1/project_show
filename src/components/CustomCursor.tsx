import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([cursorRef.current, followerRef.current], { xPercent: -50, yPercent: -50 });
      
      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0 });
        gsap.to(followerRef.current, { x: e.clientX, y: e.clientY, duration: 0.6, ease: "power3.out" });
      };

      const handleHover = () => {
        gsap.to(followerRef.current, { scale: 1.5, backgroundColor: 'rgba(255,255,255,0.1)', duration: 0.3 });
        gsap.to(cursorRef.current, { scale: 0, duration: 0.3 });
      };

      const handleHoverOut = () => {
        gsap.to(followerRef.current, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
        gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
      };

      window.addEventListener('mousemove', moveCursor);
      
      // Add hover effect to all links and buttons
      const interactables = document.querySelectorAll('a, button, [role="button"]');
      interactables.forEach(el => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleHoverOut);
      });

      return () => {
        window.removeEventListener('mousemove', moveCursor);
        interactables.forEach(el => {
          el.removeEventListener('mouseenter', handleHover);
          el.removeEventListener('mouseleave', handleHoverOut);
        });
      };
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference" 
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-primary/30 rounded-full pointer-events-none z-[9998] mix-blend-difference" 
      />
    </>
  );
}
