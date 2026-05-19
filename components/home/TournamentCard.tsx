export default function TournamentCard() {
  return (
    <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-6 backdrop-blur-xl">
      
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black">
          Free Fire Squad
        </h2>

        <span className="rounded-full bg-green-500/20 px-4 py-1 text-sm text-green-400">
          LIVE
        </span>
      </div>

      <p className="mt-4 text-gray-400">
        Prize Pool: $5000
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          48 / 64 Players
        </span>

        <button className="rounded-xl bg-purple-600 px-5 py-2 font-bold transition hover:bg-purple-500">
          Join
        </button>
      </div>
    </div>
  );
}