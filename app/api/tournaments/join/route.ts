import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json();

    const { error } =
      await supabase
        .from(
          "TournamentParticipant"
        )
        .insert([
          {
            id:
              crypto.randomUUID(),

            userId:
              body.userId,

            tournamentId:
              body.tournamentId,
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
