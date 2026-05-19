import Link
from "next/link";

export default function NotFoundPage() {

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
            text-9xl
            font-black
            text-red-500
          "
        >

          404

        </h1>

        <p
          className="
            mt-6
            text-2xl
            text-zinc-400
          "
        >

          PAGE NOT FOUND

        </p>

        <Link
          href="/"
          className="
            mt-10
            inline-block
            rounded-2xl
            bg-cyan-500
            px-10
            py-5
            text-xl
            font-black
            text-black
          "
        >

          GO HOME

        </Link>

      </div>

    </main>
  );
}