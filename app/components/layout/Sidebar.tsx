import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-cyan-500/20 bg-zinc-950 p-6 text-white">

      <h1 className="text-3xl font-black text-cyan-400">
        ALPHA NOVA
      </h1>

      <p className="mt-2 text-sm text-zinc-500">
        E-SPORTS PLATFORM
      </p>

      <nav className="mt-10 flex flex-col gap-4">

        <Link
          href="/"
          className="rounded-2xl px-4 py-3 transition hover:bg-cyan-500 hover:text-black"
        >
          Home
        </Link>

        <Link
          href="/dashboard"
          className="rounded-2xl bg-cyan-500 px-4 py-3 font-bold text-black"
        >
          Dashboard
        </Link>

        <Link
          href="/tournaments"
          className="rounded-2xl px-4 py-3 transition hover:bg-cyan-500 hover:text-black"
        >
          Tournaments
        </Link>

        <Link
          href="/register"
          className="rounded-2xl px-4 py-3 transition hover:bg-cyan-500 hover:text-black"
        >
          Register
        </Link>

      </nav>

      <div className="mt-16 rounded-3xl border border-cyan-500/20 bg-zinc-900 p-5">
        <h2 className="text-lg font-bold text-cyan-400">
          PRO STATUS
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Manage tournaments like a real esports platform.
        </p>

        <button className="mt-5 w-full rounded-2xl bg-cyan-500 py-3 font-bold text-black transition hover:scale-105">
          Upgrade
        </button>
      </div>

    </aside>
  );
}