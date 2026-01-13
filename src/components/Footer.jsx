import { Send } from "lucide-react";

function Footer() {
  return (
    <footer
      className="
      bg-gradient-to-br from-[#0F172A] to-[#020617]
      text-gray-300 px-14 py-14"
    >

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Ridam Mittal
          </h3>

          <p className="text-sm leading-relaxed text-gray-400">
            Actively building production-ready web applications
            and strengthening backend architecture skills.
            Open to learning & collaboration.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Useful Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/resume.pdf"
                className="hover:text-white transition"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="hover:text-white transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/yourusername"
                target="_blank"
                className="hover:text-white transition"
              >
                LeetCode
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Open to Opportunities
          </h3>

          <p className="text-sm text-gray-400 mb-4">
            Reach out for internships, full-time roles
            or freelance collaborations.
          </p>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="
              bg-[#020617] border border-gray-700
              rounded-lg px-4 py-2 text-sm
              focus:outline-none focus:border-blue-500"
            />

            <button
              className="
              bg-blue-600 px-4 rounded-lg
              flex items-center justify-center
              hover:bg-blue-700 transition"
            >
              <Send size={16} />
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div
        className="
        border-t border-gray-800
        mt-12 pt-6
        flex flex-col md:flex-row
        justify-between items-center
        text-sm text-gray-500"
      >
        <p>
          © {new Date().getFullYear()} Ridam Mittal.
          All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
