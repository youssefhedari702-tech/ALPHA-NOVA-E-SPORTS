import {
  NextRequest,
  NextResponse,
} from "next/server";

export function proxy(
  request: NextRequest
) {

  const token =
    request.cookies.get(
      "token"
    )?.value;

  const pathname =
    request.nextUrl.pathname;

  const protectedRoutes = [

    "/dashboard",

    "/admin",

    "/profile",

    "/rooms",

    "/notifications",
  ];

  const isProtected =
    protectedRoutes.some(
      (route) =>
        pathname.startsWith(
          route
        )
    );

  if (
    isProtected &&
    !token
  ) {

    return NextResponse.redirect(

      new URL(
        "/login",
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {

  matcher: [

    "/dashboard/:path*",

    "/admin/:path*",

    "/profile/:path*",

    "/rooms/:path*",

    "/notifications/:path*",
  ],
};