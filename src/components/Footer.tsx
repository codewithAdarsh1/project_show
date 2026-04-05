import { useEffect, useState } from 'react';

interface FooterProps {
  activeIndex: number;
  total: number;
}

export default function Footer({ activeIndex, total }: FooterProps) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().split('T')[1].split('.')[0]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate pagination numbers
  const getPagination = () => {
    const pages = [];
    const start = Math.max(0, activeIndex - 2);
    const end = Math.min(total - 1, activeIndex + 2);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <footer className="fixed bottom-0 w-full z-50 bg-black border-t border-outline-variant/20 px-8 py-4 flex justify-between items-center">
      {/* Timestamp */}
      <div className="w-1/4 flex items-center gap-2">
        <span className="font-label text-[0.75rem] uppercase tracking-[0.1em] text-outline">{time}</span>
      </div>

      {/* Index Progress */}
      <div className="flex flex-col items-center gap-1">
        <div className="flex gap-4 mb-2">
          {getPagination().map((pageIndex) => (
            <span 
              key={pageIndex} 
              className={`font-label text-[0.7rem] ${pageIndex === activeIndex ? 'text-tertiary-fixed font-bold' : 'text-outline-variant'}`}
            >
              {pageIndex + 1}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-label text-[0.75rem] uppercase tracking-[0.1em] text-tertiary-fixed">#</span>
          <span className="font-label text-[0.75rem] uppercase tracking-[0.1em] text-primary">
            {activeIndex + 1} / {total}
          </span>
        </div>
      </div>

      {/* Live/Status Pulse */}
      <div className="w-1/4 flex justify-end items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-fixed"></span>
          </span>
          <span className="font-label text-[0.75rem] uppercase tracking-[0.1em] text-tertiary-fixed">LIVE</span>
        </div>
        <div className="flex items-center gap-2 pl-4 border-l border-outline-variant/20">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="font-label text-[0.75rem] uppercase tracking-[0.1em] text-primary">SYNCED</span>
        </div>
      </div>
    </footer>
  );
}
