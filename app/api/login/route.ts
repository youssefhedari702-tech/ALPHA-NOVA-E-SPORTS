import { NextResponse }
from "next/server";

import bcrypt
from "bcryptjs";

import { prisma }
from "@/lib/prisma";

export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json();

    const {
      email,
      password,
    } = body;

    if (
      !email ||
      !password
    ) {

      return NextResponse.json(
        {
          error:
            "EMAIL AND PASSWORD REQUIRED",
        },
        {
          status: 400,
        }
      );
    }

    const user =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (!user) {

      return NextResponse.json(
        {
          error:
            "USER NOT FOUND",
        },
        {
          status: 404,
        }
      );
    }

    if (!user.password) {

      return NextResponse.json(
        {
          error:
            "PASSWORD NOT SET",
        },
        {
          status: 400,
        }
      );
    }

    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!validPassword) {

      return NextResponse.json(
        {
          error:
            "INVALID PASSWORD",
        },
        {
          status: 401,
        }
      );
    }

    return NextResponse.json({
      success: true,
      user,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error:
          "SERVER ERROR",
      },
      {
        status: 500,
      }
    );
  }
}