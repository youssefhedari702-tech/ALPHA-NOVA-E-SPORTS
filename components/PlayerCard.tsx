type PlayerCardProps = {
  name: string;
  uid: string;
  clan?: string;
  kills?: number;
};

export default function PlayerCard({
  name,
  uid,
  clan,
  kills,
}: PlayerCardProps) {

  return (

    <div
      className="
        rounded-3xl
        border
        border-cyan-500/20
        bg-zinc-900/60
        p-6
        text-white
      "
    >

      <h2
        className="
          text-2xl
          font-black
          text-cyan-400
        "
      >
        {name}
      </h2>

      <p className="mt-2 text-zinc-400">
        UID: {uid}
      </p>

      <p className="mt-1 text-zinc-400">
        Clan: {clan || "NO CLAN"}
      </p>

      <p className="mt-1 text-zinc-400">
        Kills: {kills || 0}
      </p>

    </div>
  );
}