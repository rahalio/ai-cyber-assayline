/**
 * Monitoring Mutation Hooks
 *
 * React Query hooks for mutating monitoring data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { monitoringService } from "../monitoring.service";
// TODO: Import types
// import type { ... } from "../monitoring.api-types";

/**
 * Hook to assign monitoring obligation
 *
 * Automatically invalidates monitoring queries on success.
 */
export function useGetObligation() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return monitoringService.getObligation(data);
    },
    {
      invalidateQueries: [["monitoring", "Obligation"]],
    }
  );
}

/**
 * Hook to record monitoring breach
 *
 * Automatically invalidates monitoring queries on success.
 */
export function useGetBreach() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return monitoringService.getBreach(data);
    },
    {
      invalidateQueries: [["monitoring", "Breach"]],
    }
  );
}
