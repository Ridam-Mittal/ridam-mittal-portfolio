import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

export const contactData = {
  title: "Get In Touch",
  subtitle:
    "Let's discuss your project or just say hello. I'm always open to new opportunities and collaborations.",

  info: [
    {
      id: 1,
      label: "Email",
      value: "ridam.mittal@email.com",
      icon: "mail",
      color: "blue"
    },
    {
      id: 2,
      label: "Phone",
      value: "+91 98765 43210",
      icon: "phone",
      color: "green"
    },
    {
      id: 3,
      label: "Location",
      value: "New Delhi, India",
      icon: "location",
      color: "purple"
    }
  ],

  socials: [
    { id: 1, icon: FaGithub, url: "#" },
    { id: 2, icon: FaLinkedin, url: "#" },
    { id: 3, icon: FaTwitter, url: "#" },
    { id: 4, icon: FaInstagram, url: "#" }
  ],

  availability: {
    status: "Available for freelance work",
    description:
      "I'm currently open to new opportunities and collaborations. Feel free to reach out!"
  }
};
