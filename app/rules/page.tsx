export default function RulesPage() {

  const rules = [

    "NO HACKING",

    "NO EMULATOR",

    "NO TEAMING",

    "BE READY BEFORE MATCH",

    "RESPECT ADMINS",

    "NO TOXICITY",

    "USE REAL UID",

    "LATE JOIN = DISQUALIFIED",
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
          max-w-5xl
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
              text-cyan-400
            "
          >

            TOURNAMENT RULES

          </h1>

        </div>

        <div
          className="
            space-y-6
          "
        >

          {rules.map(
            (
              rule,
              index
            ) => (

              <div
                key={rule}
                className="
                  flex
                  items-center
                  gap-6
                  rounded-[30px]
                  border
                  border-cyan-500/20
                  bg-zinc-900/60
                  p-8
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-cyan-500
                    font-black
                    text-black
                  "
                >

                  {index + 1}

                </div>

                <h2
                  className="
                    text-2xl
                    font-black
                  "
                >

                  {rule}

                </h2>

              </div>

            )
          )}

        </div>

      </div>

    </main>
  );
}