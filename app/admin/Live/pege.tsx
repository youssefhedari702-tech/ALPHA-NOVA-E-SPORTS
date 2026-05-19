"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function AdminLivePage() {

  const [
    title,
    setTitle,
  ] = useState("");

  const [
    teamOne,
    setTeamOne,
  ] = useState("");

  const [
    teamTwo,
    setTeamTwo,
  ] = useState("");

  const [
    scoreOne,
    setScoreOne,
  ] = useState("");

  const [
    scoreTwo,
    setScoreTwo,
  ] = useState("");

  const [
    streamUrl,
    setStreamUrl,
  ] = useState("");

  const [
    map,
    setMap,
  ] = useState("BERMUDA");

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function createMatch(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    const {
      error,
    } = await supabase
      .from(
        "live_matches"
      )
      .insert({

        title,

        team_one:
          teamOne,

        team_two:
          teamTwo,

        score_one:
          Number(scoreOne),

        score_two:
          Number(scoreTwo),

        stream_url:
          streamUrl,

        map,
      });

    setLoading(false);

    if (error) {

      alert(error.message);

      return;
    }

    alert(
      "LIVE MATCH CREATED"
    );

    setTitle("");

    setTeamOne("");

    setTeamTwo("");

    setScoreOne("");

    setScoreTwo("");

    setStreamUrl("");

    setMap("BERMUDA");
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
          max-w-3xl
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
              text-red-500
            "
          >

            LIVE MATCHES ADMIN

          </h1>

        </div>

        <form
          onSubmit={
            createMatch
          }
          className="
            space-y-8
            rounded-[40px]
            border
            border-red-500/20
            bg-zinc-900/60
            p-10
          "
        >

          <input
            type="text"
            required
            placeholder="
              MATCH TITLE
            "
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            className="
              w-full
              rounded-2xl
              border
              border-red-500/20
              bg-black/40
              px-5
              py-4
              outline-none
            "
          />

          <div
            className="
              grid
              gap-5
              md:grid-cols-2
            "
          >

            <input
              type="text"
              required
              placeholder="
                TEAM ONE
              "
              value={teamOne}
              onChange={(e) =>
                setTeamOne(
                  e.target.value
                )
              }
              className="
                rounded-2xl
                border
                border-red-500/20
                bg-black/40
                px-5
                py-4
                outline-none
              "
            />

            <input
              type="text"
              required
              placeholder="
                TEAM TWO
              "
              value={teamTwo}
              onChange={(e) =>
                setTeamTwo(
                  e.target.value
                )
              }
              className="
                rounded-2xl
                border
                border-red-500/20
                bg-black/40
                px-5
                py-4
                outline-none
              "
            />

            <input
              type="number"
              placeholder="
                SCORE ONE
              "
              value={scoreOne}
              onChange={(e) =>
                setScoreOne(
                  e.target.value
                )
              }
              className="
                rounded-2xl
                border
                border-red-500/20
                bg-black/40
                px-5
                py-4
                outline-none
              "
            />

            <input
              type="number"
              placeholder="
                SCORE TWO
              "
              value={scoreTwo}
              onChange={(e) =>
                setScoreTwo(
                  e.target.value
                )
              }
              className="
                rounded-2xl
                border
                border-red-500/20
                bg-black/40
                px-5
                py-4
                outline-none
              "
            />

          </div>

          <input
            type="text"
            placeholder="
              STREAM URL
            "
            value={streamUrl}
            onChange={(e) =>
              setStreamUrl(
                e.target.value
              )
            }
            className="
              w-full
              rounded-2xl
              border
              border-red-500/20
              bg-black/40
              px-5
              py-4
              outline-none
            "
          />

          <select
            value={map}
            onChange={(e) =>
              setMap(
                e.target.value
              )
            }
            className="
              w-full
              rounded-2xl
              border
              border-red-500/20
              bg-black/40
              px-5
              py-4
              outline-none
            "
          >

            <option value="BERMUDA">
              BERMUDA
            </option>

            <option value="PURGATORY">
              PURGATORY
            </option>

            <option value="KALAHARI">
              KALAHARI
            </option>

            <option value="ALPINE">
              ALPINE
            </option>

          </select>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              rounded-2xl
              bg-red-500
              py-5
              text-xl
              font-black
              text-black
            "
          >

            {loading
              ? "CREATING..."
              : "CREATE LIVE MATCH"}

          </button>

        </form>

      </div>

    </main>
  );
}