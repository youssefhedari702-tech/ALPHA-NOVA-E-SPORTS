"use client";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

export default function LogoutButton() {

  const router =
    useRouter();

  async function logout() {

    await fetch(
      "/api/logout",
      {
        method: "POST",
      }
    );

    toast.success(
      "Logged out!"
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