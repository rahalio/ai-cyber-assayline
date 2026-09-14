/**
 * Tiering Query Hooks
 *
 * React Query hooks for fetching tiering data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { tieringService } from "../tiering.service";

/**
 * Hook to list tier assessments
 *
 * Query key: ["tiering", "TierAssessment", modelId]
 */
export function useTierAssessment(modelId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["tiering", "TierAssessment", modelId],
    async (orgId: string, signal?: AbortSignal) => {
      return tieringService.getTierAssessment(modelId, params, signal);
    },
    {
      enabled: !!modelId
    }
  );
}

/**
 * Hook to get tier criteria
 *
 * Query key: ["tiering", "TierCriterium", ]
 */
export function useTierCriterium(params?: Record<string, any>) {
  return useTenantQuery(
    ["tiering", "TierCriterium", ],
    async (orgId: string, signal?: AbortSignal) => {
      return tieringService.getTierCriterium(params, signal);
    }
  );
}
