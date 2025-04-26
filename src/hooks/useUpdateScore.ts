"use client";

import { useMutation } from "@tanstack/react-query"; // React Query hook
import axios from "axios"; // Axios for API requests

interface UpdateScoreData {
  playerId: string;
  score: number;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const updateScore = async (data: UpdateScoreData) => {
  const response = await axios.put(`${apiUrl}/api/score`, data);
  return response.data;
};

export const useUpdateScore = () => {
  return useMutation({
    mutationFn: (data: UpdateScoreData) => updateScore(data),
    onSuccess: () => {
      // Optionally, you can invalidate queries or update the cache after a successful mutation.
      // Example: client.invalidateQueries({ queryKey: ["player"], exact: false });
      console.log("Score updated successfully");
    },
    onError: (error) => {
      console.error("Error updating score:", error);
    },
  });
};
