/**
 * Submissions Mutation Hooks
 *
 * React Query hooks for mutating submissions data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { submissionsService } from "../submissions.service";
// TODO: Import types
// import type { ... } from "../submissions.api-types";

/**
 * Hook to create submission
 *
 * Automatically invalidates submissions queries on success.
 */
export function useCreateSubmission() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return submissionsService.createSubmission(data);
    },
    {
      invalidateQueries: [["submissions", "Submission"]],
    }
  );
}

/**
 * Hook to check submission completeness
 *
 * Automatically invalidates submissions queries on success.
 */
export function useGetCompletenessCheck() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return submissionsService.getCompletenessCheck(data);
    },
    {
      invalidateQueries: [["submissions", "CompletenessCheck"]],
    }
  );
}

/**
 * Hook to return submission
 *
 * Automatically invalidates submissions queries on success.
 */
export function useGetReturn() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return submissionsService.getReturn(data);
    },
    {
      invalidateQueries: [["submissions", "Return"]],
    }
  );
}
