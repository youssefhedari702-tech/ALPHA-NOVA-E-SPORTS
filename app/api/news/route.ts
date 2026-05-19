import { NextResponse } from "next/server";

const news = [
  {
    id: 1,
    title: "ALPHA NOVA launches new season",
  },
  {
    id: 2,
    title: "Global tournament announced",
  },
];

export async function GET() {
  return NextResponse.json(news);
}