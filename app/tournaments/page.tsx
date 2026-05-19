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

export default function TournamentsPage() {

  const [
    tournaments,
    setTournaments,
  ] = useState<any[]>(
    []
  );

  const [
    loadingId,
    setLoadingId,
  ] = useState("");

  async function loadTournaments() {

    const {
      data,
    } = await supabase
      .from(
        "tournaments"
      )
      .select("*")
      .order(
        "created_at",
        {
          ascending: false,
        }
      );

    setTournaments(
      data || []
    );
  }

  async function joinTournament(
    tournamentId: string
  ) {

    setLoadingId(
      tournamentId
    );

    const {
      data: authData,
    } = await supabase
      .auth
      .getUser();

    const user =
      authData.user;

    if (!user) {

      alert(
        "LOGIN REQUIRED"
      );

      setLoadingId("");

      return;
    }

    const {
      data: profile,
    } = await supabase
      .from("User")
      .select("*")
      .eq(
        "id",
        user.id
      )
      .single();

    const {
      error,
    } = await supabase
      .from(
        "tournament_participants"
      )
      .insert({

        tournament_id:
          tournamentId,

        user_id:
          user.id,

        player_name:
          profile.freeFireName,

        clan_name:
          profile.clanName,
      });

    setLoadingId("");

    if (error) {

      alert(
        error.message
      );

      return;
    }

    alert(
      "JOINED SUCCESSFULLY"
    );
  }

  useEffect(() => {

    loadTournaments();

    const channel =
      supabase
        .channel(
          "tournaments-live"
        )
        .on(

          "postgres_changes",

          {

            event: "*",

            schema: "public",

            table:
              "tournaments",
          },

          () => {

            loadTournaments();
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
              text-cyan-400
            "
          >

            TOURNAMENTS

          </h1>

        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-3
          "
        >

          {tournaments.map(
            (
              tournament
            ) => (

              <div
                key={
                  tournament.id
                }
                className="
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-cyan-500/20
                  bg-zinc-900/60
                "
              >

                {tournament.banner && (

                  <img
                    src={
                      tournament.banner
                    }
                    alt={
                      tournament.title
                    }
                    className="
                      h-60
                      w-full
                      object-cover
                    "
                  />

                )}

                <div
                  className="
                    p-8
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      text-yellow-400
                    "
                  >

                    <Trophy />

                    LIVE TOURNAMENT

                  </div>

                  <h2
                    className="
                      mt-6
                      text-4xl
                      font-black
                    "
                  >

                    {
                      tournament.title
                    }

                  </h2>

                  <p
                    className="
                      mt-5
                      text-zinc-400
                    "
                  >

                    {
                      tournament.description
                    }

                  </p>

                  <div
                    className="
                      mt-8
                      space-y-3
                    "
                  >

                    <p>

                      PRIZE:
                      {" "}

                      <span
                        className="
                          text-cyan-400
                        "
                      >

                        {
                          tournament.prize
                        }

                      </span>

                    </p>

                    <p>

                      MAP:
                      {" "}

                      <span
                        className="
                          text-green-400
                        "
                      >

                        {
                          tournament.map
                        }

                      </span>

                    </p>

                    <p>

                      MODE:
                      {" "}

                      <span
                        className="
                          text-red-400
                        "
                      >

                        {
                          tournament.mode
                        }

                      </span>

                    </p>

                  </div>

                  <button
                    onClick={() =>
                      joinTournament(
                        tournament.id
                      )
                    }
                    disabled={
                      loadingId ===
                      tournament.id
                    }
                    className="
                      mt-10
                      w-full
                      rounded-2xl
                      bg-cyan-500
                      py-4
                      text-xl
                      font-black
                      text-black
                    "
                  >

                    {loadingId ===
                    tournament.id

                      ? "JOINING..."

                      : "JOIN"}

                  </button>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </main>
  );
}