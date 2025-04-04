import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
// import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { SkillsPage } from "./pages/SkillsPage"
import { ProjectsPage } from "./pages/ProjectsPage"
import { ContactPage } from "./pages/ContactPage"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route path="about" element={<AboutPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App

