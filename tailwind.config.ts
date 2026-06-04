import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        ink: 'var(--ink)',
        mut: 'var(--mut)',
        cyan: 'var(--cyan)',
        bluey: 'var(--blue)',
        mag: 'var(--mag)',
        mint: 'var(--mint)',
        line: 'var(--line)',
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
