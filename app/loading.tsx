export default function LoadingPage() {

  return (

    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-black
      "
    >

      <div
        className="
          text-center
        "
      >

        <div
          className="
            mx-auto
            h-24
            w-24
            animate-spin
            rounded-full
            border-4
            border-cyan-500
            border-t-transparent
          "
        />

        <h1
          className="
            mt-10
            text-4xl
            font-black
            text-cyan-400
          "
        >

          ALPHA NOVA

        </h1>

      </div>

    </main>
  );
}