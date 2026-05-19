"use client";

export default function ApiDocsPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-500/20 bg-zinc-900 p-10">

        <h1 className="mb-10 text-5xl font-black text-cyan-400">
          API DOCS
        </h1>

        <div className="space-y-5">

          <div className="rounded-2xl bg-black p-5">
            GET /api/tournaments
          </div>

          <div className="rounded-2xl bg-black p-5">
            GET /api/players
          </div>

          <div className="rounded-2xl bg-black p-5">
            POST /api/register
          </div>

        </div>

      </div>

    </main>
  );
}