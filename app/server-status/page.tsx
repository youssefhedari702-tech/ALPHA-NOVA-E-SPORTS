"use client";

const servers = [
  {
    name: "Europe",
    status: "Online",
  },
  {
    name: "Asia",
    status: "Online",
  },
  {
    name: "USA",
    status: "Maintenance",
  },
];

export default function ServerStatusPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-5xl">

        <h1 className="mb-10 text-5xl font-black text-cyan-400">
          SERVER STATUS
        </h1>

        <div className="space-y-5">

          {servers.map((server, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-3xl border border-cyan-500/20 bg-zinc-900 p-6"
            >

              <h2 className="text-2xl font-black">
                {server.name}
              </h2>

              <p className="text-cyan-400">
                {server.status}
              </p>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}