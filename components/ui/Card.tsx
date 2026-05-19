"use client";

export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-6">
      {children}
    </div>
  );
}