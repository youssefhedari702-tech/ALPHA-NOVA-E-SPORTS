"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function MatchesPage() {

  const [
    matches,
    setMatches,
  ] = useState<any[]>([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function loadMatches() {

      const {
        data,
      } = await supabase
        .from("matches")
        .select("*")
        .order(
          "created_at",
          {
            ascending: false,
          }
        );

      setMatches(
        data || []
      );

      setLoading(false);
    }

    loadMatches();

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
        py-32
        text-white
      "
    >

      <div
        className="
          mx-auto
          max-w-6xl
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

            LIVE MATCHES

          </h1>

        </div>

        <div
          className="
            space-y-8
          "
        >

          {matches.map(
            (match) => (

              <div
                key={match.id}
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
                    flex
                    flex-col
                    gap-6
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
                        match.match_name
                      }

                    </h2>

                    <p
                      className="
                        mt-3
                        text-zinc-500
                      "
                    >

                      {
                        match.match_time
                      }

                    </p>

                  </div>

                  <div
                    className={`
                      rounded-full
                      px-6
                      py-3
                      text-sm
                      font-black

                      ${
                        match.status ===
                        "LIVE"

                          ? `
                            animate-pulse
                            bg-red-500
                            text-white
                          `

                          : match.status ===
                            "FINISHED"

                          ? `
                            bg-zinc-700
                            text-white
                          `

                          : `
                            bg-cyan-500
                            text-black
                          `
                      }
                    `}
                  >

                    {
                      match.status
                    }

                  </div>

                </div>

                <div
                  className="
                    mt-10
                    grid
                    items-center
                    gap-8
                    md:grid-cols-3
                  "
                >

                  <div
                    className="
                      rounded-3xl
                      bg-black/40
                      p-8
                      text-center
                    "
                  >

                    <h3
                      className="
                        text-3xl
                        font-black
                      "
                    >

                      {
                        match.team_one
                      }

                    </h3>

                  </div>

                  <div
                    className="
                      text-center
                      text-5xl
                      font-black
                      text-cyan-400
                    "
                  >

                    VS

                  </div>

                  <div
                    className="
                      rounded-3xl
                      bg-black/40
                      p-8
                      text-center
                    "
                  >

                    <h3
                      className="
                        text-3xl
                        font-black
                      "
                    >

                      {
                        match.team_two
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