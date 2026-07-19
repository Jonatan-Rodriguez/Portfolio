import { ThemeProvider } from './context/ThemeContext'
import { PaperBackground } from './components/layout/PaperBackground'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Header } from './components/layout/Header'
import { Home } from './sections/Home'
import { About } from './sections/About'
import { Education } from './sections/Education'
import { Work } from './sections/Work'
import { Experience } from './sections/Experience'

function App() {
  return (
    <ThemeProvider>
      <PaperBackground />
      <ScrollProgress />
      <Header />
      <main>
        <Home />
        <About />
        <Education />
        <Work />
        <Experience />
      </main>
    </ThemeProvider>
  )
}

export default App