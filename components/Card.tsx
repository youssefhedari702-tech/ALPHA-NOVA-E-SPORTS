interface Props {
  title: string;
  description: string;
}

export default function Card({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-[40px] bg-zinc-900 p-10">

      <h2 className="text-4xl font-black">
        {title}
      </h2>

      <p className="mt-6 text-zinc-400">
        {description}
      </p>

    </div>
  );
}