import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider, useLang } from '../LanguageContext';

function Probe() {
  const { t, lang, toggle } = useLang();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="work">{t.nav.work}</span>
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

describe('LanguageProvider', () => {
  it('defaults to English', () => {
    render(<LanguageProvider><Probe /></LanguageProvider>);
    expect(screen.getByTestId('lang').textContent).toBe('en');
    expect(screen.getByTestId('work').textContent).toBe('Work');
  });

  it('toggles to French and persists', () => {
    render(<LanguageProvider><Probe /></LanguageProvider>);
    fireEvent.click(screen.getByText('toggle'));
    expect(screen.getByTestId('lang').textContent).toBe('fr');
    expect(screen.getByTestId('work').textContent).toBe('Travaux');
    expect(window.localStorage.getItem('portfolio-lang')).toBe('fr');
  });
});
