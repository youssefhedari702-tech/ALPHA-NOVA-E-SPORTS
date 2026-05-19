import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import { supabase } from "@/lib/supabase";

export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json();

    const hashedPassword =
      await bcrypt.hash(
        body.password,
        10
      );

    const { error } =
      await supabase
        .from("User")
        .insert([
          {
            id:
              crypto.randomUUID(),

            fullName:
              body.fullName,

            email:
              body.email,

            password:
              hashedPassword,

            freeFireName:
              body.freeFireName || "",

            uid:
              body.uid || "",

            country:
              body.country || "",

            clanName:
              body.clanName || "",

            role:
              "USER",
          },
        ]);

    if (error) {

      console.log(error);

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

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Registration failed",
      },
      {
        status: 500,
      }
    );
  }
}