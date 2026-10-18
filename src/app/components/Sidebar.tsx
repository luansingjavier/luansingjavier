import React from "react";
import Image from "next/image";
import { EMAIL, socialLinks } from "./profile";
import {
  BriefcaseIcon,
  ChatIcon,
  GitHubIcon,
  GlobeIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
} from "./Icons";

const info = [
  { icon: PinIcon, text: "Naga City, Philippines" },
  { icon: BriefcaseIcon, text: "10+ years of experience" },
  { icon: GlobeIcon, text: "Freelance / Remote" },
  { icon: ChatIcon, text: "English, Filipino" },
];

const socialIcons = { LinkedIn: LinkedInIcon, GitHub: GitHubIcon };

/**
 * Profile card. Stacked on top of the page on phones, a wide row on tablets,
 * and a fixed column on the left from 1024px up.
 */
const Sidebar = () => (
  <aside
    className="flex flex-col gap-6 bg-ink-5 px-6 pb-6 pt-[calc(var(--menu-height)+24px)] sm:items-center sm:px-16 sm:pb-16 sm:pt-[calc(var(--menu-height)+60px)] lg:fixed lg:inset-y-0 lg:left-0 lg:w-[var(--side-width)] lg:items-stretch lg:overflow-y-auto lg:border-r lg:border-ink-10 lg:bg-transparent lg:p-6"
  >
    <div className="flex w-full flex-col gap-6 border-b border-ink-10 pb-6 sm:max-w-[var(--content-width)] sm:flex-row sm:pb-8 lg:max-w-none lg:flex-col lg:gap-12">
      <Image
        src="/profile.jpg"
        alt="Javier Luansing"
        width={113}
        height={113}
        priority
        className="h-20 w-20 object-cover sm:h-[113px] sm:w-[113px] lg:h-24 lg:w-24"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-0.5">
          <p className="display">Javier Luansing</p>
          <p className="text-sm text-ink-60">Full-Stack &amp; Mobile Developer</p>
        </div>
        <p className="max-w-[264px] text-ink-60 sm:max-w-[360px] lg:max-w-[264px]">
          Specializing in React Native, React, and cloud-based solutions. I
          build scalable, high-performance applications from design to
          deployment.
        </p>
      </div>
    </div>

    <div className="flex w-full flex-col justify-between gap-12 sm:max-w-[var(--content-width)] sm:gap-16 lg:max-w-none lg:flex-1 lg:gap-12">
      <ul className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-6 lg:flex-col lg:gap-1">
        {info.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-2 text-sm">
            <Icon className="h-4 w-4" />
            <span>{text}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-4">
        <ul className="flex items-center gap-1">
          {socialLinks.map(({ label, href }) => {
            const Icon = socialIcons[label];
            return (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="muted-link inline-flex h-8 w-8 items-center justify-center"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            );
          })}
        </ul>
        <a href={`mailto:${EMAIL}`} className="btn w-full">
          <MailIcon className="h-4 w-4" />
          <span>Email Me</span>
        </a>
      </div>
    </div>
  </aside>
);

export default Sidebar;
