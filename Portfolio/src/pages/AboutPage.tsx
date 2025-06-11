import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from 'react';


export function AboutPage() {
  const [selectedTab, setSelectedTab] = useState("Experience");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const tabs = ["Experience", "Education", "Certification"];
  const images = [
    '/assets/profile-1.jpg',
    '/assets/profile-0.jpg',
    '/assets/profile-4.jpg',
    '/assets/profile-2.jpg',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer); 
  }, []);

  // const goToPrevious = () => {
  //   if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  // };

  // const goToNext = () => {
  //   if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  // };

  return (
    <section id="about" className="py-10 bg-gradient-to-b from-muted/30 to-background pt-20 sm:pt-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_60%] gap-8 2xl:gap-10 lg:gap-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-60 h-60 sm:w-[80%] sm:h-[90%] md:w-[100%] md:h-[70%] md:-mt-64 lg:w-[100%] lg:h-[80%] lg:-mt-24 xl:w-[90%] xl:h-[90%] xl:-mt-5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[currentIndex]}
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-primary"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(event, info) => {
                    if (info.offset.x < -50) {
                      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                    } else if (info.offset.x > 50) {
                      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                    }
                  }}
                />
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mb-6  sm:w-[90%] md:w-[300px] lg:w-[500px] xl:w-[700px] 2xl:w-[900px] sm:ml-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-primary">
                Who Am I?
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Hi, I'm <strong>Jayasuriya G</strong>, a passionate{" "}
                <strong>Full-Stack Developer</strong> from Tamil Nadu, India. I
                specialize in building secure, scalable, and high-performance
                full stack web applications using modern technologies like{" "}
                <strong>
                  React, Angular, Node.js, Express, Prisma ORM, MySQL/PostgreSQL
                </strong>{" "}
                and more.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Currently, I'm working at{" "}
                <strong>Techaffinity Consulting Pvt. Ltd</strong> as an{" "}
                <strong>Associate Software Engineer</strong>. I enjoy building
                user-friendly websites, secure APIs, and responsive dashboards.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                <strong>
                  I'm always eager to learn new technologies and improve my
                  skills every day.
                </strong>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-[4px] text-[13px] sm:gap-3 sm:ml-8 sm:text-base mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`font-times font-bold py-1 px-2 cursor-pointer border-b-2 rounded-sm transition-all duration-200 ${
                    selectedTab === tab
                      ? "text-base sm:text-3xl font-bold mb-2 text-primary border-primary"
                      : " text-xs sm:text-xl text-primary border-transparent hover:text-primary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="overflow-y-auto text-sm pr-2 sm:text-base h-[100px] w-[95%] sm:ml-8 sm:h-[20%] sm:w-[80%]  lg:h-[30%] lg:w-[80%] xl:h-[40%] xl:w-[90%]">
              {selectedTab === "Experience" && (
                <ul className="list-disc pl-5 space-y-4 text-muted-foreground">
                  <li>
                    <p className="font-semibold">
                      Associate Software Engineer, Techaffinity, Bangalore{" "}
                      <span className="font-normal">(May 2024 – Present)</span>
                    </p>
                    <p>
                      Delivered responsive dashboards, secure APIs, and
                      real-time chat functionalities across full-stack projects.
                    </p>
                  </li>
                  <li>
                    <p className="font-semibold">
                      Full Stack Developer Intern, Techaffinity, Trichy{" "}
                      <span className="font-normal">(Feb 2024 – Apr 2024)</span>
                    </p>
                    <p>
                      Built a Kiosk System and a Book Store Management System
                      with OTP-based recovery, admin/student modules, and JWT
                      authentication.
                    </p>
                  </li>
                  <li>
                    <p className="font-semibold">
                      Dotnet Intern, Virtusa Consulting, Chennai{" "}
                      <span className="font-normal">(Jan 2023 – Jun 2023)</span>
                    </p>
                    <p>
                      Trained in .NET, React, JavaScript, SQL, and more. Passed
                      all assessments and secured a job offer.
                    </p>
                  </li>
                </ul>
              )}

              {selectedTab === "Education" && (
                <ul className="list-disc pl-5 space-y-4 text-muted-foreground">
                  <li>
                    <p>
                      <strong>Bachelor of Engineering</strong> in Computer
                      Science and Engineering
                    </p>
                    <p>
                      <i>KSR College of Engineering, 2019 – 2023</i>
                    </p>
                    <p>
                      CGPA: <strong>8.49 / 10</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Higher Secondary</strong>
                    </p>
                    <p>
                      <i>Nehru Higher Secondary School, 2017 – 2019</i>
                    </p>
                    <p>
                      Percentage: <strong>71%</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>SSLC</strong>
                    </p>
                    <p>
                      <i>Nehru Higher Secondary School, 2012 – 2017</i>
                    </p>
                    <p>
                      Percentage: <strong>93%</strong>
                    </p>
                  </li>
                </ul>
              )}

              {selectedTab === "Certification" && (
                <ul className="list-disc pl-5 space-y-4 text-muted-foreground">
                  <li>
                    <p>
                      Certification:{" "}
                      <strong>Microsoft Azure Fundamentals (AZ-900)</strong>
                    </p>
                    <p>
                      Certification ID: <strong>E20AF3F3E99E9277</strong>
                    </p>
                    <p>
                      Issued by: <strong>Microsoft</strong>
                    </p>
                    <p>
                      Date: <strong>March 24, 2023</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      Certification:{" "}
                      <strong>Java</strong>
                    </p>
                    <p>
                      Certification ID: <strong>CT-ILKXDCLP</strong>
                    </p>
                    <p>
                      Issued by: <strong>Solo Learn</strong>
                    </p>
                    <p>
                      Date: <strong>April 14, 2022</strong>
                    </p>
                  </li>
                </ul>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
