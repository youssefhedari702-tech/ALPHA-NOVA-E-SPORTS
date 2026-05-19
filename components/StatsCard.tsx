interface Props {
  title: string;
  value: string;
  color: string;
}

export default function StatsCard({
  title,
  value,
  color,
}: Props) {
  return (
    <div className="rounded-[40px] bg-zinc-900 p-8">

      <h1
        className={`text-6xl font-black ${color}`}
      >
        {value}
      </h1>

      <p className="mt-4 text-zinc-400">
        {title}
      </p>

    </div>
  );
}