"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function SkillsPage() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: "/icons/programming-language.gif",
      title: "Programming Languages",
      description:
        "Writing clean and effective code using popular programming languages.",
      technologies: [
        "/icons/javaScript.svg",
        "/icons/typeScript.svg",
        "/icons/python.svg",
        "/icons/java.svg",
        "/icons/c-sharp.svg",
      ],
      techName: ["Java Script", "Type Script", "Python", "Java", "C#"],
    },
    {
      icon: "/icons/framework.gif",
      title: "Library or Framework",
      description:
        "Simplifying development by using tools like React, Angular, and Node.js.",
      color: "bg-primary",
      technologies: [
        "/icons/react.svg",
        "/icons/angular.svg",
        "/icons/node.svg",
        "/icons/express-js.svg",
        "/icons/socket.png",
        "/icons/redux.svg",
        "/icons/tailwind-css.svg",
        "/icons/bootstrap.svg",
      ],
      techName: [
        "React",
        "Angular",
        "Node",
        "Express",
        "Socket.io",
        "Redux",
        "Tailwind",
        "Bootstrap",
      ],
    },
    {
      icon: "/icons/database.gif",
      title: "Database",
      description:
        "Ensuring fast and accurate data retrieval with the help of modern databases with ORM",
      color: "bg-primary",
      technologies: [
        "/icons/mySQL.svg",
        "/icons/postgresSQL.svg",
        "/icons/redis.svg",
        "/icons/mongoDB.svg",
      ],
      techName: ["Mysql", "Postgres", "Redis", "Mongo DB"],
    },
    {
      icon: "/icons/cloud.gif",
      title: "Cloud Tech",
      description:
        "Cloud technology enables easy access to data from anywhere, at any time.",
      color: "bg-primary",
      technologies: [
        "/icons/aws.svg",
        // "/icons/azure.svg",
        "/icons/render.svg",
        "/icons/aiven.png",
        "/icons/cloudinary.webp",
      ],
      techName: ["AWS", "Render", "Aiven", "Cloudinary"],
    },
    {
      icon: "/icons/datastructure.gif",
      title: "Data Structure",
      description: "Mastering Data Structures for Better Code Performance",
      color: "bg-primary",
      technologies: [
        "/icons/array.png",
        "/icons/linked-list.png",
        "/icons/stack.png",
        "/icons/queue.png",
        "/icons/tree.png",
        "/icons/graphs.png",
        "/icons/algorithms.png",
      ],
      techName: [
        "Array",
        "Linked List",
        "Stack",
        "Queue",
        "Tree",
        "Graphs",
        "Algorithms",
      ],
    },
    {
      icon: "/icons/web-tech.gif",
      title: "Web Technologies",
      description: "Web Technologies Bring Ideas to Life Online.",
      color: "bg-primary",
      technologies: ["/icons/html5.svg", "/icons/css3.svg"],
      techName: ["HTML", "CSS"],
    },
    {
      icon: "/icons/testing.gif",
      title: "Testing",
      description: "Testing Tools That Build Trust in Code",
      color: "bg-primary",
      technologies: ["/icons/jest.svg"],
      techName: ["Jest"],
    },
    {
      icon: "/icons/tools.gif",
      title: "Tools",
      description: "Development Tools That Boost Productivity",
      color: "bg-primary",
      technologies: [
        "/icons/visual-studio-code.svg",
        "/icons/postman.svg",
        "/icons/git.svg",
        "/icons/bitbucket.svg",
        "/icons/sourcetree.svg",
        "/icons/jenkins.svg",
        "/icons/eclipse-ide.svg",
      ],
      techName: [
        "VS Code",
        "Postman",
        "Git",
        "Bitbucket",
        "Source Tree",
        "Jenkins",
        "Eclipse",
      ],
    },
    {
      icon: "/icons/others.gif",
      title: "Others",
      description: "Behind the Scenes Technologies",
      technologies: [
        "/icons/api.png",
        "/icons/prisma-orm.svg",
        "/icons/npm.svg",
        "/icons/vite.svg",
        "/icons/json.png",
        "/icons/xml.svg",
      ],
      techName: ["Rest API", "Prisma ORM", "Npm", "Vite", "Json", "Xml"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 pt-5 sm:pt-20">
      <div className="container px-4">
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed expertise in various technologies and methodologies
            to build modern, scalable web applications.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 hover:opacity-10 transition-opacity duration-300 -z-10" />

              <div className="text-white mb-4 p-1 rounded-lg hover:scale-110 transition-transform duration-300 w-fit flex items-center gap-2">
                <img
                  src={skill.icon}
                  className="w-[60px] h-[60px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] p-1 rounded-md border shadow-sm hover:shadow-xs transition-all duration-300"
                  alt={`${skill.title} Icon`}
                />
                <h3 className="text-xl sm:text-xl lg:text-2xl font-times text-muted-foreground break-all hover:text-primary transition-colors duration-300">
                  {" "}
                  {skill.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {skill.technologies.map((tech, i) => (
                  <div key={i} className="relative group">
                    <img
                      src={tech}
                      alt={`${skill.techName?.[i] || "Tech"} Icon`}
                      className="w-[50px] h-[50px] sm:w-[45px] sm:h-[45px] p-1 rounded-md border transition-transform duration-300 hover:scale-125"
                    />
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                      {skill.techName?.[i] || "Tech"}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
