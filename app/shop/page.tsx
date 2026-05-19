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
    message,
    setMessage,
  ] = useState("");

  const [
    messages,
    setMessages,
  ] = useState<any[]>([]);

  const messagesEndRef =
    useRef<HTMLDivElement>(
      null
    );

  useEffect(() => {

    loadMessages();

    const channel =
      supabase
        .channel(
          "chat-room"
        )
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table:
              "chat_messages",
          },
          (payload) => {

            setMessages(
              (prev) => [

                ...prev,

                payload.new,
              ]
            );
          }
        )
        .subscribe();

    return () => {

      supabase.removeChannel(
        channel
      );
    };

  }, []);

  useEffect(() => {

    messagesEndRef.current
      ?.scrollIntoView({
        behavior:
          "smooth",
      });

  }, [messages]);

  async function loadMessages() {

    const {
      data,
    } = await supabase
      .from(
        "chat_messages"
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
        "chat_messages"
      )
      .insert({

        username,

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
          border-cyan-500/10
          bg-zinc-900/60
          px-6
          py-6
        "
      >

        <h1
          className="
            text-center
            text-5xl
            font-black
            text-cyan-400
          "
        >

          LIVE CHAT

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
                  rounded-[30px]
                  border
                  border-cyan-500/10
                  bg-zinc-900/60
                  p-6
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-4
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

                  <div>

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
                        mt-2
                        text-zinc-300
                      "
                    >

                      {
                        msg.message
                      }

                    </p>

                  </div>

                </div>

              </div>

            )
          )}

          <div
            ref={
              messagesEndRef
            }
          />

        </div>

      </div>

      <div
        className="
          border-t
          border-cyan-500/10
          bg-zinc-900/60
          p-6
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-5xl
            flex-col
            gap-4
            md:flex-row
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
              md:w-64
            "
          />

          <input
            type="text"
            placeholder="
              MESSAGE
            "
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
            onKeyDown={(e) => {

              if (
                e.key ===
                "Enter"
              ) {
                sendMessage();
              }

            }}
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
              gap-3
              rounded-2xl
              bg-cyan-500
              px-8
              py-4
              font-black
              text-black
            "
          >

            <Send
              size={20}
            />

            SEND

          </button>

        </div>

      </div>

    </main>
  );
}