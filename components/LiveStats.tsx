"use client";

const stats = [
  {
    title: "Online Players",
    value: "84,291",
    color: "text-green-400",
  },
  {
    title: "Active Matches",
    value: "2,814",
    color: "text-red-400",
  },
  {
    title: "Prize Money Today",
    value: "$58,000",
    color: "text-yellow-400",
  },
];

export default function LiveStats() {
  return (
    <section className="bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="mb-14">

          <p className="text-cyan-400">
            LIVE PLATFORM DATA
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Real-Time Statistics
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-3xl border border-cyan-500/10 bg-zinc-900 p-10"
            >

              <p className="text-zinc-400">
                {stat.title}
              </p>

              <h3 className={`mt-6 text-6xl font-black ${stat.color}`}>
                {stat.value}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}