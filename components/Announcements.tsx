"use client";

import {
  motion,
} from "framer-motion";

export default function Announcements() {

  const announcements = [

    "🔥 ALPHA LEAGUE S1 STARTS TOMORROW",

    "🏆 NEW TOURNAMENT OPENED",

    "⚡ LIVE MATCHES AVAILABLE NOW",

    "🎮 JOIN THE BEST ESPORTS COMMUNITY",
  ];

  return (

    <section
      className="
        overflow-hidden
        border-y
        border-cyan-500/20
        bg-zinc-950
        py-4
      "
    >

      <motion.div

        animate={{
          x: [
            "100%",
            "-100%",
          ],
        }}

        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}

        className="
          flex
          gap-20
          whitespace-nowrap
          text-xl
          font-black
          text-cyan-400
        "
      >

        {announcements.map((item, index) => (

          <span key={index}>

            {item}

          </span>

        ))}

      </motion.div>

    </section>
  );
}