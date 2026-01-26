import '../Header/Header.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
type HeaderProps = {
  title: string;
  name: string;
  subtitle: string;
  themeLabel: string;
  onToggleTheme: () => void;
}

/**
 * Header:
 * Representa el bloque superior del portafolio.
 * Incluye:
 * - Título principal: "ARROMERO.dev"
 * - Subheader con nombre + tagline
 * - Botón de DARK/LIGHT
 */

export default function Header({ title, name, subtitle, themeLabel, onToggleTheme }: HeaderProps) {
  return (
    <header className="headerRoot">
      {/* Panel principal (simula marco grande superior) */}
      <section className="frame frame--header">
        <div className="headerTop">
          {/* Titulo grande*/}
          <h1 className="headerTitle">{title}</h1>
        </div>

        {/* Subheader (nombre + skills + toggle) */}
        <div className="headerBottom">
          <div className="headerIdentity">
            <div className="headerName">{name}</div>
            <div className="headerSubtitle">{subtitle}</div>
          </div>

          <div className="headerActions">
            <ThemeToggle label={themeLabel} onClick={onToggleTheme} />
          </div>
        </div>
      </section>

    </header>
  )
}