"use client";

const apis = [
  {
    name: "Authentication API",
    status: "ONLINE",
  },
  {
    name: "Tournament API",
    status: "ONLINE",
  },
  {
    name: "Payments API",
    status: "ONLINE",
  },
];

export default function ApiStatusPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-12 text-6xl font-black text-cyan-400">
          API STATUS
        </h1>

        <div className="grid gap-8 md:grid-cols-3">

          {apis.map((api, index) => (
            <div
              key={index}
              className="rounded-3xl bg-zinc-900 p-8"
            >

              <h2 className="text-3xl font-black">
                {api.name}
              </h2>

              <p className="mt-5 text-green-400">
                {api.status}
              </p>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}