"use client";

import { useUser } from "@clerk/nextjs";
import { useSyncUser } from "@/hooks/useSyncUser";
import { useEffect } from "react";

export const SyncUser = () => {
  const { user } = useUser();
  const { mutateAsync: syncUser } = useSyncUser();

  useEffect(() => {
    if (!user) return;
    const userData = {
      username: user.username || "",
      email: user.primaryEmailAddress?.emailAddress || "",
      playerId: user.id,
    };

    syncUser(userData);
  }, [user, syncUser]);

  return null;
};
