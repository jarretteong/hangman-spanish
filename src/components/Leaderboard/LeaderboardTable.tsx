"use client";

import { LeaderboardEntry } from "@/types/leaderboard";
import { FC } from "react";

type Props = {
  players: LeaderboardEntry[];
};

const LeaderboardTable: FC<Props> = ({ players }) => {
  // const { data, isLoading } = useFetchLeaderboard();

  // if (isLoading) return <p>Loading leaderboard...</p>;

  return (
    <ul className="space-y-2">
      {players.map((player: LeaderboardEntry) => (
        <li key={player.id} className="flex justify-between">
          <span>{player.username}</span>
          <span>{player.score}</span>
        </li>
      ))}
    </ul>
  );
};

export default LeaderboardTable;
