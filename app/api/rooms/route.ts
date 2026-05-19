import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function GET() {

  const { data } =
    await supabase
      .from("Room")
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
        .from("Room")
        .insert([
          {
            id:
              crypto.randomUUID(),

            tournamentName:
              body.tournamentName,

            roomId:
              body.roomId,

            password:
              body.password,

            map:
              body.map,

            status:
              "UPCOMING",
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
          "Room failed",
      },
      {
        status: 500,
      }
    );
  }
}