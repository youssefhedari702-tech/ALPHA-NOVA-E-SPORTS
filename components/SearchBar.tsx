"use client";

import { useState } from "react";

export default function SearchBar() {

  const [search, setSearch] =
    useState("");

  return (
    <div className="w-full">

      <input
        type="text"
        placeholder="Search tournaments, teams, players..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        className="w-full rounded-2xl bg-zinc-900 px-6 py-5 text-white outline-none"
      />

    </div>
  );
}