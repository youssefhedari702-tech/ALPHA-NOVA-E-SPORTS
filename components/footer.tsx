export default function Footer() {

  return (

    <footer
      className="
        border-t
        border-cyan-500/10
        bg-black
        px-6
        py-10
        text-white
      "
    >

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-6
          md:flex-row
        "
      >

        <h2
          className="
            text-3xl
            font-black
            text-cyan-400
          "
        >

          ALPHA NOVA

        </h2>

        <p
          className="
            text-zinc-500
          "
        >

          © 2026 ALPHA NOVA E-SPORTS.
          ALL RIGHTS RESERVED.

        </p>

      </div>

    </footer>
  );
}