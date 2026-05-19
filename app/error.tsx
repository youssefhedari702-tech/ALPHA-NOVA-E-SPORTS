"use client";

export default function ErrorPage({

  error,

  reset,

}: {

  error: Error & {

    digest?: string;
  };

  reset: () => void;
}) {

  return (

    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-black
        px-6
        text-white
      "
    >

      <div
        className="
          text-center
        "
      >

        <h1
          className="
            text-8xl
            font-black
            text-red-500
          "
        >

          ERROR

        </h1>

        <p
          className="
            mt-6
            text-zinc-400
          "
        >

          {
            error.message
          }

        </p>

        <button
          onClick={() =>
            reset()
          }
          className="
            mt-10
            rounded-2xl
            bg-cyan-500
            px-10
            py-5
            text-xl
            font-black
            text-black
          "
        >

          TRY AGAIN

        </button>

      </div>

    </main>
  );
}