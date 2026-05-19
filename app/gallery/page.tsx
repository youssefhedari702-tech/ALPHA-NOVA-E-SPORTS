"use client";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-10 text-5xl font-black text-cyan-400">
          GALLERY
        </h1>

        <div className="grid gap-6 md:grid-cols-4">

          {[1,2,3,4,5,6,7,8].map((item) => (
            <div
              key={item}
              className="h-64 rounded-3xl bg-zinc-900"
            ></div>
          ))}

        </div>

      </div>

    </main>
  );
}