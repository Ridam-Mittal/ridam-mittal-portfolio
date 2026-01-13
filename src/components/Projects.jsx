import {
  FaShoppingCart,
  FaComments,
  FaList,
  FaBrain,
  FaCloud,
  FaHeartbeat,
  FaGithub
} from "react-icons/fa";

import { projectsData } from "../data/projectsData";

const icons = {
  cart: FaShoppingCart,
  chat: FaComments,
  list: FaList,
  brain: FaBrain,
  cloud: FaCloud,
  heart: FaHeartbeat
};

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-8 bg-white dark:bg-[#020617]"
    >
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black dark:text-white">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          A showcase of my best work demonstrating technical expertise
        </p>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* GRID */}
      <div
        className="
        grid gap-8
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        max-w-7xl mx-auto
        "
      >
        {projectsData.map((proj) => {
          const Icon = icons[proj.icon];

          return (
            <div
              key={proj.id}
              className="
              bg-white dark:bg-[#0f172a]
              rounded-2xl shadow-xl
              overflow-hidden
              hover:-translate-y-1
              transition
              "
            >
              {/* TOP GRADIENT */}
              <div
                className={`h-36 flex items-center justify-center
                bg-gradient-to-br ${proj.gradient}`}
              >
                <Icon size={38} className="text-white opacity-70" />
              </div>

              {/* BODY */}
              <div className="p-6">
                {/* TAGS */}
                <div className="flex gap-2 mb-3 flex-wrap">
                  {proj.category.map((tag, i) => (
                    <span
                      key={i}
                      className="
                      text-xs px-3 py-1 rounded-full
                      bg-blue-100 text-blue-600
                      dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold text-lg text-black dark:text-white">
                  {proj.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {proj.description}
                </p>

                {/* TECH */}
                <div className="flex gap-2 flex-wrap mt-4">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="
                      text-xs px-2 py-1 rounded
                      bg-gray-100 dark:bg-gray-800
                      text-gray-700 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="flex gap-3 mt-6">
                  <button
                    className={`
                    ${proj.btnColor}
                    text-white px-4 py-2 rounded-lg
                    flex-1 text-sm`}
                  >
                    Live Demo
                  </button>

                  <button
                    className="
                    bg-gray-200 dark:bg-gray-800
                    text-black dark:text-white
                    px-4 py-2 rounded-lg
                    flex-1 text-sm
                    flex items-center justify-center gap-2"
                  >
                    <FaGithub /> Code
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MORE BTN */}
      <div className="flex justify-center mt-16">
        <button
          className="
          bg-blue-600 hover:bg-blue-700
          text-white px-6 py-3 rounded-xl
          flex items-center gap-2"
        >
          <FaGithub /> View More on GitHub
        </button>
      </div>
    </section>
  );
}

export default Projects;
