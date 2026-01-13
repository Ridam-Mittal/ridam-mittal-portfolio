import { achievementsData } from "../data/achievementsData";

function Achievements() {
  return (
    <section id="achievements" className="min-h-screen px-14 py-16">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-[42px] font-bold text-[#0F172A]">
          {achievementsData.title}
        </h2>

        <div className="w-[70px] h-[3px] bg-[#2563EB] mx-auto mt-4 rounded-full" />

        <p className="mt-5 text-sm text-[#475569]">
          {achievementsData.subtitle}
        </p>
      </div>

      {/* GRID */}
      <div
        className="
        grid gap-10
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3"
      >

        {achievementsData.items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="
              bg-white rounded-[18px] p-9 text-center
              shadow-[0_12px_35px_rgba(0,0,0,0.06)]
              hover:-translate-y-1 transition"
            >

              {/* ICON */}
              <div
                className={`
                w-16 h-16 mx-auto rounded-full
                flex items-center justify-center text-white
                shadow-lg mb-6
                ${
                  item.color === "yellow"
                    ? "bg-[#FBBF24]"
                    : "bg-[#3B82F6]"
                }`}
              >
                <Icon size={26} />
              </div>

              <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-[#475569] leading-relaxed">
                {item.description}
              </p>

              <p className="mt-4 text-xs text-[#64748B]">
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
