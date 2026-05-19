"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Bell,
  Flame,
  Trophy,
  User,
} from "lucide-react";

import {
  supabase,
} from "@/lib/supabase";

export default function DashboardPage() {

  const [
    user,
    setUser,
  ] = useState<any>(
    null
  );

  const [
    notifications,
    setNotifications,
  ] = useState<any[]>(
    []
  );

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function loadDashboard() {

      const {

        data: {

          user,

        },

      } = await supabase
        .auth
        .getUser();

      if (user) {

        const {
          data,
        } = await supabase
          .from("User")
          .select("*")
          .eq(
            "email",
            user.email
          )
          .single();

        setUser(data);
      }

      const {
        data:
          notificationData,
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
        )
        .limit(5);

      setNotifications(
        notificationData || []
      );

      setLoading(false);
    }

    loadDashboard();

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
            mb-14
            flex
            flex-col
            items-center
            gap-6
            rounded-[40px]
            border
            border-cyan-500/20
            bg-zinc-900/60
            p-10
            text-center
          "
        >

          {user?.avatar ? (

            <img
              src={
                user.avatar
              }
              alt="avatar"
              className="
                h-40
                w-40
                rounded-full
                border-4
                border-cyan-400
                object-cover
              "
            />

          ) : (

            <div
              className="
                flex
                h-40
                w-40
                items-center
                justify-center
                rounded-full
                bg-cyan-500
                text-6xl
                font-black
                text-black
              "
            >

              <User
                size={70}
              />

            </div>

          )}

          <div>

            <h1
              className="
                text-5xl
                font-black
                text-cyan-400
              "
            >

              {
                user?.freeFireName
              }

            </h1>

            <p
              className="
                mt-4
                text-zinc-400
              "
            >

              UID:
              {" "}
              {
                user?.uid
              }

            </p>

          </div>

        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-3
          "
        >

          <div
            className="
              rounded-[40px]
              border
              border-cyan-500/20
              bg-zinc-900/60
              p-10
              text-center
            "
          >

            <Trophy
              size={50}
              className="
                mx-auto
                text-yellow-400
              "
            />

            <h2
              className="
                mt-6
                text-2xl
                font-black
              "
            >

              TOURNAMENTS

            </h2>

            <div
              className="
                mt-5
                text-6xl
                font-black
                text-cyan-400
              "
            >

              12

            </div>

          </div>

          <div
            className="
              rounded-[40px]
              border
              border-cyan-500/20
              bg-zinc-900/60
              p-10
              text-center
            "
          >

            <Flame
              size={50}
              className="
                mx-auto
                text-red-500
              "
            />

            <h2
              className="
                mt-6
                text-2xl
                font-black
              "
            >

              TOTAL KILLS

            </h2>

            <div
              className="
                mt-5
                text-6xl
                font-black
                text-cyan-400
              "
            >

              245

            </div>

          </div>

          <div
            className="
              rounded-[40px]
              border
              border-cyan-500/20
              bg-zinc-900/60
              p-10
              text-center
            "
          >

            <Bell
              size={50}
              className="
                mx-auto
                text-cyan-400
              "
            />

            <h2
              className="
                mt-6
                text-2xl
                font-black
              "
            >

              NOTIFICATIONS

            </h2>

            <div
              className="
                mt-5
                text-6xl
                font-black
                text-cyan-400
              "
            >

              {
                notifications.length
              }

            </div>

          </div>

        </div>

        <div
          className="
            mt-14
            rounded-[40px]
            border
            border-cyan-500/20
            bg-zinc-900/60
            p-10
          "
        >

          <h2
            className="
              text-4xl
              font-black
              text-cyan-400
            "
          >

            LATEST NOTIFICATIONS

          </h2>

          <div
            className="
              mt-10
              space-y-6
            "
          >

            {notifications.map(
              (
                notification
              ) => (

                <div
                  key={
                    notification.id
                  }
                  className="
                    rounded-3xl
                    bg-black/40
                    p-6
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <h3
                      className="
                        text-2xl
                        font-black
                      "
                    >

                      {
                        notification.title
                      }

                    </h3>

                    <div
                      className="
                        rounded-full
                        bg-cyan-500
                        px-4
                        py-2
                        text-sm
                        font-black
                        text-black
                      "
                    >

                      {
                        notification.type
                      }

                    </div>

                  </div>

                  <p
                    className="
                      mt-4
                      text-zinc-400
                    "
                  >

                    {
                      notification.message
                    }

                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </main>
  );
}