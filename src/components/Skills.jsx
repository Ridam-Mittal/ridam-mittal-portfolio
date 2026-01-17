import { skills } from "../data/skillsData";
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
} from "react-icons/fa";

const iconMap = {
  frontend: FaReact,
  backend: FaServer,
  database: FaDatabase,
  cloud: FaCloud,
  tools: FaTools,
};

function SkillCard({ icon: Icon, title, items, color, bg }) {
  if (!items.length) return null; // hide empty categories

  return (
    <div
      className="
      bg-[#ffffff] dark:bg-[#1c2634]
      rounded-[18px] p-7
      shadow-[0_12px_30px_rgba(0,0,0,0.2)]
      border border-gray-200 dark:border-gray-700
      transition
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="p-3 rounded-xl text-white"
          style={{ background: color }}
        >
          <Icon size={22} />
        </div>

        <h3 className="text-xl font-bold text-[#0F172A] dark:text-white">
          {title}
        </h3>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className={` 
              px-3 py-1.5 rounded-lg text-sm font-medium border
              dark:border dark:border-gray-700
            `}
            style={{
              background: bg,
              color: color,
              borderColor: color,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}


function Skills() {
  const validSkills = Object.values(skills).filter(
    (s) => s.skillsList.length
  );

  return (
    <section
      id="skills"
      className="
      min-h-screen
      px-6 md:px-12
      py-18
      bg-gray-50 dark:bg-[#171b2c]
      transition
      "
    >
      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-[42px] md:text-[46px] font-bold text-[#0F172A] dark:text-white">
          Technical Skills
        </h2>

        <div
          className="
          w-[95px] h-[4px]
          bg-gradient-to-r from-blue-500 to-purple-600
          mx-auto mt-2 rounded-full
          "
        />

        <p className="max-w-2xl mx-auto mt-3 text-[#475569] dark:text-gray-400 text-md leading-relaxed">
          A comprehensive toolkit of modern technologies and frameworks I work
          with to build robust applications
        </p>
      </div>

      {/* GRID */}
      <div
        className="
        grid grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        "
      >
        {validSkills.map((item, i) => {
          const Icon = iconMap[item.icon];

          return (
            <SkillCard
              key={i}
              icon={Icon}
              title={item.label}
              items={item.skillsList}
              color={item.color}
              bg={item.bg}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
