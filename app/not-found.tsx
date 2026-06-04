// Server component (Next.js requirement) — cannot access LanguageContext, so this page is English-only by necessity.
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-sm text-cyan">// 404</p>
      <h1 className="mt-2 text-5xl font-extrabold text-holo">Lost in space</h1>
      <Link href="/" className="mt-6 inline-flex min-h-[48px] items-center rounded-xl border border-[#2a3354] px-6 text-ink hover:border-cyan hover:text-cyan">Back home</Link>
    </main>
  );
}
