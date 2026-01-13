import {
  FaBuilding,
  FaLaptopCode
} from "react-icons/fa";

export const experienceData = {
  title: "Work Experience",
  subtitle:
    "Professional experiences that shaped my career and expertise",

  experiences: [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "TechCorp Solutions Pvt. Ltd.",
      icon: FaBuilding,
      start: "June 2023",
      end: "Present",
      location: "New Delhi, India",
      current: true,

      responsibilities: [
        "Developed and maintained scalable web applications using React.js, Node.js, and MongoDB, serving 50,000+ active users",
        "Implemented RESTful APIs and integrated third-party services, reducing API response time by 40%",
        "Collaborated with cross-functional teams using Agile methodologies to deliver features on time",
        "Optimized database queries and implemented caching strategies, improving application performance by 35%",
        "Wrote comprehensive unit tests achieving 85% code coverage using Jest and React Testing Library"
      ],

      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Redux",
        "Docker",
        "AWS"
      ]
    },
  ]
};
