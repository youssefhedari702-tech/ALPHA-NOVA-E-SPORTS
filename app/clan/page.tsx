const members = [
  "ALPHA X",
  "NOVA KING",
  "SHADOW",
  "DRAGON",
];

export default function ClanPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-6xl">

        <div className="rounded-[40px] bg-zinc-900 p-10">

          <div className="flex flex-col gap-10 xl:flex-row xl:items-center">

            <div className="h-40 w-40 rounded-full bg-black"></div>

            <div>

              <p className="text-cyan-400">
                VERIFIED CLAN
              </p>

              <h1 className="mt-4 text-7xl font-black">
                ALPHA KINGS
              </h1>

              <p className="mt-6 text-zinc-400">
                Professional esports clan.
              </p>

            </div>

          </div>

        </div>

        <div className="mt-16 rounded-[40px] bg-zinc-900 p-10">

          <h2 className="text-5xl font-black">
            MEMBERS
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {members.map(
              (
                member,
                index
              ) => (
                <div
                  key={index}
                  className="rounded-3xl bg-black p-6"
                >

                  <h3 className="text-3xl font-black">
                    {member}
                  </h3>

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </main>
  );
}