import {
  Radio,
  Trophy,
} from "lucide-react";

export default function LiveMatchesPage() {

  const matches = [

    {
      teamA: "ALPHA",
      teamB: "NOVA",
      map: "BERMUDA",
    },

    {
      teamA: "DRAGONS",
      teamB: "LEGENDS",
      map: "PURGATORY",
    },

    {
      teamA: "TITANS",
      teamB: "WARRIORS",
      map: "KALAHARI",
    },
  ];

  return (

    <main
      className="
        min-h-screen
        bg-black
        px-6
        py-24
        text-white
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
        "
      >

        <div
          className="
            mb-16
            text-center
          "
        >

          <h1
            className="
              text-7xl
              font-black
              text-red-500
            "
          >

            LIVE MATCHES

          </h1>

        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
          "
        >

          {matches.map(
            (
              match
            ) => (

              <div
                key={
                  match.teamA
                }
                className="
                  rounded-[40px]
                  border
                  border-red-500/20
                  bg-zinc-900/60
                  p-10
                "
              >

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      text-red-400
                    "
                  >

                    <Radio />

                    LIVE NOW

                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      text-yellow-400
                    "
                  >

                    <Trophy />

                    TOURNAMENT

                  </div>

                </div>

                <div
                  className="
                    mt-12
                    text-center
                  "
                >

                  <h2
                    className="
                      text-5xl
                      font-black
                    "
                  >

                    {
                      match.teamA
                    }

                  </h2>

                  <div
                    className="
                      my-8
                      text-3xl
                      text-cyan-400
                    "
                  >

                    VS

                  </div>

                  <h2
                    className="
                      text-5xl
                      font-black
                    "
                  >

                    {
                      match.teamB
                    }

                  </h2>

                  <p
                    className="
                      mt-10
                      text-zinc-400
                    "
                  >

                    MAP:
                    {" "}
                    {
                      match.map
                    }

                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </main>
  );
}