const stats = [
  {
    number: "250K+",
    label: "Players",
  },
  {
    number: "8K+",
    label: "Teams",
  },
  {
    number: "$2M+",
    label: "Prize Pool",
  },
  {
    number: "120+",
    label: "Tournaments",
  },
];

export default function Stats() {
  return (
    <section className="px-6 py-24 text-white">

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">

        {stats.map(
          (stat, index) => (
            <div
              key={index}
              className="rounded-[40px] bg-zinc-900 p-10 text-center"
            >

              <h2 className="text-6xl font-black text-cyan-400">
                {stat.number}
              </h2>

              <p className="mt-4 text-zinc-400">
                {stat.label}
              </p>

            </div>
          )
        )}

      </div>

    </section>
  );
}