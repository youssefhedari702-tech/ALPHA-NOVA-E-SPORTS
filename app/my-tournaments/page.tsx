"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  supabase,
} from "@/lib/supabase";

export default function MyTournamentsPage() {

  const router =
    useRouter();

  const [
    tournaments,
    setTournaments,
  ] = useState<any[]>([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function getMyTournaments() {

      const {
        data: userData,
      } = await supabase
        .auth
        .getUser();

      const user =
        userData.user;

      if (!user) {

        router.push("/login");

        return;
      }

      const {
        data,
        error,
      } = await supabase
        .from(
          "tournament_players"
        )
        .select(`
          id,
          tournaments (
            id,
            title,
            description,
            prize_pool,
            map,
            mode,
            status
          )
        `)
        .eq(
          "player_id",
          user.id
        );

      if (!error && data) {

        setTournaments(data);
      }

      setLoading(false);
    }

    getMyTournaments();

  }, [router]);

  if (loading) {

    return (

      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-black
          text-4xl
          font-black
          text-cyan-400
        "
      >

        LOADING...

      </main>
    );
  }

  return (

    <main
      className="
        min-h-screen
        bg-black
        px-6
        py-32
        text-white
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
        "
      >

        <h1
          className="
            mb-12
            text-6xl
            font-black
            text-cyan-400
          "
        >

          MY TOURNAMENTS

        </h1>

        {tournaments.length === 0 && (

          <div
            className="
              rounded-3xl
              border
              border-cyan-500/20
              bg-zinc-900/60
              p-10
              text-center
              text-2xl
              font-bold
            "
          >

            YOU DID NOT JOIN ANY TOURNAMENTS

          </div>

        )}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {tournaments.map((item) => {

            const tournament =
              item.tournaments;

            return (

              <div
                key={tournament.id}
                className="
                  rounded-3xl
                  border
                  border-cyan-500/20
                  bg-zinc-900/60
                  p-8
                "
              >

                <h2
                  className="
                    text-3xl
                    font-black
                    text-cyan-400
                  "
                >

                  {tournament.title}

                </h2>

                <p
                  className="
                    mt-4
                    text-zinc-400
                  "
                >

                  {tournament.description}

                </p>

                <div
                  className="
                    mt-6
                    space-y-3
                  "
                >

                  <p>

                    <span
                      className="
                        font-black
                        text-green-400
                      "
                    >

                      Prize:

                    </span>

                    {" "}

                    {tournament.prize_pool}

                  </p>

                  <p>

                    <span
                      className="
                        font-black
                        text-yellow-400
                      "
                    >

                      Map:

                    </span>

                    {" "}

                    {tournament.map}

                  </p>

                  <p>

                    <span
                      className="
                        font-black
                        text-pink-400
                      "
                    >

                      Mode:

                    </span>

                    {" "}

                    {tournament.mode}

                  </p>

                  <p>

                    <span
                      className="
                        font-black
                        text-red-400
                      "
                    >

                      Status:

                    </span>

                    {" "}

                    {tournament.status}

                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </main>
  );
}