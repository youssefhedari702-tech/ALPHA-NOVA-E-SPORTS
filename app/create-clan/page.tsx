"use client";

export default function CreateClanPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-500/20 bg-zinc-900 p-10">

        <h1 className="mb-10 text-5xl font-black text-cyan-400">
          CREATE CLAN
        </h1>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Clan Name"
            className="w-full rounded-2xl bg-black px-5 py-4 outline-none"
          />

          <input
            type="text"
            placeholder="Clan Tag"
            className="w-full rounded-2xl bg-black px-5 py-4 outline-none"
          />

          <textarea
            rows={6}
            placeholder="Clan Description"
            className="w-full rounded-2xl bg-black px-5 py-4 outline-none"
          />

          <button className="rounded-2xl bg-cyan-500 px-8 py-4 font-black text-black">
            Create Clan
          </button>

        </div>

      </div>

    </main>
  );
}