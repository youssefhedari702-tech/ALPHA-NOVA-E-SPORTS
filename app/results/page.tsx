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

export default function ResultsPage() {

  const [
    results,
    setResults,
  ] = useState<any[]>([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function loadResults() {

      const {
        data,
      } = await supabase
        .from(
          "match_results"
        )
        .select("*")
        .order(
          "total_points",
          {
            ascending: false,
          }
        );

      setResults(
        data || []
      );

      setLoading(false);
    }

    loadResults();

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

            MATCH RESULTS

          </h1>

        </div>

        <div
          className="
            space-y-8
          "
        >

          {results.map(
            (result) => (

              <div
                key={result.id}
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
                    gap-6
                    md:flex-row
                    md:items-center
                    md:justify-between
                  "
                >

                  <div>

                    <div
                      className="
                        flex
                        items-center
                        gap-4
                      "
                    >

                      <Trophy
                        size={40}
                        className="
                          text-yellow-400
                        "
                      />

                      <h2
                        className="
                          text-4xl
                          font-black
                        "
                      >

                        {
                          result.team_name
                        }

                      </h2>

                    </div>

                    <p
                      className="
                        mt-4
                        text-zinc-500
                      "
                    >

                      {
                        result.match_name
                      }

                    </p>

                  </div>

                  <div
                    className="
                      rounded-full
                      bg-cyan-500
                      px-6
                      py-3
                      text-lg
                      font-black
                      text-black
                    "
                  >

                    {
                      result.total_points
                    }
                    {" "}
                    PTS

                  </div>

                </div>

                <div
                  className="
                    mt-10
                    grid
                    gap-5
                    md:grid-cols-4
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

                    <h3
                      className="
                        text-4xl
                        font-black
                        text-red-400
                      "
                    >

                      {
                        result.kills
                      }

                    </h3>

                    <p
                      className="
                        mt-2
                        text-zinc-500
                      "
                    >

                      KILLS

                    </p>

                  </div>

                  <div
                    className="
                      rounded-3xl
                      bg-black/40
                      p-6
                      text-center
                    "
                  >

                    <h3
                      className="
                        text-4xl
                        font-black
                        text-cyan-400
                      "
                    >

                      #
                      {
                        result.position
                      }

                    </h3>

                    <p
                      className="
                        mt-2
                        text-zinc-500
                      "
                    >

                      POSITION

                    </p>

                  </div>

                  <div
                    className="
                      rounded-3xl
                      bg-black/40
                      p-6
                      text-center
                    "
                  >

                    <h3
                      className="
                        text-4xl
                        font-black
                        text-yellow-400
                      "
                    >

                      {
                        result.booyah
                          ? "YES"
                          : "NO"
                      }

                    </h3>

                    <p
                      className="
                        mt-2
                        text-zinc-500
                      "
                    >

                      BOOYAH

                    </p>

                  </div>

                  <div
                    className="
                      rounded-3xl
                      bg-black/40
                      p-6
                      text-center
                    "
                  >

                    <h3
                      className="
                        text-4xl
                        font-black
                        text-green-400
                      "
                    >

                      {
                        result.total_points
                      }

                    </h3>

                    <p
                      className="
                        mt-2
                        text-zinc-500
                      "
                    >

                      TOTAL

                    </p>

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