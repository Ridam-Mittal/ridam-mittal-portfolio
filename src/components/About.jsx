import { aboutData } from "../data/aboutData";

function About() {
  return (
    <section id="about" className="min-h-screen px-14 py-16">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-[42px] font-bold text-[#0F172A]">
          {aboutData.title}
        </h2>

        <div
          className="w-[70px] h-[3px] 
          bg-[#2563EB] 
          mx-auto mt-4 rounded-full"
        />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT CARD */}
        <div
          className="bg-white 
          rounded-[18px] 
          p-9
          shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
        >
          <h3
            className="text-[26px] font-semibold 
            text-[#0F172A] mb-6"
          >
            {aboutData.journeyTitle}
          </h3>

          {aboutData.paragraphs.map((text, i) => (
            <p
              key={i}
              className={`text-[15.5px] leading-[1.75] text-[#475569]
              ${i !== aboutData.paragraphs.length - 1 ? "mb-5" : ""}`}
            >
              {text}
            </p>
          ))}
        </div>

        {/* RIGHT CARD */}
        <div
          className="
          bg-gradient-to-br 
          from-[#F2F6FF] 
          to-[#FDF4FF]
          rounded-[18px]
          p-9
          shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
        >
          <h3
            className="text-[26px] font-semibold 
            text-[#0F172A] mb-9"
          >
            Quick Facts
          </h3>

          {aboutData.quickFacts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="flex gap-4 mb-7 last:mb-0"
              >
                <div
                  className="p-3.5 rounded-xl text-white shadow-sm"
                  style={{ background: item.color }}
                >
                  <Icon size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0F172A]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#64748B] mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {aboutData.stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white 
            rounded-[18px] 
            py-7 
            text-center
            shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
          >
            <h3
              className="text-[34px] font-bold"
              style={{ color: stat.color }}
            >
              {stat.value}
            </h3>

            <p className="text-[#64748B] mt-2 text-sm">
              {stat.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default About;
