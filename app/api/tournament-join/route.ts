import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function GET() {

  const { data } =
    await supabase
      .from("TournamentJoin")
      .select("*")
      .order("createdAt", {
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
        .from("TournamentJoin")
        .insert([
          {
            id:
              crypto.randomUUID(),

            tournamentId:
              body.tournamentId,

            tournamentName:
              body.tournamentName,

            clanName:
              body.clanName,

            leaderName:
              body.leaderName,

            contact:
              body.contact,

            status:
              "PENDING",
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
          "Join failed",
      },
      {
        status: 500,
      }
    );
  }
}