"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query"; // React Query hook
import axios from "axios";

interface UserData {
  username: string;
  email: string;
  playerId: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const syncUser = async (userData: UserData) => {
  console.log("Syncing user data:", userData, apiUrl);
  const response = await axios.post(`${apiUrl}/api/player`, userData);
  console.log(response.data);
  return response.data;
};

export const useSyncUser = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: async (userData: UserData) => {
      return syncUser(userData);
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["player"], exact: false });
    },
  });
};
