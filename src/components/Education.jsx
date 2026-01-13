import { educationData } from "../data/educationData";

function Education() {
  return (
    <section id="education" className="min-h-screen px-14 py-16">

      {/* TITLE */}
      <div className="text-center mb-20">
        <h2 className="text-[42px] font-bold text-[#0F172A]">
          {educationData.title}
        </h2>

        <div
          className="w-[70px] h-[3px] bg-[#2563EB]
          mx-auto mt-4 rounded-full"
        />

        <p className="mt-5 text-sm text-[#475569]">
          {educationData.subtitle}
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative">

        {/* CENTER LINE */}
        <div
          className="
          absolute left-1/2 -translate-x-1/2
          h-full w-[3px]
          bg-gradient-to-b
          from-[#2563EB]
          via-[#9333EA]
          to-[#DB2777]"
        />

        <div className="space-y-24">

          {educationData.timeline.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 !== 0;

            return (
              <div
                key={item.id}
                className="
                grid grid-cols-1 lg:grid-cols-2
                gap-10 relative"
              >

                {/* CARD */}
                <div
                  className={`
                  ${isLeft ? "lg:col-start-1" : "lg:col-start-2"}
                  bg-white rounded-[18px] p-8
                  shadow-[0_12px_35px_rgba(0,0,0,0.06)]
                  `}
                >

                  <span
                    className={`
                    inline-block text-xs font-medium px-3 py-1 rounded-full mb-4
                    ${
                      item.color === "blue"
                        ? "bg-blue-100 text-blue-700"
                        : item.color === "purple"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-pink-100 text-pink-700"
                    }`}
                  >
                    {item.year}
                  </span>

                  <h3 className="text-lg font-semibold text-[#0F172A]">
                    {item.degree}
                  </h3>

                  <p className="text-sm font-medium mt-1">
                    {item.field}
                  </p>

                  <p className="text-sm text-[#64748B] mt-1">
                    {item.institute}
                  </p>

                  {item.score && (
                    <p className="mt-3 text-sm font-medium">
                      ⭐ {item.score}
                    </p>
                  )}

                  <ul className="mt-4 space-y-2 text-sm text-[#475569]">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-green-500">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ICON */}
                <div
                  className="
                  absolute left-1/2 -translate-x-1/2
                  top-1/2 -translate-y-1/2"
                >
                  <div
                    className={`
                    w-12 h-12 rounded-full
                    flex items-center justify-center
                    text-white shadow-lg
                    ${
                      item.color === "blue"
                        ? "bg-[#2563EB]"
                        : item.color === "purple"
                        ? "bg-[#9333EA]"
                        : "bg-[#DB2777]"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Education;
