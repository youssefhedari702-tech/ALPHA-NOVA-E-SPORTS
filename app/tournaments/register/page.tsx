"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function TournamentRegisterPage() {

  const [
    tournamentName,
    setTournamentName,
  ] = useState("");

  const [
    teamName,
    setTeamName,
  ] = useState("");

  const [
    captainName,
    setCaptainName,
  ] = useState("");

  const [
    uid,
    setUid,
  ] = useState("");

  const [
    phone,
    setPhone,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function registerTeam(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    const {
      error,
    } = await supabase
      .from(
        "tournament_registrations"
      )
      .insert({

        tournament_name:
          tournamentName,

        team_name:
          teamName,

        captain_name:
          captainName,

        uid,

        phone,
      });

    setLoading(false);

    if (error) {

      alert(error.message);

      return;
    }

    alert(
      "REGISTRATION SENT"
    );

    setTournamentName("");

    setTeamName("");

    setCaptainName("");

    setUid("");

    setPhone("");
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
            mb-14
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

            TOURNAMENT REGISTER

          </h1>

        </div>

        <form
          onSubmit={
            registerTeam
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
              TOURNAMENT NAME
            "
            value={
              tournamentName
            }
            onChange={(e) =>
              setTournamentName(
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
              CAPTAIN NAME
            "
            value={
              captainName
            }
            onChange={(e) =>
              setCaptainName(
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
              UID
            "
            value={uid}
            onChange={(e) =>
              setUid(
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
            placeholder="
              PHONE
            "
            value={phone}
            onChange={(e) =>
              setPhone(
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
              ? "REGISTERING..."
              : "REGISTER NOW"}

          </button>

        </form>

      </div>

    </main>
  );
}