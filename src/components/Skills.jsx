import {
  FaReact,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
  FaBrain
} from "react-icons/fa";

function SkillCard({ icon: Icon, title, items, color, bg }) {
  return (
    <div
      className="bg-white rounded-[18px] p-7
      shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="p-3 rounded-xl text-white"
          style={{ background: color }}
        >
          <Icon size={22} />
        </div>

        <h3 className="text-lg font-semibold text-[#0F172A]">
          {title}
        </h3>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-lg text-sm font-medium"
            style={{ background: bg, color: color }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="min-h-screen px-5 pl-24 py-18 bg-gray-50">

      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-[46px] font-bold text-[#0F172A]">
          Technical Skills
        </h2>

       <div
  className="w-[80px] h-[3px] 
  bg-gradient-to-r from-blue-500 to-purple-600
  mx-auto mt-4 rounded-full"
/>

        <p className="max-w-xl mx-auto mt-6 text-[#475569] text-sm leading-relaxed">
          A comprehensive toolkit of modern technologies and frameworks I work
          with to build robust applications
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

        <SkillCard
          icon={FaReact}
          title="Frontend Development"
          color="#2563EB"
          bg="#E8F1FF"
          items={[
            "React.js",
            "Next.js",
            "Vue.js",
            "TypeScript",
            "JavaScript ES6+",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Material-UI",
            "Redux"
          ]}
        />

        <SkillCard
          icon={FaServer}
          title="Backend Development"
          color="#16A34A"
          bg="#DCFCE7"
          items={[
            "Node.js",
            "Express.js",
            "Python",
            "Django",
            "Flask",
            "RESTful APIs",
            "GraphQL",
            "Microservices"
          ]}
        />

        <SkillCard
          icon={FaDatabase}
          title="Database & Storage"
          color="#9333EA"
          bg="#F3E8FF"
          items={[
            "MongoDB",
            "PostgreSQL",
            "MySQL",
            "Redis",
            "Firebase",
            "Prisma"
          ]}
        />

        <SkillCard
          icon={FaCloud}
          title="DevOps & Cloud"
          color="#EA580C"
          bg="#FFEDD5"
          items={[
            "Docker",
            "Kubernetes",
            "AWS",
            "Google Cloud",
            "CI/CD",
            "Jenkins",
            "GitHub Actions"
          ]}
        />

        <SkillCard
          icon={FaTools}
          title="Tools & Platforms"
          color="#DB2777"
          bg="#FCE7F3"
          items={[
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "Figma",
            "Jira",
            "Slack"
          ]}
        />

        <SkillCard
          icon={FaBrain}
          title="Other Technologies"
          color="#4F46E5"
          bg="#E0E7FF"
          items={[
            "Machine Learning",
            "TensorFlow",
            "Pandas",
            "NumPy",
            "WebSockets",
            "Jest",
            "Testing Library"
          ]}
        />

      </div>
    </section>
  );
}

export default Skills;
