const tournaments = [
  {
    title: "WORLD CUP",
    prize: "$50K",
  },
  {
    title: "PRO LEAGUE",
    prize: "$25K",
  },
  {
    title: "SQUAD SERIES",
    prize: "$15K",
  },
];

export default function FeaturedTournaments() {
  return (
    <section className="bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="mb-16">

          <p className="text-cyan-400">
            BIG EVENTS
          </p>

          <h1 className="mt-4 text-6xl font-black">
            FEATURED TOURNAMENTS
          </h1>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {tournaments.map(
            (tournament, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl bg-zinc-900"
              >

                <div className="h-64 bg-black"></div>

                <div className="p-8">

                  <h2 className="text-4xl font-black">
                    {tournament.title}
                  </h2>

                  <p className="mt-5 text-cyan-400">
                    Prize: {tournament.prize}
                  </p>

                  <button className="mt-8 rounded-2xl bg-cyan-500 px-6 py-3 font-black text-black">
                    Join Now
                  </button>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}