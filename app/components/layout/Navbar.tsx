"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-cyan-500/20 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-black text-cyan-400">
          ALPHA NOVA
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="text-cyan-400 md:hidden"
        >
          ☰
        </button>

        <div className="hidden gap-6 md:flex">
          <a href="/" className="hover:text-cyan-400">
            Home
          </a>

          <a href="/dashboard" className="hover:text-cyan-400">
            Dashboard
          </a>

          <a href="/tournaments" className="hover:text-cyan-400">
            Tournaments
          </a>

          <a href="/clans" className="hover:text-cyan-400">
            Clans
          </a>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-cyan-500/20 bg-zinc-950 px-6 py-4 md:hidden">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/tournaments">Tournaments</a>
          <a href="/clans">Clans</a>
        </div>
      )}
    </nav>
  );
}