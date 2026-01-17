import { contactData } from "../data/contactData";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

function Contact() {

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_gxmq138",
        "template_zsri2q4",
        formRef.current,
        "PdPLKhYDA0u3gATyi"
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to send message. Try again!");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-14 py-16
      bg-white dark:bg-[#212b3a]"
    >
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-[36px] md:text-[46px] font-bold
        text-[#0F172A] dark:text-white">
          {contactData.title}
        </h2>

        <div className="w-[95px] h-[4px]
        bg-gradient-to-r from-blue-600 to-purple-600
        mx-auto mt-2 rounded-full" />

        <p
          className="
          mt-4 text-md md:text-base
          text-[#475569] dark:text-gray-400
          max-w-xl mx-auto"
        >
          {contactData.subtitle}
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* FORM */}
        <div
          className="
          bg-white dark:bg-[#121c2e]
          rounded-2xl p-8 md:p-10
          shadow-xl border
          border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold mb-8
          text-[#0F172A] dark:text-white">
            Send Me a Message
          </h3>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-5"
          >

            {[
              { label: "Your Name", type: "text", placeholder: "John Doe", name: "user_name" },
              { label: "Your Email", type: "email", placeholder: "john@example.com", name: "user_email" },
              { label: "Subject", type: "text", placeholder: "Project Inquiry", name: "subject" }
            ].map((field, i) => (
              <div key={i}>
                <label className="text-sm font-medium
                text-[#0F172A] dark:text-gray-300">
                  {field.label}
                </label>

                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="
                  mt-2 w-full
                  border border-gray-200
                  dark:border-gray-600
                  rounded-lg px-4 py-3
                  bg-transparent
                  text-[#0F172A] dark:text-white
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}

            {/* MESSAGE */}
            <div>
              <label className="text-sm font-medium
              text-[#0F172A] dark:text-gray-300">
                Message
              </label>

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Tell me about your project..."
                className="
                mt-2 w-full
                border border-gray-200
                dark:border-gray-600
                rounded-lg px-4 py-3
                bg-transparent
                text-[#0F172A] dark:text-white
                focus:outline-none
                focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
              w-full flex items-center
              justify-center gap-2
              bg-gradient-to-r
              from-blue-600 to-purple-600
              text-white py-3 rounded-lg
              hover:opacity-90 transition
              disabled:opacity-60"
            >
              {loading ? "Sending..." : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* INFO */}
          <div
            className="
            bg-white dark:bg-[#121c2e]
            rounded-2xl p-8
            shadow-xl border
            border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-6
            text-[#0F172A] dark:text-white">
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
                    flex items-center justify-center
                    text-white
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
                    <p className="text-sm font-medium
                    text-[#0F172A] dark:text-white">
                      {item.label}
                    </p>

                    <p className="text-sm
                    text-gray-600 dark:text-gray-400">
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
            bg-gradient-to-br
            from-[#F2F6FF] to-[#FDF4FF]
            dark:from-[#1f2933] dark:to-[#111827]
            rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-lg font-semibold mb-5
            text-[#0F172A] dark:text-white">
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
                    w-11 h-11 rounded-lg
                    bg-white dark:bg-[#1f2933] dark:text-white
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
            bg-white dark:bg-[#121c2e]
            rounded-2xl p-8
            shadow-xl border
            border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-3
            text-[#0F172A] dark:text-white">
              Availability
            </h3>

            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <p className="text-sm font-medium
              text-[#0F172A] dark:text-white">
                {contactData.availability.status}
              </p>
            </div>

            <p className="text-sm
            text-gray-600 dark:text-gray-400">
              {contactData.availability.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
