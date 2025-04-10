"use strict";
import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

export function ContactPage() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        "service_a810474",
        "template_k6uwecc",
        {
          name: formState.name,
          subject: formState.subject,
          email: formState.email,
          message: formState.message,
        },
        "JtZqaK6ld8FlhTUbn"
      );

      if (response.status === 200) {
        alert("Email sent successfully!");
        setFormState({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send email. Please try again.");
    }
    setTimeout(() => {
      console.log("Form submitted:", formState);
      setIsSubmitting(false);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 pt-20">
      <div className="container px-4">
        <motion.div
          // initial={{ opacity: 0, y: 20 }}
          // animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          // transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have an exciting project idea or considering working together? I’d
            love to chat!
          </p>
        </motion.div>
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6"
        >
          {/* <div ref={ref} className="grid md:grid-cols-2 gap-12"> */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 rounded-lg border border-border shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Contact Information
            </h3>

            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="border border-graw-900 p-3 rounded-full text-white">
                  <img
                    src={"icons/email.png"}
                    className="h-4 w-5 sm:h-6 sm:w-6"
                    alt={`Email Icon`}
                  />
                </div>
                <div>
                  <h4 className="text-muted-foreground break-all text-sm sm:text-base">
                    Email
                  </h4>
                  <p className="text-muted-foreground break-all text-sm sm:text-base">
                    jayasuriyaganesan2019@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="border border-graw-900 p-3 rounded-full text-white">
                  <img
                    src={"icons/phone.png"}
                    className="h-4 w-5 sm:h-6 sm:w-6"
                    alt={`Phone Icon`}
                  />
                </div>
                <div>
                  <h4 className="text-muted-foreground break-all text-sm sm:text-base">
                    Phone
                  </h4>
                  <p className="text-muted-foreground break-all text-sm sm:text-base">
                    +91 6384091750
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="border border-graw-900 p-3 rounded-full text-white">
                  <img
                    src={"icons/location.svg"}
                    className="h-4 w-5 sm:h-6 sm:w-6"
                    alt={`Email Icon`}
                  />
                </div>
                <div>
                  <h4 className="text-muted-foreground break-all text-sm sm:text-base">
                    Location
                  </h4>
                  <p className="text-muted-foreground break-all text-sm sm:text-base">
                    Tiruchirapalli, Tamilnadu, India.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex flex-wrap justify-around sm:justify-start gap-4 max-w-full">
                {[
                  {
                    href: "https://www.linkedin.com/in/jayasuriya-g/",
                    icon: "icons/linkedin.png",
                  },
                  {
                    href: "https://github.com/Jayasuriya033",
                    icon: "icons/github.png",
                  },
                  {
                    href: "#",
                    icon: "icons/twitter.svg",
                  },
                  {
                    href: "https://wa.me/6384091750",
                    icon: "icons/whatsapp.png",
                  },
                  {
                    href: "https://www.instagram.com/jayasuriya.ganesan_/?hl=en",
                    icon: "icons/instagram.png",
                  },
                ].map(({ href, icon }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-graw-900 p-3 rounded-full text-white"
                    whileHover={{ y: -5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/jayasuriya-g/"
                  target="_blank"
                  className="bg-primary p-3 rounded-full text-white shadow-lg"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/Jayasuriya033"
                  target="_blank"
                  className="bg-primary p-3 rounded-full text-white shadow-lg"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  className="bg-primary p-3 rounded-full text-white shadow-lg"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://wa.me/6384091750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary p-3 rounded-full text-white shadow-lg"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <MessageCircle className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/jayasuriya.ganesan_/?hl=en"
                  target="_blank"
                  className="bg-primary p-3 rounded-full text-white shadow-lg"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card p-8 rounded-lg border border-border shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
              Send an Email
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="abc@gmail.com"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Project discussion"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={7}
                  required
                  className="bg-background border-border resize-none focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
