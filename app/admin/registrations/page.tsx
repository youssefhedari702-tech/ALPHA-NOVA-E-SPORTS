"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function RegistrationsPage() {

  const [
    registrations,
    setRegistrations,
  ] = useState<any[]>([]);

  useEffect(() => {

    async function loadData() {

      const {
        data,
      } = await supabase
        .from(
          "tournament_registrations"
        )
        .select("*")
        .order(
          "created_at",
          {
            ascending: false,
          }
        );

      setRegistrations(
        data || []
      );
    }

    loadData();

  }, []);

  return (

    <main
      className="
        min-h-screen
        bg-black
        px-6
        py-20
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
              text-6xl
              font-black
              text-cyan-400
            "
          >

            REGISTRATIONS

          </h1>

        </div>

        <div
          className="
            space-y-8
          "
        >

          {registrations.map(
            (team) => (

              <div
                key={team.id}
                className="
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
                    flex-col
                    gap-4
                    md:flex-row
                    md:items-center
                    md:justify-between
                  "
                >

                  <div>

                    <h2
                      className="
                        text-4xl
                        font-black
                      "
                    >

                      {
                        team.team_name
                      }

                    </h2>

                    <p
                      className="
                        mt-3
                        text-cyan-400
                      "
                    >

                      {
                        team.tournament_name
                      }

                    </p>

                  </div>

                  <div
                    className="
                      rounded-full
                      bg-yellow-400
                      px-5
                      py-2
                      text-sm
                      font-black
                      text-black
                    "
                  >

                    {
                      team.status
                    }

                  </div>

                </div>

                <div
                  className="
                    mt-8
                    grid
                    gap-6
                    md:grid-cols-3
                  "
                >

                  <div
                    className="
                      rounded-3xl
                      bg-black/40
                      p-6
                    "
                  >

                    <p
                      className="
                        text-zinc-500
                      "
                    >

                      CAPTAIN

                    </p>

                    <h3
                      className="
                        mt-3
                        text-2xl
                        font-black
                      "
                    >

                      {
                        team.captain_name
                      }

                    </h3>

                  </div>

                  <div
                    className="
                      rounded-3xl
                      bg-black/40
                      p-6
                    "
                  >

                    <p
                      className="
                        text-zinc-500
                      "
                    >

                      UID

                    </p>

                    <h3
                      className="
                        mt-3
                        text-2xl
                        font-black
                        text-cyan-400
                      "
                    >

                      {
                        team.uid
                      }

                    </h3>

                  </div>

                  <div
                    className="
                      rounded-3xl
                      bg-black/40
                      p-6
                    "
                  >

                    <p
                      className="
                        text-zinc-500
                      "
                    >

                      PHONE

                    </p>

                    <h3
                      className="
                        mt-3
                        text-2xl
                        font-black
                        text-green-400
                      "
                    >

                      {
                        team.phone
                      }

                    </h3>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </main>
  );
}