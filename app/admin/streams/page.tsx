"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function AdminStreamsPage() {

  const [
    title,
    setTitle,
  ] = useState("");

  const [
    thumbnail,
    setThumbnail,
  ] = useState("");

  const [
    streamer,
    setStreamer,
  ] = useState("");

  const [
    youtubeUrl,
    setYoutubeUrl,
  ] = useState("");

  const [
    viewers,
    setViewers,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function createStream(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    const {
      error,
    } = await supabase
      .from(
        "live_streams"
      )
      .insert({

        title,

        thumbnail,

        streamer,

        youtube_url:
          youtubeUrl,

        viewers:
          Number(viewers),
      });

    setLoading(false);

    if (error) {

      alert(error.message);

      return;
    }

    alert(
      "STREAM CREATED"
    );

    setTitle("");

    setThumbnail("");

    setStreamer("");

    setYoutubeUrl("");

    setViewers("");
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
          max-w-3xl
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
              text-6xl
              font-black
              text-cyan-400
            "
          >

            STREAMS ADMIN

          </h1>

        </div>

        <form
          onSubmit={
            createStream
          }
          className="
            space-y-8
            rounded-[40px]
            border
            border-cyan-500/20
            bg-zinc-900/60
            p-10
          "
        >

          <input
            type="text"
            required
            placeholder="
              STREAM TITLE
            "
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            className="
              w-full
              rounded-2xl
              border
              border-cyan-500/20
              bg-black/40
              px-5
              py-4
              outline-none
            "
          />

          <input
            type="text"
            placeholder="
              THUMBNAIL URL
            "
            value={thumbnail}
            onChange={(e) =>
              setThumbnail(
                e.target.value
              )
            }
            className="
              w-full
              rounded-2xl
              border
              border-cyan-500/20
              bg-black/40
              px-5
              py-4
              outline-none
            "
          />

          <input
            type="text"
            placeholder="
              STREAMER NAME
            "
            value={streamer}
            onChange={(e) =>
              setStreamer(
                e.target.value
              )
            }
            className="
              w-full
              rounded-2xl
              border
              border-cyan-500/20
              bg-black/40
              px-5
              py-4
              outline-none
            "
          />

          <input
            type="text"
            required
            placeholder="
              YOUTUBE URL
            "
            value={youtubeUrl}
            onChange={(e) =>
              setYoutubeUrl(
                e.target.value
              )
            }
            className="
              w-full
              rounded-2xl
              border
              border-cyan-500/20
              bg-black/40
              px-5
              py-4
              outline-none
            "
          />

          <input
            type="number"
            placeholder="
              VIEWERS
            "
            value={viewers}
            onChange={(e) =>
              setViewers(
                e.target.value
              )
            }
            className="
              w-full
              rounded-2xl
              border
              border-cyan-500/20
              bg-black/40
              px-5
              py-4
              outline-none
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              rounded-2xl
              bg-cyan-500
              py-5
              text-xl
              font-black
              text-black
            "
          >

            {loading
              ? "CREATING..."
              : "CREATE STREAM"}

          </button>

        </form>

      </div>

    </main>
  );
}