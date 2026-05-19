"use client";

import { useState } from "react";

export default function ContactPage() {

  const [message, setMessage] =
    useState("");

  function sendMessage(
    e: React.FormEvent
  ) {
    e.preventDefault();

    alert(
      "Message sent successfully!"
    );

    setMessage("");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-24 text-white">

      <div className="w-full max-w-3xl rounded-[40px] bg-zinc-900 p-10">

        <p className="text-cyan-400">
          CONTACT SUPPORT
        </p>

        <h1 className="mt-4 text-6xl font-black">
          CONTACT US
        </h1>

        <form
          onSubmit={sendMessage}
          className="mt-10 space-y-6"
        >

          <textarea
            required
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
            placeholder="Write your message..."
            className="h-52 w-full rounded-2xl bg-black p-5 outline-none"
          />

          <button className="w-full rounded-2xl bg-cyan-500 py-4 font-black text-black">
            Send Message
          </button>

        </form>

      </div>

    </main>
  );
}