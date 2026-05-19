"use client";

export default function Toast({
  message,
}: {
  message: string;
}) {
  return (
    <div className="fixed bottom-5 right-5 rounded-2xl bg-cyan-500 px-6 py-4 font-black text-black shadow-2xl">
      {message}
    </div>
  );
}