import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { initGA, logPageView } from './utils/analytics'
import { SoundProvider } from './context/SoundContext'
import { LanguageProvider } from './context/LanguageContext'
import { PaperBackground } from './components/layout/PaperBackground'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Header } from './components/layout/Header'
import { Home } from './sections/Home'
import { About } from './sections/About'
import { Education } from './sections/Education'
import { Work } from './sections/Work'
import { Experience } from './sections/Experience'
import { Contact } from './sections/Contact'
import { Footer } from './components/layout/Footer'

function App() {
  useEffect(() => {
    initGA()
    logPageView(window.location.pathname)
  }, [])

  return (
    <ThemeProvider>
      <SoundProvider>
        <LanguageProvider>
          <PaperBackground />
          <ScrollProgress />
          <Header />
          <main>
            <Home />
            <About />
            <Education />
            <Work />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </LanguageProvider>
      </SoundProvider>
    </ThemeProvider>
  )
}

export default App