import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { projects } from '../data';
import { ExternalLink, Github } from 'lucide-react';
import MagneticButton from './MagneticButton';

interface GalleryProps {
  onIndexChange: (index: number) => void;
}

export default function Gallery({ onIndexChange }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isAnimating = useRef(false);

  // Handle wheel events for scrolling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating.current) return;
      
      if (e.deltaY > 50) {
        goToNext();
      } else if (e.deltaY < -50) {
        goToPrev();
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeIndex]);

  const goToNext = () => {
    if (activeIndex < projects.length - 1) {
      isAnimating.current = true;
      setActiveIndex(prev => prev + 1);
      onIndexChange(activeIndex + 1);
      setTimeout(() => isAnimating.current = false, 1200);
    }
  };

  const goToPrev = () => {
    if (activeIndex > 0) {
      isAnimating.current = true;
      setActiveIndex(prev => prev - 1);
      onIndexChange(activeIndex - 1);
      setTimeout(() => isAnimating.current = false, 1200);
    }
  };

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      const offset = index - activeIndex;
      const isActive = offset === 0;
      
      // 3D Carousel Math
      const xPos = offset * window.innerWidth * 0.6;
      const rotationY = offset * -15;
      const zPos = isActive ? 0 : -200;
      
      gsap.to(card, {
        x: xPos,
        z: zPos,
        rotationY: rotationY,
        scale: isActive ? 1 : 0.8,
        opacity: isActive ? 1 : Math.abs(offset) === 1 ? 0.4 : 0,
        filter: isActive ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(0.3)',
        duration: 1.2,
        ease: 'expo.out',
        zIndex: isActive ? 10 : 1
      });

      // Parallax Image Effect
      const img = card.querySelector('img');
      if (img) {
        gsap.to(img, {
          x: offset * -100, // Move opposite to card
          scale: isActive ? 1.05 : 1.2,
          duration: 1.2,
          ease: 'expo.out'
        });
      }

      // Animate text elements within the active card
      if (isActive) {
        gsap.to(card.querySelectorAll('.animate-text'), { 
          y: '0%', 
          opacity: 1, 
          duration: 1, 
          stagger: 0.1, 
          delay: 0.2, 
          ease: 'expo.out', 
          overwrite: true 
        });
        gsap.to(card.querySelectorAll('.animate-btn'), { 
          scale: 1, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.1, 
          delay: 0.4, 
          ease: 'elastic.out(1, 0.5)', 
          overwrite: true 
        });
      } else {
        gsap.to(card.querySelectorAll('.animate-text'), { 
          y: '100%', 
          opacity: 0, 
          duration: 0.5, 
          ease: 'power2.in', 
          overwrite: true 
        });
        gsap.to(card.querySelectorAll('.animate-btn'), { 
          scale: 0.5, 
          opacity: 0, 
          duration: 0.5, 
          ease: 'power2.in', 
          overwrite: true 
        });
      }
    });
  }, [activeIndex]);

  return (
    <main 
      ref={containerRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-24"
      style={{ perspective: '1500px' }}
    >
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-10">
        <h1 
          key={activeIndex}
          className="text-[20vw] font-headline font-extrabold text-transparent stroke-text whitespace-nowrap tracking-tighter animate-pulse"
        >
          {projects[activeIndex].title}
        </h1>
      </div>

      {/* Navigation Labels */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-8 z-20 pointer-events-none">
        <div 
          onClick={goToPrev}
          className={`flex items-center gap-4 group pointer-events-auto cursor-none transition-opacity duration-300 ${activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <span className="font-label text-[0.7rem] tracking-[0.2em] text-outline group-hover:text-primary transition-colors">PREV</span>
        </div>
        <div 
          onClick={goToNext}
          className={`flex items-center gap-4 group pointer-events-auto cursor-none transition-opacity duration-300 ${activeIndex === projects.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <span className="font-label text-[0.7rem] tracking-[0.2em] text-outline group-hover:text-primary transition-colors">NEXT</span>
        </div>
      </div>

      {/* Cards Container */}
      {projects.map((project, index) => (
        <div 
          key={project.id}
          ref={el => cardsRef.current[index] = el}
          className="absolute w-[85vw] md:w-[70vw] max-w-6xl aspect-video max-h-[65vh] will-change-transform"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative w-full h-full overflow-hidden group rounded-lg">
            {/* Image Wrapper for Parallax */}
            <div className="absolute inset-0 w-[120%] -left-[10%]">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12 flex justify-between items-end z-20">
              <div>
                <div className="overflow-hidden mb-2 md:mb-4">
                  <p className="animate-text translate-y-full opacity-0 font-label text-[0.75rem] tracking-[0.2em] text-tertiary-fixed">
                    {project.type}
                  </p>
                </div>
                <div className="overflow-hidden pb-2">
                  <h2 className="animate-text translate-y-full opacity-0 font-headline text-4xl md:text-7xl font-extrabold uppercase tracking-[-0.04em] leading-tight text-primary">
                    {project.title}
                  </h2>
                </div>
              </div>
              
              {/* Links */}
              <div className="flex gap-3 md:gap-4 pb-2">
                <MagneticButton href={project.github} className="animate-btn opacity-0 scale-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border border-outline-variant/50 bg-surface/30 backdrop-blur-md hover:bg-primary hover:text-on-primary transition-colors duration-300 rounded-full">
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                </MagneticButton>
                <MagneticButton href={project.live} className="animate-btn opacity-0 scale-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border border-outline-variant/50 bg-surface/30 backdrop-blur-md hover:bg-primary hover:text-on-primary transition-colors duration-300 rounded-full">
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}


