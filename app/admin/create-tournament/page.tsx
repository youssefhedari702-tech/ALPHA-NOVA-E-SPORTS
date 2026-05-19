"use client";

import {
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  supabase,
} from "@/lib/supabase";

export default function CreateTournamentPage() {

  const router =
    useRouter();

  const [
    title,
    setTitle,
  ] = useState("");

  const [
    prizePool,
    setPrizePool,
  ] = useState("");

  const [
    mode,
    setMode,
  ] = useState("");

  const [
    map,
    setMap,
  ] = useState("");

  const [
    streamUrl,
    setStreamUrl,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function createTournament(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    const {
      error,
    } = await supabase
      .from("tournaments")
      .insert({

        title,

        prize_pool:
          Number(
            prizePool
          ),

        mode,

        map,

        stream_url:
          streamUrl,
      });

    setLoading(false);

    if (error) {

      alert(
        error.message
      );

      return;
    }

    alert(
      "TOURNAMENT CREATED"
    );

    router.push(
      "/tournaments"
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

            CREATE TOURNAMENT

          </h1>

          <p
            className="
              mt-5
              text-zinc-400
            "
          >

            ALPHA NOVA
            ESPORTS PANEL

          </p>

        </div>

        <form
          onSubmit={
            createTournament
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

          <div>

            <label
              className="
                mb-3
                block
                text-lg
                font-black
              "
            >

              TOURNAMENT TITLE

            </label>

            <input
              type="text"
              required
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              placeholder="
                ALPHA NOVA S1
              "
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

          </div>

          <div>

            <label
              className="
                mb-3
                block
                text-lg
                font-black
              "
            >

              PRIZE POOL

            </label>

            <input
              type="number"
              required
              value={prizePool}
              onChange={(e) =>
                setPrizePool(
                  e.target.value
                )
              }
              placeholder="
                1000
              "
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

          </div>

          <div>

            <label
              className="
                mb-3
                block
                text-lg
                font-black
              "
            >

              MODE

            </label>

            <select
              required
              value={mode}
              onChange={(e) =>
                setMode(
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

              <option value="">
                SELECT MODE
              </option>

              <option value="SOLO">
                SOLO
              </option>

              <option value="DUO">
                DUO
              </option>

              <option value="SQUAD">
                SQUAD
              </option>

            </select>

          </div>

          <div>

            <label
              className="
                mb-3
                block
                text-lg
                font-black
              "
            >

              MAP

            </label>

            <select
              required
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
                border-cyan-500/20
                bg-black/40
                px-5
                py-4
                outline-none
              "
            >

              <option value="">
                SELECT MAP
              </option>

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

          </div>

          <div>

            <label
              className="
                mb-3
                block
                text-lg
                font-black
              "
            >

              STREAM URL

            </label>

            <input
              type="text"
              value={streamUrl}
              onChange={(e) =>
                setStreamUrl(
                  e.target.value
                )
              }
              placeholder="
                https://youtube.com/...
              "
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
              transition
              hover:scale-[1.02]
              disabled:opacity-50
            "
          >

            {loading
              ? "CREATING..."
              : "CREATE TOURNAMENT"}

          </button>

        </form>

      </div>

    </main>
  );
}