/**
 * Submissions Domain Contracts
 *
 * Re-exports Zod schemas from @assayline/core for runtime validation.
 * This avoids duplication and ensures alignment with the API contract.
 *
 * Architecture:
 * - Single source of truth: @assayline/core
 * - No code duplication or drift
 * - Runtime validation of API responses
 * - Used in services to validate responses
 *
 * @see @assayline/core/submissions for the source schemas
 */

import { submissionsSchemas as coreSubmissionsSchemas } from "@assayline/core/submissions";
import type { z } from "zod";

/**
 * Re-export schemas from core
 * These are the same schemas used by the api-server, ensuring perfect alignment
 */
export const {
  // TODO: Add specific schema exports based on OpenAPI spec
  // ResponseMeta,
  // PageInfo,
  // etc.
} = coreSubmissionsSchemas;

/**
 * Export all schemas as a namespace for convenience
 */
export const submissionsSchemas = coreSubmissionsSchemas;
