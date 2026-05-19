"use client";

export default function ProfileSettingsPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-500/20 bg-zinc-900 p-10">

        <h1 className="mb-10 text-5xl font-black text-cyan-400">
          PROFILE SETTINGS
        </h1>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Username"
            className="w-full rounded-2xl bg-black px-5 py-4 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl bg-black px-5 py-4 outline-none"
          />

          <textarea
            rows={5}
            placeholder="Bio"
            className="w-full rounded-2xl bg-black px-5 py-4 outline-none"
          ></textarea>

          <button className="rounded-2xl bg-cyan-500 px-8 py-4 font-black text-black">
            Save Changes
          </button>

        </div>

      </div>

    </main>
  );
}