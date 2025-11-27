"use client";

import { useMutation , useQuery , useQueryClient } from "@tanstack/react-query";
import {
    generateWorkspaceInvite,
    acceptWorkspaceInvite,
    getAllWorkspaceMembers
} from "@/modules/invites/actions";

export const useGenerateWorkspaceInvite = (workspaceId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => generateWorkspaceInvite(workspaceId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["workspace-invites", workspaceId],
      });
    },
  });
};

export const useAcceptWorkspaceInvite = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (token: string) => acceptWorkspaceInvite(token),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["workspace-members"],
      });
    },
  });
  
};

// invite.ts (client)
export const useGetWorkspaceMembers = (workspaceId?: string) => {
  return useQuery({
    queryKey: ["workspace-members", workspaceId],   // 👈 include workspaceId
    queryFn: async () => {
      if (!workspaceId) throw new Error("No workspace id");
      return getAllWorkspaceMembers(workspaceId);
    },
    enabled: !!workspaceId,                         // 👈 don't run until we have an id
  });
};
