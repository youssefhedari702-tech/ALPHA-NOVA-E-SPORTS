"use client";

const members = [
  "Leader",
  "Sniper",
  "Support",
  "Rusher",
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-10 text-5xl font-black text-cyan-400">
          TEAM
        </h1>

        <div className="grid gap-6 md:grid-cols-4">

          {members.map((member, index) => (
            <div
              key={index}
              className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-8 text-center"
            >

              <div className="mx-auto mb-5 h-24 w-24 rounded-full bg-zinc-800"></div>

              <h2 className="text-2xl font-black">
                {member}
              </h2>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}