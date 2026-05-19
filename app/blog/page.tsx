"use client";

const posts = [
  {
    title: "Top 10 Free Fire Tips",
    date: "May 2026",
  },
  {
    title: "Best Gaming Setups",
    date: "April 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-10 text-5xl font-black text-cyan-400">
          BLOG
        </h1>

        <div className="space-y-6">

          {posts.map((post, index) => (
            <div
              key={index}
              className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-8"
            >

              <h2 className="text-3xl font-black">
                {post.title}
              </h2>

              <p className="mt-3 text-zinc-400">
                {post.date}
              </p>

              <button className="mt-6 rounded-2xl bg-cyan-500 px-5 py-3 font-black text-black">
                Read
              </button>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}