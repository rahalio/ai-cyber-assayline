/**
 * Supervisory Mutation Hooks
 *
 * React Query hooks for mutating supervisory data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { supervisoryService } from "../supervisory.service";
// TODO: Import types
// import type { ... } from "../supervisory.api-types";

/**
 * Hook to record supervisory add on
 *
 * Automatically invalidates supervisory queries on success.
 */
export function useGetSupervisoryAddOn() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return supervisoryService.getSupervisoryAddOn(data);
    },
    {
      invalidateQueries: [["supervisory", "SupervisoryAddOn"]],
    }
  );
}

/**
 * Hook to update remediation plan
 *
 * Automatically invalidates supervisory queries on success.
 */
export function useUpdateRemediation() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return supervisoryService.updateRemediation(data);
    },
    {
      invalidateQueries: [["supervisory", "Remediation"]],
    }
  );
}

/**
 * Hook to assemble supervisory pack
 *
 * Automatically invalidates supervisory queries on success.
 */
export function useGetSupervisoryPack() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return supervisoryService.getSupervisoryPack(data);
    },
    {
      invalidateQueries: [["supervisory", "SupervisoryPack"]],
    }
  );
}
