"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {

  return (

    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500 blur-[150px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-[-250px] right-[-250px] h-[600px] w-[600px] rounded-full bg-green-500 blur-[180px]"
      />

    </div>
  );
}