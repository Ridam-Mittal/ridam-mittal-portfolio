import { experienceData } from "../data/experienceData";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="min-h-screen px-14 py-16">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-[42px] font-bold text-[#0F172A]">
          {experienceData.title}
        </h2>

        <div
          className="w-[70px] h-[3px] bg-[#2563EB]
          mx-auto mt-4 rounded-full"
        />

        <p className="mt-5 text-sm text-[#475569] max-w-xl mx-auto">
          {experienceData.subtitle}
        </p>
      </div>

      {/* EXPERIENCE LIST */}
      <div className="space-y-10">

        {experienceData.experiences.map((exp) => {
          const Icon = exp.icon;

          return (
            <div
              key={exp.id}
              className="
              bg-white rounded-[18px] p-9
              shadow-[0_12px_35px_rgba(0,0,0,0.06)]
              relative"
            >

              {/* CURRENT BADGE */}
              {exp.current && (
                <span
                  className="
                  absolute top-6 right-6
                  bg-green-100 text-green-700
                  text-xs font-medium px-3 py-1 rounded-full"
                >
                  Current
                </span>
              )}

              {/* HEADER */}
              <div className="flex gap-5">

                {/* ICON */}
                <div
                  className="
                  w-14 h-14 rounded-xl
                  bg-[#2563EB]
                  flex items-center justify-center
                  text-white shadow-md"
                >
                  <Icon size={24} />
                </div>

                {/* INFO */}
                <div>
                  <h3 className="text-xl font-semibold text-[#0F172A]">
                    {exp.role}
                  </h3>

                  <p className="text-[#2563EB] font-medium mt-1">
                    {exp.company}
                  </p>

                  <div
                    className="flex flex-wrap items-center gap-5
                    text-sm text-[#64748B] mt-2"
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
              <div className="mt-6">
                <h4 className="font-semibold mb-3">
                  Key Responsibilities:
                </h4>

                <ul className="space-y-3">
                  {exp.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-[#475569]"
                    >
                      <span
                        className="
                        w-5 h-5 rounded-full
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

              {/* TECH */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">
                  Technologies Used:
                </h4>

                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                      px-3 py-1.5 rounded-lg text-xs
                      font-medium bg-[#E8F1FF]
                      text-[#2563EB]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}

export default Experience;
