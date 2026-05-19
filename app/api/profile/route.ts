import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "ALPHA PLAYER",
    kills: 1200,
    matches: 540,
    rank: "#1",
  });
}