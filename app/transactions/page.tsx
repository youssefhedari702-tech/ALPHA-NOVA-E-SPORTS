const transactions = [
  {
    title:
      "Tournament Prize",
    amount: "$500",
  },
  {
    title:
      "Entry Fee",
    amount: "-$10",
  },
];

export default function TransactionsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-5xl">

        <p className="text-cyan-400">
          PLAYER WALLET
        </p>

        <h1 className="mt-4 text-7xl font-black">
          TRANSACTIONS
        </h1>

        <div className="mt-16 space-y-6">

          {transactions.map(
            (
              transaction,
              index
            ) => (
              <div
                key={index}
                className="rounded-[40px] bg-zinc-900 p-8"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="text-4xl font-black">
                      {transaction.title}
                    </h2>

                  </div>

                  <div>

                    <h3 className="text-4xl font-black text-green-400">
                      {transaction.amount}
                    </h3>

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </main>
  );
}