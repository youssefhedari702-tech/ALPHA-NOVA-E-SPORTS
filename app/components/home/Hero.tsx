export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)]"></div>

      <div className="relative z-10 text-center">
        <h1 className="neon-text animate-float text-7xl font-black text-cyan-400">
          ALPHA NOVA
        </h1>

        <p className="mt-6 text-xl text-zinc-400">
          The Future Of Free Fire Esports
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="glow rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:scale-105">
            Join Tournaments
          </button>

          <button className="rounded-2xl border border-cyan-500 px-8 py-4 font-bold text-cyan-400 transition hover:bg-cyan-500 hover:text-black">
            Explore Clans
          </button>
        </div>
      </div>
    </section>
  );
}