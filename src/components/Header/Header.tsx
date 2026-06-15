import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './header.css'

type HeaderProps = {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="siteHeader">
      <div className="siteHeader__frame">
        <nav className="siteNav" aria-label="Navegación principal">
          <a className="siteNav__brand" href="#main-content">
            ARROMERO<span>.dev</span>
          </a>

          <div className="siteNav__links">
            <a href="#about">Perfil</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
          </div>

          <ThemeToggle theme={theme} onClick={onToggleTheme} />
        </nav>

        <div className="hero">
          <div className="hero__copy">
            <p className="eyebrow">Full-stack developer / Guatemala</p>
            <h1>
              Desarrollo experiencias web y móviles que convierten ideas en
              productos útiles.
            </h1>
            <p className="hero__summary">
              Soy Andrés R. Romero. Trabajo con React, TypeScript, Node.js y
              Flutter para construir interfaces claras y soluciones completas.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                Ver proyectos
              </a>
              <a className="button button--secondary" href="#contact">
                Hablemos
              </a>
            </div>
          </div>

          <div className="hero__terminal" aria-label="Resumen tecnológico">
            <div className="hero__terminalBar">
              <span />
              <span />
              <span />
              <strong>profile.ts</strong>
            </div>
            <pre>
              <code>
                <span className="codeKeyword">const</span> developer = {'{\n'}
                {'  '}name: <span className="codeString">'Andrés Romero'</span>,
                {'\n  '}focus: [
                <span className="codeString">'web'</span>,{' '}
                <span className="codeString">'mobile'</span>],{'\n  '}values: [
                <span className="codeString">'claridad'</span>,{'\n           '}
                <span className="codeString">'calidad'</span>]{'\n'}
                {'}'}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </header>
  )
}
