import React from "react";
import { experienceData } from "./profile";
import { ArrowRightIcon } from "./Icons";

const Hero = () => (
  <section className="flex flex-col items-center gap-6 pb-[88px] pt-[calc(var(--menu-height)+88px)] sm:pb-[104px] sm:pt-40">
    <p className="inline-flex items-center gap-2 bg-ink-5 px-3 py-1.5 text-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      Available for freelance &amp; remote work
    </p>

    <div className="flex flex-col items-center gap-2.5 text-center">
      <h1 className="h1 max-w-[400px]">Full-Stack &amp; Mobile Developer</h1>
      <p className="max-w-[480px] text-lg text-ink-60">
        With 10+ years of experience specializing in React Native, React, and
        cloud-based solutions. I build scalable, high-performance applications
        from design to deployment.
      </p>
    </div>

    <a
      href="#experience"
      className="flex w-full max-w-[320px] items-center justify-between gap-4 bg-ink-5 px-4 py-3.5 transition-colors duration-150 hover:bg-ink-10"
    >
      <span className="flex items-center gap-3">
        <span className="flex" aria-hidden>
          {experienceData.slice(0, 3).map((exp, i) => (
            <span
              key={exp.company}
              className={`flex h-6 w-6 items-center justify-center rounded-full border border-bg bg-ink text-[9px] font-medium tracking-normal text-bg ${
                i > 0 ? "-ml-2.5" : ""
              }`}
            >
              {exp.initials}
            </span>
          ))}
        </span>
        <span className="text-sm font-medium">View Experience</span>
      </span>
      <ArrowRightIcon className="h-5 w-5" />
    </a>
  </section>
);

export default Hero;
