"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "next/navigation";

import {
  supabase,
} from "@/lib/supabase";

export default function TournamentDetailsPage() {

  const params =
    useParams();

  const tournamentId =
    params.id as string;

  const [
    tournament,
    setTournament,
  ] = useState<any>(null);

  const [
    joined,
    setJoined,
  ] = useState(false);

  const [
    playersCount,
    setPlayersCount,
  ] = useState(0);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function loadData() {

      const {
        data,
      } = await supabase
        .from("tournaments")
        .select("*")
        .eq(
          "id",
          tournamentId
        )
        .single();

      setTournament(data);

      const {
        count,
      } = await supabase
        .from(
          "tournament_players"
        )
        .select(
          "*",
          {
            count:
              "exact",
            head: true,
          }
        )
        .eq(
          "tournament_id",
          tournamentId
        );

      setPlayersCount(
        count || 0
      );

      const {
        data: authData,
      } = await supabase
        .auth
        .getUser();

      const user =
        authData.user;

      if (user) {

        const {
          data: joinedData,
        } = await supabase
          .from(
            "tournament_players"
          )
          .select("*")
          .eq(
            "tournament_id",
            tournamentId
          )
          .eq(
            "user_id",
            user.id
          )
          .single();

        if (joinedData) {

          setJoined(true);
        }
      }

      setLoading(false);
    }

    loadData();

  }, [tournamentId]);

  async function joinTournament() {

    const {
      data: authData,
    } = await supabase
      .auth
      .getUser();

    const user =
      authData.user;

    if (!user) {

      window.location.href =
        "/login";

      return;
    }

    const {
      error,
    } = await supabase
      .from(
        "tournament_players"
      )
      .insert({

        tournament_id:
          tournamentId,

        user_id:
          user.id,
      });

    if (error) {

      alert(error.message);

      return;
    }

    setJoined(true);

    setPlayersCount(
      (prev) => prev + 1
    );
  }

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
          max-w-5xl
        "
      >

        <div
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-cyan-500/20
            bg-zinc-900/60
          "
        >

          <div
            className="
              h-72
              bg-gradient-to-r
              from-cyan-500
              to-blue-700
            "
          />

          <div
            className="
              px-10
              py-10
            "
          >

            <h1
              className="
                text-6xl
                font-black
              "
            >

              {
                tournament.title
              }

            </h1>

            <div
              className="
                mt-10
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

                  PRIZE POOL

                </p>

                <h2
                  className="
                    mt-3
                    text-4xl
                    font-black
                    text-yellow-400
                  "
                >

                  $
                  {
                    tournament.prize_pool
                  }

                </h2>

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

                  MODE

                </p>

                <h2
                  className="
                    mt-3
                    text-4xl
                    font-black
                    text-cyan-400
                  "
                >

                  {
                    tournament.mode
                  }

                </h2>

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

                  PLAYERS

                </p>

                <h2
                  className="
                    mt-3
                    text-4xl
                    font-black
                    text-green-400
                  "
                >

                  {
                    playersCount
                  }

                </h2>

              </div>

            </div>

            <div
              className="
                mt-10
              "
            >

              {joined ? (

                <button
                  disabled
                  className="
                    w-full
                    rounded-3xl
                    bg-green-500
                    py-6
                    text-2xl
                    font-black
                    text-black
                  "
                >

                  JOINED

                </button>

              ) : (

                <button
                  onClick={
                    joinTournament
                  }
                  className="
                    w-full
                    rounded-3xl
                    bg-cyan-500
                    py-6
                    text-2xl
                    font-black
                    text-black
                  "
                >

                  JOIN TOURNAMENT

                </button>

              )}

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}