type ThemeToggleProps = {
  theme: 'dark' | 'light'
  onClick: () => void
}

export default function ThemeToggle({ theme, onClick }: ThemeToggleProps) {
  const nextTheme = theme === 'dark' ? 'claro' : 'oscuro'

  return (
    <button
      type="button"
      className="themeToggle"
      aria-label={`Cambiar a modo ${nextTheme}`}
      aria-pressed={theme === 'dark'}
      onClick={onClick}
    >
      <span aria-hidden="true">{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
    </button>
  )
}
