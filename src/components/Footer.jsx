import { Send } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0F172A] to-[#020617] text-gray-300 px-14 py-8">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Ridam Mittal
          </h3>

          <p className="text-sm leading-relaxed text-gray-400">
            Actively building production-ready web applications and strengthening backend architecture skills. Open to learning & collaboration.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Links
          </h3>

          <ul className="space-y-2 text-sm text-blue-400">
            <li>
              <a href="/resume.pdf" className="hover:text-white transition">
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ridam-Mittal"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                LeetCode
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
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

          <p className="text-sm text-gray-400">
            Available for internships, full-time roles,
            and meaningful collaborations.
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Ridam Mittal. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
