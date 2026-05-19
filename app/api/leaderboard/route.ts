import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function GET() {

  const { data } =
    await supabase
      .from("Leaderboard")
      .select("*")
      .order("points", {
        ascending: false,
      });

  return NextResponse.json(
    data || []
  );
}

export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json();

    const { error } =
      await supabase
        .from("Leaderboard")
        .insert([
          {
            id:
              crypto.randomUUID(),

            playerName:
              body.playerName,

            clanName:
              body.clanName,

            points:
              body.points,

            wins:
              body.wins,

            kills:
              body.kills,

            matches:
              body.matches,
          },
        ]);

    if (error) {

      return NextResponse.json(
        {
          success: false,
          message:
            error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });

  } catch {

    return NextResponse.json(
      {
        success: false,
        message:
          "Leaderboard failed",
      },
      {
        status: 500,
      }
    );
  }
}