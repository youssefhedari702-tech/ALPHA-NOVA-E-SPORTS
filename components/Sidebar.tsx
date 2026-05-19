"use client";

import Link from "next/link";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Profile",
    href: "/profile",
  },
  {
    name: "Tournaments",
    href: "/tournaments",
  },
  {
    name: "Leaderboard",
    href: "/leaderboard",
  },
  {
    name: "Live Matches",
    href: "/live",
  },
  {
    name: "Notifications",
    href: "/notifications",
  },
  {
    name: "Settings",
    href: "/settings",
  },
  {
    name: "Admin",
    href: "/admin",
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-80 border-r border-cyan-500/10 bg-zinc-950 p-8 xl:block">

      <h1 className="text-4xl font-black text-cyan-400">
        ALPHA NOVA
      </h1>

      <div className="mt-16 space-y-4">

        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block rounded-2xl bg-black px-5 py-4 font-bold transition hover:bg-cyan-500 hover:text-black"
          >
            {link.name}
          </Link>
        ))}

      </div>

    </aside>
  );
}
