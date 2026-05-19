interface Props {
  team1: string;
  team2: string;
  status: string;
}

export default function MatchCard({
  team1,
  team2,
  status,
}: Props) {
  return (
    <div className="rounded-[40px] bg-zinc-900 p-10">

      <div className="flex flex-col items-center justify-between gap-8 xl:flex-row">

        <div>

          <h1 className="text-5xl font-black">
            {team1}
          </h1>

        </div>

        <div className="text-center">

          <p className="text-red-500">
            {status}
          </p>

          <h2 className="mt-4 text-6xl font-black">
            VS
          </h2>

        </div>

        <div>

          <h1 className="text-5xl font-black">
            {team2}
          </h1>

        </div>

      </div>

    </div>
  );
}