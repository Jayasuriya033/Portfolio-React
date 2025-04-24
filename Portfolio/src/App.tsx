import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { SkillsPage } from "./pages/SkillsPage"
import { ProjectsPage } from "./pages/ProjectsPage"
import { ContactPage } from "./pages/ContactPage"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

export function App() {
  return(
    <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HomePage/>
      <AboutPage/>
      <SkillsPage/>
      <ProjectsPage/>
      <ContactPage/>
    </main>
    <Footer />
  </div>
  )
}

export default App

