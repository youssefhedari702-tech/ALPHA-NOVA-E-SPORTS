"use client";

import {
  motion,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

export default function CustomCursor() {

  const [
    position,
    setPosition,
  ] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    function move(
      e: MouseEvent
    ) {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );

  }, []);

  return (

    <motion.div
      animate={{
        x: position.x - 10,
        y: position.y - 10,
      }}
      className="
        pointer-events-none
        fixed
        z-[9999]
        h-5
        w-5
        rounded-full
        bg-cyan-400
        shadow-[0_0_20px_#06b6d4]
      "
    />
  );
}