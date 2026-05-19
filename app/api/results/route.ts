import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

function calculatePoints(
  placement: number,
  kills: number
) {

  const placementPoints: Record<
    number,
    number
  > = {

    1: 12,
    2: 9,
    3: 8,
    4: 7,
    5: 6,
    6: 5,
    7: 4,
    8: 3,
    9: 2,
    10: 1,
  };

  return (
    (placementPoints[
      placement
    ] || 0) + kills
  );
}

export async function GET() {

  const { data } =
    await supabase
      .from("MatchResult")
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

    const points =
      calculatePoints(
        body.placement,
        body.kills
      );

    const { error } =
      await supabase
        .from("MatchResult")
        .insert([
          {
            id:
              crypto.randomUUID(),

            playerName:
              body.playerName,

            clanName:
              body.clanName,

            placement:
              body.placement,

            kills:
              body.kills,

            points,
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
          "Result failed",
      },
      {
        status: 500,
      }
    );
  }
}