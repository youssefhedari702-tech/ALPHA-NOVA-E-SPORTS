"use client";

import {
  useEffect,
  useState,
} from "react";

import UploadAvatar from "@/components/upload-avatar";

import {
  supabase,
} from "@/lib/supabase";

export default function SettingsPage() {

  const [
    user,
    setUser,
  ] = useState<any>(
    null
  );

  const [
    fullName,
    setFullName,
  ] = useState("");

  const [
    freeFireName,
    setFreeFireName,
  ] = useState("");

  const [
    country,
    setCountry,
  ] = useState("");

  const [
    clanName,
    setClanName,
  ] = useState("");

  const [
    avatar,
    setAvatar,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    saving,
    setSaving,
  ] = useState(false);

  useEffect(() => {

    async function loadUser() {

      const {

        data: {

          user,

        },

      } = await supabase
        .auth
        .getUser();

      if (!user) {

        setLoading(false);

        return;
      }

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

      setFullName(
        data?.fullName || ""
      );

      setFreeFireName(
        data?.freeFireName || ""
      );

      setCountry(
        data?.country || ""
      );

      setClanName(
        data?.clanName || ""
      );

      setAvatar(
        data?.avatar || ""
      );

      setLoading(false);
    }

    loadUser();

  }, []);

  async function saveProfile(
    e: React.FormEvent
  ) {

    e.preventDefault();

    if (!user) {

      return;
    }

    try {

      setSaving(true);

      const {
        error,
      } = await supabase
        .from("User")
        .update({

          fullName,

          freeFireName,

          country,

          clanName,

          avatar,
        })
        .eq(
          "id",
          user.id
        );

      if (error) {

        alert(
          error.message
        );

        return;
      }

      alert(
        "PROFILE UPDATED"
      );

    } finally {

      setSaving(false);
    }
  }

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

            SETTINGS

          </h1>

        </div>

        <form
          onSubmit={
            saveProfile
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

          <div
            className="
              flex
              justify-center
            "
          >

            {avatar ? (

              <img
                src={avatar}
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
                  h-40
                  w-40
                  rounded-full
                  bg-cyan-500
                "
              />

            )}

          </div>

          <UploadAvatar
            onUpload={
              setAvatar
            }
          />

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
                FULL NAME
              "
              value={fullName}
              onChange={(e) =>
                setFullName(
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
                FREE FIRE NAME
              "
              value={
                freeFireName
              }
              onChange={(e) =>
                setFreeFireName(
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
                COUNTRY
              "
              value={country}
              onChange={(e) =>
                setCountry(
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
                CLAN NAME
              "
              value={clanName}
              onChange={(e) =>
                setClanName(
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

          <button
            type="submit"
            disabled={saving}
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

            {saving
              ? "SAVING..."
              : "SAVE SETTINGS"}

          </button>

        </form>

      </div>

    </main>
  );
}