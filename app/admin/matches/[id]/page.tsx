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

export default function UpdateMatchPage() {

  const params =
    useParams();

  const matchId =
    params.id as string;

  const [
    match,
    setMatch,
  ] = useState<any>(null);

  const [
    scoreOne,
    setScoreOne,
  ] = useState(0);

  const [
    scoreTwo,
    setScoreTwo,
  ] = useState(0);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function loadMatch() {

      const {
        data,
      } = await supabase
        .from("matches")
        .select("*")
        .eq(
          "id",
          matchId
        )
        .single();

      setMatch(data);

      setScoreOne(
        data?.score_one || 0
      );

      setScoreTwo(
        data?.score_two || 0
      );

      setLoading(false);
    }

    loadMatch();

  }, [matchId]);

  async function updateScore() {

    const winner =
      scoreOne > scoreTwo
        ? match.team_one
        : scoreTwo > scoreOne
        ? match.team_two
        : null;

    const {
      error,
    } = await supabase
      .from("matches")
      .update({

        score_one:
          scoreOne,

        score_two:
          scoreTwo,

        winner,
      })
      .eq(
        "id",
        matchId
      );

    if (error) {

      alert(error.message);

      return;
    }

    alert(
      "LIVE SCORE UPDATED"
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
          max-w-3xl
        "
      >

        <div
          className="
            rounded-[40px]
            border
            border-cyan-500/20
            bg-zinc-900/60
            p-10
          "
        >

          <h1
            className="
              text-center
              text-5xl
              font-black
              text-cyan-400
            "
          >

            LIVE SCORE

          </h1>

          <div
            className="
              mt-14
              grid
              gap-8
              md:grid-cols-2
            "
          >

            <div>

              <h2
                className="
                  mb-5
                  text-3xl
                  font-black
                "
              >

                {
                  match.team_one
                }

              </h2>

              <input
                type="number"
                value={scoreOne}
                onChange={(e) =>
                  setScoreOne(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="
                  w-full
                  rounded-3xl
                  border
                  border-cyan-500/20
                  bg-black/40
                  px-6
                  py-6
                  text-5xl
                  font-black
                  outline-none
                "
              />

            </div>

            <div>

              <h2
                className="
                  mb-5
                  text-3xl
                  font-black
                "
              >

                {
                  match.team_two
                }

              </h2>

              <input
                type="number"
                value={scoreTwo}
                onChange={(e) =>
                  setScoreTwo(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="
                  w-full
                  rounded-3xl
                  border
                  border-cyan-500/20
                  bg-black/40
                  px-6
                  py-6
                  text-5xl
                  font-black
                  outline-none
                "
              />

            </div>

          </div>

          <button
            onClick={updateScore}
            className="
              mt-10
              w-full
              rounded-3xl
              bg-cyan-500
              py-6
              text-2xl
              font-black
              text-black
            "
          >

            UPDATE LIVE SCORE

          </button>

        </div>

      </div>

    </main>
  );
}