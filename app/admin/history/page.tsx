"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function AdminHistoryPage() {

  const [
    playerEmail,
    setPlayerEmail,
  ] = useState("");

  const [
    matchName,
    setMatchName,
  ] = useState("");

  const [
    map,
    setMap,
  ] = useState("BERMUDA");

  const [
    mode,
    setMode,
  ] = useState("SQUAD");

  const [
    placement,
    setPlacement,
  ] = useState("");

  const [
    kills,
    setKills,
  ] = useState("");

  const [
    booyah,
    setBooyah,
  ] = useState(false);

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
        "match_history"
      )
      .insert({

        player_email:
          playerEmail,

        match_name:
          matchName,

        map,

        mode,

        placement:
          Number(
            placement
          ),

        kills:
          Number(kills),

        booyah,
      });

    setLoading(false);

    if (error) {

      alert(
        error.message
      );

      return;
    }

    alert(
      "MATCH ADDED"
    );

    setPlayerEmail("");

    setMatchName("");

    setPlacement("");

    setKills("");

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

            ADMIN MATCH HISTORY

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
            type="email"
            required
            placeholder="
              PLAYER EMAIL
            "
            value={
              playerEmail
            }
            onChange={(e) =>
              setPlayerEmail(
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
            value={
              matchName
            }
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

          <div
            className="
              grid
              gap-5
              md:grid-cols-2
            "
          >

            <select
              value={map}
              onChange={(e) =>
                setMap(
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

              <option>
                BERMUDA
              </option>

              <option>
                PURGATORY
              </option>

              <option>
                KALAHARI
              </option>

              <option>
                ALPINE
              </option>

            </select>

            <select
              value={mode}
              onChange={(e) =>
                setMode(
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

              <option>
                SOLO
              </option>

              <option>
                DUO
              </option>

              <option>
                SQUAD
              </option>

            </select>

            <input
              type="number"
              placeholder="
                PLACEMENT
              "
              value={
                placement
              }
              onChange={(e) =>
                setPlacement(
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

          <label
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              bg-black/40
              p-5
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

            <span
              className="
                font-black
              "
            >

              BOOYAH WIN

            </span>

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
              ? "ADDING..."
              : "ADD MATCH"}

          </button>

        </form>

      </div>

    </main>
  );
}