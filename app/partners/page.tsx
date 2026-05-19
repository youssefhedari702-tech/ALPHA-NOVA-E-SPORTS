"use client";

const partners = [
  "NVIDIA",
  "RAZER",
  "RED BULL",
  "HYPERX",
];

export default function PartnersPage() {
  return (
    <main className="bg-black p-6 text-white min-h-screen">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-12 text-6xl font-black text-cyan-400">
          PARTNERS
        </h1>

        <div className="grid gap-8 md:grid-cols-2">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-3xl bg-zinc-900 p-16 text-4xl font-black"
            >

              {partner}

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}