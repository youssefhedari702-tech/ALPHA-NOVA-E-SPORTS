"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Bell,
} from "lucide-react";

import {
  supabase,
} from "@/lib/supabase";

export default function NotificationsPage() {

  const [
    notifications,
    setNotifications,
  ] = useState<any[]>(
    []
  );

  async function loadNotifications() {

    const {
      data,
    } = await supabase
      .from(
        "notifications"
      )
      .select("*")
      .order(
        "created_at",
        {
          ascending: false,
        }
      );

    setNotifications(
      data || []
    );
  }

  useEffect(() => {

    loadNotifications();

    const channel =
      supabase
        .channel(
          "notifications-live"
        )
        .on(

          "postgres_changes",

          {

            event: "*",

            schema: "public",

            table:
              "notifications",
          },

          () => {

            loadNotifications();
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
          max-w-5xl
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

            NOTIFICATIONS

          </h1>

        </div>

        <div
          className="
            space-y-8
          "
        >

          {notifications.map(
            (
              item
            ) => (

              <div
                key={item.id}
                className="
                  rounded-[40px]
                  border
                  border-cyan-500/20
                  bg-zinc-900/60
                  p-8
                "
              >

                <div
                  className="
                    flex
                    items-start
                    gap-5
                  "
                >

                  <div
                    className="
                      rounded-full
                      bg-cyan-500/20
                      p-4
                      text-cyan-400
                    "
                  >

                    <Bell />

                  </div>

                  <div>

                    <h2
                      className="
                        text-3xl
                        font-black
                      "
                    >

                      {
                        item.title
                      }

                    </h2>

                    <p
                      className="
                        mt-4
                        text-zinc-400
                      "
                    >

                      {
                        item.message
                      }

                    </p>

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