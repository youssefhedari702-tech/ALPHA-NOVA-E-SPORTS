"use client";

const jobs = [
  "Frontend Developer",
  "Tournament Moderator",
  "Community Manager",
];

export default function CareersPage() {
  return (
    <main className="bg-black p-6 text-white min-h-screen">

      <div className="mx-auto max-w-5xl">

        <h1 className="mb-12 text-6xl font-black text-cyan-400">
          CAREERS
        </h1>

        <div className="space-y-6">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-3xl bg-zinc-900 p-6"
            >

              <h2 className="text-2xl font-black">
                {job}
              </h2>

              <button className="rounded-2xl bg-cyan-500 px-6 py-3 font-black text-black">
                Apply
              </button>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}