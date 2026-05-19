"use client";

const inventory = [
  "Elite Pass",
  "Diamond Pack",
  "Tournament Ticket",
];

export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-5xl">

        <h1 className="mb-12 text-6xl font-black text-cyan-400">
          INVENTORY
        </h1>

        <div className="space-y-6">

          {inventory.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-zinc-900 p-6"
            >

              {item}

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}