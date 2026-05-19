"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Play,
  Eye,
} from "lucide-react";

import {
  supabase,
} from "@/lib/supabase";

export default function StreamsPage() {

  const [
    streams,
    setStreams,
  ] = useState<any[]>([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function loadStreams() {

      const {
        data,
      } = await supabase
        .from(
          "live_streams"
        )
        .select("*")
        .order(
          "created_at",
          {
            ascending: false,
          }
        );

      setStreams(
        data || []
      );

      setLoading(false);
    }

    loadStreams();

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
              text-cyan-400
            "
          >

            LIVE STREAMS

          </h1>

        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {streams.map(
            (stream) => (

              <div
                key={stream.id}
                className="
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-cyan-500/20
                  bg-zinc-900/60
                "
              >

                <div
                  className="
                    relative
                    h-72
                    bg-black
                  "
                >

                  {stream.thumbnail ? (

                    <img
                      src={
                        stream.thumbnail
                      }
                      alt={
                        stream.title
                      }
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />

                  ) : (

                    <div
                      className="
                        flex
                        h-full
                        items-center
                        justify-center
                        bg-zinc-950
                      "
                    >

                      <Play
                        size={80}
                        className="
                          text-cyan-400
                        "
                      />

                    </div>

                  )}

                  <div
                    className="
                      absolute
                      left-6
                      top-6
                      rounded-full
                      bg-red-500
                      px-4
                      py-2
                      text-sm
                      font-black
                    "
                  >

                    LIVE

                  </div>

                </div>

                <div
                  className="
                    p-8
                  "
                >

                  <h2
                    className="
                      text-3xl
                      font-black
                    "
                  >

                    {
                      stream.title
                    }

                  </h2>

                  <p
                    className="
                      mt-4
                      text-zinc-500
                    "
                  >

                    STREAMER:
                    {" "}
                    {
                      stream.streamer
                    }

                  </p>

                  <div
                    className="
                      mt-8
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

                      <Eye
                        size={22}
                      />

                      <span
                        className="
                          text-xl
                          font-black
                        "
                      >

                        {
                          stream.viewers
                        }

                      </span>

                    </div>

                    <a
                      href={
                        stream.youtube_url
                      }
                      target="_blank"
                      className="
                        rounded-2xl
                        bg-cyan-500
                        px-6
                        py-4
                        font-black
                        text-black
                      "
                    >

                      WATCH

                    </a>

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