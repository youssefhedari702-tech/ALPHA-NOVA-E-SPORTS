"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function AdminLeaderboardPage() {

  const [
    form,
    setForm,
  ] = useState({

    team_name: "",

    kills: 0,

    booyah: 0,

    total_points: 0,
  });

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function createScore(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    const {
      error,
    } = await supabase
      .from(
        "leaderboard"
      )
      .insert({

        team_name:
          form.team_name,

        kills:
          Number(
            form.kills
          ),

        booyah:
          Number(
            form.booyah
          ),

        total_points:
          Number(
            form.total_points
          ),
      });

    setLoading(false);

    if (error) {

      alert(
        error.message
      );

      return;
    }

    alert(
      "SCORE ADDED"
    );

    setForm({

      team_name: "",

      kills: 0,

      booyah: 0,

      total_points: 0,
    });
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
              text-yellow-400
            "
          >

            ADMIN LEADERBOARD

          </h1>

        </div>

        <form
          onSubmit={
            createScore
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

          <input
            type="text"
            required
            placeholder="
              TEAM NAME
            "
            value={
              form.team_name
            }
            onChange={(e) =>
              setForm({

                ...form,

                team_name:
                  e.target.value,
              })
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
            type="number"
            required
            placeholder="
              KILLS
            "
            value={
              form.kills
            }
            onChange={(e) =>
              setForm({

                ...form,

                kills:
                  Number(
                    e.target.value
                  ),
              })
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
            type="number"
            required
            placeholder="
              BOOYAH
            "
            value={
              form.booyah
            }
            onChange={(e) =>
              setForm({

                ...form,

                booyah:
                  Number(
                    e.target.value
                  ),
              })
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
            type="number"
            required
            placeholder="
              TOTAL POINTS
            "
            value={
              form.total_points
            }
            onChange={(e) =>
              setForm({

                ...form,

                total_points:
                  Number(
                    e.target.value
                  ),
              })
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
              bg-yellow-400
              py-5
              text-xl
              font-black
              text-black
            "
          >

            {loading
              ? "ADDING..."
              : "ADD SCORE"}

          </button>

        </form>

      </div>

    </main>
  );
}