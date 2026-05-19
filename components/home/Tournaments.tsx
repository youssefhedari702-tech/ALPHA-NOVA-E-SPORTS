export default function Tournaments() {
  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold mb-8">
        Featured Tournaments
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3">
            SOLO CUP
          </h3>

          <p className="text-zinc-400 mb-4">
            Prize Pool: $500
          </p>

          <button className="bg-green-500 px-4 py-2 rounded-lg">
            JOIN
          </button>
        </div>
      </div>
    </section>
  );
}