import type { Language } from '../../App'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './header.css'

type HeaderProps = {
  language: Language
  theme: 'dark' | 'light'
  onToggleLanguage: () => void
  onToggleTheme: () => void
}

const copy = {
  es: {
    navLabel: 'Navegación principal',
    profile: 'Perfil',
    projects: 'Proyectos',
    contact: 'Contacto',
    languageLabel: 'Cambiar idioma a inglés',
    role: 'Full-stack developer',
    flagLabel: 'México',
    title:
      'Desarrollo experiencias web y móviles que convierten ideas en productos útiles.',
    summary:
      'Soy Andrés R. Romero. Trabajo con React, TypeScript, Node.js y Flutter para construir interfaces claras y soluciones completas.',
    viewProjects: 'Ver proyectos',
    talk: 'Hablemos',
    terminalLabel: 'Resumen tecnológico',
    values: ['claridad', 'calidad'],
  },
  en: {
    navLabel: 'Main navigation',
    profile: 'Profile',
    projects: 'Projects',
    contact: 'Contact',
    languageLabel: 'Switch language to Spanish',
    role: 'Full-stack developer',
    flagLabel: 'Mexico',
    title: 'I build web and mobile experiences that turn ideas into useful products.',
    summary:
      'I am Andrés R. Romero. I work with React, TypeScript, Node.js and Flutter to build clear interfaces and complete solutions.',
    viewProjects: 'View projects',
    talk: 'Let\'s talk',
    terminalLabel: 'Technology summary',
    values: ['clarity', 'quality'],
  },
}

export default function Header({
  language,
  theme,
  onToggleLanguage,
  onToggleTheme,
}: HeaderProps) {
  const text = copy[language]

  return (
    <header className="siteHeader">
      <div className="siteHeader__frame">
        <nav className="siteNav" aria-label={text.navLabel}>
          <a className="siteNav__brand" href="#main-content">
            ARROMERO<span>.dev</span>
          </a>

          <div className="siteNav__links">
            <a href="#about">{text.profile}</a>
            <a href="#projects">{text.projects}</a>
            <a href="#contact">{text.contact}</a>
          </div>

          <div className="siteNav__actions">
            <button
              type="button"
              className="languageSwitch"
              role="switch"
              aria-checked={language === 'en'}
              aria-label={text.languageLabel}
              onClick={onToggleLanguage}
            >
              <span className={language === 'es' ? 'is-active' : undefined}>ES</span>
              <span className={language === 'en' ? 'is-active' : undefined}>EN</span>
            </button>
            <ThemeToggle language={language} theme={theme} onClick={onToggleTheme} />
          </div>
        </nav>

        <div className="hero">
          <div className="hero__copy">
            <p className="eyebrow">
              {text.role} /{' '}
              <span className="flagIcon" role="img" aria-label={text.flagLabel}>
                🇲🇽
              </span>
            </p>
            <h1>{text.title}</h1>
            <p className="hero__summary">{text.summary}</p>

            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                {text.viewProjects}
              </a>
              <a className="button button--secondary" href="#contact">
                {text.talk}
              </a>
            </div>
          </div>

          <div className="hero__terminal" aria-label={text.terminalLabel}>
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
                <span className="codeString">'{text.values[0]}'</span>,{'\n           '}
                <span className="codeString">'{text.values[1]}'</span>]{'\n'}
                {'}'}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </header>
  )
}