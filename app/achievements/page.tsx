"use client";

const achievements = [
  "Tournament Champion",
  "Top Killer",
  "100 Wins Reached",
  "Verified Pro Player",
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-5xl">

        <div className="mb-16">

          <p className="text-cyan-400">
            PLAYER REWARDS
          </p>

          <h1 className="mt-4 text-6xl font-black">
            ACHIEVEMENTS
          </h1>

        </div>

        <div className="space-y-6">

          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="rounded-3xl bg-zinc-900 p-8"
            >

              <div className="flex items-center gap-5">

                <span className="text-5xl">
                  🏆
                </span>

                <h2 className="text-3xl font-black">
                  {achievement}
                </h2>

              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}