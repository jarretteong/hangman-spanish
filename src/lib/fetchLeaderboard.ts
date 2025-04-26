import { LeaderboardEntry } from "@/types/leaderboard";

export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/score/top5`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch leaderboard: ${res.status}`);
    }

    const data = await res.json();
    return data as LeaderboardEntry[];
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return [];
  }
}
