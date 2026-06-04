import type { ReactNode } from 'react';

export function HudFrame({ label, children, className = '' }: { label?: string; children: ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-2xl border border-line bg-white/[0.03] p-6 backdrop-blur-sm ${className}`} style={{ boxShadow: '0 0 50px rgba(60,110,255,.12), inset 0 0 40px rgba(94,234,255,.04)' }}>
      <span className="pointer-events-none absolute -left-px -top-px h-4 w-4 rounded-tl-2xl border-l-2 border-t-2 border-cyan" style={{ boxShadow: '-4px -4px 16px rgba(94,234,255,.4)' }} />
      <span className="pointer-events-none absolute -bottom-px -right-px h-4 w-4 rounded-br-2xl border-b-2 border-r-2 border-mag" style={{ boxShadow: '4px 4px 16px rgba(255,94,160,.4)' }} />
      {label && <span className="absolute -top-2.5 left-5 bg-bg px-2.5 font-mono text-[11px] tracking-widest text-mut">{label}</span>}
      {children}
    </div>
  );
}
