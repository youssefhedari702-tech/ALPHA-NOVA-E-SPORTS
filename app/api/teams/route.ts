import { NextResponse } from "next/server";

const teams = [
  {
    id: 1,
    name: "ALPHA CLAN",
    members: 50,
  },
  {
    id: 2,
    name: "NOVA ELITE",
    members: 42,
  },
];

export async function GET() {
  return NextResponse.json(teams);
}