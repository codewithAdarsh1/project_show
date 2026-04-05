export default function GhostGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      <div className="grid grid-cols-4 h-full w-full">
        <div className="border-r border-outline-variant/20"></div>
        <div className="border-r border-outline-variant/20"></div>
        <div className="border-r border-outline-variant/20"></div>
        <div></div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-px bg-outline-variant/20 absolute top-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
}
