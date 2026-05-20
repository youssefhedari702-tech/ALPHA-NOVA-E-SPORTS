"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      const response =
        await fetch(
          "/api/login",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        alert(data.error);
        return;
      }

      alert("Login success");

      window.location.href =
        "/dashboard";
    } catch (error) {
      alert("Server error");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">

      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h1 className="mb-8 text-center text-4xl font-black text-cyan-400">
          LOGIN
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-cyan-500 py-3 font-bold text-black transition hover:bg-cyan-400"
          >
            Login
          </button>

          <div className="text-center">

            <Link
              href="/forgot-password"
              className="text-sm text-cyan-400 hover:text-cyan-300"
            >
              Forgot Password?
            </Link>

          </div>

        </form>

      </div>

    </main>
  );
}