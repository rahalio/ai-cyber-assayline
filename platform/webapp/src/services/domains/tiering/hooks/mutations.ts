/**
 * Tiering Mutation Hooks
 *
 * React Query hooks for mutating tiering data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { tieringService } from "../tiering.service";
// TODO: Import types
// import type { ... } from "../tiering.api-types";

/**
 * Hook to assess model tier
 *
 * Automatically invalidates tiering queries on success.
 */
export function useGetTierAssessment() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return tieringService.getTierAssessment(data);
    },
    {
      invalidateQueries: [["tiering", "TierAssessment"]],
    }
  );
}

/**
 * Hook to update tier criteria
 *
 * Automatically invalidates tiering queries on success.
 */
export function useUpdateTierCriterium() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return tieringService.updateTierCriterium(data);
    },
    {
      invalidateQueries: [["tiering", "TierCriterium"]],
    }
  );
}
