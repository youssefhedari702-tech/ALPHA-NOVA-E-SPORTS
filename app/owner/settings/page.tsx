"use client";

export default function OwnerSettingsPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-5xl rounded-3xl bg-zinc-900 p-10">

        <h1 className="mb-10 text-5xl font-black text-yellow-400">
          OWNER SETTINGS
        </h1>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Website Name"
            className="w-full rounded-2xl bg-black px-5 py-4 outline-none"
          />

          <input
            type="text"
            placeholder="Maintenance Message"
            className="w-full rounded-2xl bg-black px-5 py-4 outline-none"
          />

          <button className="rounded-2xl bg-yellow-400 px-8 py-4 font-black text-black">
            Save Settings
          </button>

        </div>

      </div>

    </main>
  );
}