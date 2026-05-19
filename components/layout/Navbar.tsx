export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 border-b border-zinc-800">
      <h1 className="text-2xl font-bold text-green-500">
        ALPHA NOVA
      </h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/register">Register</a>
        <a href="/dashboard">Dashboard</a>
      </div>
    </nav>
  );
}