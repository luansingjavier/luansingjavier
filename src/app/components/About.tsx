import React from "react";

const keySkills = [
  "React Native",
  "React",
  "TypeScript",
  "Node.js",
  "PHP (Laravel, CodeIgniter)",
  "DevOps & CI/CD",
  "Claude",
  "Cursor",
];

const About = () => (
  <section id="about" className="section gap-4">
    <h2 className="h2">About</h2>
    <div className="flex flex-col gap-8">
      <div className="flex max-w-[480px] flex-col gap-4 text-ink-60">
        <p>
          I&apos;m a results-driven software developer with expertise in
          mobile, web, and cloud solutions. With 10+ years of experience, I
          specialize in building scalable, high-performance applications from
          design to deployment.
        </p>
        <p>
          My passion lies in creating elegant solutions that leverage modern
          technologies like React Native, React, TypeScript, and Node.js.
          I&apos;m also experienced with PHP frameworks like Laravel and
          CodeIgniter.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p>Key skills:</p>
        <ul className="flex max-w-[560px] flex-wrap gap-1">
          {keySkills.map((skill) => (
            <li key={skill} className="chip">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
