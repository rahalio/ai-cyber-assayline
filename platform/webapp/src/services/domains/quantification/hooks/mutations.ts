/**
 * Quantification Mutation Hooks
 *
 * React Query hooks for mutating quantification data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { quantificationService } from "../quantification.service";
// TODO: Import types
// import type { ... } from "../quantification.api-types";

/**
 * Hook to record quantification
 *
 * Automatically invalidates quantification queries on success.
 */
export function useGetQuantification() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return quantificationService.getQuantification(data);
    },
    {
      invalidateQueries: [["quantification", "Quantification"]],
    }
  );
}

/**
 * Hook to update risk appetite statement
 *
 * Automatically invalidates quantification queries on success.
 */
export function useUpdateRiskAppetite() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return quantificationService.updateRiskAppetite(data);
    },
    {
      invalidateQueries: [["quantification", "RiskAppetite"]],
    }
  );
}

/**
 * Hook to fix lump sum buffer
 *
 * Automatically invalidates quantification queries on success.
 */
export function useGetLumpSumBuffer() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return quantificationService.getLumpSumBuffer(data);
    },
    {
      invalidateQueries: [["quantification", "LumpSumBuffer"]],
    }
  );
}
