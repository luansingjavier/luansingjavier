import React from "react";
import { experienceData } from "./profile";

/** Square dot used in bullet lists and between inline details. */
export const Dot = ({ size = 4 }: { size?: 3 | 4 }) => (
  <span
    aria-hidden
    className={`shrink-0 bg-ink-60 ${size === 3 ? "h-[3px] w-[3px]" : "mt-2 h-1 w-1"}`}
  />
);

export const BulletList = ({ items }: { items: string[] }) => (
  <ul className="flex max-w-[360px] flex-col gap-px">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2 text-sm text-ink-60">
        <Dot />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Experience = () => (
  <section id="experience" className="section gap-10">
    <h2 className="h2">Experience</h2>
    <div className="flex flex-col gap-8">
      {experienceData.map((exp, index) => (
        <article key={exp.company} className="flex items-stretch gap-4">
          <div className="flex w-10 flex-none flex-col items-center pt-0.5">
            <span
              aria-hidden
              className="flex h-10 w-10 items-center justify-center bg-ink text-xs font-medium tracking-normal text-bg"
            >
              {exp.initials}
            </span>
            {index < experienceData.length - 1 && (
              <span aria-hidden className="mt-3.5 w-px flex-1 bg-ink-10" />
            )}
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row-reverse sm:items-start sm:justify-between sm:gap-6">
            <p className="whitespace-nowrap text-sm text-ink-60">
              {exp.period}
            </p>
            <div className="flex flex-col gap-4 sm:flex-1">
              <div className="flex flex-col gap-0.5">
                <h3 className="h3">{exp.position}</h3>
                <p className="flex flex-wrap items-center gap-2 text-sm text-ink-60">
                  {[exp.company, exp.type, exp.location]
                    .filter(Boolean)
                    .map((detail, i) => (
                      <React.Fragment key={detail}>
                        {i > 0 && <Dot size={3} />}
                        <span>{detail}</span>
                      </React.Fragment>
                    ))}
                </p>
              </div>
              <BulletList items={exp.description} />
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
