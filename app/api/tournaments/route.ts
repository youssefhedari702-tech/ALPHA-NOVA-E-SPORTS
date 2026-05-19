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
        .from("Tournament")
        .insert([
          {
            id:
              crypto.randomUUID(),

            title:
              body.title,

            prizePool:
              body.prizePool,

            mode:
              body.mode,

            map:
              body.map,
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
          "Tournament creation failed",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {

  const { data } =
    await supabase
      .from("Tournament")
      .select("*")
      .order(
        "createdAt",
        {
          ascending: false,
        }
      );

  return NextResponse.json(
    data || []
  );
}