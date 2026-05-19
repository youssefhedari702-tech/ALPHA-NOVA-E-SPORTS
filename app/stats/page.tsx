"use client";

import {
  useEffect,
  useState,
} from "react";

export default function StatsPage() {

  const [
    stats,
    setStats,
  ] = useState<any>(null);

  async function loadStats() {

    const response =
      await fetch("/api/stats");

    const data =
      await response.json();

    setStats(data);
  }

  useEffect(() => {

    loadStats();

  }, []);

  if (!stats) {

    return (

      <main className="flex min-h-screen items-center justify-center bg-black text-white">

        LOADING...

      </main>
    );
  }

  return (

    <main className="min-h-screen bg-black p-10 text-white">

      <h1 className="text-6xl font-black text-cyan-400">

        PLATFORM ANALYTICS

      </h1>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-3xl border border-cyan-500 bg-zinc-900 p-10">

          <h2 className="text-5xl font-black text-cyan-400">

            {stats.tournaments}

          </h2>

          <p className="mt-4 text-zinc-400">

            TOURNAMENTS

          </p>

        </div>

        <div className="rounded-3xl border border-cyan-500 bg-zinc-900 p-10">

          <h2 className="text-5xl font-black text-cyan-400">

            {stats.clans}

          </h2>

          <p className="mt-4 text-zinc-400">

            CLANS

          </p>

        </div>

        <div className="rounded-3xl border border-cyan-500 bg-zinc-900 p-10">

          <h2 className="text-5xl font-black text-cyan-400">

            {stats.players}

          </h2>

          <p className="mt-4 text-zinc-400">

            PLAYERS

          </p>

        </div>

        <div className="rounded-3xl border border-cyan-500 bg-zinc-900 p-10">

          <h2 className="text-5xl font-black text-cyan-400">

            {stats.rooms}

          </h2>

          <p className="mt-4 text-zinc-400">

            LIVE ROOMS

          </p>

        </div>

      </div>

    </main>
  );
}