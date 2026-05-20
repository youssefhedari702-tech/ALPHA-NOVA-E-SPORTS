"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ForgotPasswordPage() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReset() {

    try {

      setLoading(true);
      setMessage("");

      const { error } =
        await supabase.auth.resetPasswordForEmail(
          email.trim(),
          {
            redirectTo:
              "https://alpha-nova-e-sports-ikgdhmn8f-alphanovaafficial-4944s-projects.vercel.app/reset-password",
          }
        );

      if (error) {

        setMessage(error.message);

      } else {

        setMessage(
          "Check your Gmail inbox."
        );
      }

    } catch {

      setMessage(
        "Something went wrong."
      );

    } finally {

      setLoading(false);
    }
  }

  return (

    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">

      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h1 className="mb-6 text-center text-3xl font-black text-cyan-400">
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter your Gmail"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none"
        />

        <button
          onClick={handleReset}
          disabled={loading}
          className="mt-5 w-full rounded-xl bg-cyan-500 py-3 font-black text-black"
        >
          {loading
            ? "Sending..."
            : "Send Reset Link"}
        </button>

        {message && (

          <p className="mt-5 text-center text-sm text-zinc-300">
            {message}
          </p>
        )}

      </div>

    </main>
  );
}