"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function AdminMatchesPage() {

  const [
    matchName,
    setMatchName,
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
    matchTime,
    setMatchTime,
  ] = useState("");

  const [
    status,
    setStatus,
  ] = useState("UPCOMING");

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
      .from("matches")
      .insert({

        match_name:
          matchName,

        team_one:
          teamOne,

        team_two:
          teamTwo,

        match_time:
          matchTime,

        status,
      });

    setLoading(false);

    if (error) {

      alert(error.message);

      return;
    }

    alert(
      "MATCH CREATED"
    );

    setMatchName("");

    setTeamOne("");

    setTeamTwo("");

    setMatchTime("");

    setStatus(
      "UPCOMING"
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
            mb-12
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

            CREATE MATCH

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
            border-cyan-500/20
            bg-zinc-900/60
            p-10
          "
        >

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
              TEAM TWO
            "
            value={teamTwo}
            onChange={(e) =>
              setTeamTwo(
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
              MATCH TIME
            "
            value={matchTime}
            onChange={(e) =>
              setMatchTime(
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

          <select
            value={status}
            onChange={(e) =>
              setStatus(
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
          >

            <option>
              UPCOMING
            </option>

            <option>
              LIVE
            </option>

            <option>
              FINISHED
            </option>

          </select>

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
              : "CREATE MATCH"}

          </button>

        </form>

      </div>

    </main>
  );
}