import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function GET() {

  const { data } =
    await supabase
      .from("WalletTransaction")
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
        .from("WalletTransaction")
        .insert([
          {
            id:
              crypto.randomUUID(),

            username:
              body.username,

            amount:
              body.amount,

            type:
              body.type,

            status:
              "PENDING",

            method:
              body.method,
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
          "Wallet failed",
      },
      {
        status: 500,
      }
    );
  }
}