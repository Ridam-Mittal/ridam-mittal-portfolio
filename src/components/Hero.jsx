import {
  FaEnvelope as Mail,
  FaFolder as Folder,
  FaDownload as Download,
  FaMapMarkerAlt as MapPin,
  FaPhoneAlt as Phone
} from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { heroData } from "../data/heroData";
import "../styles/hero.css";
import { useState } from "react";

const icons = {
  mail: Mail,
  folder: Folder,
  download: Download
};

function Hero() {
  const [loading, setLoading] = useState(false);

  const goToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const downloadResume = () => {
    setLoading(true);

    window.open(
      heroData.resumeLink,
      "_blank"
    );

    setTimeout(() => setLoading(false), 1500);
  };

  const handleAction = (action) => {
    if (action === "projects") goToSection("projects");
    if (action === "contact") goToSection("contact");
    if (action === "resume") downloadResume();
  };

  return (
    <section
      id="home"
      className="
      hero-bg h-screen flex items-center justify-center px-10
      text-black dark:text-white"
    >
      <div className="max-w-3xl text-center">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span
            className="
            flex items-center gap-2 
            bg-[#E0ECFF] text-[#2563EB]
            dark:bg-[#102d5a] dark:text-blue-400
            px-5 py-2 rounded-full text-sm font-medium shadow-sm"
          >
            <FaRocket size={14} /> Welcome to My Portfolio
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          <span className="hero-name">
            Hi, I'm {heroData.name}
          </span>
        </h1>

        {/* Role */}
        <h2 className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4">
          {heroData.role}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
          {heroData.description}
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-5 mb-10">
          {heroData.ctas.map((btn) => {
            const Icon = icons[btn.icon];

            return (
              <button
                key={btn.id}
                disabled={btn.action === "resume" && loading}
                onClick={() => handleAction(btn.action)}
                className={`flex items-center gap-2 
                px-6 py-3 rounded-xl transition
                shadow-md hover:shadow-lg
                active:scale-95 cursor-pointer
                ${
                  btn.primary
                    ? "bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
                    : `
                      bg-white border border-gray-200 hover:bg-gray-50
                      dark:bg-[#020617] dark:border-gray-700
                      dark:hover:bg-[#020617]/80
                    `
                }`}
              >
                <Icon size={18} />
                {btn.action === "resume" && loading
                  ? "Downloading..."
                  : btn.label}
              </button>
            );
          })}
        </div>

        {/* CONTACT */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-700 dark:text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#2563EB]" />
            {heroData.location}
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} className="text-[#7C3AED]" />
            {heroData.email}
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} className="text-[#DB2777]" />
            {heroData.phone}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
