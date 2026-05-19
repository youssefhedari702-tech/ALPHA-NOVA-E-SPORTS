"use client";

import Link from "next/link";

import { useState } from "react";

export default function MobileMenu() {

  const [open, setOpen] =
    useState(false);

  return (
    <div className="xl:hidden">

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="rounded-2xl bg-cyan-500 px-5 py-3 font-black text-black"
      >
        MENU
      </button>

      {open && (
        <div className="absolute left-0 top-24 w-full border-t border-cyan-500/10 bg-black p-6">

          <div className="flex flex-col gap-4">

            <Link href="/">
              Home
            </Link>

            <Link href="/tournaments">
              Tournaments
            </Link>

            <Link href="/teams">
              Teams
            </Link>

            <Link href="/players">
              Players
            </Link>

            <Link href="/leaderboard">
              Leaderboard
            </Link>

            <Link href="/live">
              Live Matches
            </Link>

            <Link href="/login">
              Login
            </Link>

            <Link href="/register">
              Register
            </Link>

          </div>

        </div>
      )}

    </div>
  );
}