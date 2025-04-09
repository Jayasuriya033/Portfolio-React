"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { Code2, Database, Laptop } from "lucide-react";

export function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // const skills = [
  //   {
  //     icon: <Code2 className="h-6 w-6 text-primary" />,
  //     title: "Frontend Development",
  //     description:
  //       "Building responsive web applications with modern frameworks",
  //   },
  //   {
  //     icon: <Database className="h-6 w-6 text-primary" />,
  //     title: "Backend Development",
  //     description: "Creating robust and scalable server-side solutions",
  //   },
  //   {
  //     icon: <Laptop className="h-6 w-6 text-primary" />,
  //     title: "Full Stack Integration",
  //     description: "Connecting frontend and backend for seamless applications",
  //   },
  // ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 pt-20">
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
                  className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-gray-600"
                />
              </div>
            </div>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div>
              <h2 className="text-lg font-semibold text-primary">
                “First, solve the problem. Then, write the code.”
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                — This mindset guides my approach to building efficient and
                thoughtful software.
              </p>
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            // className="space-y-4"
          >
            <div>
              <h1 className="text-3xl font-bold mb-4 text-primary">
                Who Am I?
              </h1>
              <p className="text-muted-foreground mb-6">
                Hi, I'm <strong> Jayasuriya G</strong>, a passionate{" "}
                <strong> Full-Stack Developer</strong> from Tamil Nadu, India. I
                specialize in building secure, scalable, and high-performance
                full stack web applications using modern technologies like{" "}
                <strong>
                  React, Angular, Node.js, Express, Prisma ORM, MySQL/PostgreSQL
                  and etc.
                </strong>{" "}
                .
              </p>
              <p className="text-muted-foreground mb-6">
                With a Bachelor's degree in{" "}
                <strong>Computer Science and Engineering</strong> and hands-on
                experience at <strong>Techaffinity Consulting Pvt. Ltd</strong>,
                I've worked on impactful projects such as{" "}
                <strong>Cmart </strong>(Magazine Publication) and{" "}
                <strong> Wild Game Butcher</strong> (SaaS Model)—where I was
                responsible for implementing{" "}
                <strong>
                  dashboards, APIs, JWT-based authentication, Redis caching, and
                  even real-time chat using WebSocket.io
                </strong>
                .
              </p>
            </div>

            <h1 className="text-xl font-bold mb-4 text-primary">Experience</h1>
            <ul className="list-disc pl-5 space-y-4 text-muted-foreground">
              <li>
                <p className="font-semibold">
                  Associate Software Engineer, Techaffinity, Bangalore{" "}
                  <span className="font-normal">(Nov 2024 – Present)</span>
                </p>
                <p>
                  Delivered responsive dashboards, secure APIs, and real-time
                  chat functionalities across full-stack projects.
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Full Stack Developer Intern, Techaffinity, Trichy{" "}
                  <span className="font-normal">(May 2024 – Oct 2024)</span>
                </p>
                <p>
                  Built a Kiosk System and a Book Store Management System with
                  OTP-based recovery, admin/student modules, and JWT
                  authentication.
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Dotnet Intern, Virtusa Consulting, Chennai{" "}
                  <span className="font-normal">(Jan 2023 – Jun 2023)</span>
                </p>
                <p>
                  Trained in .NET, React, JavaScript, SQL, and more—successfully
                  passed all assessments and secured a job offer.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
