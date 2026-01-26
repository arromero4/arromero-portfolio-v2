import './footer.css'
type FooterProps ={
    /**
   * Texto del copyright: "© 2024 Andrés R. Romero"
   */
  text: string;
}

/**
 * Footer:
 * Barra inferior oscura estilo retro, centrada.
 * No usa SectionFrame porque en el mockup es una franja completa.
 */

export default function Footer({ text }: FooterProps) {
  return (
    <footer className="siteFooter">
      <div className="siteFooter__inner">
        <span className="siteFooter__text">
          {text}
        </span>
      </div>
    </footer>
  )
}