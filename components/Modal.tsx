"use client";

interface Props {
  title: string;
  description: string;
}

export default function Modal({
  title,
  description,
}: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 px-6">

      <div className="w-full max-w-xl rounded-[40px] bg-zinc-900 p-10 text-white">

        <h1 className="text-5xl font-black">
          {title}
        </h1>

        <p className="mt-6 text-zinc-400">
          {description}
        </p>

        <button className="mt-10 rounded-2xl bg-cyan-500 px-8 py-4 font-black text-black">
          Close
        </button>

      </div>

    </div>
  );
}