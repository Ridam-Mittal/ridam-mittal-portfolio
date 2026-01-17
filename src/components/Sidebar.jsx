import { navLinks } from "../data/navLinks";
import { socials } from "../data/socials";
import { BsMoonFill, BsSunFill, BsList } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

function Sidebar({ scrollRef }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { dark, setDark } = useTheme();

  /* ACTIVE SECTION DETECTION */
  useEffect(() => {
  if (!scrollRef?.current) return;

  const container = scrollRef.current;
  const sections = container.querySelectorAll("section[id]");

  const onScroll = () => {
    let current = "home";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const offset = rect.top - containerRect.top;

      if (offset <= container.clientHeight / 2) {
        current = section.id;
      }
    });

    setActive(current);
  };

  container.addEventListener("scroll", onScroll);
  onScroll();

  return () => container.removeEventListener("scroll", onScroll);
}, []);



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
      <aside
        onClick={(e) => e.stopPropagation()}   // 🔥 STOP CLOSING BUG
        className={`
        fixed left-0 top-0 h-screen z-50
        bg-white dark:bg-gradient-to-b 
        dark:bg-[#212b3a]
        flex flex-col
        border-r border-gray-50 dark:border-gray-700
        shadow-[4px_0_20px_rgba(0,0,0,0.08)]

        w-[clamp(240px,80vw,320px)]
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
            className="w-32 h-32 rounded-full border-4 border-blue-200 object-cover dark:border-blue-700"
          />

          <h3 className="mt-4 font-bold text-2xl text-black dark:text-white">
            Ridam Mittal
          </h3>

          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Full Stack Developer
          </p>

          {/* SOCIALS */}
          <div className="flex gap-3 mt-5">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  bg-gray-100 dark:bg-gray-700
                  p-3 rounded-full 
                  hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white
                  transition"
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
            mt-6 w-1/2   /* 🔥 FIXED WIDTH */
            bg-gray-100 dark:bg-gray-700 cursor-pointer
            text-black dark:text-white
            rounded-lg py-2 
            flex items-center justify-center gap-2
            text-sm font-medium
            hover:bg-gray-200 dark:hover:bg-gray-700
            transition"
          >
            {dark ? <BsSunFill /> : <BsMoonFill />}
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* NAV */}
        <nav
          className="
          flex-1 overflow-y-auto px-6 space-y-2
          border-t border-b
          border-gray-200 dark:border-gray-700
          pt-6 no-scrollbar"
        >
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === active;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}   // close only after nav click
                className={`
                flex items-center gap-3
                px-4 py-3 rounded-xl
                text-sm font-medium transition
                ${
                  isActive
                    ? "bg-[#E8F1FF] text-[#2563EB] dark:bg-[#1a335a] dark:text-[#4781fe]"
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
                      : "text-gray-600 dark:text-gray-400"
                  }
                />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* FOOTER */}
        <div className="py-4 text-xs text-gray-500 dark:text-gray-400 flex justify-around">
          <p>© {new Date().getFullYear()} Ridam</p>
          <p>Portfolio</p>
        </div>

      </aside>
    </>
  );
}

export default Sidebar;
