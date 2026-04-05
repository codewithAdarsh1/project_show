export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-outline-variant/20 flex justify-between items-center px-8 py-6">
      <div className="flex items-center gap-12">
        <span className="font-label text-[0.75rem] uppercase tracking-[0.1em] text-outline">PROJECT SHOWCASE</span>
        <span className="font-headline text-xl font-bold tracking-tighter text-primary">THE FRONTLIGHT</span>
      </div>
    </nav>
  );
}

