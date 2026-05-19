"use client";

import { useState } from "react";

export default function CreateTournamentPage() {

  const [title, setTitle] =
    useState("");

  const [prizePool, setPrizePool] =
    useState("");

  const [mode, setMode] =
    useState("");

  const [map, setMap] =
    useState("");

  async function handleCreate(
    e: React.FormEvent
  ) {

    e.preventDefault();

    const response =
      await fetch(
        "/api/tournaments",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            title,
            prizePool,
            mode,
            map,
          }),
        }
      );

    const data =
      await response.json();

    if (!data.success) {

      alert(
        data.message
      );

      return;
    }

    alert(
      "Tournament created"
    );
  }

  return (

    <main className="min-h-screen bg-black p-10 text-white">

      <h1 className="text-5xl font-black text-cyan-400">

        CREATE TOURNAMENT

      </h1>

      <form
        onSubmit={handleCreate}
        className="mt-10 max-w-xl space-y-4"
      >

        <input
          type="text"
          placeholder="Tournament Title"
          value={title}
          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <input
          type="text"
          placeholder="Prize Pool"
          value={prizePool}
          onChange={(e) =>
            setPrizePool(
              e.target.value
            )
          }
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <input
          type="text"
          placeholder="Mode"
          value={mode}
          onChange={(e) =>
            setMode(
              e.target.value
            )
          }
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <input
          type="text"
          placeholder="Map"
          value={map}
          onChange={(e) =>
            setMap(
              e.target.value
            )
          }
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <button
          className="w-full rounded-2xl bg-cyan-500 p-4 font-black text-black"
        >

          CREATE

        </button>

      </form>

    </main>
  );
}