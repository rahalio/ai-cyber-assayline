/**
 * Submissions Query Hooks
 *
 * React Query hooks for fetching submissions data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { submissionsService } from "../submissions.service";

/**
 * Hook to list submissions
 *
 * Query key: ["submissions", "Submission", ]
 */
export function useSubmission(params?: Record<string, any>) {
  return useTenantQuery(
    ["submissions", "Submission", ],
    async (orgId: string, signal?: AbortSignal) => {
      return submissionsService.getSubmission(params, signal);
    }
  );
}
