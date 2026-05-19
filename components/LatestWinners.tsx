"use client";

const winners = [
  {
    player: "ALPHA KING",
    reward: "$25,000",
  },
  {
    player: "NOVA PRO",
    reward: "$12,000",
  },
  {
    player: "SHADOW X",
    reward: "$8,500",
  },
];

export default function LatestWinners() {
  return (
    <section className="bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="mb-14">

          <p className="text-cyan-400">
            RECENT CHAMPIONS
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Latest Winners
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {winners.map((winner, index) => (
            <div
              key={index}
              className="rounded-3xl border border-yellow-400/20 bg-zinc-900 p-10"
            >

              <div className="text-6xl">
                🏆
              </div>

              <h3 className="mt-8 text-3xl font-black">
                {winner.player}
              </h3>

              <p className="mt-4 text-yellow-400">
                Won {winner.reward}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}