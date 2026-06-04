const HEIGHTS = [40, 70, 55, 100, 75];
export function DataBars({ heights = HEIGHTS }: { heights?: number[] }) {
  return (
    <div aria-hidden className="mt-2.5 flex h-[22px] items-end gap-1">
      {heights.map((h, i) => (
        <span key={i} className="block w-1.5 rounded-sm opacity-85" style={{ height: `${h}%`, background: 'linear-gradient(var(--cyan),var(--mag))', boxShadow: '0 0 8px rgba(94,234,255,.35)' }} />
      ))}
    </div>
  );
}
