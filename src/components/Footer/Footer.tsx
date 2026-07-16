import type { Language } from '../../App'
import './footer.css'

type FooterProps = {
  language: Language
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="siteFooter">
      <div className="siteFooter__inner">
        <p>© {new Date().getFullYear()} Andrés R. Romero</p>
        <a href="#main-content">
          {language === 'es' ? 'Volver arriba ↑' : 'Back to top ↑'}
        </a>
      </div>
    </footer>
  )
}