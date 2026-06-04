export function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -left-36 -top-52 h-[600px] w-[600px] rounded-full opacity-80 blur-[110px]" style={{ background: 'radial-gradient(circle,#2a5bff,transparent 62%)' }} />
      <div className="absolute -right-40 -top-36 h-[540px] w-[540px] rounded-full opacity-60 blur-[110px]" style={{ background: 'radial-gradient(circle,#ff2e88,transparent 62%)' }} />
      <div className="absolute -bottom-60 left-[28%] h-[440px] w-[680px] rounded-full opacity-40 blur-[110px]" style={{ background: 'radial-gradient(circle,#23e5b0,transparent 62%)' }} />
      <div className="absolute inset-0 scanlines" />
    </div>
  );
}
