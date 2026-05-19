"use client";

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-12 text-6xl font-black text-cyan-400">
          ANALYTICS
        </h1>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl bg-zinc-900 p-8">
            <p className="text-zinc-400">Users</p>
            <h2 className="mt-4 text-5xl font-black">25K</h2>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-8">
            <p className="text-zinc-400">Matches</p>
            <h2 className="mt-4 text-5xl font-black">8K</h2>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-8">
            <p className="text-zinc-400">Tournaments</p>
            <h2 className="mt-4 text-5xl font-black">320</h2>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-8">
            <p className="text-zinc-400">Revenue</p>
            <h2 className="mt-4 text-5xl font-black">$52K</h2>
          </div>

        </div>

      </div>

    </main>
  );
}