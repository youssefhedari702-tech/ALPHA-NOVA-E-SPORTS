import Link
from "next/link";

import {
  Trophy,
  Shield,
  Radio,
  Users,
} from "lucide-react";

export default function HomePage() {

  return (

    <main
      className="
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >

      <section
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          px-6
        "
      >

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-6xl
            text-center
          "
        >

          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-6
              py-3
              text-cyan-400
            "
          >

            <Radio />

            LIVE ESPORTS PLATFORM

          </div>

          <h1
            className="
              mt-10
              text-7xl
              font-black
              leading-tight
              md:text-9xl
            "
          >

            ALPHA

            <span
              className="
                text-cyan-400
              "
            >

              {" "}
              NOVA

            </span>

          </h1>

          <p
            className="
              mx-auto
              mt-10
              max-w-3xl
              text-xl
              text-zinc-400
              md:text-2xl
            "
          >

            PROFESSIONAL FREE FIRE
            TOURNAMENT PLATFORM
            WITH LIVE ROOMS,
            LEADERBOARDS,
            REALTIME MATCHES
            AND ESPORTS SYSTEMS.

          </p>

          <div
            className="
              mt-14
              flex
              flex-col
              items-center
              justify-center
              gap-6
              md:flex-row
            "
          >

            <Link
              href="/register"
              className="
                rounded-2xl
                bg-cyan-500
                px-10
                py-5
                text-xl
                font-black
                text-black
                transition
                hover:scale-105
              "
            >

              JOIN NOW

            </Link>

            <Link
              href="/tournaments"
              className="
                rounded-2xl
                border
                border-cyan-500/20
                bg-zinc-900/60
                px-10
                py-5
                text-xl
                font-black
                transition
                hover:border-cyan-400
              "
            >

              TOURNAMENTS

            </Link>

          </div>

        </div>

      </section>

      <section
        className="
          px-6
          py-24
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-8
            md:grid-cols-4
          "
        >

          <div
            className="
              rounded-[40px]
              border
              border-cyan-500/20
              bg-zinc-900/60
              p-10
            "
          >

            <Trophy
              size={60}
              className="
                text-yellow-400
              "
            />

            <h2
              className="
                mt-8
                text-5xl
                font-black
              "
            >

              120+

            </h2>

            <p
              className="
                mt-4
                text-zinc-400
              "
            >

              TOURNAMENTS

            </p>

          </div>

          <div
            className="
              rounded-[40px]
              border
              border-cyan-500/20
              bg-zinc-900/60
              p-10
            "
          >

            <Users
              size={60}
              className="
                text-cyan-400
              "
            />

            <h2
              className="
                mt-8
                text-5xl
                font-black
              "
            >

              5000+

            </h2>

            <p
              className="
                mt-4
                text-zinc-400
              "
            >

              PLAYERS

            </p>

          </div>

          <div
            className="
              rounded-[40px]
              border
              border-cyan-500/20
              bg-zinc-900/60
              p-10
            "
          >

            <Shield
              size={60}
              className="
                text-green-400
              "
            />

            <h2
              className="
                mt-8
                text-5xl
                font-black
              "
            >

              300+

            </h2>

            <p
              className="
                mt-4
                text-zinc-400
              "
            >

              CLANS

            </p>

          </div>

          <div
            className="
              rounded-[40px]
              border
              border-cyan-500/20
              bg-zinc-900/60
              p-10
            "
          >

            <Radio
              size={60}
              className="
                text-red-400
              "
            />

            <h2
              className="
                mt-8
                text-5xl
                font-black
              "
            >

              LIVE

            </h2>

            <p
              className="
                mt-4
                text-zinc-400
              "
            >

              MATCHES

            </p>

          </div>

        </div>

      </section>

      <section
        className="
          px-6
          py-24
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

            <h2
              className="
                text-6xl
                font-black
                text-cyan-400
              "
            >

              FEATURED TOURNAMENTS

            </h2>

          </div>

          <div
            className="
              grid
              gap-8
              md:grid-cols-3
            "
          >

            {[
              "ALPHA NOVA S1",

              "WORLD CUP",

              "PRO LEAGUE",
            ].map(
              (
                tournament
              ) => (

                <div
                  key={
                    tournament
                  }
                  className="
                    rounded-[40px]
                    border
                    border-cyan-500/20
                    bg-zinc-900/60
                    p-10
                  "
                >

                  <div
                    className="
                      rounded-3xl
                      bg-cyan-500/10
                      px-5
                      py-3
                      text-cyan-400
                    "
                  >

                    LIVE EVENT

                  </div>

                  <h3
                    className="
                      mt-8
                      text-4xl
                      font-black
                    "
                  >

                    {
                      tournament
                    }

                  </h3>

                  <p
                    className="
                      mt-6
                      text-zinc-400
                    "
                  >

                    PROFESSIONAL
                    ESPORTS
                    TOURNAMENT
                    WITH LIVE
                    ROOMS
                    AND LEADERBOARD.

                  </p>

                  <button
                    className="
                      mt-10
                      rounded-2xl
                      bg-cyan-500
                      px-8
                      py-4
                      font-black
                      text-black
                    "
                  >

                    VIEW

                  </button>

                </div>

              )
            )}

          </div>

        </div>

      </section>

    </main>
  );
}