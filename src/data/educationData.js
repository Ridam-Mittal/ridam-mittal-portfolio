import { FaGraduationCap, FaSchool, FaCertificate } from "react-icons/fa";

export const educationData = {
  title: "Education",
  subtitle: "My academic journey and continuous pursuit of knowledge",

  timeline: [
    {
      id: 1,
      year: "2020 - 2024",
      degree: "Bachelor of Technology",
      field: "Computer Science Engineering",
      institute: "Delhi Technological University, New Delhi",
      score: "CGPA: 8.7/10",
      icon: FaGraduationCap,
      color: "blue",
      points: [
        "Specialized in Data Structures, Algorithms, and Web Technologies",
        "Led technical team for college tech fest",
        "Published research paper on ML applications"
      ]
    },

    {
      id: 2,
      year: "2018 - 2020",
      degree: "Senior Secondary Education",
      field: "Science Stream (PCM)",
      institute: "Delhi Public School, New Delhi",
      score: "Percentage: 94.2%",
      icon: FaSchool,
      color: "purple",
      points: [
        "School topper in Computer Science",
        "Won multiple coding competitions"
      ]
    },

    {
      id: 3,
      year: "2023",
      degree: "Online Certifications",
      field: "Continuous Learning",
      institute: "",
      score: "",
      icon: FaCertificate,
      color: "pink",
      points: [
        "AWS Certified Solutions Architect",
        "Full Stack Web Development – Coursera"
      ]
    }
  ]
};
