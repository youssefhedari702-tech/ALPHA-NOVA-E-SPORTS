export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-5xl">

        <p className="text-cyan-400">
          WHO WE ARE
        </p>

        <h1 className="mt-4 text-7xl font-black">
          ABOUT ALPHA NOVA
        </h1>

        <p className="mt-10 text-2xl leading-relaxed text-zinc-400">

          ALPHA NOVA E-SPORTS is a professional competitive
          gaming platform built for tournaments, clans,
          live matches, rankings, rewards, and global
          esports competition.

        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-zinc-900 p-8">

            <h2 className="text-5xl font-black text-cyan-400">
              50K+
            </h2>

            <p className="mt-4 text-zinc-400">
              Registered Players
            </p>

          </div>

          <div className="rounded-3xl bg-zinc-900 p-8">

            <h2 className="text-5xl font-black text-green-400">
              800+
            </h2>

            <p className="mt-4 text-zinc-400">
              Tournaments
            </p>

          </div>

          <div className="rounded-3xl bg-zinc-900 p-8">

            <h2 className="text-5xl font-black text-yellow-400">
              $2M+
            </h2>

            <p className="mt-4 text-zinc-400">
              Prize Distribution
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}