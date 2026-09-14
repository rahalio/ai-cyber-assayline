/**
 * Quantification Query Hooks
 *
 * React Query hooks for fetching quantification data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { quantificationService } from "../quantification.service";

/**
 * Hook to list quantifications
 *
 * Query key: ["quantification", "Quantification", ]
 */
export function useQuantification(params?: Record<string, any>) {
  return useTenantQuery(
    ["quantification", "Quantification", ],
    async (orgId: string, signal?: AbortSignal) => {
      return quantificationService.getQuantification(params, signal);
    }
  );
}

/**
 * Hook to get risk appetite statement
 *
 * Query key: ["quantification", "RiskAppetite", ]
 */
export function useRiskAppetite(params?: Record<string, any>) {
  return useTenantQuery(
    ["quantification", "RiskAppetite", ],
    async (orgId: string, signal?: AbortSignal) => {
      return quantificationService.getRiskAppetite(params, signal);
    }
  );
}

/**
 * Hook to list lump sum buffers
 *
 * Query key: ["quantification", "LumpSumBuffer", ]
 */
export function useLumpSumBuffer(params?: Record<string, any>) {
  return useTenantQuery(
    ["quantification", "LumpSumBuffer", ],
    async (orgId: string, signal?: AbortSignal) => {
      return quantificationService.getLumpSumBuffer(params, signal);
    }
  );
}
