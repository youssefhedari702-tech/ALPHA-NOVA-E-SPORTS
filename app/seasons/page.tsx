"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function RoomsPage() {

  const [
    rooms,
    setRooms,
  ] = useState<any[]>([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function loadRooms() {

      const {
        data,
      } = await supabase
        .from("rooms")
        .select(`
          *,
          tournaments (
            title
          )
        `)
        .order(
          "match_number",
          {
            ascending: true,
          }
        );

      setRooms(
        data || []
      );

      setLoading(false);
    }

    loadRooms();

  }, []);

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
          max-w-6xl
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

            ROOMS

          </h1>

        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
          "
        >

          {rooms.map(
            (room) => (

              <div
                key={room.id}
                className="
                  rounded-[40px]
                  border
                  border-cyan-500/20
                  bg-zinc-900/60
                  p-8
                "
              >

                <p
                  className="
                    text-zinc-500
                  "
                >

                  {
                    room.tournaments
                      ?.title
                  }

                </p>

                <h2
                  className="
                    mt-4
                    text-4xl
                    font-black
                    text-cyan-400
                  "
                >

                  MATCH
                  {" "}
                  {
                    room.match_number
                  }

                </h2>

                <div
                  className="
                    mt-8
                    space-y-5
                  "
                >

                  <div
                    className="
                      rounded-2xl
                      bg-black/40
                      p-5
                    "
                  >

                    <p
                      className="
                        text-zinc-500
                      "
                    >

                      ROOM ID

                    </p>

                    <h3
                      className="
                        mt-3
                        text-3xl
                        font-black
                      "
                    >

                      {
                        room.room_id
                      }

                    </h3>

                  </div>

                  <div
                    className="
                      rounded-2xl
                      bg-black/40
                      p-5
                    "
                  >

                    <p
                      className="
                        text-zinc-500
                      "
                    >

                      PASSWORD

                    </p>

                    <h3
                      className="
                        mt-3
                        text-3xl
                        font-black
                      "
                    >

                      {
                        room.room_password
                      }

                    </h3>

                  </div>

                  <div
                    className="
                      rounded-2xl
                      bg-cyan-500
                      p-5
                      text-black
                    "
                  >

                    <p
                      className="
                        font-black
                      "
                    >

                      MAP

                    </p>

                    <h3
                      className="
                        mt-3
                        text-3xl
                        font-black
                      "
                    >

                      {
                        room.map
                      }

                    </h3>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </main>
  );
}