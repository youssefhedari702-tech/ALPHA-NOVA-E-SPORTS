"use client";

import {
  FaTrophy,
  FaUsers,
  FaGamepad,
  FaRankingStar,
} from "react-icons/fa6";

const features = [
  {
    icon: <FaTrophy size={40} />,
    title: "Big Tournaments",
    desc: "Compete in massive esports events.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Clan System",
    desc: "Build powerful gaming teams.",
  },
  {
    icon: <FaGamepad size={40} />,
    title: "Competitive Gaming",
    desc: "Professional level esports experience.",
  },
  {
    icon: <FaRankingStar size={40} />,
    title: "Rankings",
    desc: "Track player and team performance.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <h2 className="mb-16 text-center text-5xl font-black text-cyan-400">
        FEATURES
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-8 transition hover:-translate-y-2"
          >

            <div className="text-cyan-400">
              {feature.icon}
            </div>

            <h3 className="mt-6 text-3xl font-black">
              {feature.title}
            </h3>

            <p className="mt-4 text-zinc-400">
              {feature.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}