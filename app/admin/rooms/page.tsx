"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function AdminRoomsPage() {

  const [
    form,
    setForm,
  ] = useState({

    title: "",

    room_id: "",

    password: "",
  });

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function createRoom(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    const {
      error,
    } = await supabase
      .from("rooms")
      .insert({

        title:
          form.title,

        room_id:
          form.room_id,

        password:
          form.password,
      });

    setLoading(false);

    if (error) {

      alert(
        error.message
      );

      return;
    }

    alert(
      "ROOM CREATED"
    );

    setForm({

      title: "",

      room_id: "",

      password: "",
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
              text-red-500
            "
          >

            ADMIN ROOMS

          </h1>

        </div>

        <form
          onSubmit={
            createRoom
          }
          className="
            space-y-8
            rounded-[40px]
            border
            border-red-500/20
            bg-zinc-900/60
            p-10
          "
        >

          <input
            type="text"
            required
            placeholder="ROOM TITLE"
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
              border-red-500/20
              bg-black/40
              px-5
              py-4
              outline-none
            "
          />

          <input
            type="text"
            required
            placeholder="ROOM ID"
            value={form.room_id}
            onChange={(e) =>
              setForm({

                ...form,

                room_id:
                  e.target.value,
              })
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

          <input
            type="text"
            required
            placeholder="PASSWORD"
            value={form.password}
            onChange={(e) =>
              setForm({

                ...form,

                password:
                  e.target.value,
              })
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
              text-white
            "
          >

            {loading
              ? "CREATING..."
              : "CREATE ROOM"}

          </button>

        </form>

      </div>

    </main>
  );
}