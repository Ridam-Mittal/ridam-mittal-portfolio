import { FaAward, FaCode } from "react-icons/fa";
import { Medal } from "lucide-react";

export const achievementsData = {
  title: "Achievements & Awards",
  subtitle: "Recognition and accomplishments throughout my journey",

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
      title: "500+ DSA Problems Solved",
      description:
        "Solved 500+ Data Structures & Algorithms problems on LeetCode, strengthening problem-solving skills.",
      date: "Ongoing",
      icon: FaCode,
      color: "blue"
    },

    {
      id: 3,
      title: "Smart India Hackathon 2024 – Rank 88",
      description:
        "Secured 88th rank among 400+ teams by building a carbon emission estimation system for coal mines.",
      date: "2024",
      icon: Medal,
      color: "green"
    }
  ]
};
