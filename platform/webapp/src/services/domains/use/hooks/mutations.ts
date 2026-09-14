/**
 * Use Mutation Hooks
 *
 * React Query hooks for mutating use data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { useService } from "../use.service";
// TODO: Import types
// import type { ... } from "../use.api-types";

/**
 * Hook to set permitted use
 *
 * Automatically invalidates use queries on success.
 */
export function useUpdatePermittedUse() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return useService.updatePermittedUse(data);
    },
    {
      invalidateQueries: [["use", "PermittedUse"]],
    }
  );
}

/**
 * Hook to request use exception
 *
 * Automatically invalidates use queries on success.
 */
export function useGetUseException() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return useService.getUseException(data);
    },
    {
      invalidateQueries: [["use", "UseException"]],
    }
  );
}

/**
 * Hook to authorise use exception
 *
 * Automatically invalidates use queries on success.
 */
export function useGetAuthorise() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return useService.getAuthorise(data);
    },
    {
      invalidateQueries: [["use", "Authorise"]],
    }
  );
}
