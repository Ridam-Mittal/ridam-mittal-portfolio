import {
  Code2,
  Users,
  Lightbulb,
  BookOpen
} from "lucide-react";

export const aboutData = {
  title: "About Me",

  journeyTitle: "My Journey",

  paragraphs: [
    "I'm a passionate Full Stack Developer with a strong foundation in computer science and a love for creating innovative solutions. My journey in tech started with curiosity about how things work, which led me to pursue a degree in Computer Science Engineering.",

    "Throughout my academic and professional career, I've worked on diverse projects ranging from web applications to machine learning models, always striving to write clean, efficient, and maintainable code.",

    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through blog posts and tutorials."
  ],

  quickFacts: [
    {
      id: 1,
      title: "Clean Code Advocate",
      desc: "Believer in writing maintainable and scalable code",
      icon: Code2,
      color: "#2563EB"
    },
    {
      id: 2,
      title: "Team Player",
      desc: "Experienced in agile methodologies and collaboration",
      icon: Users,
      color: "#9333EA"
    },
    {
      id: 3,
      title: "Problem Solver",
      desc: "Love tackling complex challenges with creative solutions",
      icon: Lightbulb,
      color: "#DB2777"
    },
    {
      id: 4,
      title: "Continuous Learner",
      desc: "Always exploring new technologies and best practices",
      icon: BookOpen,
      color: "#4F46E5"
    }
  ],

  stats: [
    {
        id: 1,
        value: "300+",
        label: "DSA Problems Solved",
        color: "#2563EB"
    },
    {
        id: 2,
        value: "50+",
        label: "GitHub Repositories",
        color: "#9333EA"
    },
    {
        id: 3,
        value: "6+",
        label: "Months Industry Experience",
        color: "#DB2777"
    }
  ]
};
