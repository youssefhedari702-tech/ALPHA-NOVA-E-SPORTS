"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function AdminNotificationsPage() {

  const [
    title,
    setTitle,
  ] = useState("");

  const [
    message,
    setMessage,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function sendNotification(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    const {
      error,
    } = await supabase
      .from(
        "notifications"
      )
      .insert({

        title,

        message,
      });

    setLoading(false);

    if (error) {

      alert(
        error.message
      );

      return;
    }

    alert(
      "NOTIFICATION SENT"
    );

    setTitle("");

    setMessage("");
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

            ADMIN NOTIFICATIONS

          </h1>

        </div>

        <form
          onSubmit={
            sendNotification
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
              TITLE
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

          <textarea
            required
            placeholder="
              MESSAGE
            "
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
            className="
              min-h-[200px]
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
              ? "SENDING..."
              : "SEND NOTIFICATION"}

          </button>

        </form>

      </div>

    </main>
  );
}