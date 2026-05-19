"use client";

import {
  useEffect,
  useState,
} from "react";

export default function JoinTournamentPage() {

  const [
    joins,
    setJoins,
  ] = useState<any[]>([]);

  const [
    tournamentId,
    setTournamentId,
  ] = useState("");

  const [
    tournamentName,
    setTournamentName,
  ] = useState("");

  const [
    clanName,
    setClanName,
  ] = useState("");

  const [
    leaderName,
    setLeaderName,
  ] = useState("");

  const [
    contact,
    setContact,
  ] = useState("");

  async function loadJoins() {

    const response =
      await fetch(
        "/api/tournament-join"
      );

    const data =
      await response.json();

    setJoins(data);
  }

  useEffect(() => {

    loadJoins();

  }, []);

  async function joinTournament(
    e: React.FormEvent
  ) {

    e.preventDefault();

    const response =
      await fetch(
        "/api/tournament-join",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            tournamentId,
            tournamentName,
            clanName,
            leaderName,
            contact,
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
      "Tournament joined"
    );

    loadJoins();
  }

  return (

    <main className="min-h-screen bg-black p-10 text-white">

      <h1 className="text-6xl font-black text-cyan-400">

        JOIN TOURNAMENT

      </h1>

      <form
        onSubmit={
          joinTournament
        }
        className="mt-10 max-w-xl space-y-4"
      >

        <input
          type="text"
          placeholder="Tournament ID"
          value={tournamentId}
          onChange={(e) =>
            setTournamentId(
              e.target.value
            )
          }
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <input
          type="text"
          placeholder="Tournament Name"
          value={tournamentName}
          onChange={(e) =>
            setTournamentName(
              e.target.value
            )
          }
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <input
          type="text"
          placeholder="Clan Name"
          value={clanName}
          onChange={(e) =>
            setClanName(
              e.target.value
            )
          }
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <input
          type="text"
          placeholder="Leader Name"
          value={leaderName}
          onChange={(e) =>
            setLeaderName(
              e.target.value
            )
          }
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) =>
            setContact(
              e.target.value
            )
          }
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <button
          className="w-full rounded-2xl bg-cyan-500 p-4 font-black text-black"
        >

          JOIN TOURNAMENT

        </button>

      </form>

      <div className="mt-16 space-y-6">

        {
          joins.map(
            (join: any) => (

              <div
                key={join.id}
                className="rounded-3xl border border-cyan-500 bg-zinc-900 p-6"
              >

                <h2 className="text-3xl font-black text-cyan-400">

                  {
                    join.tournamentName
                  }

                </h2>

                <p className="mt-2">

                  Clan:
                  {" "}
                  {
                    join.clanName
                  }

                </p>

                <p className="mt-2">

                  Leader:
                  {" "}
                  {
                    join.leaderName
                  }

                </p>

                <p className="mt-2">

                  Contact:
                  {" "}
                  {
                    join.contact
                  }

                </p>

                <p className="mt-4 text-yellow-400">

                  {
                    join.status
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