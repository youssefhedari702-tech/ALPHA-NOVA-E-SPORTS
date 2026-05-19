"use client";

export default function ClanDetailsPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-500/20 bg-zinc-900 p-10">

        <div className="flex flex-col items-center gap-8 md:flex-row">

          <div className="h-40 w-40 rounded-full bg-zinc-800"></div>

          <div>

            <h1 className="text-6xl font-black text-cyan-400">
              ALPHA CLAN
            </h1>

            <p className="mt-4 text-zinc-400">
              Elite esports clan competing globally.
            </p>

            <div className="mt-8 flex gap-4">

              <div className="rounded-2xl bg-black px-6 py-4">
                50 Members
              </div>

              <div className="rounded-2xl bg-black px-6 py-4">
                Rank #3
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}