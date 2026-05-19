export default function AccessDeniedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">

      <div className="text-center">

        <h1 className="text-8xl font-black text-red-500">
          ACCESS DENIED
        </h1>

        <p className="mt-6 text-zinc-400">
          You do not have permission
          to access this page.
        </p>

      </div>

    </main>
  );
}