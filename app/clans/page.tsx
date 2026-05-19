"use client";

import {
  useEffect,
  useState,
} from "react";

export default function ClansPage() {

  const [
    clans,
    setClans,
  ] = useState<any[]>([]);

  const [
    name,
    setName,
  ] = useState("");

  const [
    tag,
    setTag,
  ] = useState("");

  const [
    ownerName,
    setOwnerName,
  ] = useState("");

  const [
    logo,
    setLogo,
  ] = useState("");

  async function loadClans() {

    const response =
      await fetch("/api/clans");

    const data =
      await response.json();

    setClans(data);
  }

  useEffect(() => {

    loadClans();

  }, []);

  async function convertImage(
    file: File
  ) {

    return new Promise<string>(
      (resolve) => {

        const reader =
          new FileReader();

        reader.onloadend =
          () => {

            resolve(
              reader.result as string
            );
          };

        reader.readAsDataURL(
          file
        );
      }
    );
  }

  async function handleLogo(
    e: any
  ) {

    const file =
      e.target.files[0];

    if (!file) return;

    const base64 =
      await convertImage(
        file
      );

    setLogo(base64);
  }

  async function createClan(
    e: React.FormEvent
  ) {

    e.preventDefault();

    const response =
      await fetch(
        "/api/clans",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name,
            tag,
            logo,
            ownerName,
          }),
        }
      );

    const data =
      await response.json();

    if (!data.success) {

      alert(
        data.message
      );

      return;
    }

    alert(
      "Clan created"
    );

    loadClans();
  }

  return (

    <main className="min-h-screen bg-black p-10 text-white">

      <h1 className="text-6xl font-black text-cyan-400">

        CLANS

      </h1>

      <form
        onSubmit={createClan}
        className="mt-10 max-w-xl space-y-4"
      >

        <input
          type="text"
          placeholder="Clan Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <input
          type="text"
          placeholder="Clan Tag"
          value={tag}
          onChange={(e) =>
            setTag(
              e.target.value
            )
          }
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <input
          type="text"
          placeholder="Owner Name"
          value={ownerName}
          onChange={(e) =>
            setOwnerName(
              e.target.value
            )
          }
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleLogo}
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <button
          className="w-full rounded-2xl bg-cyan-500 p-4 font-black text-black"
        >

          CREATE CLAN

        </button>

      </form>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {
          clans.map(
            (clan: any) => (

              <div
                key={clan.id}
                className="rounded-3xl border border-cyan-500 bg-zinc-900 p-6"
              >

                {
                  clan.logo && (

                    <img
                      src={clan.logo}
                      alt={clan.name}
                      className="h-32 w-32 rounded-full object-cover"
                    />
                  )
                }

                <h2 className="mt-6 text-3xl font-black text-cyan-400">

                  {clan.name}

                </h2>

                <p className="mt-2">

                  TAG:
                  {" "}
                  {clan.tag}

                </p>

                <p className="mt-2">

                  OWNER:
                  {" "}
                  {clan.ownerName}

                </p>

                <p className="mt-2">

                  WINS:
                  {" "}
                  {clan.wins}

                </p>

                <p className="mt-2">

                  POINTS:
                  {" "}
                  {clan.points}

                </p>

                <p className="mt-4 text-green-400">

                  {
                    clan.verified
                      ? "VERIFIED"
                      : "UNVERIFIED"
                  }

                </p>

              </div>
            )
          )
        }

      </div>

    </main>
  );
}