export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-zinc-900 p-6 text-white">

      <h2 className="text-3xl font-black text-cyan-400">
        ALPHA NOVA
      </h2>

      <div className="mt-10 space-y-4">

        <div className="rounded-2xl bg-black p-4">
          Dashboard
        </div>

        <div className="rounded-2xl bg-black p-4">
          Tournaments
        </div>

        <div className="rounded-2xl bg-black p-4">
          Teams
        </div>

        <div className="rounded-2xl bg-black p-4">
          Players
        </div>

        <div className="rounded-2xl bg-black p-4">
          Settings
        </div>

      </div>

    </aside>
  );
}