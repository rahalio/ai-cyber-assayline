/**
 * Use Query Hooks
 *
 * React Query hooks for fetching use data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { useService } from "../use.service";

/**
 * Hook to get permitted use
 *
 * Query key: ["use", "PermittedUse", modelId]
 */
export function usePermittedUse(modelId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["use", "PermittedUse", modelId],
    async (orgId: string, signal?: AbortSignal) => {
      return useService.getPermittedUse(modelId, params, signal);
    },
    {
      enabled: !!modelId
    }
  );
}

/**
 * Hook to list use exceptions
 *
 * Query key: ["use", "UseException", ]
 */
export function useUseException(params?: Record<string, any>) {
  return useTenantQuery(
    ["use", "UseException", ],
    async (orgId: string, signal?: AbortSignal) => {
      return useService.getUseException(params, signal);
    }
  );
}
