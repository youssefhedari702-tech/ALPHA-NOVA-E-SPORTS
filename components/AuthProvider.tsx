"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

export default function AuthProvider({

  children,

}: {

  children: React.ReactNode;

}) {

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function checkUser() {

      await supabase.auth.getUser();

      setLoading(false);
    }

    checkUser();

  }, []);

  if (loading) {

    return (

      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-black
          text-3xl
          font-black
          text-cyan-400
        "
      >

        LOADING...

      </div>
    );
  }

  return children;
}