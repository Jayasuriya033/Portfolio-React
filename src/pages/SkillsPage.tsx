"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "../components/ui/Badge"
import { Code2, Database, Laptop, Zap } from "lucide-react"

export function SkillsPage() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const skills = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Building responsive and interactive UIs with React and TypeScript",
      color: "bg-primary",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description: "Creating robust APIs with Node.js, Express, and TypeScript",
      color: "bg-primary",
      technologies: ["Node.js", "Express", "TypeScript"],
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Database Design",
      description: "Designing and optimizing databases with MySQL and Prisma ORM",
      color: "bg-primary",
      technologies: ["MySQL", "Prisma"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Clean Code",
      description: "Writing maintainable, tested, and efficient code",
      color: "bg-primary",
      technologies: ["Clean Architecture", "Testing"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 pt-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed expertise in various technologies and methodologies to build modern, scalable web
            applications.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10" />

              <div
                className={`text-white mb-4 p-3 rounded-lg ${skill.color} group-hover:scale-110 transition-transform duration-300 w-fit`}
              >
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {skill.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

