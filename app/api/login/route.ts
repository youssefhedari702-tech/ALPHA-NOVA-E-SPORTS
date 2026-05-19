import {
  NextResponse,
} from "next/server";

import bcrypt
from "bcryptjs";

import prisma
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
            "MISSING FIELDS",
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

    const passwordMatch =
      await bcrypt.compare(

        password,
        user.password
      );

    if (!passwordMatch) {

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

      user: {

        id:
          user.id,

        email:
          user.email,

        fullName:
          user.fullName,

        freeFireName:
          user.freeFireName,

        uid:
          user.uid,

        country:
          user.country,

        clanName:
          user.clanName,

        role:
          user.role,
      },
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