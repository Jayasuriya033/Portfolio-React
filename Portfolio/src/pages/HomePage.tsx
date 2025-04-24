import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {Link} from "react-scroll"

export function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const codeSnippet = `
const Portfolio = () => {                                              

  return (                                              
    <div className="portfolio">                                                   
      <Header                                                                                          
        name="Jayasuriya"  role="Full Stack Developer"/>
      
      <Projects featured={true} />
                      
         
      <Contact                                                            
        email="jayasuriyaganesan2019@gmail.com"
        github="https://github.com/Jayasuriya033"/>                                   
    </div>                                                                       
)};`.split("");

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-background pt-2">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-70"
        style={{
          transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-70"
        style={{
          transform: `translate(${-scrollY * 0.1}px, ${-scrollY * 0.05}px)`,
        }}
      />

      <div className="container relative z-10 px-4 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-8">
            <div>
              <motion.h1
                className="mt-6 text-5xl md:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Hi, I'm{" "}
                <span className="inline-block relative">
                  <span className="relative z-10 text-primary">Jayasuriya</span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 rounded-sm -z-10"></span>
                </span>
              </motion.h1>

              <motion.h2
                className="mt-6 text-2xl md:text-3xl text-foreground/80 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl sm:text-2xl text-foreground mb-6 max-w-2xl">
                  I craft clean, modern, and responsive web applications that
                  deliver exceptional user experiences.
                </h2>
              </motion.h2>

              <motion.p
                className="mt-6 text-lg text-muted-foreground max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl">
                  I'm a passionate Full-Stack Developer specializing in{" "}
                  <span className="text-primary font-semibold">React</span>,{" "}
                  <span className="text-primary font-semibold">TypeScript</span>
                  , and{" "}
                  <span className="text-primary font-semibold">Node.js</span>. I
                  focus on writing clean, efficient code while building
                  beautiful, performant interfaces.
                </p>
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 hover:"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-5}
                duration={800}
                className="bg-transparent w-auto h-auto py-1 px-4 rounded text-primary border border-primary flex flex-row justify-center hover:bg-primary hover:text-white lg:hover:w-60"              >
                View My Work
                <ArrowRight className="m-2 mt-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
               to="contact"
               spy={true}
               smooth={true}
               offset={-5}
               duration={800}
                className="bg-transparent text-center w-auto h-auto py-1 px-4 rounded text-primary border border-primary hover:bg-primary hover:text-white lg:hover:w-40"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              className="relative bg-black/90 rounded-xl p-6 shadow-xl border border-primary/20 font-mono text-xs sm:text-sm text-green-400 overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] xl:h-[350px] overflow-y-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-gray-400">portfolio.tsx</div>
              </div>

              <div className="relative sm:pl-16 overflow-x-auto sm:overflow-x-hidden">
                {codeSnippet.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.01, delay: index * 0.005 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block w-2 h-4 bg-               -400 ml-1"
                />
              </div>
              <div className="absolute top-1/2 right-0 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="text-sm text-muted-foreground mb-2">
            Scroll to explore
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center cursor-pointer"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-5}
              duration={800} 
            >
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
