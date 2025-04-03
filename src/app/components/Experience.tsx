"use client";

import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    id: 1,
    company: "Tracktile",
    position: "Full Stack Developer (Contract)",
    period: "Nov 2023 - Nov 2024",
    description: [
      "Developed new features and user interfaces based on wireframe models.",
      "Collaborated with full-stack developers and QA professionals to deliver robust solutions.",
      "Utilized GitLab and Asana for seamless teamwork and project management.",
    ],
  },
  {
    id: 2,
    company: "Cloud Panda PH",
    position: "React Native Developer",
    period: "Apr 2022 - Jan 2023",
    description: [
      "Maintained and enhanced mobile apps for Android and iOS.",
      "Created new features based on wireframe models.",
      "Managed deployments to Google Play and App Stores.",
      "Worked with GitHub and JIRA for project management.",
    ],
  },
  {
    id: 3,
    company: "Moment House",
    position: "React Native Developer",
    period: "Aug 2021 - May 2022",
    description: [
      "Developed and maintained mobile apps for Android and iOS.",
      "Improved app performance and implemented new features.",
      "Led code quality reviews and collaborated with cross-functional teams.",
      "Worked with Bitbucket and JIRA in an Agile/Scrum environment.",
    ],
  },
  {
    id: 4,
    company: "Maven Software Development",
    position: "React Native Developer (Part-time)",
    period: "Jul 2021 - Mar 2022",
    description: [
      "Maintained mobile apps and developed new UI features.",
      "Created API endpoints to support mobile functionality.",
      "Managed deployments and collaborated with designers and QA teams.",
    ],
  },
  {
    id: 5,
    company: "Catholic Connect",
    position: "React Native Developer",
    period: "May 2020 - Aug 2021",
    description: [
      "Built and maintained mobile apps for iOS and Android.",
      "Deployed updates and ensured smooth app performance.",
      "Worked with Bitbucket and JIRA for agile development.",
    ],
  },
  {
    id: 6,
    company: "Laravel Developer",
    position: "Web Developer",
    period: "Dec 2019 - Apr 2020",
    description: [
      "Developed and maintained web applications.",
      "Created API endpoints and improved system performance.",
      "Used Bitbucket and JIRA for project management.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                <div
                  className={`md:text-right ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <h3 className="text-xl font-bold text-accent">
                    {exp.company}
                  </h3>
                  <h4 className="text-lg font-semibold text-white">
                    {exp.position}
                  </h4>
                  <p className="text-gray-400 mb-4">{exp.period}</p>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-accent border-4 border-black"></div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="bg-gray-dark p-6 rounded-lg shadow-lg">
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
