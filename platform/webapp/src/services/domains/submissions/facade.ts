/**
 * Submissions Domain Facade
 *
 * High-level API for submissions domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { submissionsService } from "./submissions.service";
// TODO: Import types
// import type { ... } from "./submissions.api-types";

/**
 * Submissions Facade
 *
 * High-level API for submissions operations.
 * Components should use this facade instead of services directly.
 */
export const submissionsFacade = {
  /**
   * List Submissions
   */
  async getSubmission(...args: Parameters<typeof submissionsService.getSubmission>): Promise<any> {
    return submissionsService.getSubmission(...args);
  }

  /**
   * Create Submission
   */
  async createSubmission(...args: Parameters<typeof submissionsService.createSubmission>): Promise<any> {
    return submissionsService.createSubmission(...args);
  }

  /**
   * Check Submission Completeness
   */
  async getCompletenessCheck(...args: Parameters<typeof submissionsService.getCompletenessCheck>): Promise<any> {
    return submissionsService.getCompletenessCheck(...args);
  }

  /**
   * Return Submission
   */
  async getReturn(...args: Parameters<typeof submissionsService.getReturn>): Promise<any> {
    return submissionsService.getReturn(...args);
  }
};
