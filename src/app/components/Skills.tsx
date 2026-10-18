import React from "react";

const skills = [
  "Cross-platform iOS & Android apps",
  "App Store & Google Play releases",
  "UI from wireframes",
  "API design & endpoints",
  "Performance optimization",
  "Code quality reviews",
  "Cloud-based solutions",
  "DevOps & CI/CD",
  "Agile / Scrum",
  "Remote team collaboration",
];

const tools = [
  "React Native",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "PHP",
  "Laravel",
  "CodeIgniter",
  "GitHub",
  "GitLab",
  "Bitbucket",
  "JIRA",
  "Asana",
  "Claude",
  "Cursor",
];

const Skills = () => (
  <section id="skills" className="section gap-6">
    <h2 className="h2">Skills</h2>
    <div className="flex flex-col gap-8">
      <ul className="flex max-w-[560px] flex-wrap gap-1">
        {skills.map((skill) => (
          <li key={skill} className="chip">
            {skill}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3">
        <p>Technologies &amp; tools:</p>
        <ul className="flex max-w-[560px] flex-wrap gap-1">
          {tools.map((tool) => (
            <li
              key={tool}
              className="chip border border-ink-10 bg-transparent"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
