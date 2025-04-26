"use client";

import { useFetchLeaderboard } from "@/hooks/useFetchLeaderboard";
import { LeaderboardEntry } from "@/types/leaderboard";
import { FC } from "react";
import { Button } from "./ui/button";

type Props = {
  players?: LeaderboardEntry[];
};

const Leaderboard: FC<Props> = ({}) => {
  const { data, isLoading, refetch } = useFetchLeaderboard();

  if (isLoading) return <p>Loading leaderboard...</p>;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Leaderboard</h2>
        <Button onClick={() => refetch()}>Refresh</Button>
      </div>
      <ul className="space-y-2">
        {data.map((player: LeaderboardEntry) => (
          <li key={player.username} className="flex justify-between">
            <span>{player.username}</span>
            <span>{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
