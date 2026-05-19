"use client";

import {
  useState,
} from "react";

export default function SearchPage() {

  const [
    query,
    setQuery,
  ] = useState("");

  const players = [

    "ALPHA PLAYER",
    "BROTHER KING",
    "NOVA GAMER",
    "SHADOW FF",
    "LEGEND X",
  ];

  const filteredPlayers =
    players.filter((player) =>

      player
        .toLowerCase()
        .includes(
          query.toLowerCase()
        )
    );

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

      <h1
        className="
          mb-12
          text-center
          text-6xl
          font-black
          text-cyan-400
        "
      >

        SEARCH PLAYERS

      </h1>

      <div
        className="
          mx-auto
          max-w-3xl
        "
      >

        <input
          value={query}
          onChange={(e) =>
            setQuery(
              e.target.value
            )
          }
          placeholder="Search player..."
          className="
            w-full
            rounded-3xl
            border
            border-cyan-500/20
            bg-zinc-900
            p-5
            text-xl
          "
        />

        <div
          className="
            mt-10
            space-y-6
          "
        >

          {filteredPlayers.map((player) => (

            <div
              key={player}
              className="
                rounded-3xl
                border
                border-cyan-500/20
                bg-zinc-900/60
                p-6
              "
            >

              <h2
                className="
                  text-2xl
                  font-black
                  text-cyan-400
                "
              >

                {player}

              </h2>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}