import React, { useRef, ReactNode } from 'react';
import gsap from 'gsap';

interface Props {
  children: ReactNode;
  href: string;
  className?: string;
}

export default function MagneticButton({ children, href, className = '' }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.4;
    const y = (clientY - (top + height / 2)) * 0.4;
    
    gsap.to(ref.current, { x, y, duration: 1, ease: "power3.out" });
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
  };

  return (
    <a 
      ref={ref} 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </a>
  );
}


