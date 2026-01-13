import { navLinks } from "../data/navLinks";
import { socials } from "../data/socials";
import { BsMoonFill, BsSunFill, BsList } from "react-icons/bs";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const { dark, setDark } = useTheme();

  return (
    <>
      {/* MOBILE TOGGLE */}
      <button
        className="
        md:hidden fixed top-4 left-4 z-50
        bg-white dark:bg-[#020617]
        text-black dark:text-white
        p-3 rounded-lg shadow"
        onClick={() => setOpen(true)}
      >
        <BsList size={22} />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
        fixed left-0 top-0 h-screen 
        bg-white dark:bg-[#050d2c] 
        flex flex-col
        border-r border-gray-100 dark:border-gray-800
        shadow-[4px_0_20px_rgba(0,0,0,0.05)]

        w-[clamp(240px,20vw,320px)]
        transform transition-all duration-300

        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >

        {/* TOP */}
        <div className="p-6 flex flex-col items-center">

          <img
            src="https://i.ibb.co/fzhxSc87/processed-linkedin-photo.jpg"
            alt="Profile"
            className="
            w-32 h-32 rounded-full
            border-4 border-blue-200
            object-cover mt-1"
          />

          <h3
            className="
            mt-4 text-center font-bold text-[1.5em]
            text-black dark:text-white"
          >
            Ridam Mittal
          </h3>

          <p
            className="
            text-center text-gray-500
            dark:text-gray-400
            font-medium text-[0.95em]"
          >
            Full Stack Developer
          </p>

          {/* SOCIALS */}
          <div className="flex justify-center gap-3 mt-6">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  bg-gray-100 dark:bg-gray-800
                  p-2 rounded-full 
                  hover:bg-gray-200 dark:hover:bg-gray-700
                  transition
                  w-10 h-10 flex items-center justify-center
                  text-black dark:text-white"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          {/* DARK MODE */}
          <button
            onClick={() => setDark(!dark)}
            className="
            mt-6 bg-gray-100 dark:bg-gray-800
            text-black dark:text-white
            rounded-lg py-2 
            w-1/2 flex items-center justify-center gap-2
            text-[14px] font-medium
            hover:bg-gray-200 dark:hover:bg-gray-700
            transition"
          >
            {dark ? <BsSunFill /> : <BsMoonFill />}
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* NAV */}
        <div
          className="
          flex-1 overflow-y-auto px-6 space-y-2
          border-t border-b
          border-gray-200 dark:border-gray-800
          pt-8 no-scrollbar"
        >
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === "home"; // later dynamic

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`
                flex items-center gap-3
                px-4 py-3 rounded-xl
                text-sm font-medium transition
                ${
                  isActive
                    ? "bg-[#E8F1FF] text-[#2563EB]"
                    : `
                      text-gray-800 dark:text-gray-300
                      hover:bg-gray-100 dark:hover:bg-gray-800
                    `
                }`}
              >
                <Icon
                  size={18}
                  className={
                    isActive
                      ? "text-[#2563EB]"
                      : "text-gray-700 dark:text-gray-400"
                  }
                />
                {item.label}
              </a>
            );
          })}
        </div>

        {/* FOOTER */}
        <div
          className="
          py-6 text-xs 
          text-gray-600 dark:text-gray-400
          flex justify-around items-center"
        >
          <p>© {new Date().getFullYear()} Ridam Mittal</p>
          <p>Portfolio</p>
        </div>

      </div>
    </>
  );
}

export default Sidebar;
