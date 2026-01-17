import { FaGraduationCap, FaSchool, FaCertificate } from "react-icons/fa";

export const educationData = {
  title: "Education",
  subtitle: "My academic journey and continuous pursuit of knowledge",

  timeline: [
    {
      id: 1,
      year: "2022 - 2026",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institute: "Bennett University, Greater Noida, India",
      score: "CGPA: 9.42/10",
      icon: FaGraduationCap,
      color: "blue",
      points: [
        "Studied core subjects including Data Structures, Algorithms, DBMS, and Operating Systems",
        "Worked on multiple academic and personal software projects",
        "Actively practicing problem-solving and competitive programming"
      ]
    },

    {
      id: 2,
      year: "2021 - 2022",
      degree: "Senior Secondary Education (12th Grade)",
      field: "Non-Medical (PCM)",
      institute: "MG Public School, Muzaffarnagar, Uttar Pradesh, India",
      score: "Percentage: 96.2%",
      icon: FaSchool,
      color: "purple",
      points: [
        "Built a strong foundation in Physics, Chemistry, and Mathematics",
        "Maintained consistent academic excellence with top grades"
      ]
    },

    {
      id: 3,
      year: "2019 - 2020",
      degree: "Secondary Education (10th Grade)",
      institute: "MG Public School, Muzaffarnagar, Uttar Pradesh, India",
      score: "Percentage: 92.6%",
      icon: FaCertificate,
      color: "pink",
      points: [
        "Achieved strong academic performance across all subjects",
        "Demonstrated commitment to studies and extracurricular activities"
      ]
    }
  ]
};
