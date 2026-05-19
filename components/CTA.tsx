"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-6 py-32">

      <div className="mx-auto max-w-5xl rounded-[40px] border border-cyan-500/20 bg-zinc-900 p-14 text-center">

        <h2 className="text-5xl font-black text-cyan-400">
          READY TO DOMINATE?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-400">
          Join tournaments, create your clan, and become an esports legend.
        </p>

        <Link
          href="/register"
          className="mt-10 inline-block rounded-2xl bg-cyan-500 px-10 py-5 font-black text-black transition hover:scale-105"
        >
          CREATE ACCOUNT
        </Link>

      </div>

    </section>
  );
}