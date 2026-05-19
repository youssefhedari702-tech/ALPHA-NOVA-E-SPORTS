"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function AdminUsersPage() {

  const [
    users,
    setUsers,
  ] = useState<any[]>(
    []
  );

  async function loadUsers() {

    const {
      data,
    } = await supabase
      .from("User")
      .select("*")
      .order(
        "created_at",
        {
          ascending: false,
        }
      );

    setUsers(
      data || []
    );
  }

  useEffect(() => {

    loadUsers();

  }, []);

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
          max-w-7xl
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
              text-7xl
              font-black
              text-cyan-400
            "
          >

            USERS

          </h1>

        </div>

        <div
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-cyan-500/20
          "
        >

          <table
            className="
              w-full
            "
          >

            <thead
              className="
                bg-cyan-500
                text-black
              "
            >

              <tr>

                <th
                  className="
                    p-6
                    text-left
                  "
                >

                  PLAYER

                </th>

                <th
                  className="
                    p-6
                    text-left
                  "
                >

                  EMAIL

                </th>

                <th
                  className="
                    p-6
                    text-left
                  "
                >

                  CLAN

                </th>

                <th
                  className="
                    p-6
                    text-left
                  "
                >

                  ROLE

                </th>

              </tr>

            </thead>

            <tbody>

              {users.map(
                (
                  user
                ) => (

                  <tr
                    key={user.id}
                    className="
                      border-t
                      border-cyan-500/10
                      bg-zinc-900/60
                    "
                  >

                    <td
                      className="
                        p-6
                        font-black
                      "
                    >

                      {
                        user.freeFireName
                      }

                    </td>

                    <td
                      className="
                        p-6
                      "
                    >

                      {
                        user.email
                      }

                    </td>

                    <td
                      className="
                        p-6
                      "
                    >

                      {
                        user.clanName
                      }

                    </td>

                    <td
                      className="
                        p-6
                        text-cyan-400
                        font-black
                      "
                    >

                      {
                        user.role
                      }

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}