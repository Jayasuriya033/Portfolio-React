"use client"

import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { useEffect } from "react"
import { HomePage } from "@/pages/HomePage"
import { AboutPage } from "@/pages/AboutPage"
import { SkillsPage } from "@/pages/SkillsPage"
import { ProjectsPage } from "@/pages/ProjectsPage"
import { ContactPage } from "@/pages/ContactPage"

export function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Outlet />
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

