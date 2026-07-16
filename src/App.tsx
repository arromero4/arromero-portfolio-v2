import { useEffect, useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import AboutSection from './sections/About/AboutSection'
import ContactSection from './sections/Contact/ContactSection'
import ProjectsSection from './sections/Projects/ProjectsSection'

export type Language = 'es' | 'en'
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

function getInitialLanguage(): Language {
  const storedLanguage = localStorage.getItem('language')

  if (storedLanguage === 'es' || storedLanguage === 'en') {
    return storedLanguage
  }

  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es'
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('language', language)
  }, [language])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'es' ? 'en' : 'es'))
  }

  return (
    <>
      <a className="skipLink" href="#main-content">
        {language === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>

      <main className="screenCenter" id="main-content">
        <div className="page">
          <Header
            language={language}
            theme={theme}
            onToggleLanguage={toggleLanguage}
            onToggleTheme={toggleTheme}
          />
          <AboutSection language={language} />
          <ProjectsSection language={language} />
          <ContactSection
            emailUrl="mailto:arromero0408@gmail.com"
            githubUrl="https://github.com/arromero4"
            language={language}
            linkedinUrl="https://www.linkedin.com/in/arromero491"
          />
        </div>
      </main>

      <Footer language={language} />
    </>
  )
}

export default App