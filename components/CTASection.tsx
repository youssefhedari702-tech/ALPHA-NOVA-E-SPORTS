"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-zinc-950 px-6 py-32 text-white">

      <div className="mx-auto max-w-5xl rounded-[40px] border border-cyan-500/20 bg-black p-16 text-center">

        <p className="text-cyan-400">
          JOIN THE NEXT GENERATION
        </p>

        <h2 className="mt-6 text-5xl font-black">
          Ready To Become Champion?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
          Create your account, build your clan,
          compete in tournaments, and dominate the esports world.
        </p>

        <Link
          href="/register"
          className="mt-10 inline-block rounded-2xl bg-cyan-500 px-10 py-5 font-black text-black"
        >
          Join ALPHA NOVA
        </Link>

      </div>

    </section>
  );
}