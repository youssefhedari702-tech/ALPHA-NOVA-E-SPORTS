"use client";

const announcements = [
  "New global tournament starts tomorrow.",
  "Servers maintenance on Sunday.",
  "Premium rewards updated.",
];

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-5xl">

        <h1 className="mb-12 text-6xl font-black text-cyan-400">
          ANNOUNCEMENTS
        </h1>

        <div className="space-y-6">

          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-8"
            >

              <p className="text-xl">
                {announcement}
              </p>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}