import { educationData } from "../data/educationData";

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen px-6 md:px-12 py-20
      bg-white dark:bg-[#212b3a]"
    >
      {/* TITLE */}
      <div className="text-center mb-24">
        <h2 className="text-[46px] font-bold text-[#0F172A] dark:text-white">
          {educationData.title}
        </h2>

        <div
          className="w-[95px] h-[4px]
          bg-gradient-to-r from-blue-500 to-purple-600
          mx-auto mt-2 rounded-full"
        />

        <p className="mt-6 text-md text-[#475569] dark:text-gray-400">
          {educationData.subtitle}
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-6xl mx-auto">

        {/* CENTER LINE */}
        <div
          className="
          absolute left-1/2 -translate-x-1/2
          top-0 h-full w-[3px]
          bg-gradient-to-b
          from-blue-500 via-purple-500 to-pink-500"
        />

        <div className="space-y-20">

          {educationData.timeline.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="
                relative grid grid-cols-1 lg:grid-cols-2
                gap-10 items-center"
              >
                {/* CARD */}
                <div
                  className={`
                  ${isLeft ? "lg:col-start-1" : "lg:col-start-2"}
                  bg-white dark:bg-[#2a3648]
                  rounded-[18px] p-5
                  shadow-[0_12px_35px_rgba(0,0,0,0.15)] 
                  border border-gray-200
                  transition dark:border-gray-600
                  `}
                >
                  <span
                    className={`
                    inline-block text-xs font-medium
                    px-3 py-1 rounded-full mb-4
                    ${
                      item.color === "blue"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400"
                        : item.color === "purple"
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400"
                        : "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-400"
                    }`}
                  >
                    {item.year}
                  </span>

                  <h3 className="text-lg font-semibold text-[#0F172A] dark:text-white">
                    {item.degree}
                  </h3>

                  {item.field && (
                    <p className="text-sm font-medium mt-1 text-gray-700 dark:text-gray-300">
                      {item.field}
                    </p>
                  )}

                  <p className="text-sm text-[#64748B] dark:text-gray-400 mt-1">
                    {item.institute}
                  </p>

                  {item.score && (
                    <p className="mt-4 text-sm font-medium text-[#0F172A] dark:text-gray-200">
                      ⭐ {item.score}
                    </p>
                  )}

                  <ul className="mt-5 space-y-2 text-sm text-[#475569] dark:text-gray-400">
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

                  top-[-30px]        /* MOBILE */
                  lg:top-1/2         /* DESKTOP */
                  lg:-translate-y-1/2
                  "
                >
                  <div
                    className={`
                    w-12 h-12 rounded-full
                    flex items-center justify-center
                    text-white shadow-lg
                    ${
                      item.color === "blue"
                        ? "bg-blue-600"
                        : item.color === "purple"
                        ? "bg-purple-600"
                        : "bg-pink-600"
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
