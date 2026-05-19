"use client";

import {
  motion,
} from "framer-motion";

export default function GamingCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {

  return (

    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: 1,
      }}
      className="
        rounded-3xl
        border
        border-cyan-500/40
        bg-zinc-900/60
        p-8
        backdrop-blur-xl
        hover:border-cyan-400
        hover:shadow-[0_0_50px_#06b6d4]
      "
    >

      <h2
        className="
          text-3xl
          font-black
          text-cyan-400
        "
      >

        {title}

      </h2>

      <p
        className="
          mt-4
          text-zinc-400
        "
      >

        {description}

      </p>

    </motion.div>
  );
}