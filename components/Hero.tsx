"use client";

import Link from "next/link";

import {
  motion,
} from "framer-motion";

export default function Hero() {

  return (

    <section
      className="
        relative
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-6
        text-center
      "
    >

      <motion.div

        initial={{
          opacity: 0,
          y: 80,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
        }}
      >

        <h1
          className="
            text-6xl
            font-black
            leading-tight
            md:text-8xl
          "
        >

          <span
            className="
              text-cyan-400
            "
          >

            ALPHA

          </span>

          {" "}

          <span
            className="
              text-green-400
            "
          >

            NOVA

          </span>

        </h1>

        <p
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-xl
            text-zinc-400
            md:text-2xl
          "
        >

          The next generation esports platform
          for tournaments, clans, live matches,
          rankings and competitive gaming.

        </p>

        <div
          className="
            mt-12
            flex
            flex-wrap
            items-center
            justify-center
            gap-6
          "
        >

          <Link
            href="/tournaments"
            className="
              rounded-2xl
              bg-cyan-500
              px-10
              py-5
              text-xl
              font-black
              text-black
              shadow-[0_0_30px_#06b6d4]
            "
          >

            JOIN TOURNAMENT

          </Link>

          <Link
            href="/register"
            className="
              rounded-2xl
              border
              border-green-500
              px-10
              py-5
              text-xl
              font-black
              text-green-400
              shadow-[0_0_30px_#22c55e]
            "
          >

            CREATE ACCOUNT

          </Link>

        </div>

      </motion.div>

      <div
        className="
          absolute
          left-[-200px]
          top-[-200px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/20
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          bottom-[-250px]
          right-[-250px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-green-500/20
          blur-[160px]
        "
      />

    </section>
  );
}