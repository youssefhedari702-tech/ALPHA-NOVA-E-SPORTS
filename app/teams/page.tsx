"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Crown,
  Flame,
  Trophy,
} from "lucide-react";

import {
  supabase,
} from "@/lib/supabase";

export default function TeamsPage() {

  const [
    teams,
    setTeams,
  ] = useState<any[]>([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function loadTeams() {

      const {
        data,
      } = await supabase
        .from("teams")
        .select("*")
        .order(
          "wins",
          {
            ascending: false,
          }
        );

      setTeams(
        data || []
      );

      setLoading(false);
    }

    loadTeams();

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

            TOP TEAMS

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

          {teams.map(
            (team) => (

              <div
                key={team.id}
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
                      team.country
                    }

                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-yellow-400
                    "
                  >

                    <Crown
                      size={24}
                    />

                    <span
                      className="
                        font-black
                      "
                    >

                      PRO TEAM

                    </span>

                  </div>

                </div>

                <div
                  className="
                    mt-10
                    flex
                    justify-center
                  "
                >

                  {team.logo ? (

                    <img
                      src={
                        team.logo
                      }
                      alt={
                        team.name
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
                        team.name
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
                      team.name
                    }

                  </h2>

                  <p
                    className="
                      mt-5
                      leading-relaxed
                      text-zinc-400
                    "
                  >

                    {
                      team.bio
                    }

                  </p>

                </div>

                <div
                  className="
                    mt-10
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
                        team.wins
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
                        team.kills
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

                    CAPTAIN

                  </span>

                  <h3
                    className="
                      mt-3
                      text-3xl
                      font-black
                    "
                  >

                    {
                      team.captain
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