import { useEffect, useMemo, useState } from 'react'
import Header  from './components/Header/Header'
import AboutSection from './sections/About/AboutSection';
import ProjectsSection from './sections/Projects/ProjectsSection';
import ContactSection from './sections/Contact/ContactSection';
import Footer from './components/Footer/Footer';

/**
 * App: raíz de la UI.
 * - Controla el theme (dark/light)
 * - Renderiza el Header (primer bloque del portafolio)
 */


function App() {
  // 1) Estado local del theme
  const [theme, setTheme] = useState<"dark" | "light">("light");

    // 2) Cargar theme guardado (localStorage) al montar
    useEffect(() =>{
      const stored = localStorage.getItem('theme')
      if(stored === "dark" || stored === "light"){
        setTheme(stored)
        return
      }
          // Si no hay preferencia guardada, puedes decidir default.
    // En la imagen inicia en "DARK", pero tú defines.
    setTheme('dark')
    },[])

    // 3) Aplicar theme al <html> y persistirlo cada vez que cambie
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)

    }, [theme])


    // 4) Handler para alternar tema

    const toggleTheme = () => {
      setTheme((preve) => (preve === "dark" ? "light" : "dark"))
    }

      // 5) Texto del botón según theme
    const buttonLabel = useMemo(() => (
      theme === "dark" ? "LIGHT" : "DARK"
    ), [theme]) 


  return (
    <main className="screenCenter">
    <div className="page">
      <Header
        title="ARROMERO.dev"
        name="Andres R. Romero"
        subtitle="Fullstack Developer • React • Java • Flutter"
        themeLabel={buttonLabel}
        onToggleTheme={toggleTheme}
      />

        {/* Separación visual entre header y secciones */}
      <div style={{ height: 16 }} />

      {/* Aquí irán las secciones del portafolio */}
      <AboutSection />

       <div style={{ height: 16 }} />
      <ProjectsSection />
      <div style={{ height: 16 }} />

      <ContactSection
        githubUrl="https://github.com/arromero4"
        linkedinUrl="https://www.linkedin.com/in/arromero491"
      />
<div style={{ height: 16 }} />
      <Footer text="© 2026 Andrés R. Romero" />
    </div>
    </main> 
  )
}

export default App
