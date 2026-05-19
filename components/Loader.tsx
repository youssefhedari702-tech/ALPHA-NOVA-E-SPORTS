"use client";

import {
  motion,
} from "framer-motion";

export default function Loader() {

  return (

    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black
      "
    >

      <div
        className="
          text-center
        "
      >

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            mx-auto
            h-28
            w-28
            rounded-full
            border-4
            border-cyan-500
            border-t-transparent
          "
        />

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            mt-10
            text-5xl
            font-black
            text-cyan-400
          "
        >

          ALPHA NOVA

        </motion.h1>

      </div>

    </div>
  );
}