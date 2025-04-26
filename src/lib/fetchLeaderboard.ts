// lib/fetchLeaderboard.ts

export type LeaderboardEntry = {
  id: string;
  username: string;
  score: number;
};

export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/leaderboard`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // Cache for 1 minute
        next: { revalidate: 60 }, // 🔥 1 min cache
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
