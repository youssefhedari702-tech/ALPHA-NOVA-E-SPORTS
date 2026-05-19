"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Flame,
  Map,
  Trophy,
} from "lucide-react";

import {
  supabase,
} from "@/lib/supabase";

export default function HistoryPage() {

  const [
    matches,
    setMatches,
  ] = useState<any[]>(
    []
  );

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function loadHistory() {

      const {

        data: {

          user,

        },

      } = await supabase
        .auth
        .getUser();

      if (!user) {

        setLoading(false);

        return;
      }

      const {
        data,
      } = await supabase
        .from(
          "match_history"
        )
        .select("*")
        .eq(
          "player_email",
          user.email
        )
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

    loadHistory();

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

            MATCH HISTORY

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

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        gap-3
                        text-zinc-400
                      "
                    >

                      <Map
                        size={20}
                      />

                      {
                        match.map
                      }

                      •

                      {
                        match.mode
                      }

                    </div>

                  </div>

                  {match.booyah ? (

                    <div
                      className="
                        rounded-full
                        bg-yellow-400
                        px-6
                        py-3
                        text-lg
                        font-black
                        text-black
                      "
                    >

                      BOOYAH 👑

                    </div>

                  ) : (

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

                      TOP
                      {" "}
                      {
                        match.placement
                      }

                    </div>

                  )}

                </div>

                <div
                  className="
                    mt-10
                    grid
                    gap-6
                    md:grid-cols-2
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

                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        text-red-400
                      "
                    >

                      <Flame />

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
                        text-6xl
                        font-black
                      "
                    >

                      {
                        match.kills
                      }

                    </div>

                  </div>

                  <div
                    className="
                      rounded-3xl
                      bg-black/40
                      p-8
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

                      <Trophy />

                      <span
                        className="
                          font-black
                        "
                      >

                        PLACEMENT

                      </span>

                    </div>

                    <div
                      className="
                        mt-5
                        text-6xl
                        font-black
                      "
                    >

                      #
                      {
                        match.placement
                      }

                    </div>

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