import { NextResponse } from "next/server";

const liveMatches = [
  {
    id: 1,
    team1: "ALPHA",
    team2: "NOVA",
    status: "LIVE",
  },
  {
    id: 2,
    team1: "SHADOW",
    team2: "DRAGON",
    status: "STARTING SOON",
  },
];

export async function GET() {
  return NextResponse.json(liveMatches);
}