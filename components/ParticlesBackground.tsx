"use client";

export default function ParticlesBackground() {

  return (

    <div
      className="
        absolute
        inset-0
        -z-10
        overflow-hidden
      "
    >

      <div
        className="
          absolute
          left-[-200px]
          top-[-200px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/20
          blur-[150px]
          animate-pulse
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
          blur-[180px]
          animate-pulse
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

    </div>
  );
}