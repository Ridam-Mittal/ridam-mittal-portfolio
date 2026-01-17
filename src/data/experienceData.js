import {
  FaBuilding,
  FaLaptopCode
} from "react-icons/fa";

export const experienceData = {
  title: "Work Experience",
  subtitle:
    "Hands-on experience building production-grade software applications",

  experiences: [
    {
      id: 1,
      role: "Backend Developer Intern",
      company: "FutureSoft India Pvt. Ltd.",
      icon: FaBuilding,
      start: "September 2025",
      end: "Present",
      location: "Noida, India",
      current: true,

      responsibilities: [
        "Built protocol-compliant APIs for the ONDC IGM SaaS platform, implementing actions like /issue, /on_issue, and /status as per specifications",

        "Developed dashboard APIs to process complex nested payloads, enabling smooth buyer–seller dispute workflows",

        "Implemented Kafka consumers to ingest real-time order data for the ONDC RSF platform from Seller Applications",

        "Integrated webhooks and Socket.io to stream live updates from an AI microservice for email generation tracking",

        "Designed tenant management APIs for the Identity SaaS service, enabling secure onboarding and controlled phase transitions",

        "Implemented necessary validations, authentication, and middleware to improve API reliability",

        "Collaborated with senior engineers to refine database schemas and optimize data models",

        "Debugged bugs raised on JIRA and improved system stability in collaboration with the team"
      ],


      technologies: [
        "Node.js",
        "MongoDB",
        "Express.js",
        "Kafka",
        "Postgres SQL",
        "Socket.io",
        "RESTful APIs",
        "JWT Authentication",
        "Agile Methodologies",
      ]
    },
  ]
};
