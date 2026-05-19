import Link
from "next/link";

import {

  Trophy,

  Bell,

  Radio,

  Shield,

  Users,

} from "lucide-react";

export default function AdminPage() {

  const items = [

    {

      title:
        "TOURNAMENTS",

      href:
        "/admin/tournaments",

      icon:
        Trophy,
    },

    {

      title:
        "ROOMS",

      href:
        "/admin/rooms",

      icon:
        Radio,
    },

    {

      title:
        "NOTIFICATIONS",

      href:
        "/admin/notifications",

      icon:
        Bell,
    },

    {

      title:
        "LEADERBOARD",

      href:
        "/admin/leaderboard",

      icon:
        Shield,
    },

    {

      title:
        "USERS",

      href:
        "/admin/users",

      icon:
        Users,
    },
  ];

  return (

    <main
      className="
        min-h-screen
        bg-black
        px-6
        py-24
        text-white
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
        "
      >

        <div
          className="
            mb-16
            text-center
          "
        >

          <h1
            className="
              text-7xl
              font-black
              text-cyan-400
            "
          >

            ADMIN PANEL

          </h1>

        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-3
          "
        >

          {items.map(
            (
              item
            ) => {

              const Icon =
                item.icon;

              return (

                <Link
                  key={
                    item.title
                  }
                  href={
                    item.href
                  }
                  className="
                    rounded-[40px]
                    border
                    border-cyan-500/20
                    bg-zinc-900/60
                    p-10
                    transition
                    hover:scale-105
                  "
                >

                  <div
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      bg-cyan-500/20
                      text-cyan-400
                    "
                  >

                    <Icon
                      size={40}
                    />

                  </div>

                  <h2
                    className="
                      mt-10
                      text-4xl
                      font-black
                    "
                  >

                    {
                      item.title
                    }

                  </h2>

                </Link>

              );
            }
          )}

        </div>

      </div>

    </main>
  );
}