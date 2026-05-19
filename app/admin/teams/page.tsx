"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function AdminTeamsPage() {

  const [
    name,
    setName,
  ] = useState("");

  const [
    logo,
    setLogo,
  ] = useState("");

  const [
    bio,
    setBio,
  ] = useState("");

  const [
    country,
    setCountry,
  ] = useState("");

  const [
    captain,
    setCaptain,
  ] = useState("");

  const [
    wins,
    setWins,
  ] = useState("");

  const [
    kills,
    setKills,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function createTeam(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    const {
      error,
    } = await supabase
      .from("teams")
      .insert({

        name,

        logo,

        bio,

        country,

        captain,

        wins:
          Number(wins),

        kills:
          Number(kills),
      });

    setLoading(false);

    if (error) {

      alert(error.message);

      return;
    }

    alert(
      "TEAM CREATED"
    );

    setName("");

    setLogo("");

    setBio("");

    setCountry("");

    setCaptain("");

    setWins("");

    setKills("");
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

            TEAMS ADMIN

          </h1>

        </div>

        <form
          onSubmit={
            createTeam
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
              LOGO URL
            "
            value={logo}
            onChange={(e) =>
              setLogo(
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

          <textarea
            rows={5}
            placeholder="
              TEAM BIO
            "
            value={bio}
            onChange={(e) =>
              setBio(
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

            <input
              type="text"
              placeholder="
                CAPTAIN
              "
              value={captain}
              onChange={(e) =>
                setCaptain(
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
                WINS
              "
              value={wins}
              onChange={(e) =>
                setWins(
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
              : "CREATE TEAM"}

          </button>

        </form>

      </div>

    </main>
  );
}