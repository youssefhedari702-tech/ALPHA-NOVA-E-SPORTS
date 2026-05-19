import type {
  Metadata,
} from "next";

import "./globals.css";

import Navbar
from "@/components/navbar";

import Footer
from "@/components/footer";

export const metadata:
Metadata = {

  title:
    "ALPHA NOVA E-SPORTS",

  description:
    "Ultimate esports gaming platform",
};

export default function RootLayout({

  children,

}: Readonly<{
  children:
    React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >

      <body
        className="
          bg-black
          text-white
          overflow-x-hidden
        "
      >

        <Navbar />

        <main
          className="
            pt-24
            min-h-screen
          "
        >

          {children}

        </main>

        <Footer />

      </body>

    </html>
  );
}