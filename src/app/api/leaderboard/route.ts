import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
    const res = await fetch(`${apiUrl}/api/score/top5`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Score service responded with ${res.status}` },
        { status: res.status }
      );
    }

    const top5 = await res.json();
    return NextResponse.json(top5);
  } catch (err) {
    console.error("Failed to fetch top5 scores:", err);
    return NextResponse.json(
      { error: "Internal error while fetching leaderboard" },
      { status: 500 }
    );
  }
}
