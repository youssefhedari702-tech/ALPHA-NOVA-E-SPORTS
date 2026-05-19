"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function ProfilePage() {

  const [
    user,
    setUser,
  ] = useState<any>(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function loadUser() {

      try {

        const {
          data: authData,
        } = await supabase.auth.getUser();

        if (!authData.user) {

          setLoading(false);
          return;
        }

        const {
          data,
          error,
        } = await supabase

          .from("User")

          .select("*")

          .eq(
            "id",
            authData.user.id
          )

          .maybeSingle();

        if (error) {

          console.log(error);
        }

        setUser(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    }

    loadUser();

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
          text-white
        "
      >

        LOADING...

      </main>
    );
  }

  if (!user) {

    return (

      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-black
          text-white
        "
      >

        USER NOT FOUND

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
          max-w-4xl
          rounded-[40px]
          border
          border-cyan-500/20
          bg-zinc-900/60
          p-10
        "
      >

        <h1
          className="
            mb-10
            text-5xl
            font-black
            text-cyan-400
          "
        >
          PROFILE
        </h1>

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
          "
        >

          <div>
            <p className="text-zinc-500">
              FULL NAME
            </p>

            <h2 className="text-2xl font-bold">
              {user.fullName || "N/A"}
            </h2>
          </div>

          <div>
            <p className="text-zinc-500">
              EMAIL
            </p>

            <h2 className="text-2xl font-bold">
              {user.email || "N/A"}
            </h2>
          </div>

          <div>
            <p className="text-zinc-500">
              FREE FIRE NAME
            </p>

            <h2 className="text-2xl font-bold">
              {user.freeFireName || "N/A"}
            </h2>
          </div>

          <div>
            <p className="text-zinc-500">
              UID
            </p>

            <h2 className="text-2xl font-bold">
              {user.uid || "N/A"}
            </h2>
          </div>

          <div>
            <p className="text-zinc-500">
              COUNTRY
            </p>

            <h2 className="text-2xl font-bold">
              {user.country || "N/A"}
            </h2>
          </div>

          <div>
            <p className="text-zinc-500">
              CLAN NAME
            </p>

            <h2 className="text-2xl font-bold">
              {user.clanName || "N/A"}
            </h2>
          </div>

          <div>
            <p className="text-zinc-500">
              ROLE
            </p>

            <h2
              className="
                text-2xl
                font-black
                text-cyan-400
              "
            >
              {user.role || "USER"}
            </h2>
          </div>

        </div>

      </div>

    </main>
  );
}