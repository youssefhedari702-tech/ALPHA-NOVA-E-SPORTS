import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function GET() {

  const { data } =
    await supabase
      .from("PlayerProfile")
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
        .from("PlayerProfile")
        .insert([
          {
            id:
              crypto.randomUUID(),

            username:
              body.username,

            uid:
              body.uid,

            country:
              body.country,

            avatar:
              body.avatar,

            bio:
              body.bio,

            kills:
              0,

            wins:
              0,

            points:
              0,

            verified:
              false,
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
          "Player profile failed",
      },
      {
        status: 500,
      }
    );
  }
}