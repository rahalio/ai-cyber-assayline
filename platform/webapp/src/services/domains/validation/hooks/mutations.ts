/**
 * Validation Mutation Hooks
 *
 * React Query hooks for mutating validation data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { validationService } from "../validation.service";
// TODO: Import types
// import type { ... } from "../validation.api-types";

/**
 * Hook to allocate validation slot
 *
 * Automatically invalidates validation queries on success.
 */
export function useGetSlot() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return validationService.getSlot(data);
    },
    {
      invalidateQueries: [["validation", "Slot"]],
    }
  );
}

/**
 * Hook to create validation engagement
 *
 * Automatically invalidates validation queries on success.
 */
export function useCreateEngagement() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return validationService.createEngagement(data);
    },
    {
      invalidateQueries: [["validation", "Engagement"]],
    }
  );
}

/**
 * Hook to place validation task
 *
 * Automatically invalidates validation queries on success.
 */
export function useGetTask() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return validationService.getTask(data);
    },
    {
      invalidateQueries: [["validation", "Task"]],
    }
  );
}
