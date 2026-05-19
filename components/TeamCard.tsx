interface Props {
  name: string;
  country: string;
}

export default function TeamCard({
  name,
  country,
}: Props) {
  return (
    <div className="rounded-[40px] bg-zinc-900 p-10">

      <div className="h-32 w-32 rounded-full bg-black"></div>

      <h2 className="mt-8 text-4xl font-black">
        {name}
      </h2>

      <p className="mt-4 text-zinc-400">
        {country}
      </p>

      <button className="mt-8 rounded-2xl bg-cyan-500 px-8 py-4 font-black text-black">
        View Team
      </button>

    </div>
  );
}