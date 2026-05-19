"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function ReportPage() {

  const [
    reportedUser,
    setReportedUser,
  ] = useState("");

  const [
    reason,
    setReason,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function sendReport(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    const {

      data: {

        user,

      },

    } = await supabase
      .auth
      .getUser();

    if (!user) {

      alert(
        "LOGIN REQUIRED"
      );

      setLoading(false);

      return;
    }

    const {
      error,
    } = await supabase
      .from("reports")
      .insert({

        reporter_email:
          user.email,

        reported_user:
          reportedUser,

        reason,
      });

    setLoading(false);

    if (error) {

      alert(
        error.message
      );

      return;
    }

    alert(
      "REPORT SENT"
    );

    setReportedUser("");

    setReason("");
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
        onSubmit={
          sendReport
        }
        className="
          w-full
          max-w-2xl
          space-y-8
          rounded-[40px]
          border
          border-red-500/20
          bg-zinc-900/60
          p-10
        "
      >

        <div
          className="
            text-center
          "
        >

          <h1
            className="
              text-6xl
              font-black
              text-red-500
            "
          >

            REPORT USER

          </h1>

        </div>

        <input
          type="email"
          required
          placeholder="
            USER EMAIL
          "
          value={
            reportedUser
          }
          onChange={(e) =>
            setReportedUser(
              e.target.value
            )
          }
          className="
            w-full
            rounded-2xl
            border
            border-red-500/20
            bg-black/40
            px-5
            py-4
            outline-none
          "
        />

        <textarea
          rows={6}
          required
          placeholder="
            REPORT REASON
          "
          value={reason}
          onChange={(e) =>
            setReason(
              e.target.value
            )
          }
          className="
            w-full
            rounded-2xl
            border
            border-red-500/20
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
            bg-red-500
            py-5
            text-xl
            font-black
            text-black
          "
        >

          {loading
            ? "SENDING..."
            : "SEND REPORT"}

        </button>

      </form>

    </main>
  );
}