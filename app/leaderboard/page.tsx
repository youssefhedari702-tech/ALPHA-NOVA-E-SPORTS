"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Trophy,
} from "lucide-react";

import {
  supabase,
} from "@/lib/supabase";

export default function LeaderboardPage() {

  const [
    teams,
    setTeams,
  ] = useState<any[]>(
    []
  );

  async function loadLeaderboard() {

    const {
      data,
    } = await supabase
      .from(
        "leaderboard"
      )
      .select("*")
      .order(
        "total_points",
        {
          ascending: false,
        }
      );

    setTeams(
      data || []
    );
  }

  useEffect(() => {

    loadLeaderboard();

    const channel =
      supabase
        .channel(
          "leaderboard-live"
        )
        .on(

          "postgres_changes",

          {

            event: "*",

            schema: "public",

            table:
              "leaderboard",
          },

          () => {

            loadLeaderboard();
          }
        )
        .subscribe();

    return () => {

      supabase.removeChannel(
        channel
      );
    };

  }, []);

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
              text-yellow-400
            "
          >

            LEADERBOARD

          </h1>

        </div>

        <div
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-cyan-500/20
          "
        >

          <table
            className="
              w-full
            "
          >

            <thead
              className="
                bg-cyan-500
                text-black
              "
            >

              <tr>

                <th
                  className="
                    p-6
                    text-left
                  "
                >

                  #

                </th>

                <th
                  className="
                    p-6
                    text-left
                  "
                >

                  TEAM

                </th>

                <th
                  className="
                    p-6
                    text-left
                  "
                >

                  KILLS

                </th>

                <th
                  className="
                    p-6
                    text-left
                  "
                >

                  BOOYAH

                </th>

                <th
                  className="
                    p-6
                    text-left
                  "
                >

                  TOTAL

                </th>

              </tr>

            </thead>

            <tbody>

              {teams.map(
                (
                  team,
                  index
                ) => (

                  <tr
                    key={team.id}
                    className="
                      border-t
                      border-cyan-500/10
                      bg-zinc-900/60
                    "
                  >

                    <td
                      className="
                        p-6
                        font-black
                      "
                    >

                      {index + 1}

                    </td>

                    <td
                      className="
                        p-6
                        flex
                        items-center
                        gap-3
                        font-black
                      "
                    >

                      {index === 0 && (

                        <Trophy
                          className="
                            text-yellow-400
                          "
                        />

                      )}

                      {
                        team.team_name
                      }

                    </td>

                    <td
                      className="
                        p-6
                        text-red-400
                        font-black
                      "
                    >

                      {
                        team.kills
                      }

                    </td>

                    <td
                      className="
                        p-6
                        text-green-400
                        font-black
                      "
                    >

                      {
                        team.booyah
                      }

                    </td>

                    <td
                      className="
                        p-6
                        text-cyan-400
                        font-black
                      "
                    >

                      {
                        team.total_points
                      }

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}