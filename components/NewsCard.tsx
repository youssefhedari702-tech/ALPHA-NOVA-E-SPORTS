"use client";

type NewsCardProps = {
  title: string;
  category: string;
};

export default function NewsCard({
  title,
  category,
}: NewsCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-zinc-900">

      <div className="h-64 bg-black"></div>

      <div className="p-8">

        <span className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-black text-black">
          {category}
        </span>

        <h2 className="mt-6 text-3xl font-black">
          {title}
        </h2>

        <p className="mt-5 text-zinc-400">
          Latest esports platform news and tournament updates.
        </p>

        <button className="mt-8 rounded-2xl bg-cyan-500 px-6 py-3 font-black text-black">
          Read More
        </button>

      </div>

    </div>
  );
}