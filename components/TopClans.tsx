export default function TopClans() {

  const clans = [

    "ALPHA",
    "BROTHERHOOD",
    "NOVA",
    "LEGENDS",
    "WARRIORS",
    "SHADOW",
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
          text-green-400
        "
      >

        TOP CLANS

      </h1>

      <div
        className="
          grid
          gap-8
          md:grid-cols-3
        "
      >

        {clans.map((clan) => (

          <div
            key={clan}
            className="
              rounded-3xl
              border
              border-green-500/20
              bg-zinc-900/60
              p-10
              text-center
            "
          >

            <h2
              className="
                text-4xl
                font-black
                text-green-400
              "
            >

              {clan}

            </h2>

          </div>

        ))}

      </div>

    </section>
  );
}