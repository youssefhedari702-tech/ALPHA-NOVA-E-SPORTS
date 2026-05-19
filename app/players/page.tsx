"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Flame,
  Shield,
  Trophy,
} from "lucide-react";

import {
  supabase,
} from "@/lib/supabase";

export default function PlayersPage() {

  const [
    players,
    setPlayers,
  ] = useState<any[]>([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function loadPlayers() {

      const {
        data,
      } = await supabase
        .from("players")
        .select("*")
        .order(
          "kills",
          {
            ascending: false,
          }
        );

      setPlayers(
        data || []
      );

      setLoading(false);
    }

    loadPlayers();

  }, []);

  if (loading) {

    return (

      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-black
          text-4xl
          font-black
          text-cyan-400
        "
      >

        LOADING...

      </main>
    );
  }

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

            TOP PLAYERS

          </h1>

        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {players.map(
            (player) => (

              <div
                key={player.id}
                className="
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-cyan-500/20
                  bg-zinc-900/60
                  p-8
                "
              >

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <div
                    className="
                      rounded-full
                      bg-cyan-500
                      px-4
                      py-2
                      text-sm
                      font-black
                      text-black
                    "
                  >

                    {
                      player.role
                    }

                  </div>

                  <div
                    className="
                      rounded-full
                      bg-red-500
                      px-4
                      py-2
                      text-sm
                      font-black
                      text-black
                    "
                  >

                    KD
                    {" "}
                    {
                      player.kd
                    }

                  </div>

                </div>

                <div
                  className="
                    mt-10
                    flex
                    justify-center
                  "
                >

                  {player.avatar ? (

                    <img
                      src={
                        player.avatar
                      }
                      alt={
                        player.name
                      }
                      className="
                        h-40
                        w-40
                        rounded-full
                        border-4
                        border-cyan-400
                        object-cover
                      "
                    />

                  ) : (

                    <div
                      className="
                        flex
                        h-40
                        w-40
                        items-center
                        justify-center
                        rounded-full
                        bg-cyan-500
                        text-6xl
                        font-black
                        text-black
                      "
                    >

                      {
                        player.name
                          .charAt(0)
                      }

                    </div>

                  )}

                </div>

                <div
                  className="
                    mt-10
                    text-center
                  "
                >

                  <h2
                    className="
                      text-4xl
                      font-black
                    "
                  >

                    {
                      player.name
                    }

                  </h2>

                  <div
                    className="
                      mt-5
                      text-zinc-400
                    "
                  >

                    UID:
                    {" "}
                    {
                      player.uid
                    }

                  </div>

                </div>

                <div
                  className="
                    mt-10
                    rounded-3xl
                    bg-black/40
                    p-6
                    text-center
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-cyan-400
                    "
                  >

                    <Shield
                      size={24}
                    />

                    <span
                      className="
                        font-black
                      "
                    >

                      TEAM

                    </span>

                  </div>

                  <h3
                    className="
                      mt-5
                      text-3xl
                      font-black
                    "
                  >

                    {
                      player.team
                    }

                  </h3>

                </div>

                <div
                  className="
                    mt-8
                    grid
                    grid-cols-2
                    gap-5
                  "
                >

                  <div
                    className="
                      rounded-3xl
                      bg-black/40
                      p-6
                      text-center
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        text-red-400
                      "
                    >

                      <Flame
                        size={24}
                      />

                      <span
                        className="
                          font-black
                        "
                      >

                        KILLS

                      </span>

                    </div>

                    <div
                      className="
                        mt-5
                        text-5xl
                        font-black
                      "
                    >

                      {
                        player.kills
                      }

                    </div>

                  </div>

                  <div
                    className="
                      rounded-3xl
                      bg-black/40
                      p-6
                      text-center
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        text-yellow-400
                      "
                    >

                      <Trophy
                        size={24}
                      />

                      <span
                        className="
                          font-black
                        "
                      >

                        WINS

                      </span>

                    </div>

                    <div
                      className="
                        mt-5
                        text-5xl
                        font-black
                      "
                    >

                      {
                        player.wins
                      }

                    </div>

                  </div>

                </div>

                <div
                  className="
                    mt-8
                    rounded-3xl
                    bg-cyan-500
                    p-5
                    text-center
                    text-black
                  "
                >

                  <span
                    className="
                      text-sm
                      font-black
                    "
                  >

                    COUNTRY

                  </span>

                  <h3
                    className="
                      mt-3
                      text-3xl
                      font-black
                    "
                  >

                    {
                      player.country
                    }

                  </h3>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </main>
  );
}