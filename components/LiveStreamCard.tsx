"use client";

interface Props {
  title: string;
  viewers: string;
}

export default function LiveStreamCard({
  title,
  viewers,
}: Props) {
  return (
    <div className="rounded-3xl border border-red-500/20 bg-zinc-900 p-6">

      <div className="h-56 rounded-2xl bg-zinc-800"></div>

      <div className="mt-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            {title}
          </h2>

          <p className="mt-2 text-zinc-400">
            {viewers} watching
          </p>

        </div>

        <div className="rounded-full bg-red-500 px-4 py-2 font-black text-black">
          LIVE
        </div>

      </div>

    </div>
  );
}