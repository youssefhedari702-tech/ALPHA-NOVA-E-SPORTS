"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function AdminPlayersPage() {

  const [
    name,
    setName,
  ] = useState("");

  const [
    avatar,
    setAvatar,
  ] = useState("");

  const [
    uid,
    setUid,
  ] = useState("");

  const [
    team,
    setTeam,
  ] = useState("");

  const [
    country,
    setCountry,
  ] = useState("");

  const [
    role,
    setRole,
  ] = useState("RUSHER");

  const [
    kd,
    setKd,
  ] = useState("");

  const [
    kills,
    setKills,
  ] = useState("");

  const [
    wins,
    setWins,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function createPlayer(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    const {
      error,
    } = await supabase
      .from("players")
      .insert({

        name,

        avatar,

        uid,

        team,

        country,

        role,

        kd,

        kills:
          Number(kills),

        wins:
          Number(wins),
      });

    setLoading(false);

    if (error) {

      alert(error.message);

      return;
    }

    alert(
      "PLAYER CREATED"
    );

    setName("");

    setAvatar("");

    setUid("");

    setTeam("");

    setCountry("");

    setRole("RUSHER");

    setKd("");

    setKills("");

    setWins("");
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

            PLAYERS ADMIN

          </h1>

        </div>

        <form
          onSubmit={
            createPlayer
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
              PLAYER NAME
            "
            value={name}
            onChange={(e) =>
              setName(
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
              AVATAR URL
            "
            value={avatar}
            onChange={(e) =>
              setAvatar(
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

          <div
            className="
              grid
              gap-5
              md:grid-cols-2
            "
          >

            <input
              type="text"
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
                TEAM
              "
              value={team}
              onChange={(e) =>
                setTeam(
                  e.target.value
                )
              }
              className="
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
                COUNTRY
              "
              value={country}
              onChange={(e) =>
                setCountry(
                  e.target.value
                )
              }
              className="
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
              value={role}
              onChange={(e) =>
                setRole(
                  e.target.value
                )
              }
              className="
                rounded-2xl
                border
                border-cyan-500/20
                bg-black/40
                px-5
                py-4
                outline-none
              "
            >

              <option value="RUSHER">
                RUSHER
              </option>

              <option value="SNIPER">
                SNIPER
              </option>

              <option value="SUPPORT">
                SUPPORT
              </option>

              <option value="IGL">
                IGL
              </option>

              <option value="FRAGGER">
                FRAGGER
              </option>

            </select>

            <input
              type="text"
              placeholder="
                KD
              "
              value={kd}
              onChange={(e) =>
                setKd(
                  e.target.value
                )
              }
              className="
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
                rounded-2xl
                border
                border-cyan-500/20
                bg-black/40
                px-5
                py-4
                outline-none
              "
            />

          </div>

          <input
            type="number"
            placeholder="
              WINS
            "
            value={wins}
            onChange={(e) =>
              setWins(
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
              ? "CREATING..."
              : "CREATE PLAYER"}

          </button>

        </form>

      </div>

    </main>
  );
}