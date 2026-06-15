import './footer.css'

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="siteFooter__inner">
        <p>© {new Date().getFullYear()} Andrés R. Romero</p>
        <a href="#main-content">Volver arriba ↑</a>
      </div>
    </footer>
  )
}
