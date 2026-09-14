/**
 * Inventory Query Hooks
 *
 * React Query hooks for fetching inventory data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { inventoryService } from "../inventory.service";

/**
 * Hook to list artefacts
 *
 * Query key: ["inventory", "Artefact", ]
 */
export function useArtefact(params?: Record<string, any>) {
  return useTenantQuery(
    ["inventory", "Artefact", ],
    async (orgId: string, signal?: AbortSignal) => {
      return inventoryService.getArtefact(params, signal);
    }
  );
}

/**
 * Hook to list models
 *
 * Query key: ["inventory", "VModel", ]
 */
export function useVModel(params?: Record<string, any>) {
  return useTenantQuery(
    ["inventory", "VModel", ],
    async (orgId: string, signal?: AbortSignal) => {
      return inventoryService.getVModel(params, signal);
    }
  );
}

/**
 * Hook to get model
 *
 * Query key: ["inventory", "VModel", modelId]
 */
export function useVModelById(modelId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["inventory", "VModel", modelId],
    async (orgId: string, signal?: AbortSignal) => {
      return inventoryService.getVModel(modelId, params, signal);
    },
    {
      enabled: !!modelId
    }
  );
}
