import {
  FaShoppingCart,
  FaComments,
  FaFileAlt,
  FaBrain,
  FaBolt,
  FaLock,
  FaPenNib,
  FaExclamationTriangle
} from "react-icons/fa";


import { projectsData } from "../data/projectsData";

const icons = {
  cart: FaShoppingCart,       // Matrix E-commerce
  lock: FaLock,              // Password Vault
  pen: FaPenNib,             // IntelliBlog
  alert: FaExclamationTriangle, // Emergency dashboard
  filesearch: FaFileAlt,    // CVInsight
  bot: FaBrain               // Resolve.AI
};


function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 bg-white dark:bg-[#212b3a]"
    >
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-[38px] md:text-[46px] font-bold text-black dark:text-white">
          Featured Projects
        </h2>

        <div className="w-[95px] h-[4px]
        bg-gradient-to-r from-blue-500 to-purple-600
        mx-auto mt-2 rounded-full" />

        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto text-md">
          A showcase of my best work demonstrating technical expertise
          and problem-solving abilities
        </p>
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
              rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.2)]
              overflow-hidden
              transition
              hover:-translate-y-1
              border border-gray-200 dark:border-gray-700
              "
            >
              {/* TOP */}
              <div
                className={`h-45 flex items-center justify-center
                bg-gradient-to-br ${proj.gradient}`}
              >
                {Icon && (
                  <Icon
                    size={42}
                    className="text-white opacity-70"
                  />
                )}
              </div>

              {/* BODY */}
              <div className="p-5">

                {/* TAGS */}
                <div className="flex gap-2 mb-2 flex-wrap">
                  {proj.category.map((tag, i) => (
                    <span
                      key={i}
                      className="
                      text-xs px-3 py-1 rounded-full
                      bg-blue-100 text-blue-600
                      dark:bg-blue-900/40 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold text-lg text-black dark:text-white">
                  {proj.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                  {proj.description}
                </p>

                {/* TECH */}
                {proj.tech?.length > 0 && (
                  <div className="flex gap-2 flex-wrap mt-4">
                    {proj.tech.map((t, i) => (
                      <span
                        key={i}
                        className="
                        text-xs px-2.5 py-1 rounded
                        bg-gray-100 dark:bg-gray-800
                        text-gray-700 dark:text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* ACTIONS */}
                <div className="flex gap-3 mt-6">
                  <button
                    className={`
                    ${proj.btnColor}
                    ${!proj.live ? "opacity-50 cursor-not-allowed" : ""}
                    text-white px-4 py-2.5 rounded-lg
                    flex-1 text-sm cursor-pointer 
                    flex items-center justify-center gap-2
                    hover:brightness-110
                    transition`}
                    disabled={!proj.live}
                    onClick={() => window.open(proj.live, "_blank")}
                  >
                    Live Demo
                  </button>

                  <button
                    className="
                    bg-gray-200 dark:bg-gray-800
                    text-black dark:text-white
                    px-4 py-2.5 rounded-lg
                    flex-1 text-sm
                    flex items-center justify-center gap-2
                    hover:bg-gray-300 dark:hover:bg-gray-700
                    transition cursor-pointer"
                    disabled={!proj.github}
                    onClick={() => window.open(proj.github, "_blank")}
                  >
                    GitHub
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* MORE */}
      <div className="flex justify-center mt-16">
        <a
          href="https://github.com/Ridam-Mittal"
          target="_blank"
          rel="noreferrer"
          className="
          bg-blue-600 hover:bg-blue-700
          text-white px-7 py-3 rounded-xl
          flex items-center gap-2
          transition"
        >
          View More on GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;
