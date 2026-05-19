"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  ShieldAlert,
} from "lucide-react";

import {
  supabase,
} from "@/lib/supabase";

export default function AdminReportsPage() {

  const [
    reports,
    setReports,
  ] = useState<any[]>(
    []
  );

  const [
    loading,
    setLoading,
  ] = useState(true);

  async function loadReports() {

    const {
      data,
    } = await supabase
      .from("reports")
      .select("*")
      .order(
        "created_at",
        {
          ascending: false,
        }
      );

    setReports(
      data || []
    );

    setLoading(false);
  }

  useEffect(() => {

    loadReports();

  }, []);

  async function banUser(
    email: string
  ) {

    const {
      error,
    } = await supabase
      .from("User")
      .update({

        banned: true,
      })
      .eq(
        "email",
        email
      );

    if (error) {

      alert(
        error.message
      );

      return;
    }

    alert(
      "USER BANNED"
    );
  }

  async function deleteReport(
    id: string
  ) {

    await supabase
      .from("reports")
      .delete()
      .eq(
        "id",
        id
      );

    loadReports();
  }

  if (loading) {

    return (

      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-black
          text-4xl
          font-black
          text-red-500
        "
      >

        LOADING...

      </main>
    );
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
          max-w-6xl
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

            REPORTS ADMIN

          </h1>

        </div>

        <div
          className="
            space-y-8
          "
        >

          {reports.map(
            (report) => (

              <div
                key={report.id}
                className="
                  rounded-[40px]
                  border
                  border-red-500/20
                  bg-zinc-900/60
                  p-8
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >

                  <ShieldAlert
                    className="
                      text-red-500
                    "
                    size={40}
                  />

                  <h2
                    className="
                      text-3xl
                      font-black
                    "
                  >

                    {
                      report.reported_user
                    }

                  </h2>

                </div>

                <div
                  className="
                    mt-6
                    text-zinc-400
                  "
                >

                  Reporter:
                  {" "}
                  {
                    report.reporter_email
                  }

                </div>

                <p
                  className="
                    mt-6
                    rounded-3xl
                    bg-black/40
                    p-6
                    text-lg
                  "
                >

                  {
                    report.reason
                  }

                </p>

                <div
                  className="
                    mt-8
                    flex
                    gap-5
                  "
                >

                  <button
                    onClick={() =>
                      banUser(
                        report.reported_user
                      )
                    }
                    className="
                      rounded-2xl
                      bg-red-500
                      px-8
                      py-4
                      font-black
                      text-black
                    "
                  >

                    BAN USER

                  </button>

                  <button
                    onClick={() =>
                      deleteReport(
                        report.id
                      )
                    }
                    className="
                      rounded-2xl
                      bg-cyan-500
                      px-8
                      py-4
                      font-black
                      text-black
                    "
                  >

                    DELETE REPORT

                  </button>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </main>
  );
}