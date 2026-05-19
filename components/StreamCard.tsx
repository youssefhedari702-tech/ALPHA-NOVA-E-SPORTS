"use client";

type StreamCardProps = {
  streamer: string;
  viewers: string;
};

export default function StreamCard({
  streamer,
  viewers,
}: StreamCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-red-500/20 bg-zinc-900">

      <div className="flex h-64 items-center justify-center bg-black">

        <span className="text-7xl text-red-500">
          ▶
        </span>

      </div>

      <div className="p-8">

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-black">
            {streamer}
          </h2>

          <span className="rounded-xl bg-red-500 px-4 py-2 text-sm font-black text-black">
            LIVE
          </span>

        </div>

        <p className="mt-5 text-zinc-400">
          {viewers} watching now
        </p>

        <button className="mt-8 rounded-2xl bg-red-500 px-6 py-3 font-black text-black">
          Watch Stream
        </button>

      </div>

    </div>
  );
}