import { Code2, Users, Lightbulb, BookOpen } from "lucide-react";

export const aboutData = {
  title: "About Me",

  journeyTitle: "My Journey",

  paragraphs: [
    "I'm a Backend Developer Intern (Node.js) and final-year Computer Science student who enjoys building scalable applications and solving real-world engineering problems. My interest in technology started with curiosity about how systems work, which eventually led me to pursue Computer Science Engineering.",

    "I have hands-on experience working with REST APIs, databases, and full-stack web applications. From building SaaS platforms to personal projects, I focus on writing clean, efficient, and maintainable code.",

    "Beyond coding, I actively improve my problem-solving skills through DSA practice, explore new technologies, and contribute to projects that help me grow as a developer.",
  ],

  quickFacts: [
    {
      id: 1,
      title: "Quick Learner",
      desc: "Able to adapt quickly and pick up new technologies",
      icon: Code2,
      color: "#2563EB",
    },
    {
      id: 2,
      title: "Team Player",
      desc: "Comfortable working in team-based projects",
      icon: Users,
      color: "#9333EA",
    },
    {
      id: 3,
      title: "Problem Solver",
      desc: "Enjoy solving DSA and real-world challenges",
      icon: Lightbulb,
      color: "#DB2777",
    },
    {
      id: 4,
      title: "Continuous Learner",
      desc: "Regularly improving skills and exploring new tools",
      icon: BookOpen,
      color: "#4F46E5",
    },
  ],

  stats: [
    {
      id: 1,
      value: "500+",
      label: "DSA Problems Solved",
      color: "#2563EB",
    },
    {
      id: 2,
      value: "30+",
      label: "GitHub Repositories",
      color: "#9333EA",
    },
    {
      id: 3,
      value: "5+",
      label: "Months Industry Experience",
      color: "#DB2777",
    },
  ],
};
