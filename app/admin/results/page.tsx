"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function AdminResultsPage() {

  const [
    teamName,
    setTeamName,
  ] = useState("");

  const [
    kills,
    setKills,
  ] = useState("");

  const [
    position,
    setPosition,
  ] = useState("");

  const [
    matchName,
    setMatchName,
  ] = useState("");

  const [
    booyah,
    setBooyah,
  ] = useState(false);

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function createResult(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    const killsValue =
      Number(kills);

    const positionValue =
      Number(position);

    let totalPoints =
      killsValue;

    if (
      positionValue === 1
    ) {
      totalPoints += 12;
    }

    if (
      positionValue === 2
    ) {
      totalPoints += 9;
    }

    if (
      positionValue === 3
    ) {
      totalPoints += 8;
    }

    if (
      positionValue === 4
    ) {
      totalPoints += 7;
    }

    const {
      error,
    } = await supabase
      .from(
        "match_results"
      )
      .insert({

        team_name:
          teamName,

        kills:
          killsValue,

        position:
          positionValue,

        booyah,

        total_points:
          totalPoints,

        match_name:
          matchName,
      });

    setLoading(false);

    if (error) {

      alert(error.message);

      return;
    }

    alert(
      "RESULT CREATED"
    );

    setTeamName("");

    setKills("");

    setPosition("");

    setMatchName("");

    setBooyah(false);
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
              text-cyan-400
            "
          >

            RESULTS ADMIN

          </h1>

        </div>

        <form
          onSubmit={
            createResult
          }
          className="
            space-y-8
            rounded-[40px]
            border
            border-cyan-500/20
            bg-zinc-900/60
            p-10
          "
        >

          <input
            type="text"
            required
            placeholder="
              TEAM NAME
            "
            value={teamName}
            onChange={(e) =>
              setTeamName(
                e.target.value
              )
            }
            className="
              w-full
              rounded-2xl
              border
              border-cyan-500/20
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
              MATCH NAME
            "
            value={matchName}
            onChange={(e) =>
              setMatchName(
                e.target.value
              )
            }
            className="
              w-full
              rounded-2xl
              border
              border-cyan-500/20
              bg-black/40
              px-5
              py-4
              outline-none
            "
          />

          <input
            type="number"
            required
            placeholder="
              KILLS
            "
            value={kills}
            onChange={(e) =>
              setKills(
                e.target.value
              )
            }
            className="
              w-full
              rounded-2xl
              border
              border-cyan-500/20
              bg-black/40
              px-5
              py-4
              outline-none
            "
          />

          <input
            type="number"
            required
            placeholder="
              POSITION
            "
            value={position}
            onChange={(e) =>
              setPosition(
                e.target.value
              )
            }
            className="
              w-full
              rounded-2xl
              border
              border-cyan-500/20
              bg-black/40
              px-5
              py-4
              outline-none
            "
          />

          <label
            className="
              flex
              items-center
              gap-4
              text-xl
              font-black
            "
          >

            <input
              type="checkbox"
              checked={booyah}
              onChange={(e) =>
                setBooyah(
                  e.target.checked
                )
              }
            />

            BOOYAH

          </label>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              rounded-2xl
              bg-cyan-500
              py-5
              text-xl
              font-black
              text-black
            "
          >

            {loading
              ? "CREATING..."
              : "CREATE RESULT"}

          </button>

        </form>

      </div>

    </main>
  );
}