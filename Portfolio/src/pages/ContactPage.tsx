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
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
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
  const [showToast, setShowToast] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [_toastIconType, _setToastIconType] = useState("");
  const [toastType, setToastType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const [_field, setField] = useState("");

  const handleCopy = async (name: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setField(name);
      setShowCopyToast(true);
      setCopyMessage(`${name} Copied!`);
      // alert(`${name} Copied!`)
      setTimeout(() => {
        setField("");
        setShowCopyToast(false);
      }, 3000);
    } catch (error) {
      console.log("Copy Error ", error);
      alert("Nothing Copied");
    }
  };

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
        setToastMessage("Email sent successfully");
        setToastType("success");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);

        setFormState({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setToastMessage("Failed to send email. Please try again!");
      setToastType("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
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
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-muted/30 to-background pt-20 sm:pt-50"
    >
      <div className="container px-4">
        <motion.div className="text-center mb-16">
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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 rounded-lg border border-border shadow-lg"
          >
            <div className="flex justify-between">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Contact Information{" "}
              </h3>
              {showCopyToast && (
                <p className="px-2 rounded text-primary">
                  {copyMessage}
                </p>
              )}
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex flex-col">
                  {" "}
                  <div className="border border-graw-900 p-3 rounded-full text-white">
                    <img
                      src={"icons/email.png"}
                      className="h-4 w-5 sm:h-6 sm:w-6 cursor-pointer"
                      alt={`Email Icon`}
                      onClick={() =>
                        handleCopy("Email", "jayasuriyaganesan2019@gmail.com")
                      }
                    />
                  </div>
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
                <div className="flex flex-col">
                  <div className="border border-graw-900 p-3 rounded-full text-white">
                    <img
                      src={"icons/phone.png"}
                      className="h-4 w-5 sm:h-6 sm:w-6 cursor-pointer"
                      alt={`Phone Icon`}
                      onClick={() =>
                        handleCopy("Mobile Number", "+91 6384091750")
                      }
                    />
                  </div>
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
                <div className="flex flex-col relative">
                  <div className="border border-gray-900 p-3 rounded-full text-white">
                    <img
                      src={"icons/location.svg"}
                      className="h-4 w-5 sm:h-6 sm:w-6 cursor-pointer"
                      alt={`Location Icon`}
                      onClick={() =>
                        handleCopy(
                          "Address",
                          "Tiruchirapalli, Tamilnadu, India."
                        )
                      }
                    />
                  </div>
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
                    icon: "icons/whatsapp-icon.png",
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
                className="w-full group bg-transparent text-primary border border-primary hover:bg-primary hover:text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2 ">
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

              {showToast && (
                <div
                  className={`fixed top-10 right-5 px-4 py-2 rounded shadow-md flex items-center gap-2 
      ${toastType === "success" ? "bg-green-600" : "bg-red-600"} text-white`}
                >
                  {toastType === "success" ? (
                    <IoCheckmarkSharp />
                  ) : (
                    <IoCloseSharp />
                  )}
                  <span>{toastMessage}</span>
                </div>
              )}
              {/* {showCopyToast && (
                <div className="fixed top-10 right-5 px-4 py-2 rounded shadow-md flex items-center gap-2 bg-gray-600 text-white">
                  <span>{copyMessage}</span>
                </div>
              )} */}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
