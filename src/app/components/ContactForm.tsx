"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

type ContactFormProps = {
  isSubmitting: boolean;
  submitMessage: string;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formState: {
    name: string;
    email: string;
    message: string;
  };
};

export default function ContactForm({
  isSubmitting,
  submitMessage,
  handleSubmit,
  handleChange,
  formState,
}: ContactFormProps) {
  const form = useRef<HTMLFormElement>(null);

  const inputClasses =
    "w-full px-4 py-3 bg-gray-800/70 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all";

  return (
    <div suppressHydrationWarning>
      <form
        ref={form}
        className="space-y-6"
        onSubmit={handleSubmit}
        suppressHydrationWarning
      >
        <input type="hidden" name="to_email" value="luansingjavier@gmail.com" />

        <div>
          <label
            htmlFor="name"
            className="block text-gray-300 mb-2 text-sm font-medium"
          >
            Your Name
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            type="text"
            id="name"
            name="from_name"
            value={formState.name}
            onChange={handleChange}
            className={inputClasses + " backdrop-blur-sm"}
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-300 mb-2 text-sm font-medium"
          >
            Your Email
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            type="email"
            id="email"
            name="reply_to"
            value={formState.email}
            onChange={handleChange}
            className={inputClasses + " backdrop-blur-sm"}
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-300 mb-2 text-sm font-medium"
          >
            Your Message
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            id="message"
            name="message"
            rows={4}
            value={formState.message}
            onChange={handleChange}
            className={inputClasses + " backdrop-blur-sm resize-none"}
            placeholder="What would you like to discuss?"
            required
          ></motion.textarea>
        </div>

        <motion.button
          type="submit"
          className="relative overflow-hidden group w-full py-3 px-6 flex justify-center items-center bg-accent text-white font-medium rounded-lg shadow-md shadow-accent/10"
          disabled={isSubmitting}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10 flex items-center">
            {isSubmitting ? (
              <>
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
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send Message
              </>
            )}
          </span>
        </motion.button>

        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-4 rounded-lg ${
              submitMessage.includes("error") ||
              submitMessage.includes("configure")
                ? "bg-red-900/30 text-red-200 border border-red-500/30"
                : "bg-green-900/30 text-green-200 border border-green-500/30"
            }`}
          >
            {submitMessage}
          </motion.div>
        )}

        <div className="mt-4 p-3 bg-gray-800/20 rounded-lg border border-gray-700/50 text-center">
          <p className="text-gray-400 text-sm">
            I aim to respond within 24-48 hours
          </p>
        </div>
      </form>
    </div>
  );
}
