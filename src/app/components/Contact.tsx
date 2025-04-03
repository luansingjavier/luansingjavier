"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";

// Dynamically import the ContactForm with no SSR
const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false });

// Using environment variables for EmailJS configuration
// Make sure you have these defined in your .env.local file
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

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
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-accent">
              Contact Information
            </h3>
            <p className="text-gray-300 mb-6">
              I&apos;m open to collaborations, freelance opportunities, and
              remote roles! Feel free to connect.
            </p>

            <div className="space-y-6">
              <a
                href="https://github.com/luansingjavier/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-dark flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors">
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <p className="text-gray-400">@luansingjavier</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/javier-luansing-958628a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-dark flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors">
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <p className="text-gray-400">Javier Luansing</p>
                </div>
              </a>

              <div className="flex items-center text-gray-300 group">
                <div className="w-10 h-10 rounded-full bg-gray-dark flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:luansingjavier@gmail.com"
                    className="text-accent hover:underline"
                  >
                    luansingjavier@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center text-gray-300 group">
                <div className="w-10 h-10 rounded-full bg-gray-dark flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">Naga City, Philippines 🇵🇭</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-dark p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-6 text-accent">
              Send Me a Message
            </h3>

            <ContactForm
              isSubmitting={isSubmitting}
              submitMessage={submitMessage}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              formState={formState}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
