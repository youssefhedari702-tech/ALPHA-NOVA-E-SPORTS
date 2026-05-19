"use client";

const badges = [
  "Champion",
  "Verified",
  "Top Killer",
  "Premium",
];

export default function BadgesPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-12 text-6xl font-black text-yellow-400">
          BADGES
        </h1>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {badges.map((badge, index) => (
            <div
              key={index}
              className="rounded-3xl bg-zinc-900 p-8 text-center"
            >

              <div className="text-6xl">
                🛡️
              </div>

              <h2 className="mt-6 text-2xl font-black">
                {badge}
              </h2>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}