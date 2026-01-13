import { contactData } from "../data/contactData";
import {
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="min-h-screen px-14 py-16">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-[42px] font-bold text-[#0F172A]">
          {contactData.title}
        </h2>

        <div className="w-[70px] h-[3px] bg-[#2563EB] mx-auto mt-4 rounded-full" />

        <p className="mt-5 text-sm text-[#475569] max-w-xl mx-auto">
          {contactData.subtitle}
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* FORM */}
        <div
          className="
          bg-white rounded-[18px] p-10
          shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
        >
          <h3 className="text-xl font-semibold mb-8">
            Send Me a Message
          </h3>

          <form className="space-y-5">

            <div>
              <label className="text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="
                mt-2 w-full border border-gray-200
                rounded-lg px-4 py-3
                focus:outline-none focus:ring-2
                focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="
                mt-2 w-full border border-gray-200
                rounded-lg px-4 py-3
                focus:outline-none focus:ring-2
                focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="
                mt-2 w-full border border-gray-200
                rounded-lg px-4 py-3
                focus:outline-none focus:ring-2
                focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="
                mt-2 w-full border border-gray-200
                rounded-lg px-4 py-3
                focus:outline-none focus:ring-2
                focus:ring-blue-500"
              />
            </div>

            <button
              className="
              w-full flex items-center justify-center gap-2
              bg-gradient-to-r from-blue-600 to-purple-600
              text-white py-3 rounded-lg
              hover:opacity-90 transition"
            >
              <Send size={18} />
              Send Message
            </button>

          </form>
        </div>

        {/* RIGHT */}
        <div className="space-y-8">

          {/* INFO */}
          <div
            className="
            bg-white rounded-[18px] p-8
            shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
          >
            <h3 className="text-lg font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">
              {contactData.info.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center"
                >
                  <div
                    className={`
                    w-11 h-11 rounded-lg
                    flex items-center justify-center text-white
                    ${
                      item.color === "blue"
                        ? "bg-blue-500"
                        : item.color === "green"
                        ? "bg-green-500"
                        : "bg-purple-500"
                    }`}
                  >
                    {item.icon === "mail" && <Mail size={18} />}
                    {item.icon === "phone" && <Phone size={18} />}
                    {item.icon === "location" && <MapPin size={18} />}
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SOCIALS */}
          <div
            className="
            bg-gradient-to-br from-[#F2F6FF] to-[#FDF4FF]
            rounded-[18px] p-8
            shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
          >
            <h3 className="text-lg font-semibold mb-5">
              Connect on Social Media
            </h3>

            <div className="flex gap-4">
              {contactData.socials.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    w-11 h-11 rounded-lg bg-white
                    flex items-center justify-center
                    shadow hover:-translate-y-1
                    transition"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* AVAILABILITY */}
          <div
            className="
            bg-white rounded-[18px] p-8
            shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
          >
            <h3 className="text-lg font-semibold mb-3">
              Availability
            </h3>

            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <p className="text-sm font-medium">
                {contactData.availability.status}
              </p>
            </div>

            <p className="text-sm text-gray-600">
              {contactData.availability.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
