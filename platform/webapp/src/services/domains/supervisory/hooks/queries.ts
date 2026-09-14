/**
 * Supervisory Query Hooks
 *
 * React Query hooks for fetching supervisory data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { supervisoryService } from "../supervisory.service";

/**
 * Hook to list supervisory add ons
 *
 * Query key: ["supervisory", "SupervisoryAddOn", ]
 */
export function useSupervisoryAddOn(params?: Record<string, any>) {
  return useTenantQuery(
    ["supervisory", "SupervisoryAddOn", ],
    async (orgId: string, signal?: AbortSignal) => {
      return supervisoryService.getSupervisoryAddOn(params, signal);
    }
  );
}

/**
 * Hook to get supervisory pack
 *
 * Query key: ["supervisory", "SupervisoryPack", packId]
 */
export function useSupervisoryPack(packId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["supervisory", "SupervisoryPack", packId],
    async (orgId: string, signal?: AbortSignal) => {
      return supervisoryService.getSupervisoryPack(packId, params, signal);
    },
    {
      enabled: !!packId
    }
  );
}
