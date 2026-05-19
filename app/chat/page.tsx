"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Send,
} from "lucide-react";

import {
  supabase,
} from "@/lib/supabase";

export default function ChatPage() {

  const [
    username,
    setUsername,
  ] = useState("");

  const [
    avatar,
    setAvatar,
  ] = useState("");

  const [
    message,
    setMessage,
  ] = useState("");

  const [
    messages,
    setMessages,
  ] = useState<any[]>([]);

  const bottomRef =
    useRef<HTMLDivElement>(
      null
    );

  useEffect(() => {

    loadMessages();

    const channel =
      supabase
        .channel(
          "global-chat-live"
        )
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table:
              "global_chat",
          },
          (payload) => {

            setMessages(
              (prev) => [

                ...prev,

                payload.new,
              ]
            );

            setTimeout(() => {

              bottomRef.current
                ?.scrollIntoView({
                  behavior:
                    "smooth",
                });

            }, 100);
          }
        )
        .subscribe();

    return () => {

      supabase.removeChannel(
        channel
      );
    };

  }, []);

  async function loadMessages() {

    const {
      data,
    } = await supabase
      .from(
        "global_chat"
      )
      .select("*")
      .order(
        "created_at",
        {
          ascending: true,
        }
      );

    setMessages(
      data || []
    );

    setTimeout(() => {

      bottomRef.current
        ?.scrollIntoView({
          behavior:
            "smooth",
        });

    }, 100);
  }

  async function sendMessage() {

    if (
      !username ||
      !message
    ) {

      return;
    }

    await supabase
      .from(
        "global_chat"
      )
      .insert({

        username,

        avatar,

        message,
      });

    setMessage("");
  }

  return (

    <main
      className="
        flex
        min-h-screen
        flex-col
        bg-black
        text-white
      "
    >

      <div
        className="
          border-b
          border-cyan-500/20
          bg-zinc-900/60
          px-6
          py-6
        "
      >

        <h1
          className="
            text-5xl
            font-black
            text-cyan-400
          "
        >

          GLOBAL CHAT

        </h1>

      </div>

      <div
        className="
          flex-1
          overflow-y-auto
          px-6
          py-10
        "
      >

        <div
          className="
            mx-auto
            max-w-5xl
            space-y-6
          "
        >

          {messages.map(
            (msg) => (

              <div
                key={msg.id}
                className="
                  flex
                  gap-5
                "
              >

                {msg.avatar ? (

                  <img
                    src={
                      msg.avatar
                    }
                    alt={
                      msg.username
                    }
                    className="
                      h-14
                      w-14
                      rounded-full
                      border-2
                      border-cyan-400
                      object-cover
                    "
                  />

                ) : (

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-cyan-500
                      text-xl
                      font-black
                      text-black
                    "
                  >

                    {
                      msg.username
                        .charAt(0)
                    }

                  </div>

                )}

                <div
                  className="
                    flex-1
                    rounded-3xl
                    border
                    border-cyan-500/20
                    bg-zinc-900/60
                    p-5
                  "
                >

                  <h2
                    className="
                      text-xl
                      font-black
                      text-cyan-400
                    "
                  >

                    {
                      msg.username
                    }

                  </h2>

                  <p
                    className="
                      mt-3
                      text-lg
                      text-zinc-300
                    "
                  >

                    {
                      msg.message
                    }

                  </p>

                </div>

              </div>

            )
          )}

          <div
            ref={bottomRef}
          />

        </div>

      </div>

      <div
        className="
          border-t
          border-cyan-500/20
          bg-zinc-900/60
          p-6
        "
      >

        <div
          className="
            mx-auto
            max-w-5xl
            space-y-5
          "
        >

          <div
            className="
              grid
              gap-5
              md:grid-cols-2
            "
          >

            <input
              type="text"
              placeholder="
                USERNAME
              "
              value={username}
              onChange={(e) =>
                setUsername(
                  e.target.value
                )
              }
              className="
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
                AVATAR URL
              "
              value={avatar}
              onChange={(e) =>
                setAvatar(
                  e.target.value
                )
              }
              className="
                rounded-2xl
                border
                border-cyan-500/20
                bg-black/40
                px-5
                py-4
                outline-none
              "
            />

          </div>

          <div
            className="
              flex
              gap-5
            "
          >

            <input
              type="text"
              placeholder="
                TYPE MESSAGE...
              "
              value={message}
              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }
              className="
                flex-1
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
              onClick={
                sendMessage
              }
              className="
                flex
                items-center
                justify-center
                rounded-2xl
                bg-cyan-500
                px-8
                text-black
              "
            >

              <Send
                size={26}
              />

            </button>

          </div>

        </div>

      </div>

    </main>
  );
}