export default function Stats() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10">
      <div className="bg-zinc-900 p-6 rounded-xl">
        <h2 className="text-3xl font-bold text-green-500">10K+</h2>
        <p>Players</p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h2 className="text-3xl font-bold text-green-500">500+</h2>
        <p>Teams</p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h2 className="text-3xl font-bold text-green-500">300+</h2>
        <p>Tournaments</p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h2 className="text-3xl font-bold text-green-500">$50K</h2>
        <p>Prize Pool</p>
      </div>
    </section>
  );
}