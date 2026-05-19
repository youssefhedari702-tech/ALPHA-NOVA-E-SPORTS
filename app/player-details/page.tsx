"use client";

export default function PlayerDetailsPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-zinc-900 p-10">

        <div className="flex flex-col items-center gap-8 md:flex-row">

          <div className="h-40 w-40 rounded-full bg-zinc-800"></div>

          <div>

            <h1 className="text-6xl font-black text-cyan-400">
              ALPHA KING
            </h1>

            <p className="mt-4 text-zinc-400">
              Professional Free Fire Player
            </p>

            <div className="mt-8 flex gap-4">

              <div className="rounded-2xl bg-black px-6 py-4">
                Rank #1
              </div>

              <div className="rounded-2xl bg-black px-6 py-4">
                1200 Kills
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}