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

export default function LoginPage() {

  const router =
    useRouter();

  const [
    email,
    setEmail,
  ] = useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function login(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    const {
      error,
    } = await supabase
      .auth
      .signInWithPassword({

        email,

        password,
      });

    setLoading(false);

    if (error) {

      alert(
        error.message
      );

      return;
    }

    router.push(
      "/profile"
    );
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
        text-white
      "
    >

      <form
        onSubmit={login}
        className="
          w-full
          max-w-xl
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
            text-center
            text-6xl
            font-black
            text-cyan-400
          "
        >

          LOGIN

        </h1>

        <div
          className="
            space-y-6
          "
        >

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
              ? "LOADING..."
              : "LOGIN"}

          </button>

          <div
            className="
              text-center
              text-zinc-400
            "
          >

            No account?

            <Link
              href="/register"
              className="
                ml-2
                text-cyan-400
              "
            >

              Register

            </Link>

          </div>

        </div>

      </form>

    </main>
  );
}