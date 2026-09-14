/**
 * Monitoring Query Hooks
 *
 * React Query hooks for fetching monitoring data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { monitoringService } from "../monitoring.service";

/**
 * Hook to list monitoring obligations
 *
 * Query key: ["monitoring", "Obligation", ]
 */
export function useObligation(params?: Record<string, any>) {
  return useTenantQuery(
    ["monitoring", "Obligation", ],
    async (orgId: string, signal?: AbortSignal) => {
      return monitoringService.getObligation(params, signal);
    }
  );
}

/**
 * Hook to list revalidation triggers
 *
 * Query key: ["monitoring", "RevalidationTrigger", ]
 */
export function useRevalidationTrigger(params?: Record<string, any>) {
  return useTenantQuery(
    ["monitoring", "RevalidationTrigger", ],
    async (orgId: string, signal?: AbortSignal) => {
      return monitoringService.getRevalidationTrigger(params, signal);
    }
  );
}
