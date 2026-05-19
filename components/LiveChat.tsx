"use client";

import { useState } from "react";

const initialMessages = [
  {
    user: "ALPHA KING",
    text: "GG 🔥",
  },
  {
    user: "NOVA X",
    text: "Let's go!",
  },
];

export default function LiveChat() {
  const [messages, setMessages] =
    useState(initialMessages);

  const [message, setMessage] =
    useState("");

  function sendMessage() {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        user: "YOU",
        text: message,
      },
    ]);

    setMessage("");
  }

  return (
    <div className="rounded-[40px] bg-zinc-900 p-8">

      <h2 className="text-4xl font-black text-cyan-400">
        LIVE CHAT
      </h2>

      <div className="mt-8 h-[400px] space-y-4 overflow-y-auto rounded-3xl bg-black p-6">

        {messages.map((msg, index) => (
          <div
            key={index}
            className="rounded-2xl bg-zinc-900 p-4"
          >

            <p className="font-black text-cyan-400">
              {msg.user}
            </p>

            <p className="mt-2 text-zinc-300">
              {msg.text}
            </p>

          </div>
        ))}

      </div>

      <div className="mt-6 flex gap-4">

        <input
          type="text"
          placeholder="Type message..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          className="w-full rounded-2xl bg-black px-5 py-4 outline-none"
        />

        <button
          onClick={sendMessage}
          className="rounded-2xl bg-cyan-500 px-8 font-black text-black"
        >
          SEND
        </button>

      </div>

    </div>
  );
}