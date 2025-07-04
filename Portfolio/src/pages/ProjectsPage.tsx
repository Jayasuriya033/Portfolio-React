"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { Github, ExternalLink} from "lucide-react"

const projects = [
  {
    id: 1,
    title: "QR Location",
    description:
      "Generate and download a QR code to track the exact location.",
    image: "/assets/qrImage.png",
    technologies: ["React", "TypeScript", "Node.js", "MySQL", "Prisma", "Tailwind CSS"],
    github: "https://github.com/Jayasuriya033/QrCode-Location",
    demo: "https://qrcode-location-frontend.onrender.com/",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Book Store Management",
    description: "Managing the books for students of every grade level.",
    image: "/assets/bookStore.avif",
    technologies: ["React", "Javascript", "Node", "Express", "MySQL", "Prisma"],
    github: "https://github.com/Jayasuriya033/Book-store/tree/main/Library-Management",
    demo: "#",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with animations and dark mode.",
    image: "/assets/portfolio.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Jayasuriya033/Portfolio-React",
    demo: "https://jayasuriya-portfolio.onrender.com/",
    category: "frontend",
  },
  {
    id: 4,
    title: "Real-time Chat App",
    description: "Built with React and Socket.IO, this app lets users log in and exchange messages instantly, with support for online status and responsive design.",
    image: "/assets/chat-app.jpg",
    technologies: ["React", "Refine", "Web Socket", "Typescript","Node", "express", "Postgresql", "Prisma", "Tailwind CSS"],
    github: "https://github.com/Jayasuriya033/Web-Socket-Project",
    demo: "https://web-socket-project.onrender.com",
    category: "fullstack",
  },
  {
    id: 5,
    title: "Number Guess Game",
    description: "A simple guessing game where players try to find the correct number within limited chances. Built with React.",
    image: "/assets/number-guess.png",
    technologies: ["React", "Javascript"],
    github: "https://github.com/Jayasuriya033/Number-Guess",
    demo: "https://number-guess-game-atbh.onrender.com",
    category: "frontend",
  },
  {
    id: 6,
    title: "Error Handling",
    description: "Implements basic error handling to ensure the app remains stable and user-friendly. Invalid inputs are managed with clear messages, preventing crashes and guiding users to correct their actions.",
    image: "/assets/error-handling.jpg",
    technologies: ["Javascript", "Node", "Express", "Prisma", "Middlewares"],
    github: "https://github.com/Jayasuriya033/Error-Handling",
    demo: "#",
    category: "backend",
  },
  {
    id: 7,
    title: "Budget Tracker",
    description: "A simple budget tracker to manage your expenses and income. Track your financial health easily.",
    image: "/assets/budgetTracker.png",
    technologies: ["React", "Typescript", "Javascript","Node", "express", "Mysql", "Prisma", "Tailwind CSS"],
    github: "https://github.com/Jayasuriya033/Budgets-Tracker.git",
    demo: "https://budgets-tracker.vercel.app/",
    category: "fullstack",
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
    <section id="project" className="py-20 bg-gradient-to-b from-muted/30 to-background pt-20">
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
                    : "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white"
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
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 group relative flex flex-col justify-around"
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
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-base w-auto">
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
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

