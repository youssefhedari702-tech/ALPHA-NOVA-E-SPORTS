export default function StatsSection() {

  const stats = [

    {
      title: "PLAYERS",
      value: "50K+",
    },

    {
      title: "TOURNAMENTS",
      value: "120+",
    },

    {
      title: "CLANS",
      value: "8K+",
    },

    {
      title: "PRIZE POOLS",
      value: "$25K",
    },
  ];

  return (

    <section
      className="
        mx-auto
        max-w-7xl
        px-6
        py-24
      "
    >

      <div
        className="
          grid
          gap-8
          md:grid-cols-4
        "
      >

        {stats.map((stat) => (

          <div
            key={stat.title}
            className="
              rounded-3xl
              border
              border-cyan-500/20
              bg-zinc-900/60
              p-10
              text-center
            "
          >

            <h2
              className="
                text-5xl
                font-black
                text-cyan-400
              "
            >

              {stat.value}

            </h2>

            <p
              className="
                mt-4
                text-lg
                text-zinc-400
              "
            >

              {stat.title}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}