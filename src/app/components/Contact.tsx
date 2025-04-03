"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";

// Dynamically import components with no SSR
// const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false });
const CalendlyEmbed = dynamic(() => import("./CalendlyEmbed"), {
  ssr: false,
  loading: () => (
    <div className="h-[650px] w-full flex items-center justify-center bg-gray-800 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent mb-4"></div>
        <p className="text-gray-400">Loading calendar...</p>
      </div>
    </div>
  ),
});

// Using environment variables for EmailJS configuration
// Make sure you have these defined in your .env.local file
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

// Calendly URL - Modified to skip meeting type selection and show calendar directly
const CALENDLY_URL =
  (process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/luansingjavier") + "/30min";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Initialize EmailJS when component mounts
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Update the correct state property based on field name
    if (name === "from_name") {
      setFormState((prev) => ({ ...prev, name: value }));
    } else if (name === "reply_to") {
      setFormState((prev) => ({ ...prev, email: value }));
    } else if (name === "message") {
      setFormState((prev) => ({ ...prev, message: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // Check if EmailJS credentials are configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSubmitMessage(
        "Contact form is not configured yet. Please configure EmailJS credentials."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Log the form data being sent
      const formData = new FormData(form.current);
      console.log("Form data being sent:");
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      // Try direct send method instead of sendForm
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          reply_to: formState.email,
          to_email: "luansingjavier@gmail.com",
          message: formState.message,
        }
      );

      console.log("Email sent successfully:", result.text);
      setSubmitMessage(
        "Your message has been sent! I will get back to you soon."
      );
      setFormState({ name: "", email: "", message: "" });
    } catch (error: unknown) {
      console.error("Contact form error:", error);
      let errorMessage =
        "There was an error sending your message. Please try again.";

      if (error instanceof Error) {
        errorMessage += " Error: " + error.message;
        console.error("Error details:", error);
      }

      setSubmitMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="calendly"
        className="py-20 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Schedule a consultation call
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-300 max-w-2xl mx-auto mb-12">
                Have a project in mind? Book a free 30-minute consultation call
                to discuss your requirements, timeline, and how I can help bring
                your vision to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-6 mb-8"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">30 minute call</h4>
                      <p className="text-gray-400">
                        Free consultation to discuss your project
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">
                        Video conferencing
                      </h4>
                      <p className="text-gray-400">
                        Connection details provided upon confirmation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Project scoping</h4>
                      <p className="text-gray-400">
                        Clear project requirements and timelines
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="relative overflow-hidden p-6 backdrop-blur-sm bg-gray-900/40 rounded-xl border border-gray-800/60 shadow-lg">
                    <div className="absolute top-0 right-0">
                      <div className="bg-accent py-1 px-4 rounded-bl-lg font-medium text-white text-sm">
                        Free Session
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/30">
                        <Image
                          src="/profile.jpg"
                          alt="Javier Luansing"
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Javier Luansing</h3>
                        <p className="text-accent text-sm">
                          30 Min Consultation
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      I&apos;ll help you scope your project and provide insights
                      on the best approach for your needs. After our call,
                      you&apos;ll receive a summary of our discussion and next
                      steps.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="backdrop-blur-sm bg-gray-900/60 rounded-2xl border border-gray-800/60 shadow-xl overflow-hidden">
                  <div className="bg-gray-800/90 p-4">
                    <h3 className="text-xl font-bold text-center">
                      Select a Date & Time
                    </h3>
                  </div>
                  <div className="p-0">
                    <div className="rounded-b-xl overflow-hidden">
                      <CalendlyEmbed url={CALENDLY_URL} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information Column */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-300 mb-8">
                  I&apos;m open to collaborations, freelance opportunities, and
                  remote roles! Feel free to connect.
                </p>

                <div className="space-y-6">
                  <a
                    href="https://github.com/luansingjavier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-accent">
                        GitHub
                      </h4>
                      <p>@luansingjavier</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/luansingjavier/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-accent">
                        LinkedIn
                      </h4>
                      <p>Javier Luansing</p>
                    </div>
                  </a>

                  <div className="flex items-center text-gray-300">
                    <div className="w-10 h-10 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-accent">Email</h4>
                      <a
                        href="mailto:luansingjavier@gmail.com"
                        className="text-accent hover:underline"
                      >
                        luansingjavier@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <div className="w-10 h-10 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-accent">
                        Location
                      </h4>
                      <p>Naga City, Philippines 🇵🇭</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">
                  Send Me a Message
                </h3>

                <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="hidden"
                    name="to_email"
                    value="luansingjavier@gmail.com"
                  />

                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="reply_to"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
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
                      "Send Message"
                    )}
                  </button>

                  {submitMessage && (
                    <div
                      className={`mt-4 p-4 rounded-lg ${
                        submitMessage.includes("error") ||
                        submitMessage.includes("configure")
                          ? "bg-red-900/30 text-red-200 border border-red-500/30"
                          : "bg-green-900/30 text-green-200 border border-green-500/30"
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}

                  <div className="text-sm text-gray-400 text-center mt-4">
                    If you don&apos;t receive a confirmation, please email me
                    directly at{" "}
                    <a
                      href="mailto:luansingjavier@gmail.com"
                      className="text-blue-400 hover:underline"
                    >
                      luansingjavier@gmail.com
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
