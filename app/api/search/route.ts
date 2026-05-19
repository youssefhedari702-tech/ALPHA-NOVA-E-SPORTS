import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function GET(
  request: Request
) {

  const {
    searchParams,
  } = new URL(
    request.url
  );

  const query =
    searchParams.get(
      "query"
    ) || "";

  const {
    data: clans,
  } = await supabase
    .from("Clan")
    .select("*")
    .ilike(
      "name",
      `%${query}%`
    );

  const {
    data: players,
  } = await supabase
    .from("Leaderboard")
    .select("*")
    .ilike(
      "playerName",
      `%${query}%`
    );

  const {
    data: tournaments,
  } = await supabase
    .from("Tournament")
    .select("*")
    .ilike(
      "title",
      `%${query}%`
    );

  return NextResponse.json({
    clans:
      clans || [],

    players:
      players || [],

    tournaments:
      tournaments || [],
  });
}