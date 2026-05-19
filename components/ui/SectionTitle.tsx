"use client";

export default function SectionTitle({
  title,
}: {
  title: string;
}) {
  return (
    <h2 className="mb-10 text-5xl font-black text-cyan-400">
      {title}
    </h2>
  );
}