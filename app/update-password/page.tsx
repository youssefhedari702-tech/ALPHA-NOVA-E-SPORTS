"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function updatePassword() {
    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password updated successfully.");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

        <h1 className="mb-6 text-3xl font-black text-cyan-400">
          New Password
        </h1>

        <input
          type="password"
          placeholder="New password"
          className="mb-4 w-full rounded-xl border border-zinc-700 bg-black p-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={updatePassword}
          className="w-full rounded-xl bg-cyan-500 py-4 font-bold text-black"
        >
          Update Password
        </button>

        {message && (
          <p className="mt-4 text-sm text-zinc-400">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}