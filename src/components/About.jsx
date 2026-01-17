import { aboutData } from "../data/aboutData";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-12 py-16
      bg-white dark:bg-[#212b3a] pt-14"
    >

      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-[36px] md:text-[46px] font-bold
        text-[#0F172A] dark:text-white">
          {aboutData.title}
        </h2>

        <div
          className="w-[95px] h-[4px] 
          bg-[#2563EB] 
          mx-auto mt-2 rounded-full"
        />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">

        {/* LEFT CARD */}
        <div
          className="
          bg-white dark:bg-[#2a3648]
          rounded-[18px] 
          p-7 md:p-7
          shadow-[0_12px_35px_rgba(0,0,0,0.1)]
          border border-gray-200 dark:border-gray-600 "
        >
          {/* <h3
            className="text-[24px] md:text-[26px] font-semibold 
            text-[#0F172A] dark:text-white mb-6"
          >
            {aboutData.journeyTitle}
          </h3> */}

          {aboutData.paragraphs.map((text, i) => (
            <p
              key={i}
              // something to symmetrically end each line at the same length ? - what
              className={`text-[15px] leading-[1.7] 
              text-[#3d495a] dark:text-gray-300
              ${i !== aboutData.paragraphs.length - 1 ? "mb-3" : ""}`}
            >
              {text}
            </p>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">

          {/* QUICK FACTS CARD */}
          <div
            className="
            bg-gradient-to-br 
            from-[#e4ecff] to-[#f1e3f5]
            dark:from-[#342b56] dark:to-[#0c184b]
            rounded-[18px]
            p-6 md:p-9
            shadow-[0_12px_35px_rgba(0,0,0,0.1)]
            border border-gray-200 dark:border-gray-600"
          >
            <h3
              className="text-[24px] md:text-[26px] font-semibold 
              text-[#0F172A] dark:text-white mb-4"
            >
              Quick Facts
            </h3>

            {aboutData.quickFacts.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="flex gap-4 mb-3 last:mb-0"
                >
                  <div
                    className="p-3.5 rounded-xl text-white shadow-sm flex
                    items-center justify-center"
                    style={{ background: item.color }}
                  >
                    <Icon size={22} />
                  </div>

                  <div>
                    <h4
                      className="font-semibold
                      text-[#0F172A] dark:text-white"
                    >
                      {item.title}
                    </h4>

                    <p
                      className="text-sm mt-1
                      text-[#64748B] dark:text-gray-400"
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* STATS - ONLY UNDER QUICK FACTS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {aboutData.stats.map((stat) => (
              <div
                key={stat.id}
                className="
                bg-white dark:bg-[#2a3648]
                rounded-[18px] 
                py-4
                text-center
                shadow-[0_12px_30px_rgba(0,0,0,0.1)]
                border border-gray-200 dark:border-gray-600"
              >
                <h3
                  className="text-[25px] font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </h3>

                <p
                  className="
                  text-[#64748B] dark:text-gray-400
                  mt-2 text-sm"
                >
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
