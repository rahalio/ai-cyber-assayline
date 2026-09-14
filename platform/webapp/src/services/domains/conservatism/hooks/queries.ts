/**
 * Conservatism Query Hooks
 *
 * React Query hooks for fetching conservatism data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { conservatismService } from "../conservatism.service";

/**
 * Hook to list conservatism overlays
 *
 * Query key: ["conservatism", "ConservatismOverlay", ]
 */
export function useConservatismOverlay(params?: Record<string, any>) {
  return useTenantQuery(
    ["conservatism", "ConservatismOverlay", ],
    async (orgId: string, signal?: AbortSignal) => {
      return conservatismService.getConservatismOverlay(params, signal);
    }
  );
}

/**
 * Hook to get conservatism aggregate
 *
 * Query key: ["conservatism", "Aggregate", ]
 */
export function useAggregate(params?: Record<string, any>) {
  return useTenantQuery(
    ["conservatism", "Aggregate", ],
    async (orgId: string, signal?: AbortSignal) => {
      return conservatismService.getAggregate(params, signal);
    }
  );
}
