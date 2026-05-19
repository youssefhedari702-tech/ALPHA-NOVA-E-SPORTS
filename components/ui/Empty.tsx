"use client";

export default function Empty({
  text,
}: {
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-dashed border-cyan-500/20 p-10 text-center text-zinc-400">
      {text}
    </div>
  );
}