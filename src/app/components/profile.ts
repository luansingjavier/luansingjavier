// Content shared by several sections, kept in one place so it stays consistent.

export const EMAIL = "luansingjavier@gmail.com";

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/javier-luansing-958628a4/",
  },
  { label: "GitHub", href: "https://github.com/luansingjavier/" },
] as const;

type ExperienceEntry = {
  company: string;
  /** Shown in the square badge, since there are no company logos. */
  initials: string;
  position: string;
  /** Employment type, e.g. "Contract". Omitted when unknown. */
  type?: string;
  location?: string;
  period: string;
  description: string[];
};

export const experienceData: ExperienceEntry[] = [
  {
    company: "Circles",
    initials: "CI",
    position: "Full Stack Developer",
    location: "Vancouver, Canada",
    period: "Dec 2025 – Present",
    description: [
      "Managed continuous improvement and maintenance of Android and iOS mobile applications to enhance user satisfaction.",
      "Addressed and resolved issues, including bug fixes and performance optimizations, to improve overall app performance.",
      "Utilized GitHub to facilitate effective teamwork and project management, ensuring timely milestone delivery.",
    ],
  },
  {
    company: "Nutricoach Inc.",
    initials: "NC",
    position: "React Native Developer",
    location: "Makati, Philippines",
    period: "Jul 2022 – Oct 2025",
    description: [
      "Managed the ongoing enhancement and maintenance of Android and iOS mobile applications to increase user satisfaction.",
      "Partnered with full-stack development and QA teams to provide reliable solutions that fulfilled project requirements.",
      "Leveraged GitLab and Linear to facilitate effective teamwork and project management, guaranteeing milestones were delivered on schedule.",
    ],
  },
  {
    company: "Tracktile",
    initials: "TR",
    position: "Full Stack Developer",
    type: "Contract",
    period: "Nov 2023 – Nov 2024",
    description: [
      "Developed new features and user interfaces based on wireframe models.",
      "Collaborated with full-stack developers and QA professionals to deliver robust solutions.",
      "Utilized GitLab and Asana for seamless teamwork and project management.",
    ],
  },
  {
    company: "Cloud Panda PH",
    initials: "CP",
    position: "React Native Developer",
    period: "Apr 2022 – Jan 2023",
    description: [
      "Maintained and enhanced mobile apps for Android and iOS.",
      "Created new features based on wireframe models.",
      "Managed deployments to Google Play and App Stores.",
      "Worked with GitHub and JIRA for project management.",
    ],
  },
  {
    company: "Moment House",
    initials: "MH",
    position: "React Native Developer",
    period: "Aug 2021 – May 2022",
    description: [
      "Developed and maintained mobile apps for Android and iOS.",
      "Improved app performance and implemented new features.",
      "Led code quality reviews and collaborated with cross-functional teams.",
      "Worked with Bitbucket and JIRA in an Agile/Scrum environment.",
    ],
  },
  {
    company: "Maven Software Development",
    initials: "MS",
    position: "React Native Developer",
    type: "Part-time",
    period: "Jul 2021 – Mar 2022",
    description: [
      "Maintained mobile apps and developed new UI features.",
      "Created API endpoints to support mobile functionality.",
      "Managed deployments and collaborated with designers and QA teams.",
    ],
  },
  {
    company: "Catholic Connect",
    initials: "CC",
    position: "React Native Developer",
    period: "May 2020 – Aug 2021",
    description: [
      "Built and maintained mobile apps for iOS and Android.",
      "Deployed updates and ensured smooth app performance.",
      "Worked with Bitbucket and JIRA for agile development.",
    ],
  },
  {
    company: "Laravel Developer",
    initials: "LD",
    position: "Web Developer",
    period: "Dec 2019 – Apr 2020",
    description: [
      "Developed and maintained web applications.",
      "Created API endpoints and improved system performance.",
      "Used Bitbucket and JIRA for project management.",
    ],
  },
];
