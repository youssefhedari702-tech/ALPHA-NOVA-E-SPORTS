"use client";

import {
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import Link
from "next/link";

import {
  supabase,
} from "@/lib/supabase";

export default function RegisterPage() {

  const router =
    useRouter();

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    fullName,
    setFullName,
  ] = useState("");

  const [
    email,
    setEmail,
  ] = useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [
    freeFireName,
    setFreeFireName,
  ] = useState("");

  const [
    uid,
    setUid,
  ] = useState("");

  const [
    country,
    setCountry,
  ] = useState("");

  const [
    clanName,
    setClanName,
  ] = useState("");

  async function handleRegister(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      setLoading(true);

      const {
        data,
        error,
      } = await supabase.auth.signUp({

        email,

        password,
      });

      if (error) {

        alert(
          error.message
        );

        return;
      }

      if (data.user) {

        const {
          error:
            insertError,
        } = await supabase
          .from("User")
          .insert({

            id:
              data.user.id,

            email,

            fullName,

            freeFireName,

            uid,

            country,

            clanName,

            role:
              "USER",
          });

        if (insertError) {

          alert(
            insertError.message
          );

          return;
        }
      }

      alert(
        "ACCOUNT CREATED"
      );

      router.push(
        "/profile"
      );

    } catch {

      alert(
        "SOMETHING WENT WRONG"
      );

    } finally {

      setLoading(false);
    }
  }

  return (

    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-black
        px-6
        py-24
        text-white
      "
    >

      <div
        className="
          w-full
          max-w-2xl
          rounded-[40px]
          border
          border-cyan-500/20
          bg-zinc-900/60
          p-10
        "
      >

        <div
          className="
            mb-12
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

            REGISTER

          </h1>

        </div>

        <form
          onSubmit={
            handleRegister
          }
          className="
            space-y-6
          "
        >

          <input
            type="text"
            required
            placeholder="FULL NAME"
            value={fullName}
            onChange={(e) =>
              setFullName(
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
            type="email"
            required
            placeholder="EMAIL"
            value={email}
            onChange={(e) =>
              setEmail(
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
            type="password"
            required
            placeholder="PASSWORD"
            value={password}
            onChange={(e) =>
              setPassword(
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
            placeholder="FREE FIRE NAME"
            value={freeFireName}
            onChange={(e) =>
              setFreeFireName(
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
            placeholder="UID"
            value={uid}
            onChange={(e) =>
              setUid(
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
            placeholder="COUNTRY"
            value={country}
            onChange={(e) =>
              setCountry(
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
            placeholder="CLAN NAME"
            value={clanName}
            onChange={(e) =>
              setClanName(
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

              : "CREATE ACCOUNT"}

          </button>

        </form>

        <div
          className="
            mt-10
            text-center
          "
        >

          <Link
            href="/login"
            className="
              text-cyan-400
            "
          >

            Already have an account?

          </Link>

        </div>

      </div>

    </main>
  );
}