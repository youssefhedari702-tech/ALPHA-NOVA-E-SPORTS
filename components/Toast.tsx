"use client";

interface Props {
  message: string;
}

export default function Toast({
  message,
}: Props) {
  return (
    <div className="fixed bottom-10 right-10 rounded-2xl bg-cyan-500 px-8 py-4 font-black text-black shadow-2xl">

      {message}

    </div>
  );
}