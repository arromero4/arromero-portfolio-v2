import type { Language } from '../../App'

type ThemeToggleProps = {
  language: Language
  theme: 'dark' | 'light'
  onClick: () => void
}

export default function ThemeToggle({ language, theme, onClick }: ThemeToggleProps) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const nextThemeLabel = language === 'es'
    ? theme === 'dark' ? 'claro' : 'oscuro'
    : nextTheme

  return (
    <button
      type="button"
      className="themeToggle"
      aria-label={
        language === 'es'
          ? `Cambiar a modo ${nextThemeLabel}`
          : `Switch to ${nextThemeLabel} mode`
      }
      aria-pressed={theme === 'dark'}
      onClick={onClick}
    >
      <span aria-hidden="true">{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
    </button>
  )
}