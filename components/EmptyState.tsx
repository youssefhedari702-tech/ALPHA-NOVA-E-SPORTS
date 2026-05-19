interface Props {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-[40px] bg-zinc-900 p-16 text-center text-white">

      <h1 className="text-5xl font-black">
        {title}
      </h1>

      <p className="mt-6 text-zinc-400">
        {description}
      </p>

    </div>
  );
}