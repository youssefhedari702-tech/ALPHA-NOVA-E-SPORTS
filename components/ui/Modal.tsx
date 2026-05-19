"use client";

export default function Modal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">

      <div className="w-full max-w-xl rounded-3xl bg-zinc-900 p-8">
        {children}
      </div>

    </div>
  );
}