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
      value: "ridam112004@gmail.com",
      icon: "mail",
      color: "blue"
    },
    {
      id: 2,
      label: "Phone",
      value: "+91 7889534549",
      icon: "phone",
      color: "green"
    },
    {
      id: 3,
      label: "Location",
      value: "Noida, India",
      icon: "location",
      color: "purple"
    }
  ],

  socials: [
    { id: 1, icon: FaGithub, url: "https://github.com/Ridam-Mittal" },
    { id: 2, icon: FaLinkedin, url: "https://www.linkedin.com/in/ridam-mittal-2b602a25b" },
    { id: 3, icon: FaTwitter, url: "" },
    { id: 4, icon: FaInstagram, url: "https://www.instagram.com/ridam_1011" }
  ],

  availability: {
    status: "Available for freelance work",
    description:
      "I'm currently open to new opportunities and collaborations. Feel free to reach out!"
  }
};
