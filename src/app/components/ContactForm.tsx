"use client";

import React, { useRef } from "react";

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

  return (
    <div suppressHydrationWarning>
      <form
        ref={form}
        className="space-y-4"
        onSubmit={handleSubmit}
        suppressHydrationWarning
      >
        <input type="hidden" name="to_email" value="luansingjavier@gmail.com" />

        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            value={formState.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="reply_to"
            value={formState.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Your email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formState.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Your message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="button w-full py-3 mt-4 flex justify-center items-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
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
            className={`mt-4 p-3 rounded ${
              submitMessage.includes("error") ||
              submitMessage.includes("configure")
                ? "bg-red-900/50 text-red-200"
                : "bg-green-900/50 text-green-200"
            }`}
          >
            {submitMessage}
          </div>
        )}

        <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <p className="text-gray-300 text-sm">
            If you don&apos;t receive a confirmation, please email me directly
            at{" "}
            <a
              href="mailto:luansingjavier@gmail.com"
              className="text-accent hover:underline"
            >
              luansingjavier@gmail.com
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
