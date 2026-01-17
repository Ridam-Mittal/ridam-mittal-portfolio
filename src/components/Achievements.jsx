import { achievementsData } from "../data/achievementsData";

function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen px-6 md:px-14 py-20
      bg-gray-100 dark:bg-[#0B1220]"
    >
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2
          className="text-[38px] md:text-[46px]
          font-bold text-[#0F172A] dark:text-white"
        >
          {achievementsData.title}
        </h2>

        <div
          className="w-[95px] h-[4px]
          bg-gradient-to-r from-blue-500 to-purple-600
          mx-auto mt-2 rounded-full"
        />

        <p
          className="mt-4 text-sm md:text-base
          text-[#475569] dark:text-gray-400"
        >
          {achievementsData.subtitle}
        </p>
      </div>

      {/* GRID */}
      <div
        className="
        grid gap-10
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        max-w-6xl mx-auto"
      >
        {achievementsData.items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="
              bg-white dark:bg-[#121c2e]
              rounded-[20px] p-8 text-center
              shadow-[0_15px_40px_rgba(0,0,0,0.15)]
              border border-gray-200 dark:border-gray-700
              hover:-translate-y-1 transition"
            >
              {/* ICON */}
              <div
                className={`
                w-16 h-16 mx-auto mb-6
                rounded-full flex items-center justify-center
                text-white shadow-lg
                ${
                  item.color === "yellow"
                    ? "bg-[#FBBF24]"
                    : item.color === "green"
                    ? "bg-[#22C55E]"
                    : "bg-[#3B82F6]"
                }
              `}
              >
                <Icon size={26} />
              </div>

              <h3
                className="
                text-lg font-semibold
                text-[#0F172A] dark:text-white
                mb-3"
              >
                {item.title}
              </h3>

              <p
                className="
                text-sm leading-relaxed
                text-[#475569] dark:text-gray-400"
              >
                {item.description}
              </p>

              <p
                className="
                mt-4 text-xs
                text-[#64748B] dark:text-gray-500"
              >
                {item.date}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Achievements;
