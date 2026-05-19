import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function GET() {

  const { data } =
    await supabase
      .from("ChatMessage")
      .select("*")
      .order("createdAt", {
        ascending: true,
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
        .from("ChatMessage")
        .insert([
          {
            id:
              crypto.randomUUID(),

            username:
              body.username,

            message:
              body.message,
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
          "Chat failed",
      },
      {
        status: 500,
      }
    );
  }
}