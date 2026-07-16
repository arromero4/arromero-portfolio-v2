import { useEffect, useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import AboutSection from './sections/About/AboutSection'
import ContactSection from './sections/Contact/ContactSection'
import ProjectsSection from './sections/Projects/ProjectsSection'

type Theme = 'dark' | 'light'

function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem('theme')

  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <a className="skipLink" href="#main-content">
        Saltar al contenido
      </a>

      <main className="screenCenter" id="main-content">
        <div className="page">
          <Header theme={theme} onToggleTheme={toggleTheme} />
          <AboutSection />
          <ProjectsSection />
          <ContactSection
            emailUrl="mailto:arromero0408@gmail.com"
            githubUrl="https://github.com/arromero4"
            linkedinUrl="https://www.linkedin.com/in/arromero491"
          />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
