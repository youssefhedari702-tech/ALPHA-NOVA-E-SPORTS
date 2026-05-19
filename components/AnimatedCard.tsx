"use client";

import {
  motion,
} from "framer-motion";

export default function AnimatedCard({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: 1,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="rounded-3xl border border-cyan-500 bg-zinc-900/70 p-6 backdrop-blur-xl"
    >

      {children}

    </motion.div>
  );
}