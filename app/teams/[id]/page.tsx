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

export default function TeamPage() {

  const params =
    useParams();

  const teamId =
    params.id as string;

  const [
    team,
    setTeam,
  ] = useState<any>(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function loadTeam() {

      const {
        data,
      } = await supabase
        .from("teams")
        .select("*")
        .eq(
          "id",
          teamId
        )
        .single();

      setTeam(data);

      setLoading(false);
    }

    loadTeam();

  }, [teamId]);

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
                team.name
                  ?.charAt(0)
              }

            </div>

          </div>

          <div
            className="
              p-10
            "
          >

            <h1
              className="
                text-6xl
                font-black
              "
            >

              {
                team.name
              }

            </h1>

            <p
              className="
                mt-5
                text-xl
                text-zinc-400
              "
            >

              {
                team.country
              }

            </p>

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

                  TOTAL WINS

                </p>

                <h2
                  className="
                    mt-4
                    text-6xl
                    font-black
                  "
                >

                  {
                    team.wins
                  }

                </h2>

              </div>

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
                    team.kills
                  }

                </h2>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}