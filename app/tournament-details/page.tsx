"use client";

export default function TournamentDetailsPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-6xl">

        <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-10">

          <h1 className="text-6xl font-black text-cyan-400">
            FREE FIRE WORLD CUP
          </h1>

          <p className="mt-6 text-zinc-400">
            Biggest esports tournament with massive prize pool.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-black p-6">
              <p className="text-zinc-400">Prize Pool</p>
              <h2 className="mt-3 text-4xl font-black text-cyan-400">
                $50,000
              </h2>
            </div>

            <div className="rounded-2xl bg-black p-6">
              <p className="text-zinc-400">Teams</p>
              <h2 className="mt-3 text-4xl font-black text-cyan-400">
                64
              </h2>
            </div>

            <div className="rounded-2xl bg-black p-6">
              <p className="text-zinc-400">Mode</p>
              <h2 className="mt-3 text-4xl font-black text-cyan-400">
                Squad
              </h2>
            </div>

          </div>

          <button className="mt-10 rounded-2xl bg-cyan-500 px-8 py-4 font-black text-black">
            Join Tournament
          </button>

        </div>

      </div>

    </main>
  );
}