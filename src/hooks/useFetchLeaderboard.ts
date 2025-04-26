import { useQuery } from "@tanstack/react-query";

export function useFetchLeaderboard() {
  return useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      const res = await fetch("/api/leaderboard");
      return res.json();
    },
    refetchInterval: 60_000,
  });
}
