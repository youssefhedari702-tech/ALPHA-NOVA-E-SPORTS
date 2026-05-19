interface Props {
  title: string;
  prizePool: string;
  mode: string;
}

export default function TournamentCard({
  title,
  prizePool,
  mode,
}: Props) {
  return (
    <div className="overflow-hidden rounded-[40px] bg-zinc-900">

      <div className="h-72 bg-black"></div>

      <div className="p-8">

        <p className="text-cyan-400">
          {mode}
        </p>

        <h2 className="mt-4 text-4xl font-black">
          {title}
        </h2>

        <p className="mt-4 text-zinc-400">
          Prize Pool
        </p>

        <h3 className="mt-2 text-5xl font-black text-green-400">
          {prizePool}
        </h3>

        <button className="mt-8 w-full rounded-2xl bg-cyan-500 py-4 font-black text-black">
          Join Tournament
        </button>

      </div>

    </div>
  );
}