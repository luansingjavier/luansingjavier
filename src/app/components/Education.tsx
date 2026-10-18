import React from "react";

type Entry = {
  period: string;
  title: string;
  org: string;
  note?: string;
  /** Link to verify a certificate. */
  url?: string;
};

const entries: Entry[] = [
  {
    period: "2012 – 2016",
    title: "BS Information Technology",
    org: "Ateneo de Naga University",
    note: "Activities: Programming Challenge, Ateneo Innovation Center, TACTICS",
  },
  {
    period: "Oct 2026",
    title: "Claude Code 101",
    org: "Claude Academy · Course Completion Badge",
    url: "https://academy.claude.com/verify/4c3dc3a7e9621f50ad01fa1b68f357af",
  },
  {
    period: "Sep 2022",
    title: "React, Node.js, Express & MongoDB - The MERN Fullstack Guide",
    org: "Udemy · Full Stack Development",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-e22a608e-06ad-47b9-b544-e08c3ffba022.pdf",
  },
  {
    period: "Sep 2022",
    title: "The Complete React Native + Hook Course",
    org: "Udemy · Mobile Development",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-d7f784b7-bfef-48cd-bd2d-bd1509120301.pdf",
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
              {entry.url && (
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="muted-link w-fit text-sm underline underline-offset-2"
                >
                  Verify credential
                </a>
              )}
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
