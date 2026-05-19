import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function GET() {

  const { data } =
    await supabase
      .from("Clan")
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
        .from("Clan")
        .insert([
          {
            id:
              crypto.randomUUID(),

            name:
              body.name,

            tag:
              body.tag,

            logo:
              body.logo,

            ownerName:
              body.ownerName,

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
          "Clan failed",
      },
      {
        status: 500,
      }
    );
  }
}