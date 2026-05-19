interface Props {
  text: string;
  type?: "button" | "submit";
}

export default function Button({
  text,
  type = "button",
}: Props) {
  return (
    <button
      type={type}
      className="rounded-2xl bg-cyan-500 px-8 py-4 font-black text-black transition hover:scale-105"
    >
      {text}
    </button>
  );
}