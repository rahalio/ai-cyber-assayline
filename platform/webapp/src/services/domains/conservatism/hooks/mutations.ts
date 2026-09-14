/**
 * Conservatism Mutation Hooks
 *
 * React Query hooks for mutating conservatism data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { conservatismService } from "../conservatism.service";
// TODO: Import types
// import type { ... } from "../conservatism.api-types";

/**
 * Hook to declare conservatism overlay
 *
 * Automatically invalidates conservatism queries on success.
 */
export function useGetConservatismOverlay() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return conservatismService.getConservatismOverlay(data);
    },
    {
      invalidateQueries: [["conservatism", "ConservatismOverlay"]],
    }
  );
}
