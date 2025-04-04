"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Database, Laptop } from "lucide-react";

export function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    {
      icon: <Code2 className="h-6 w-6 text-primary" />,
      title: "Frontend Development",
      description:
        "Building responsive web applications with modern frameworks",
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Backend Development",
      description: "Creating robust and scalable server-side solutions",
    },
    {
      icon: <Laptop className="h-6 w-6 text-primary" />,
      title: "Full Stack Integration",
      description: "Connecting frontend and backend for seamless applications",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 pt-25">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="flex justify-center items-center w-full">
              <div className="relative aspect-square w-full max-w-md">
                <img
                  src="/assets/profile.webp"
                  alt="Jayasuriya"
                  className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-gray-300"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Full-Stack Developer
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm a passionate full-stack developer with expertise in modern
                web technologies. I specialize in building responsive,
                performant, and user-friendly applications using React,
                TypeScript, and Node.js.
              </p>
              <p className="text-muted-foreground mb-6">
                With a strong foundation in both frontend and backend
                development, I create seamless experiences that solve real-world
                problems. I'm constantly learning and exploring new technologies
                to stay at the cutting edge of web development.
              </p>
            </div>

            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="mt-1">{skill.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-1">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                "React & TypeScript",
                "Node.js & Express",
                "Tailwind CSS",
                "MySQL & Prisma",
              ].map((tech, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>{tech}</span>
                </div>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
