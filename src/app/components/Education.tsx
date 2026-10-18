import React from "react";

const entries = [
  {
    period: "2012 – 2016",
    title: "BS Information Technology",
    org: "Ateneo de Naga University",
    note: "Activities: Programming Challenge, Ateneo Innovation Center, TACTICS",
  },
  {
    period: "Sep 2022",
    title: "React, Node.js, Express & MongoDB - The MERN Fullstack Guide",
    org: "Udemy · Full Stack Development",
  },
  {
    period: "Sep 2022",
    title: "The Complete React Native + Hook Course",
    org: "Udemy · Mobile Development",
  },
];

const Education = () => (
  <section id="education" className="section gap-10">
    <h2 className="h2">Education &amp; Certifications</h2>
    <div className="flex flex-col gap-8">
      {entries.map((entry) => (
        <article
          key={entry.title}
          className="flex flex-col gap-3 sm:flex-row-reverse sm:items-start sm:justify-between sm:gap-6"
        >
          <p className="whitespace-nowrap text-sm text-ink-60">
            {entry.period}
          </p>
          <div className="flex flex-col gap-4 sm:flex-1">
            <div className="flex flex-col gap-0.5">
              <h3 className="h3">{entry.title}</h3>
              <p className="text-sm text-ink-60">{entry.org}</p>
            </div>
            {entry.note && (
              <p className="max-w-[360px] text-sm text-ink-60">{entry.note}</p>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Education;
