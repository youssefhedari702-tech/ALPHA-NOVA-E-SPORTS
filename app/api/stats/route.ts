import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function GET() {

  const {
    count: tournaments,
  } = await supabase
    .from("Tournament")
    .select("*", {
      count: "exact",
      head: true,
    });

  const {
    count: clans,
  } = await supabase
    .from("Clan")
    .select("*", {
      count: "exact",
      head: true,
    });

  const {
    count: players,
  } = await supabase
    .from("PlayerProfile")
    .select("*", {
      count: "exact",
      head: true,
    });

  const {
    count: rooms,
  } = await supabase
    .from("Room")
    .select("*", {
      count: "exact",
      head: true,
    });

  return NextResponse.json({
    tournaments:
      tournaments || 0,

    clans:
      clans || 0,

    players:
      players || 0,

    rooms:
      rooms || 0,
  });
}