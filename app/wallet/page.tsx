"use client";

import {
  useEffect,
  useState,
} from "react";

export default function WalletPage() {

  const [
    transactions,
    setTransactions,
  ] = useState<any[]>([]);

  const [
    username,
    setUsername,
  ] = useState("");

  const [
    amount,
    setAmount,
  ] = useState("");

  const [
    method,
    setMethod,
  ] = useState("");

  async function loadTransactions() {

    const response =
      await fetch("/api/wallet");

    const data =
      await response.json();

    setTransactions(data);
  }

  useEffect(() => {

    loadTransactions();

  }, []);

  async function createTransaction(
    e: React.FormEvent
  ) {

    e.preventDefault();

    const response =
      await fetch(
        "/api/wallet",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            username,

            amount:
              Number(amount),

            type:
              "DEPOSIT",

            method,
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
      "Transaction created"
    );

    loadTransactions();
  }

  return (

    <main className="min-h-screen bg-black p-10 text-white">

      <h1 className="text-6xl font-black text-cyan-400">

        WALLET

      </h1>

      <form
        onSubmit={
          createTransaction
        }
        className="mt-10 max-w-xl space-y-4"
      >

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(
              e.target.value
            )
          }
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            setAmount(
              e.target.value
            )
          }
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <input
          type="text"
          placeholder="Method"
          value={method}
          onChange={(e) =>
            setMethod(
              e.target.value
            )
          }
          className="w-full rounded-2xl bg-zinc-900 p-4"
        />

        <button
          className="w-full rounded-2xl bg-cyan-500 p-4 font-black text-black"
        >

          CREATE PAYMENT

        </button>

      </form>

      <div className="mt-16 space-y-6">

        {
          transactions.map(
            (
              transaction: any
            ) => (

              <div
                key={
                  transaction.id
                }
                className="rounded-3xl border border-cyan-500 bg-zinc-900 p-6"
              >

                <h2 className="text-3xl font-black text-cyan-400">

                  {
                    transaction.username
                  }

                </h2>

                <p className="mt-4">

                  Amount:
                  {" "}
                  $
                  {
                    transaction.amount
                  }

                </p>

                <p className="mt-2">

                  Type:
                  {" "}
                  {
                    transaction.type
                  }

                </p>

                <p className="mt-2">

                  Method:
                  {" "}
                  {
                    transaction.method
                  }

                </p>

                <p className="mt-2 text-green-400">

                  {
                    transaction.status
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