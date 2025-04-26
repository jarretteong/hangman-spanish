import { LeaderboardEntry } from "@/types/leaderboard";
import LeaderboardTable from "./LeaderboardTable";

export default function Leaderboard() {
  // const initialScores = await fetchLeaderboard();
  const playerScores: LeaderboardEntry[] = [
    { id: "1", username: "Player1", score: 100 },
    { id: "2", username: "Player2", score: 90 },
    { id: "3", username: "Player3", score: 80 },
    { id: "4", username: "Player4", score: 70 },
    { id: "5", username: "Player5", score: 60 },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Leaderboard</h2>
      <LeaderboardTable players={playerScores} />
    </div>
  );
}
