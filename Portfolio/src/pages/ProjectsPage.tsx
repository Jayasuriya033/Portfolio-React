"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { Github, ExternalLink, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "TypeScript", "Node.js", "MySQL", "Prisma", "Tailwind CSS"],
    github: "#",
    demo: "#",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "TypeScript", "Express", "MySQL", "Prisma", "Tailwind CSS"],
    github: "#",
    demo: "#",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with animations and dark mode.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
    category: "frontend",
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
]

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background pt-20">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills and experience.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Button
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`mb-2 ${
                  activeCategory === category.id
                    ? "bg-primary hover:bg-primary/90"
                    : "hover:border-primary/70 hover:text-primary"
                }`}
              >
                {category.label}
              </Button>
            </motion.div>
          ))}
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, id) => (
              <motion.div
                key={project.id}
                layout
                exit={{ opacity: 0, scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: id * 0.1 }}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 group relative"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Github className="h-6 w-6" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <ExternalLink className="h-6 w-6" />
                    </motion.a>
                  </div>

                  <motion.div
                    className="flex items-center text-sm text-primary font-medium mt-4"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

