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

export default function PlayerPage() {

  const params =
    useParams();

  const playerId =
    params.id as string;

  const [
    player,
    setPlayer,
  ] = useState<any>(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function loadPlayer() {

      const {
        data,
      } = await supabase
        .from("players")
        .select("*")
        .eq(
          "id",
          playerId
        )
        .single();

      setPlayer(data);

      setLoading(false);
    }

    loadPlayer();

  }, [playerId]);

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
              flex
              h-72
              items-center
              justify-center
              bg-gradient-to-r
              from-cyan-500
              to-blue-700
            "
          >

            <div
              className="
                flex
                h-44
                w-44
                items-center
                justify-center
                rounded-full
                bg-black
                text-7xl
                font-black
                text-cyan-400
              "
            >

              {
                player.name
                  ?.charAt(0)
              }

            </div>

          </div>

          <div
            className="
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

                <h1
                  className="
                    text-6xl
                    font-black
                  "
                >

                  {
                    player.name
                  }

                </h1>

                <p
                  className="
                    mt-4
                    text-xl
                    text-zinc-400
                  "
                >

                  {
                    player.team_name
                  }

                </p>

              </div>

              <div
                className="
                  rounded-3xl
                  bg-cyan-500
                  px-8
                  py-5
                  text-black
                "
              >

                <p
                  className="
                    text-sm
                    font-black
                  "
                >

                  UID

                </p>

                <h2
                  className="
                    mt-2
                    text-3xl
                    font-black
                  "
                >

                  {
                    player.uid
                  }

                </h2>

              </div>

            </div>

            <div
              className="
                mt-12
                grid
                gap-6
                md:grid-cols-3
              "
            >

              <div
                className="
                  rounded-3xl
                  bg-red-500
                  p-8
                  text-black
                "
              >

                <p
                  className="
                    text-lg
                    font-black
                  "
                >

                  TOTAL KILLS

                </p>

                <h2
                  className="
                    mt-4
                    text-6xl
                    font-black
                  "
                >

                  {
                    player.kills
                  }

                </h2>

              </div>

              <div
                className="
                  rounded-3xl
                  bg-yellow-400
                  p-8
                  text-black
                "
              >

                <p
                  className="
                    text-lg
                    font-black
                  "
                >

                  MVP

                </p>

                <h2
                  className="
                    mt-4
                    text-6xl
                    font-black
                  "
                >

                  {
                    player.mvp
                  }

                </h2>

              </div>

              <div
                className="
                  rounded-3xl
                  bg-green-500
                  p-8
                  text-black
                "
              >

                <p
                  className="
                    text-lg
                    font-black
                  "
                >

                  COUNTRY

                </p>

                <h2
                  className="
                    mt-4
                    text-4xl
                    font-black
                  "
                >

                  {
                    player.country
                  }

                </h2>

              </div>

            </div>

            <div
              className="
                mt-12
                rounded-3xl
                border
                border-cyan-500/20
                bg-black/40
                p-8
              "
            >

              <h2
                className="
                  text-3xl
                  font-black
                  text-cyan-400
                "
              >

                PLAYER BIO

              </h2>

              <p
                className="
                  mt-5
                  text-lg
                  leading-8
                  text-zinc-300
                "
              >

                PROFESSIONAL
                ESPORTS PLAYER
                FROM
                {" "}
                {
                  player.country
                }
                .
                REPRESENTING
                {" "}
                {
                  player.team_name
                }
                .
                SPECIALIZED
                IN HIGH LEVEL
                COMPETITIVE
                GAMEPLAY.

              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}