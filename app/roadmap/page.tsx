"use client";

const roadmap = [
  "Launch beta platform",
  "Add live tournaments",
  "Mobile app release",
  "Global esports league",
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-5xl">

        <h1 className="mb-10 text-5xl font-black text-cyan-400">
          ROADMAP
        </h1>

        <div className="space-y-5">

          {roadmap.map((step, index) => (
            <div
              key={index}
              className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-6"
            >
              {step}
            </div>
          ))}

        </div>

      </div>

    </main>
  );
}