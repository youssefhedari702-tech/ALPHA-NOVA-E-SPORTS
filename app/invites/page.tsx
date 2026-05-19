"use client";

const invites = [
  "ALPHA Clan invited you",
  "Tournament invitation received",
  "Friend request from SHADOW",
];

export default function InvitesPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-5xl">

        <h1 className="mb-10 text-5xl font-black text-cyan-400">
          INVITES
        </h1>

        <div className="space-y-5">

          {invites.map((invite, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-3xl border border-cyan-500/20 bg-zinc-900 p-6"
            >

              <p>{invite}</p>

              <div className="flex gap-3">

                <button className="rounded-2xl bg-cyan-500 px-5 py-3 font-black text-black">
                  Accept
                </button>

                <button className="rounded-2xl bg-red-500 px-5 py-3 font-black">
                  Decline
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}