import type { ReactNode } from 'react';

export function Section({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 sm:px-7 md:py-24 ${className}`}>
      {children}
    </section>
  );
}
