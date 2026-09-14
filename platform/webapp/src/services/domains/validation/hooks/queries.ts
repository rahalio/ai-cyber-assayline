/**
 * Validation Query Hooks
 *
 * React Query hooks for fetching validation data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { validationService } from "../validation.service";

/**
 * Hook to list validation slots
 *
 * Query key: ["validation", "Slot", ]
 */
export function useSlot(params?: Record<string, any>) {
  return useTenantQuery(
    ["validation", "Slot", ],
    async (orgId: string, signal?: AbortSignal) => {
      return validationService.getSlot(params, signal);
    }
  );
}

/**
 * Hook to list validation engagements
 *
 * Query key: ["validation", "Engagement", ]
 */
export function useEngagement(params?: Record<string, any>) {
  return useTenantQuery(
    ["validation", "Engagement", ],
    async (orgId: string, signal?: AbortSignal) => {
      return validationService.getEngagement(params, signal);
    }
  );
}

/**
 * Hook to list validation tasks
 *
 * Query key: ["validation", "Task", engagementId]
 */
export function useTask(engagementId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["validation", "Task", engagementId],
    async (orgId: string, signal?: AbortSignal) => {
      return validationService.getTask(engagementId, params, signal);
    },
    {
      enabled: !!engagementId
    }
  );
}

/**
 * Hook to get capacity forecast
 *
 * Query key: ["validation", "CapacityForecast", ]
 */
export function useCapacityForecast(params?: Record<string, any>) {
  return useTenantQuery(
    ["validation", "CapacityForecast", ],
    async (orgId: string, signal?: AbortSignal) => {
      return validationService.getCapacityForecast(params, signal);
    }
  );
}
