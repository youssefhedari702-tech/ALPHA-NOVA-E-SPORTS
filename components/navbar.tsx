"use client";

import Link
from "next/link";

import {
  useState,
} from "react";

import {
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {

  const [
    open,
    setOpen,
  ] = useState(false);

  const links = [

    {
      name: "HOME",
      href: "/",
    },

    {
      name: "TOURNAMENTS",
      href: "/tournaments",
    },

    {
      name: "ROOMS",
      href: "/rooms",
    },

    {
      name: "LIVE",
      href: "/live",
    },

    {
      name: "LEADERBOARD",
      href: "/leaderboard",
    },

    {
      name: "RULES",
      href: "/rules",
    },

    {
      name: "NOTIFICATIONS",
      href: "/notifications",
    },

    {
      name: "PROFILE",
      href: "/profile",
    },

    {
      name: "ADMIN",
      href: "/admin",
    },
  ];

  return (

    <header
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-cyan-500/10
        bg-black/80
        backdrop-blur-xl
      "
    >

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-5
        "
      >

        <Link
          href="/"
          className="
            text-3xl
            font-black
            text-cyan-400
          "
        >

          ALPHA NOVA

        </Link>

        <nav
          className="
            hidden
            items-center
            gap-8
            lg:flex
          "
        >

          {links.map(
            (
              link
            ) => (

              <Link
                key={
                  link.name
                }
                href={
                  link.href
                }
                className="
                  text-sm
                  font-black
                  text-white
                  transition
                  hover:text-cyan-400
                "
              >

                {
                  link.name
                }

              </Link>

            )
          )}

        </nav>

        <button
          onClick={() =>
            setOpen(
              !open
            )
          }
          className="
            text-cyan-400
            lg:hidden
          "
        >

          {open

            ? <X size={34} />

            : <Menu size={34} />
          }

        </button>

      </div>

      {open && (

        <div
          className="
            border-t
            border-cyan-500/10
            bg-black
            px-6
            py-8
            lg:hidden
          "
        >

          <div
            className="
              flex
              flex-col
              gap-6
            "
          >

            {links.map(
              (
                link
              ) => (

                <Link
                  key={
                    link.name
                  }
                  href={
                    link.href
                  }
                  onClick={() =>
                    setOpen(
                      false
                    )
                  }
                  className="
                    text-lg
                    font-black
                    text-white
                    transition
                    hover:text-cyan-400
                  "
                >

                  {
                    link.name
                  }

                </Link>

              )
            )}

          </div>

        </div>

      )}

    </header>
  );
}