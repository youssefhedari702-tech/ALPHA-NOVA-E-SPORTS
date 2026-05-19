const clans = [
  {
    name: "ALPHA KINGS",
  },
  {
    name: "NOVA LEGENDS",
  },
];

export default function VerifyClansPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-6xl">

        <p className="text-cyan-400">
          CLAN VERIFICATION
        </p>

        <h1 className="mt-4 text-7xl font-black">
          VERIFY CLANS
        </h1>

        <div className="mt-16 space-y-6">

          {clans.map((clan, index) => (
            <div
              key={index}
              className="rounded-[40px] bg-zinc-900 p-8"
            >

              <div className="flex flex-col items-start justify-between gap-6 xl:flex-row xl:items-center">

                <h2 className="text-4xl font-black">
                  {clan.name}
                </h2>

                <button className="rounded-2xl bg-cyan-500 px-8 py-4 font-black text-black">
                  Verify Clan
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}