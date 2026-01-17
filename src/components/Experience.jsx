import { useState } from "react";
import { experienceData } from "../data/experienceData";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 md:px-12 py-16
      bg-gray-100 dark:bg-[#0B1220]"
    >
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2
          className="
          text-[38px] md:text-[46px] font-bold
          text-[#0F172A] dark:text-white"
        >
          {experienceData.title}
        </h2>

        <div
          className="
          w-[95px] h-[4px]
          bg-gradient-to-r from-blue-500 to-purple-600
          mx-auto mt-2 rounded-full"
        />

        <p
          className="
          mt-4 text-md max-w-xl mx-auto
          text-[#475569] dark:text-gray-400"
        >
          {experienceData.subtitle}
        </p>
      </div>

      {/* EXPERIENCE LIST */}
      <div className="space-y-10 max-w-6xl mx-auto">
        {experienceData.experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  const [showMore, setShowMore] = useState(false);
  const Icon = exp.icon;

  const isMobile = window.innerWidth < 768;

  const responsibilities = isMobile
    ? showMore
      ? exp.responsibilities
      : exp.responsibilities.slice(0, 3)
    : exp.responsibilities;

  const technologies = isMobile
    ? showMore
      ? exp.technologies
      : exp.technologies.slice(0, 5)
    : exp.technologies;

  return (
    <div
      className="
      bg-white dark:bg-[#121c2e]
      rounded-[18px] p-5 md:p-7
      shadow-[0_12px_35px_rgba(0,0,0,0.15)]
      border border-gray-200 dark:border-gray-700
      relative"
    >
      {/* CURRENT BADGE */}
      {exp.current && (
        <span
          className="
          absolute top-5 right-5
          bg-green-100 dark:bg-green-900/40
          text-green-700 dark:text-green-400
          text-xs font-medium px-3 py-1 rounded-full"
        >
          Current
        </span>
      )}

      {/* HEADER */}
      <div className="flex gap-4 md:gap-5 flex-wrap">
        <div
          className="
          w-12 h-12 md:w-14 md:h-14
          rounded-xl bg-[#2563EB]
          flex items-center justify-center
          text-white shadow-md"
        >
          <Icon size={22} />
        </div>

        <div>
          <h3
            className="
            text-lg md:text-xl font-semibold
            text-[#0F172A] dark:text-white"
          >
            {exp.role}
          </h3>

          <p className="text-[#2563EB] font-medium mt-1">
            {exp.company}
          </p>

          <div
            className="
            flex flex-wrap items-center gap-4
            text-sm mt-2
            text-[#64748B] dark:text-gray-400"
          >
            <span className="flex items-center gap-2">
              <FaCalendarAlt size={14} />
              {exp.start} – {exp.end}
            </span>

            <span className="flex items-center gap-2">
              <FaMapMarkerAlt size={14} />
              {exp.location}
            </span>
          </div>
        </div>
      </div>

      {/* RESPONSIBILITIES */}
      {exp.responsibilities?.length > 0 && (
        <div className="mt-6">
          <h4
            className="
            font-semibold mb-3
            text-[#0F172A] dark:text-white"
          >
            Key Responsibilities:
          </h4>

          <ul className="space-y-3">
            {responsibilities.map((item, i) => (
              <li
                key={i}
                className="
                flex gap-3 text-sm
                text-[#475569] dark:text-gray-300"
              >
                <span
                  className="
                  w-5 h-5 rounded-full p-2
                  bg-[#2563EB]
                  text-white flex items-center
                  justify-center text-xs mt-[2px]"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* TECH */}
      {exp.technologies?.length > 0 && (
        <div className="mt-6">
          <h4
            className="
            font-semibold mb-3
            text-[#0F172A] dark:text-white"
          >
            Technologies Used:
          </h4>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                px-3 py-1.5 rounded-lg text-xs
                font-medium
                bg-[#E8F1FF] dark:bg-[#1f3a66]
                text-[#2563EB] dark:text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* SHOW MORE */}
      {isMobile &&
        (exp.responsibilities.length > 3 ||
          exp.technologies.length > 5) && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="
            mt-4 text-sm font-medium
            text-blue-500 hover:underline"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        )}
    </div>
  );
}

export default Experience;
