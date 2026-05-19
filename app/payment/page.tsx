"use client";

export default function PaymentPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-6 text-white">

      <div className="w-full max-w-3xl rounded-3xl border border-cyan-500/20 bg-zinc-900 p-10">

        <h1 className="mb-10 text-5xl font-black text-cyan-400">
          PAYMENT
        </h1>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Card Number"
            className="w-full rounded-2xl bg-black px-5 py-4 outline-none"
          />

          <input
            type="text"
            placeholder="Card Holder"
            className="w-full rounded-2xl bg-black px-5 py-4 outline-none"
          />

          <div className="grid gap-5 md:grid-cols-2">

            <input
              type="text"
              placeholder="MM/YY"
              className="rounded-2xl bg-black px-5 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="CVV"
              className="rounded-2xl bg-black px-5 py-4 outline-none"
            />

          </div>

          <button className="rounded-2xl bg-cyan-500 px-8 py-4 font-black text-black">
            Pay Now
          </button>

        </div>

      </div>

    </main>
  );
}