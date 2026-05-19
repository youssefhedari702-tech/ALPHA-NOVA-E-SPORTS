"use client";

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`rounded-2xl bg-cyan-500 px-6 py-3 font-black text-black transition hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}