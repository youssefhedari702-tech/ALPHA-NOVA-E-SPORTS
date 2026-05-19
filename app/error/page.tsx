"use client";

export default function ErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-6 text-white">

      <div className="w-full max-w-2xl rounded-3xl border border-red-500/20 bg-zinc-900 p-10 text-center">

        <h1 className="text-6xl font-black text-red-500">
          ERROR
        </h1>

        <p className="mt-6 text-xl text-zinc-400">
          Something went wrong.
        </p>

        <button className="mt-10 rounded-2xl bg-red-500 px-8 py-4 font-black">
          Retry
        </button>

      </div>

    </main>
  );
}