import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "ALPHA T-SHIRT",
    price: "$25",
  },
  {
    id: 2,
    name: "PRO HOODIE",
    price: "$45",
  },
];

export async function GET() {
  return NextResponse.json(products);
}