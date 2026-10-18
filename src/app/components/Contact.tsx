"use client";

import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
import { EMAIL, socialLinks } from "./profile";
import { CheckIcon, GitHubIcon, LinkedInIcon } from "./Icons";
import { Dot } from "./Experience";

const CalendlyEmbed = dynamic(() => import("./CalendlyEmbed"), {
  ssr: false,
  loading: () => (
    <div className="h-[650px] w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-accent mb-4"></div>
        <p className="text-sm text-ink-60">Loading calendar...</p>
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
          to_email: EMAIL,
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

  const isError =
    submitMessage.includes("error") || submitMessage.includes("configure");

  return (
    <>
      <section
        id="calendly"
        className="flex scroll-mt-[var(--menu-height)] flex-col gap-8 pt-[88px] sm:pt-[104px]"
      >
        <div className="flex flex-col items-center gap-2.5 text-center">
          <h2 className="h2">Book a Free Call</h2>
          <p className="max-w-[400px] text-lg text-ink-60">
            Have a project in mind? Book a free 30-minute consultation call to
            discuss your requirements, timeline, and how I can help bring your
            vision to life.
          </p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-ink-60">
          {["30 minute call", "Video conferencing", "Project scoping"].map(
            (item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && <Dot size={3} />}
                {item}
              </li>
            )
          )}
        </ul>
        <div className="overflow-hidden">
          <CalendlyEmbed url={CALENDLY_URL} />
        </div>
      </section>

      <section
        id="contact"
        className="flex scroll-mt-[var(--menu-height)] flex-col gap-8 py-[88px] sm:py-[104px]"
      >
        <div className="flex flex-col items-center gap-2.5 text-center">
          <h2 className="h2">Let&apos;s Work Together</h2>
          <p className="max-w-[360px] text-lg text-ink-60">
            I&apos;m open to collaborations, freelance opportunities, and remote
            roles! Feel free to connect.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-4"
        >
          <input type="hidden" name="to_email" value={EMAIL} />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm text-ink-60">Your name</span>
              <input
                type="text"
                name="from_name"
                value={formState.name}
                onChange={handleChange}
                className="field"
                placeholder="Jane Doe"
                autoComplete="name"
                required
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm text-ink-60">Your email</span>
              <input
                type="email"
                name="reply_to"
                value={formState.email}
                onChange={handleChange}
                className="field"
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm text-ink-60">
              What&apos;s on your mind?
            </span>
            <textarea
              name="message"
              rows={5}
              value={formState.message}
              onChange={handleChange}
              className="field min-h-[120px] resize-y"
              placeholder="A project, a role, a question…"
              required
            ></textarea>
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
            {!submitMessage && (
              <p className="text-sm text-ink-60">
                Or email me at{" "}
                <a href={`mailto:${EMAIL}`} className="underline underline-offset-2 hover:text-ink">
                  {EMAIL}
                </a>
              </p>
            )}
          </div>

          {submitMessage && (
            <div
              role="status"
              className={`flex items-start gap-4 border-l-2 p-6 ${
                isError
                  ? "border-error bg-error/5 text-error"
                  : "border-success bg-success/10 text-success"
              }`}
            >
              {!isError && (
                <span className="flex h-10 w-10 flex-none items-center justify-center bg-success text-bg">
                  <CheckIcon className="h-5 w-5" />
                </span>
              )}
              <p className={isError ? "" : "pt-2"}>{submitMessage}</p>
            </div>
          )}
        </form>

        <div className="flex flex-col items-center gap-3">
          <p>Find me here:</p>
          <ul className="flex items-center gap-2">
            {socialLinks.map(({ label, href }) => {
              const Icon = label === "GitHub" ? GitHubIcon : LinkedInIcon;
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="muted-link inline-flex h-12 w-12 items-center justify-center"
                  >
                    <Icon className="h-7 w-7" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contact;
