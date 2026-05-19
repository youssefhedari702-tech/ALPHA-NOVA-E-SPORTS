"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Radio,
} from "lucide-react";

import {
  supabase,
} from "@/lib/supabase";

export default function RoomsPage() {

  const [
    rooms,
    setRooms,
  ] = useState<any[]>(
    []
  );

  async function loadRooms() {

    const {
      data,
    } = await supabase
      .from("rooms")
      .select("*")
      .order(
        "created_at",
        {
          ascending: false,
        }
      );

    setRooms(
      data || []
    );
  }

  useEffect(() => {

    loadRooms();

    const channel =
      supabase
        .channel(
          "rooms-live"
        )
        .on(

          "postgres_changes",

          {

            event: "*",

            schema: "public",

            table:
              "rooms",
          },

          () => {

            loadRooms();
          }
        )
        .subscribe();

    return () => {

      supabase.removeChannel(
        channel
      );
    };

  }, []);

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

            LIVE ROOMS

          </h1>

        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-3
          "
        >

          {rooms.map(
            (
              room
            ) => (

              <div
                key={room.id}
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
                    gap-3
                    text-red-400
                  "
                >

                  <Radio />

                  LIVE ROOM

                </div>

                <h2
                  className="
                    mt-8
                    text-4xl
                    font-black
                  "
                >

                  {
                    room.title
                  }

                </h2>

                <div
                  className="
                    mt-10
                    space-y-4
                  "
                >

                  <div>

                    <p
                      className="
                        text-zinc-500
                      "
                    >

                      ROOM ID

                    </p>

                    <h3
                      className="
                        text-3xl
                        font-black
                        text-cyan-400
                      "
                    >

                      {
                        room.room_id
                      }

                    </h3>

                  </div>

                  <div>

                    <p
                      className="
                        text-zinc-500
                      "
                    >

                      PASSWORD

                    </p>

                    <h3
                      className="
                        text-3xl
                        font-black
                        text-green-400
                      "
                    >

                      {
                        room.password
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