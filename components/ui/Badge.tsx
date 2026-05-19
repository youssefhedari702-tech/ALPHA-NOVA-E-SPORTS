"use client";

export default function Badge({
  text,
}: {
  text: string;
}) {
  return (
    <span className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-black text-black">
      {text}
    </span>
  );
}