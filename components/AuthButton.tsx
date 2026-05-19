"use client";

import { useRouter } from "next/navigation";

export default function AuthButton() {

  const router =
    useRouter();

  async function logout() {

    await fetch(
      "/api/logout",
      {
        method: "POST",
      }
    );

    router.push(
      "/login"
    );
  }

  return (
    <button
      onClick={logout}
      className="rounded-2xl bg-red-500 px-6 py-3 font-black text-black"
    >
      Logout
    </button>
  );
}
