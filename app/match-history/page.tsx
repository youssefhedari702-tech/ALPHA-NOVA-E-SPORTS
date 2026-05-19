const history = [
  {
    tournament:
      "ALPHA WORLD CUP",
    result: "WIN",
    kills: 12,
  },
  {
    tournament:
      "NOVA CHAMPIONSHIP",
    result: "TOP 3",
    kills: 8,
  },
];

export default function MatchHistoryPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-6xl">

        <p className="text-cyan-400">
          PLAYER MATCH HISTORY
        </p>

        <h1 className="mt-4 text-7xl font-black">
          MATCH HISTORY
        </h1>

        <div className="mt-16 space-y-6">

          {history.map(
            (match, index) => (
              <div
                key={index}
                className="rounded-[40px] bg-zinc-900 p-8"
              >

                <div className="flex flex-col items-start justify-between gap-6 xl:flex-row xl:items-center">

                  <div>

                    <h2 className="text-4xl font-black">
                      {match.tournament}
                    </h2>

                    <p className="mt-4 text-zinc-400">
                      {match.result}
                    </p>

                  </div>

                  <div>

                    <h3 className="text-5xl font-black text-cyan-400">
                      {match.kills}
                    </h3>

                    <p className="mt-2 text-zinc-400">
                      Kills
                    </p>

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </main>
  );
}