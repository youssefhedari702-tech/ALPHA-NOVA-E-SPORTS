"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

import UploadImage
from "@/components/upload-image";

export default function AdminTournamentsPage() {

  const [
    form,
    setForm,
  ] = useState({

    title: "",

    description: "",

    prize: "",

    map: "BERMUDA",

    mode: "SQUAD",

    banner: "",
  });

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function createTournament(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    const {
      error,
    } = await supabase
      .from(
        "tournaments"
      )
      .insert({

        title:
          form.title,

        description:
          form.description,

        prize:
          form.prize,

        map:
          form.map,

        mode:
          form.mode,

        banner:
          form.banner,
      });

    setLoading(false);

    if (error) {

      alert(
        error.message
      );

      return;
    }

    alert(
      "TOURNAMENT CREATED"
    );

    setForm({

      title: "",

      description: "",

      prize: "",

      map: "BERMUDA",

      mode: "SQUAD",

      banner: "",
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
              text-cyan-400
            "
          >

            ADMIN TOURNAMENTS

          </h1>

        </div>

        <form
          onSubmit={
            createTournament
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
            placeholder="TITLE"
            value={form.title}
            onChange={(e) =>
              setForm({

                ...form,

                title:
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

          <textarea
            required
            placeholder="DESCRIPTION"
            value={form.description}
            onChange={(e) =>
              setForm({

                ...form,

                description:
                  e.target.value,
              })
            }
            className="
              min-h-[200px]
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
            placeholder="PRIZE"
            value={form.prize}
            onChange={(e) =>
              setForm({

                ...form,

                prize:
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

          <select
            value={form.map}
            onChange={(e) =>
              setForm({

                ...form,

                map:
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
          >

            <option>
              BERMUDA
            </option>

            <option>
              PURGATORY
            </option>

            <option>
              KALAHARI
            </option>

          </select>

          <select
            value={form.mode}
            onChange={(e) =>
              setForm({

                ...form,

                mode:
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
          >

            <option>
              SOLO
            </option>

            <option>
              DUO
            </option>

            <option>
              SQUAD
            </option>

          </select>

          <div>

            <p
              className="
                mb-3
                text-zinc-400
              "
            >

              TOURNAMENT BANNER

            </p>

            <UploadImage

              bucket="tournaments"

              onUpload={(url) =>

                setForm({

                  ...form,

                  banner: url,
                })
              }
            />

          </div>

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
              : "CREATE TOURNAMENT"}

          </button>

        </form>

      </div>

    </main>
  );
}