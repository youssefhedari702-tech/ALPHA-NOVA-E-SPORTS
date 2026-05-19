export default function LiveNews() {

  const news = [

    {
      title: "ALPHA NOVA reached 50K players",
    },

    {
      title: "New esports season announced",
    },

    {
      title: "Clan verification system updated",
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

      <h1
        className="
          mb-16
          text-center
          text-6xl
          font-black
          text-cyan-400
        "
      >

        LIVE NEWS

      </h1>

      <div
        className="
          grid
          gap-8
          md:grid-cols-3
        "
      >

        {news.map((item, index) => (

          <div
            key={index}
            className="
              rounded-3xl
              border
              border-cyan-500/20
              bg-zinc-900/60
              p-10
            "
          >

            <h2
              className="
                text-2xl
                font-black
                text-cyan-400
              "
            >

              {item.title}

            </h2>

          </div>

        ))}

      </div>

    </section>
  );
}