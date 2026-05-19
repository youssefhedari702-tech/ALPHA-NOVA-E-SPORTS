import Sidebar from "@/components/layout/Sidebar";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black pl-72 p-8 text-white">

      <Sidebar />

      {/* TITLE */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-cyan-400">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-zinc-400">
            Manage tournaments, players and clans
          </p>
        </div>

        <button className="rounded-2xl bg-cyan-500 px-6 py-3 font-bold text-black transition hover:scale-105">
          + Create Tournament
        </button>
      </div>

      {/* STATS */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-6">
          <p className="text-zinc-400">
            Total Players
          </p>

          <h2 className="mt-4 text-5xl font-black text-cyan-400">
            120
          </h2>
        </div>

        <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-6">
          <p className="text-zinc-400">
            Total Clans
          </p>

          <h2 className="mt-4 text-5xl font-black text-cyan-400">
            32
          </h2>
        </div>

        <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-6">
          <p className="text-zinc-400">
            Active Tournaments
          </p>

          <h2 className="mt-4 text-5xl font-black text-cyan-400">
            8
          </h2>
        </div>

      </div>

      {/* RECENT TOURNAMENTS */}
      <div className="mt-14 rounded-3xl border border-cyan-500/20 bg-zinc-900 p-6">

        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-cyan-400">
            Recent Tournaments
          </h2>

          <button className="rounded-xl border border-cyan-500/30 px-4 py-2 text-sm font-bold transition hover:bg-cyan-500 hover:text-black">
            View All
          </button>
        </div>

        <div className="mt-8 space-y-4">

          <div className="flex items-center justify-between rounded-2xl bg-black/40 p-5">
            <div>
              <h3 className="text-xl font-bold">
                Free Fire Championship
              </h3>

              <p className="mt-1 text-zinc-400">
                Prize Pool: $10,000
              </p>
            </div>

            <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-bold text-green-400">
              LIVE
            </span>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-black/40 p-5">
            <div>
              <h3 className="text-xl font-bold">
                PUBG Mobile Cup
              </h3>

              <p className="mt-1 text-zinc-400">
                Prize Pool: $5,000
              </p>
            </div>

            <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-bold text-yellow-400">
              STARTING SOON
            </span>
          </div>

        </div>
      </div>

    </main>
  );
}