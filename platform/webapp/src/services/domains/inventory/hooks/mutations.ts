/**
 * Inventory Mutation Hooks
 *
 * React Query hooks for mutating inventory data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { inventoryService } from "../inventory.service";
// TODO: Import types
// import type { ... } from "../inventory.api-types";

/**
 * Hook to register artefact
 *
 * Automatically invalidates inventory queries on success.
 */
export function useCreateArtefact() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return inventoryService.createArtefact(data);
    },
    {
      invalidateQueries: [["inventory", "Artefact"]],
    }
  );
}

/**
 * Hook to determine artefact
 *
 * Automatically invalidates inventory queries on success.
 */
export function useGetDetermination() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return inventoryService.getDetermination(data);
    },
    {
      invalidateQueries: [["inventory", "Determination"]],
    }
  );
}
