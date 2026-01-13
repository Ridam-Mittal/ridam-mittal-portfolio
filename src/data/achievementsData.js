import { FaAward, FaCode } from "react-icons/fa";

export const achievementsData = {
  title: "Achievements & Awards",
  subtitle: "Recognition and milestones in my journey",

  items: [
    {
      id: 1,
      title: "Dean's Student Award (3x)",
      description:
        "Received Dean's Student Award three times for academic excellence and consistent top performance in college.",
      date: "2022 - 2024",
      icon: FaAward,
      color: "yellow"
    },
    {
      id: 2,
      title: "400+ DSA Problems Solved",
      description: "Solved 400+ Data Structures & Algorithms problems on LeetCode, strengthening problem-solving skills.",
      date: "Ongoing",
      icon: FaCode,
      color: "blue"
    }
  ]
};
